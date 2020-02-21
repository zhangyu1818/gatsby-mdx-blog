import { ALLPOSTS } from "./actionTypes";

const filterByTag = (data, tag) => ({
  allMdx: {
    nodes: data.allMdx.nodes.filter(({ frontmatter }) =>
      frontmatter.tags.some(value => value.toLowerCase() === tag.toLowerCase())
    ),
  },
});

const reducer = (state, action) => {
  if (!action.type || action.type === ALLPOSTS)
    return { ...state, filterPosts: state.allPosts };
  return { ...state, filterPosts: filterByTag(state.allPosts, action.type) };
};

export default reducer;
