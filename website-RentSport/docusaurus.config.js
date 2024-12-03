
import {themes as prismThemes} from 'prism-react-renderer';

//const simplePlantUML = require("@akebifiky/remark-simple-plantuml"); // объявляем плагин для plantuml

/** @type {import('@docusaurus/types').Config} */
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
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('@akebifiky/remark-simple-plantuml')],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-drawio',
      {
        drawio: {
          drawioPath: './drawio-files',
          outputPath: './static/img/drawio',
          outputFormat: 'svg',
        },
      },
    ],
  ],
};

export default config;