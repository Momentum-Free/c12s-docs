import type { StarlightUserConfig } from '@astrojs/starlight/types';

// Use the official Starlight type for the `sidebar` option
// and validate this module with `satisfies` for strong type-safety.
// Note: when importing this from astro.config, prefer using a TS config file.

type Sidebar = NonNullable<StarlightUserConfig['sidebar']>;

export default [
  {
    label: 'Start here',
    items: [
      { slug: 'getting-started/overview' },
      { slug: 'getting-started/quickstart' },
      { slug: 'getting-started/core-concepts' },
    ],
  },
  {
    label: 'Platform setup',
    items: [
      { label: 'Discord', autogenerate: { directory: 'platforms/discord', collapsed: false } },
      { label: 'Telegram', autogenerate: { directory: 'platforms/telegram', collapsed: false } },
      { label: 'Slack', badge: { text: 'Beta', variant: 'tip' }, autogenerate: { directory: 'platforms/slack', collapsed: true } },
    ]
 },
  { label: 'Knowledge Base & AI', autogenerate: { directory: 'knowledge', collapsed: false } },
  { label: 'Moderation & Safety', autogenerate: { directory: 'moderation', collapsed: false } },
  { label: 'Reporting & Analytics', autogenerate: { directory: 'analytics', collapsed: true } },
  { label: 'Account & Billing', autogenerate: { directory: 'account', collapsed: true } },
  { label: 'Organization', autogenerate: { directory: 'organization', collapsed: true } }
  /* 
  { label: 'Automations & Workflows', autogenerate: { directory: 'automations', collapsed: true } },
  { label: 'Integrations', autogenerate: { directory: 'integrations', collapsed: true } },
  {
    label: 'Developers',
    items: [
      { label: 'API Reference', autogenerate: { directory: 'developers/api', collapsed: true } },
      'developers/webhooks',
      'developers/events',
      'developers/authentication',
      'developers/sdks',
    ],
  },
  { label: 'Security & Compliance', autogenerate: { directory: 'security', collapsed: true } },
  {
    label: 'Resources',
    items: [
      { slug: 'resources/troubleshooting' },
      { slug: 'resources/faq' },
      { slug: 'resources/migrations' },
      { slug: 'resources/changelog', badge: { text: 'Updated', variant: 'note' } },
      { slug: 'resources/whats-new', badge: 'New' },
      { label: 'Status Page', link: 'https://status.c12s.ai', attrs: { target: '_blank', rel: 'noopener' } },
      { label: 'Open Dashboard', link: 'https://app.c12s.ai', attrs: { target: '_blank', rel: 'noopener' } },
      { label: 'Contact Support', link: '/support/' },
    ],
  },*/
] satisfies Sidebar;
