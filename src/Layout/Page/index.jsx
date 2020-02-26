import React from "react";
import ThemeSwitcher from "../../Components/ThemeSwitcher";
import MobileNav from "../../Components/MobileNav";

import "./index.scss";

const PageLayout = ({ children, header, left }) => (
  <div className="page-layout">
    <div className="page-layout-header">
      <MobileNav />
      {header}
      <ThemeSwitcher />
    </div>
    <div className="page-layout-content">{children}</div>
    <div className="page-layout-left">{left}</div>
  </div>
);

export default PageLayout;
