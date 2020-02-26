import React from "react";

import BlogLayout from "../../Layout/Blog";
import PostList from "../../Components/PostList";
import SEO from "../../Components/seo";

const Blog = () => (
  <BlogLayout>
    <SEO title="Blog" />
    <PostList />
  </BlogLayout>
);

export default Blog;
