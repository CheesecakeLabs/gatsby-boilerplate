module.exports = [
  {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: `${__dirname}/src/pages/index`,
    },
  },
  {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: `${__dirname}/src/pages/page-2`,
    },
  },
  {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: `${__dirname}/src/pages/404`,
    },
  },
]
