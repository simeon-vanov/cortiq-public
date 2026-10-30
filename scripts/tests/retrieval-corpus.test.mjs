import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mkdtemp, mkdir, writeFile, rm, readFile, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { load as yaml } from 'js-yaml';
import { unified } from 'unified';
import remarkParse from 'remark-parse';

const options = { publicBaseUrl: 'https://simeon-vanov.github.io/cortiq-public/', sourceCommit: 'a'.repeat(40), chunkerVersion: '1' };
async function fixture(run) {
  const root = await mkdtemp(join(tmpdir(), 'cortiq-help-'));
  try {
    const sourceRoot = join(root, 'src/content/docs');
    await mkdir(sourceRoot, { recursive: true });
    await mkdir(join(root, 'docs'), { recursive: true });
    await writeFile(join(root, 'docs/private.md'), '# SECRET');
    await writeFile(join(sourceRoot, 'guide.mdx'), '---\ntitle: "Guide"\nlang: bg\n---\nIntroduction.\n\n## Здравей свят\nSafe data.\n\n## Здравей свят\nexport const trap = (() => { throw new Error("executed") })();\n\n### Details `code`\nRead [setup](/cortiq-public/setup/).\n');
    await writeFile(join(sourceRoot, 'index.md'), '---\ntitle: Home\n---\nHome.');
    const { buildCorpus, validateCorpus } = await import('../build-retrieval-corpus.mjs');
    await run({ sourceRoot, buildCorpus, validateCorpus });
  } finally { await rm(root, { recursive: true, force: true }); }
}

test('deterministic public-only corpus retains all pages, Unicode anchors and MDX as data', () => fixture(async ({ sourceRoot, buildCorpus, validateCorpus }) => {
  const first = await buildCorpus({ ...options, sourceRoot });
  assert.deepEqual(first, await buildCorpus({ ...options, sourceRoot }));
  assert.equal(first.manifest.pageCount, 2);
  assert.deepEqual(first.sections.filter(s => s.path === 'guide.mdx').map(s => s.anchor), ['', 'здравей-свят', 'здравей-свят-1', 'details-code']);
  assert.equal(first.sections.at(-1).url, options.publicBaseUrl);
  const nested = first.sections.find(s => s.anchor === 'details-code');
  assert.deepEqual(nested.parentHeadings, ['Здравей свят']);
  assert.equal(nested.language, 'bg');
  assert.match(nested.url, /\/cortiq-public\/guide\/#details-code$/);
  assert.match(JSON.stringify(first), /export const trap/);
  assert.doesNotMatch(JSON.stringify(first), /SECRET/);
  assert.equal(validateCorpus(first), true);
}));

test('tampered content fails validation', () => fixture(async ({ sourceRoot, buildCorpus, validateCorpus }) => {
  const corpus = await buildCorpus({ ...options, sourceRoot });
  corpus.sections[0].content += 'tampered';
  assert.throws(() => validateCorpus(corpus), /hash|digest/i);
}));

test('source root must be the reader content directory', () => fixture(async ({ sourceRoot, buildCorpus }) => {
  await assert.rejects(buildCorpus({ ...options, sourceRoot: join(sourceRoot, '../../..') }), /reader|src.content.docs/i);
}));

test('published reader badges and image references remain valid', async () => {
  const { buildCorpus } = await import('../build-retrieval-corpus.mjs');
  const root = process.cwd();
  const sourceRoot = join(root, 'src/content/docs');
  const corpus = await buildCorpus({ ...options, sourceRoot });
  for (const path of new Set(corpus.sections.map(section => section.path))) {
    const raw = await readFile(join(sourceRoot, path), 'utf8');
    const front = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(raw);
    const metadata = yaml(front?.[1] ?? '');
    const badge = metadata?.sidebar?.badge;
    assert.notEqual(typeof badge === 'object' ? badge?.text : badge, 'New', `${path}: novelty badge`);
    const tree = unified().use(remarkParse).parse(raw.slice(front?.[0].length ?? 0));
    const nodes = [tree];
    while (nodes.length) {
      const node = nodes.pop();
      nodes.push(...(node.children ?? []));
      if (node.type !== 'image') continue;
      assert.ok(node.url.startsWith('/cortiq-public/images/'), `${path}: image must include the public base`);
      const asset = join(root, 'public', node.url.slice('/cortiq-public/'.length));
      assert.ok((await stat(asset)).size > 0, `${path}: missing or empty image ${node.url}`);
      assert.ok(node.alt?.trim(), `${path}: screenshot needs descriptive alt text`);
    }
  }
});
