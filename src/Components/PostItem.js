import React from "react";
import { Link } from "gatsby";
import { formatReadingTime } from "../utils/helpers";

const PostItem = ({ link, title, date, timeToRead, excerpt }) => (
    <div>
        <h3 style={{ marginBottom: "0.35rem" }}>
            <Link style={{ boxShadow: "none" }} to={link}>
                {title}
            </Link>
        </h3>
        <small>
            {date} {` • ${formatReadingTime(timeToRead)}`}
        </small>
        <p>{excerpt}</p>
    </div>
);

export default PostItem;
