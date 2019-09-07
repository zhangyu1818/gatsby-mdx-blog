module.exports = {
    siteMetadata: {
        title: `Blog`,
        author: `Zhang Yu`,
        description: `code`,
        siteUrl: `http://zhangyu1818.com/`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Blog`,
                short_name: `Blog`,
                start_url: `/`,
                background_color: `#282c34`,
                theme_color: `#282c34`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts/`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: {
                    posts: require.resolve(
                        "./src/templates/BlogPostLayout/index.js"
                    ),
                },
                gatsbyRemarkPlugins: [
                    "gatsby-remark-copy-linked-files",
                    `gatsby-remark-prismjs`,
                ],
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        `gatsby-plugin-offline`,
    ],
};
