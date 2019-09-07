import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import Toggle from "../../Components/Toggle";
import Bio from "../../Components/Bio";
import "./style.scss";

const Index = ({ children, post }) => (
    <article className="blog">
        <header className="blog-header">
            <h1 className={classNames("blog-name", { small: post })}>
                <Link to="/" style={{ boxShadow: "none", color: "inherit" }}>
                    Blog
                </Link>
            </h1>
            <Toggle />
        </header>
        {!post && <Bio />}
        <main className="blog-content">{children}</main>
        <footer className="blog-footer">
            <a className="footer-item" href="https://github.com/zhangyu1818">
                github
            </a>
        </footer>
    </article>
);

export default Index;
