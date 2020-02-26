import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import PageLayout from "../Page";
import PostHeader from "../../Components/PostHeader";
import SEO from "../../Components/seo";

import "./style.scss";

const FooterNavigator = ({ children, prefix, suffix, to }) => (
  <Link to={to}>
    <div className="animate-nav-item arrow">
      {prefix}
      {children} {suffix}
    </div>
  </Link>
);

const PostLayout = ({ data: { mdx }, pageContext }) => {
  const { frontmatter } = mdx;
  const { previous, next } = pageContext;
  return (
    <PageLayout post header={<PostHeader />}>
      <SEO title={frontmatter.title} />
      <div className="post-layout">
        <header className="post-layout-header">
          <div className="post-info">
            <span className="post-info-tag">
              {frontmatter.tags && frontmatter.tags[0]}
            </span>
            <span className="post-info-date">{frontmatter.date}</span>
          </div>
          <h1 className="post-name">{frontmatter.title}</h1>
        </header>
        <article className="post-layout-content markdown-body">
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
        <footer className="page-layout-footer">
          {previous ? (
            <FooterNavigator prefix="←" to={previous.node.fields.slug}>
              {previous.node.frontmatter.title}
            </FooterNavigator>
          ) : (
            <span />
          )}
          {next ? (
            <FooterNavigator suffix="→" to={next.node.fields.slug}>
              {next.node.frontmatter.title}
            </FooterNavigator>
          ) : (
            <span />
          )}
        </footer>
      </div>
    </PageLayout>
  );
};

export default PostLayout;

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        tags
        date(formatString: "MMMM，DD")
      }
    }
  }
`;
