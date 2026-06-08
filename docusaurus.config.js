// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

// Auto-derived from GitHub Actions env vars so any fork Just Works:
//   GITHUB_REPOSITORY        = "<owner>/<repo>"
//   GITHUB_REPOSITORY_OWNER  = "<owner>"
//
// The MD Docs preview server overrides url/baseUrl via MDDOCS_PREVIEW_*
// when it builds the staging branch for review.
//
// If you wire up a custom domain, set `url` to that domain and
// `baseUrl` to "/". For local dev (`npm start`) none of these are set
// and we fall back to plain defaults.

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'docs';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'user';
const siteUrl = process.env.MDDOCS_PREVIEW_SITE ?? `https://${owner}.github.io`;
const basePath = process.env.MDDOCS_PREVIEW_BASE ?? `/${repo}/`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Docs',
  tagline: 'Documentation, edited with AI',
  favicon: 'img/favicon.ico',

  url: siteUrl,
  baseUrl: basePath,

  organizationName: owner,
  projectName: repo,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Docs',
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} My Docs`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
