import React from "react";

import MainLayout from "../Main";
import Bio from "../../Bio";
import PostFilter from "../../PostFilter";

import "./index.scss";

const HomeLayout = ({ children }) => (
  <MainLayout>
    <div className="home-layout">
      <header className="home-layout-header">
        <Bio />
        <PostFilter />
      </header>
      <div className="home-layout-content">{children}</div>
    </div>
  </MainLayout>
);

export default HomeLayout;
