module.exports = {
  siteMetadata: {
    title: 'Gatsby News',
    siteUrl: 'https://thirsty-swirles-a69781.netlify.app',
    description: 'News build on GatsbyJS',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the name plugin your adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'fwl9f0or',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
