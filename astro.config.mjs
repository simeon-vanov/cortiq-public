import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://simeon-vanov.github.io',
  base: '/cortiq-public',
  integrations: [
    starlight({
      title: 'Cortiq Docs',
      description: 'Official product documentation for Cortiq.',
      lastUpdated: true,
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
            'feature-overview',
            'getting-started',
            'installation-and-activation',
          ],
        },
        {
          label: 'Platform',
          items: [
            'mt5-integration',
            'ai-providers',
            'playbooks-and-data',
            'sessions-and-autoscan',
            'risk-management',
            'execution-modes-and-notifications',
            'journal-and-analytics',
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