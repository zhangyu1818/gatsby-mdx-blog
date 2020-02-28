import React, { forwardRef } from "react";
import TransitionTo from "../TransitionTo";

import Logo from "../Logo";

import "./style.scss";

const BlogHeader = forwardRef((_, ref) => (
  <header ref={ref} className="blog-header">
    <div className="header-logo-switcher">
      <div className="switcher-translate">
        <Logo className="header-logo-icon" size={32} />
        <h1 className="header-logo cp">Blog</h1>
      </div>
    </div>
    <nav className="blog-header-nav">
      <TransitionTo className="animate-nav-item nav-item cp" top="entry" to="/">
        Home
      </TransitionTo>
      {/*<span className="animate-nav-item nav-item cp">Projects</span>*/}
    </nav>
    <div className="blog-header-search" hidden>
      search
    </div>
  </header>
));

export default BlogHeader;
