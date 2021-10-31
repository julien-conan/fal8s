require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitleAlt: `Fal8s | Portfolio`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: 'fal8s',
        location: 'Earth',
        socialMedia: [
          {
            title: `Tech Blog`,
            href: `https://jconan.netlify.app`
          },
          {
            title: `Instagram`,
            href: `https://www.instagram.com/fal8s`
          },
          {
            title: `Twitter`,
            href: `https://twitter.com/f0und4710n5`
          },
          {
            title: `SoundCloud`,
            href: `https://soundcloud.com/fallshimself/likes`
          },
          {
            title: `MixCloud`,
            href: `https://www.mixcloud.com/falls-orser/`
          },
          {
            title: `Twitch`,
            href: `https://www.twitch.tv/fal8s`
          },
          {
            title: `Discord`,
            href: `https://www.discord.com/Fallzard#2497/`
          },
          {
            title: `PolarSteps`,
            href: `https://www.polarsteps.com/fal8s/`
          }
        ]
      },
    },
    googleAnalyticsTrackingId && {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fal8s`,
        short_name: `fal8s`,
        description: `Multipotential individual trying to help others and himself improving their work and their well being. Programmer, photographer, sportive, explorer.`,
        // Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI.
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
