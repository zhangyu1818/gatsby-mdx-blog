import React from "react";
import { Link } from "gatsby";

const PostItem = ({ link, title, date, excerpt }) => (
    <div>
        <h3 style={{ marginBottom: "0.35rem" }}>
            <Link style={{ boxShadow: "none" }} to={link}>
                {title}
            </Link>
        </h3>
        <small>{date}</small>
        <p>{excerpt}</p>
    </div>
);

export default PostItem;
