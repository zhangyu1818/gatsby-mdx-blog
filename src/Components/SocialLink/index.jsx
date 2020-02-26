import React from "react";
import classnames from "classnames";

import "./style.scss";

const SocialLink = ({ children, to, className }) => (
  <a href={to} className={classnames("barcode-link", "hover-link", className)}>
    {children}
  </a>
);

export const GithubLink = ({ className }) => (
  <SocialLink className={className} to="https://github.com/zhangyu1818">
    Github
  </SocialLink>
);

export default SocialLink;
