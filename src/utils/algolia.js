const mdxQuery = `
query PostsQuery{
   allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
    edges {
      node {
        excerpt
        frontmatter {
          tags
          title
        }
      }
    }
  }
}`;

const unnestFrontmatter = node => {
  const { frontmatter, ...rest } = node;
  return {
    ...frontmatter,
    ...rest,
  };
};

const queries = [
  {
    query: mdxQuery,
    indexName: "Posts",
    transformer: ({ data }) =>
      data.allMdx.edges.map(edge => edge.node).map(unnestFrontmatter),
  },
];

module.exports = queries;
