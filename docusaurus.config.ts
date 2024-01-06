import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'JayMartMedia',
  tagline: 'Learning and Sharing Knowledge',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jaymartmedia.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/recipes',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jaymartmedia', // Usually your GitHub org/user name.
  projectName: 'recipes', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jaymartmedia/jaymartmedia.github.io/tree/main',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'JayMartMedia',
      logo: {
        alt: 'Site Logo',
        src: 'img/jay-cropped.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'recipesSidebar',
          position: 'left',
          label: 'Recipes',
        },
        { type: 'search', position: 'left' },
        {
          href: 'https://github.com/jaymartmedia/recipes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   label: 'Helpful Commands',
        //   to: '/articles/helpful-commands',
        // },
        // {
        //   label: 'Blog',
        //   to: '/blog',
        // }
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [require.resolve('docusaurus-lunr-search')],
};

export default config;
