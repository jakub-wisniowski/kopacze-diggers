const path = require("path")

module.exports = {
  pathPrefix: "/kopacze-diggers",
  siteMetadata: {
    title: `Kopacze - Diggers`,
    description: `Queerowy kolektyw tworzący przestrzeń do warsztatów i wypoczynku dla osób aktywistycznych na rzecz praw osób LGBT+, środowiska naturalnego, feminizmu etc.`,
    author: `@jakub-wisniowski`,
    siteUrl: `https://kopacze.space`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        i18n: path.join(__dirname, "src/i18n"),
        images: path.join(__dirname, "src/images"),
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/layout.js`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/support-us/`, `/about/`],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://kopacze.space',
        sitemap: 'https://kopacze.space/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preload-fonts`,
  ],
}
