import React from "react";
import { graphql } from "gatsby";
import Layout from "../templates/Layout";
import PostItem from "../Components/PostItem";
import SEO from "../Components/Seo";
import "./global.scss";

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="All posts" />
        {data.allMdx.nodes.map(
            ({ frontmatter, id, fields, timeToRead, excerpt }) => (
                <PostItem
                    key={id}
                    link={fields.slug}
                    title={frontmatter.title}
                    date={frontmatter.date}
                    timeToRead={timeToRead}
                    excerpt={excerpt}
                />
            )
        )}
    </Layout>
);

export default IndexPage;

export const query = graphql`
    query Posts {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                id
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                }
                excerpt(pruneLength: 100)
                timeToRead
                fields {
                    slug
                }
            }
        }
    }
`;
