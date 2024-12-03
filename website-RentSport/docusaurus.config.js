import { themes as prismThemes } from 'prism-react-renderer';
const simplePlantUML = require('@akebifiky/remark-simple-plantuml'); // Импорт PlantUML

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RentSport',
  tagline: 'Сайт для аренды спортивного оборудования',
  favicon: 'img/favicon.ico',
  url: 'https://MatveyPlumbus.github.io',
  baseUrl: '/RentSport/',
  organizationName: 'MatveyPlumbus',
  projectName: 'RentSport',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  plugins: [
    ['drawio', {}], // Подключение плагина Drawio
  ],
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/MatveyPlumbus/RentSport',
          remarkPlugins: [simplePlantUML], // Подключение PlantUML
        },
        blog: false, // Отключение блога
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'rent-equipment',
            spec: 'api_specs/openapi.yaml',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'RentSport',
      logo: {
        alt: 'RentSport Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/MatveyPlumbus/RentSport',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
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
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/MatveyPlumbus/RentSport',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MatveyPlumbus. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;