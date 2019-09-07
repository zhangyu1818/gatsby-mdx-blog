const path = require(`path`);
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const blogPostTemplate = path.resolve(
        `./src/templates/BlogPostLayout/index.js`
    );
    const result = await graphql(
        `
            {
                allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
                    nodes {
                        frontmatter {
                            title
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        `
    );
    if (result.errors) {
        throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.nodes;
    posts.forEach((post, index) => {
        const next = index === posts.length - 1 ? null : posts[index + 1];
        const previous = index === 0 ? null : posts[index - 1];
        createPage({
            path: post.fields.slug,
            component: blogPostTemplate,
            context: {
                slug: post.fields.slug,
                previous,
                next,
            },
        });
    });
    return null;
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "Mdx") {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};
