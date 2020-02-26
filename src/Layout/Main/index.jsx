import React from "react";
import classnames from "classnames";

import "./index.scss";

const MainLayout = ({ children, data }) => {
  const post = !!data && !!data.mdx;
  return (
    <main className={classnames("main-layout", { post })}>
      <div className={"main-layout-content"}>{children}</div>
    </main>
  );
};

export default MainLayout;
