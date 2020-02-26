import React from "react";

import PageLayout from "../Layout/Page";
import HomeHeader from "../Components/HomeHeader";
import HomeNav from "../Components/HomeNav";
import SEO from "../Components/seo";

import "./global.scss";

const IndexPage = () => (
  <PageLayout header={<HomeHeader />}>
    <SEO title="Home" />
    <HomeNav />
  </PageLayout>
);

export default IndexPage;
