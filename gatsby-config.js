module.exports = {
  siteMetadata: {
    title: 'My Portfolio',
    author: 'Jose Antonio Solís Martínez',
    description: 'Portfolio of Jose Antonio Solís Martínez a Computer Systems Engineer interested in cybersecurity and programming.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
