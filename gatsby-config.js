module.exports = {
  siteMetadata: {
    title: 'aron.',
    description: "Aron's Portfolio",
    author: '@aronjasso',
    siteUrl: 'http://aronjasso.surge.sh/'
  },
  pathPrefix: '/',
  plugins: [{
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/content/images/`,
      name: 'images'
    }
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Campfire',
      short_name: 'campfire',
      description: "Aron Jasso's Portfolio",
      start_url: '/',
      background_color: '#fff',
      theme_color: '#000',
      display: 'Source Serif Pro',
      icons: [{
        src: '/images/somefile.png',
        size: '192x192',
        type: 'image/png'
      }]
    }
  }, {
    resolve: 'gatsby-plugin-prefetch-google-fonts',
    options: {
      fonts: [{
        family: 'Source Serif Pro',
        variants: ['400', '600', '700']
      }, {
        family: 'Source Sans Pro',
        variants: ['200', '300', '400', '600', '700', '900']
      }]
    }
  }, {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-156354153-1',
    }
  }, {
    resolve: 'gatsby-plugin-netlify',
    options: {
      mergeSecurityHeaders: true,
      mergeLinkHeaders: true,
      mergeCachingHeaders: true
    }
  },
  'gatsby-plugin-catch-links',
  'gatsby-plugin-offline',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sass',
  'gatsby-plugin-scroll-reveal',
  'gatsby-plugin-sharp',
  'gatsby-plugin-sitemap',
  'gatsby-transformer-sharp'
]}
