import React from "react";
import { graphql } from "gatsby";

import HomeLayout from "../Components/Layout/Home";
import PostList from "../Components/PostList";
import SearchInput from "../Components/Search";
import { PostsProvider } from "../store";

import "./global.scss";

const IndexPage = () => (
  <PostsProvider>
    <HomeLayout>
      {/*<SearchInput />*/}
      <PostList />
    </HomeLayout>
  </PostsProvider>
);

export default IndexPage;
