import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import mermaid from 'astro-mermaid';

export default defineConfig({
  site: 'https://simeon-vanov.github.io',
  base: '/cortiq-public',
  integrations: [
    mermaid({ theme: 'dark' }),
    starlight({
      title: 'Cortiq Docs',
      description: 'Official product documentation for Cortiq.',
      logo: {
        dark: './src/assets/brand/cortiq-mark-on-dark.svg',
        light: './src/assets/brand/cortiq-mark-on-light.svg',
      },
      customCss: ['./src/styles/brand.css'],
      favicon: '/favicon.ico',
      head: [
        { tag: 'link', attrs: { rel: 'icon', type: 'image/svg+xml', href: '/cortiq-public/favicon.svg' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/cortiq-public/favicon-32.png' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/cortiq-public/apple-touch-icon.png' } },
      ],
      lastUpdated: true,
      plugins: [starlightImageZoom()],
      editLink: {
        baseUrl: 'https://github.com/simeon-vanov/cortiq-public/edit/main/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/simeon-vanov/cortiq-public',
        },
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Home', link: '/' },
            'documentation-map',
            'app-navigation-guide',
            'feature-overview',
            'capability-reference',
            'getting-started',
            'installation-and-activation',
            'first-30-minutes',
            'glossary',
          ],
        },
        {
          label: 'Platform',
          items: [
            'mt5-integration',
            'ai-providers',
            'playbooks-and-data',
            'sessions',
            'discretionary-trading',
            'charting',
            'risk-management',
            'backtesting',
            'execution-modes-and-notifications',
            'workspace-and-monitoring',
            'journal-and-analytics',
            'session-review',
            'system-messages',
          ],
        },
        {
          label: 'Instruments & Research',
          items: [
            'instrument-hub',
            'research',
            'skills',
          ],
        },
        {
          label: 'MCP & Agent',
          items: [
            'mcp-and-agent-integration',
            'cortiq-copilot',
            'agent-permissions',
          ],
        },
        {
          label: 'Trading Cycle',
          items: [
            'trading-cycle/overview',
            'trading-cycle/session-architecture',
            'trading-cycle/supporting-context',
            'trading-cycle/playbook-design',
            'trading-cycle/data-package-design',
            'trading-cycle/entities/sessions',
            'trading-cycle/entities/data-packages',
            'trading-cycle/entities/playbooks',
            'trading-cycle/entities/trade-ideas',
            'trading-cycle/entities/preparation-packages',
            'trading-cycle/entities/instrument-profiles',
            'trading-cycle/entities/sentiment-reports',
            'trading-cycle/entities/session-trades-and-timeline',
          ],
        },
        {
          label: 'Support',
          items: ['licensing-and-support', 'faq'],
        },
      ],
    }),
  ],
});
