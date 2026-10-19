import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile, mkdir, realpath } from 'node:fs/promises';
import { resolve, relative, sep, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import Slugger from 'github-slugger';
import { load as yaml } from 'js-yaml';
import { unified } from 'unified';
import remarkParse from 'remark-parse';

const hash = value => createHash('sha256').update(value, 'utf8').digest('hex');
const sectionHash = (section, version) => hash([section.path, section.anchor, version, section.content].join('\n'));
const text = node => node.value ?? (node.children ?? []).map(text).join('');

export function validateCorpus(corpus) {
  if (corpus.manifest.schemaVersion !== 1 || !/^[a-f0-9]{40}$/i.test(corpus.manifest.sourceCommit))
    throw new Error('Invalid corpus manifest');
  if (corpus.sections.some(s => sectionHash(s, corpus.manifest.chunkerVersion) !== s.hash))
    throw new Error('Section hash mismatch');
  if (hash(corpus.sections.map(s => s.hash).join('\n')) !== corpus.manifest.contentDigest)
    throw new Error('Corpus digest mismatch');
  if (corpus.sections.length !== corpus.manifest.sectionCount || new Set(corpus.sections.map(s => s.path)).size !== corpus.manifest.pageCount)
    throw new Error('Corpus coverage mismatch');
  return true;
}

export async function buildCorpus({ sourceRoot, publicBaseUrl, sourceCommit, chunkerVersion = '1' }) {
  const root = await realpath(sourceRoot);
  if (!root.replaceAll('\\', '/').endsWith('/src/content/docs')) throw new Error('Only the reader src/content/docs directory is supported');
  const base = new URL(publicBaseUrl.endsWith('/') ? publicBaseUrl : publicBaseUrl + '/');
  if (base.protocol !== 'https:') throw new Error('Canonical public URL must be HTTPS');
  const files = [];
  async function walk(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = resolve(directory, entry.name);
      if (entry.isDirectory()) await walk(path);
      else if (entry.isFile() && /\.mdx?$/.test(entry.name)) files.push(path);
    }
  }
  await walk(root);
  files.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
  const sections = [];
  for (const file of files) {
    const path = relative(root, file).split(sep).join('/');
    const raw = (await readFile(file, 'utf8')).replaceAll('\r\n', '\n');
    const front = /^---\n([\s\S]*?)\n---(?:\n|$)/.exec(raw);
    const metadata = front ? yaml(front[1]) : {};
    const body = raw.slice(front?.[0].length ?? 0);
    const title = String(metadata?.title ?? path.replace(/\.mdx?$/, ''));
    const language = String(metadata?.lang ?? 'en');
    const slug = String(metadata?.slug ?? path.replace(/\.mdx?$/, '').replace(/(^|\/)index$/, '$1'));
    if (slug.startsWith('/') || slug.includes('..') || /[?#]/.test(slug)) throw new Error(`Unsafe page slug: ${path}`);
    const url = new URL(slug ? slug.replace(/\/$/, '') + '/' : '', base).href;
    const slugger = new Slugger();
    const headings = [];
    const stack = [];
    const tree = unified().use(remarkParse).parse(body);
    for (const node of tree.children) {
      if (node.type !== 'heading') continue;
      const heading = text(node);
      while (stack.length && stack.at(-1).depth >= node.depth) stack.pop();
      headings.push({ start: node.position.start.offset, end: node.position.end.offset, heading,
        anchor: slugger.slug(heading), parentHeadings: stack.map(h => h.heading) });
      stack.push({ depth: node.depth, heading });
    }
    const chunks = [{ start: 0, end: 0, heading: title, anchor: '', parentHeadings: [] }, ...headings];
    for (let index = 0; index < chunks.length; index++) {
      const chunk = chunks[index];
      const content = body.slice(chunk.start, chunks[index + 1]?.start ?? body.length).trim();
      const section = { sectionKey: `${path}#${chunk.anchor}`, path, title, heading: chunk.heading, anchor: chunk.anchor,
        parentHeadings: chunk.parentHeadings, url: url + (chunk.anchor ? '#' + chunk.anchor : ''), language, content };
      section.hash = sectionHash(section, chunkerVersion);
      sections.push(section);
    }
  }
  const corpus = { manifest: { schemaVersion: 1, chunkerVersion, sourceCommit, publicBaseUrl: base.href,
    pageCount: files.length, sectionCount: sections.length, contentDigest: hash(sections.map(s => s.hash).join('\n')) }, sections };
  validateCorpus(corpus);
  return corpus;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const sourceCommit = process.env.CORTIQ_HELP_SOURCE_COMMIT ?? execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  const corpus = await buildCorpus({ sourceRoot: resolve('src/content/docs'), publicBaseUrl: 'https://simeon-vanov.github.io/cortiq-public/', sourceCommit });
  const output = resolve(process.argv[2] ?? 'public/retrieval/corpus.json');
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, JSON.stringify(corpus) + '\n', 'utf8');
  console.log(`Exported ${corpus.manifest.pageCount} public pages, ${corpus.manifest.sectionCount} sections (${corpus.manifest.contentDigest}).`);
}
