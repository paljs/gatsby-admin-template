module.exports = {
  siteMetadata: {
    title: `OAH-Admin`,
    description: `Admin dashboard template based on Gatsby with oah-ui component package.`,
    author: `OAH Technology`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `oah-admin`,
        short_name: `OAH`,
        start_url: `/dashboard`,
        display: `minimal-ui`,
        icon: `src/images/OAH.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
