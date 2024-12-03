import { themes as prismThemes } from 'prism-react-renderer'; // Импортируем prismThemes

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RentSport', // Название сайта на начальной странице
  tagline: 'Сайт для аренды спортивного оборудования', // Описание сайта на начальной странице
  favicon: 'img/favicon.ico', // Иконка сайта
  url: 'https://MatveyPlumbus.github.io', // Адрес GitHub Pages
  baseUrl: '/RentSport/', // Базовый URL
  organizationName: 'MatveyPlumbus', // Имя GitHub пользователя
  projectName: 'RentSport', // Имя репозитория
  onBrokenLinks: 'warn', // Логировать предупреждения для неработающих ссылок
  onBrokenMarkdownLinks: 'warn', // Логировать предупреждения для неработающих ссылок
  trailingSlash: false,
  deploymentBranch: 'gh-pages', // Ветка для деплоя

  plugins: [
    ['drawio', {}], // Подключение плагина для drawio
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js', // Путь к файлу конфигурации сайдбара
          routeBasePath: 'docs', // Базовый путь для документации
          editUrl:
            'https://github.com/MatveyPlumbus/RentSport', // Ссылка для редактирования документации
        },
        blog: false, // Отключение блога
        theme: {
          customCss: './src/css/custom.css', // Пользовательский CSS
        },
      }),
    ],
    // Подключение плагина для OpenAPI
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'rent-equipment',
            spec: 'api-specs/openapi.yaml', // Путь к спецификации OpenAPI
          },
        ],
        theme: {
          primaryColor: '#1890ff', // Цветовая тема
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg', // Изображение для социальных сетей
      navbar: {
        title: 'RentSport', // Название в навбаре
        logo: {
          alt: 'RentSport Logo',
          src: 'img/logo.svg', // Логотип в навбаре
        },
        items: [
          {
            href: 'https://github.com/MatveyPlumbus/RentSport',
            label: 'GitHub',
            position: 'right', // Позиция на навбаре
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
                to: '/docs/', // Ссылка на документацию
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
        theme: prismThemes.github, // Тема подсветки кода
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;