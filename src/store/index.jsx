import React, { useContext, useReducer } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Context from "./context";
import reducer from "./reducer";

const Provider = Context.Provider;

const useQueryData = () =>
  useStaticQuery(graphql`
    query allPostsQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            tags
            title
          }
        }
      }
    }
  `);

const PostsProvider = ({ children }) => {
  const allPosts = useQueryData();
  const [state, dispatch] = useReducer(reducer, allPosts, allPost => ({
    allPosts,
    filterPosts: allPosts,
  }));
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useStore = () => useContext(Context);

export { PostsProvider };
export default useStore;
