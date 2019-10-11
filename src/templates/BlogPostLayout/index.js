import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../Layout";
import SEO from "../../Components/Seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "./style.scss";

const FooterNavigator = ({ children }) => (
    <div className="post-navigator">{children}</div>
);

const NavigatorItem = ({ link, children, suffix, prefix, className }) => (
    <div className={className}>
        <Link to={link}>
            {prefix}
            {children}
            {suffix}
        </Link>
    </div>
);

const Index = ({ data, pageContext }) => {
    const { body, frontmatter } = data.mdx;
    const { previous, next } = pageContext;
    return (
        <Layout post>
            <SEO title={frontmatter.title} />
            <h1 className="post-title">{frontmatter.title}</h1>
            <small>{frontmatter.date}</small>
            <MDXRenderer>{body}</MDXRenderer>
            <FooterNavigator>
                {previous && (
                    <NavigatorItem
                        className="left"
                        link={previous.fields.slug}
                        prefix="←"
                    >
                        {previous.frontmatter.title}
                    </NavigatorItem>
                )}
                {next && (
                    <NavigatorItem
                        className="right"
                        link={next.fields.slug}
                        suffix="→"
                    >
                        {next.frontmatter.title}
                    </NavigatorItem>
                )}
            </FooterNavigator>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    (function(){
                    var bp = document.createElement('script');
                    var curProtocol = window.location.protocol.split(':')[0];
                    if (curProtocol === 'https') {
                        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
                    }
                    else {
                        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
                    }
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(bp, s);
                    })();
`,
                }}
            />
        </Layout>
    );
};

export default Index;

export const query = graphql`
    query PostBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
            body
        }
    }
`;
