module.exports = {
    siteMetadata: {
        title: `Snailbites - the digital home of Vincent Nalupta`,
        lead1: `VINCENT NALUPTA`,
        lead2: `IS A UX ENGINEER`,
        author: `Vincent Nalupta`,
        description: `Snailbites is the digital home of Vincent Nalupta, a UX Engineer in NYC.`,
        siteUrl: `https://snailbit.es/`,
        social: {
            twitter: `snailbites`,
        },
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-feed`,
        `gatsby-plugin-remove-serviceworker`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                            backgroundColor: "#D8D8D8",
                            disableBgImageOnAlpha: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-vscode`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // edit below
                // trackingId: `ADD YOUR TRACKING ID HERE`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gatsby Starter Blog`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                // edit below
                icon: `content/assets/crown.png`,
            },
        },
    ],
}