import React from "react";
import TransitionTo from "../TransitionTo";
import "./style.scss";

const PostHeader = () => (
  <header className="post-header">
    <TransitionTo to="/blog">
      <h1 className="cp">Blog</h1>
    </TransitionTo>
    <nav className="post-header-nav">
      <TransitionTo to="/" className="animate-nav-item nav-item cp">
        Home
      </TransitionTo>
      {/*<span className="animate-nav-item nav-item cp">Projects</span>*/}
    </nav>
  </header>
);

export default PostHeader;
