import { themes as prismThemes } from 'prism-react-renderer';

const simplePlantUML = require("@akebifiky/remark-simple-plantuml"); // объявляем плагин для plantuml

const config = {
  title: 'RentSport',
  tagline: 'Сайт для аренды спортивного оборудования',
  url: 'https://MatveyPlumbus.github.io',
  baseUrl: '/RentSport/',
  organizationName: 'MatveyPlumbus',
  projectName: 'RentSport',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

//подключаем плагин для drawio
plugins: [
  ['drawio', {}]
],
presets: [
  [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        sidebarPath: './sidebars.js',
        routeBasePath: 'docs',
        editUrl:
          'https://github.com/MatveyPlumbus/RentSport',
        remarkPlugins: [simplePlantUML], //подключаем плагин для plantuml
      },
      blog: false,
      theme: {
        customCss: './src/css/custom.css',
      },
    }),
  ],
  // подключаем плагин для OPENAPI
  [
    'redocusaurus',
    {
      specs: [
        {
          id: 'api',
          spec: 'api_specs/openapi.yaml',
        },
      ],
      theme: {
        primaryColor: '#1890ff',
      },
    }
  ],
],

themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'RentSport', //Название на навбаре
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png', //Логотип на навбаре
      },
      // тут можно настроить элементы навбара
      items: [
        {
          href: 'https://github.com/MatveyPlumbus/RentSport',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // тут можно настроить элементы футера
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};
  
export default config;