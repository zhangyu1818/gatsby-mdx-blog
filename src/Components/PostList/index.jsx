import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import "./index.scss";

const PostItem = ({ tag, date, name, link }) => (
  <Link to={link}>
    <div className="post-item cp">
      <span className="tag" data-tag-lang={tag.toLowerCase()}>
        {tag}
      </span>
      <small className="date">{date}</small>
      <h2 className="name">{name}</h2>
    </div>
  </Link>
);

const getExistDate = data => {
  const existDateHash = data.reduce((a, b) => {
    const date = b.substring(0, 4);
    a[date] = +date;
    return a;
  }, {});
  return Object.values(existDateHash).sort((a, b) => b - a);
};

const insertDate = (date, data) => {
  let tempDate = [...date];
  const inserted = [];
  for (let i = 0; i < data.length; i++) {
    const current = data[i];
    const currentDate = tempDate[0];
    if (current.frontmatter.date.includes(currentDate)) {
      inserted.push({ type: "time", timeLine: currentDate });
      i--;
      tempDate = tempDate.slice(1);
    } else inserted.push(current);
  }
  return inserted;
};

const PostList = () => {
  const { allMdx } = useStaticQuery(graphql`
    query allPostsQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        distinct(field: frontmatter___date)
        nodes {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            tags
            title
          }
        }
      }
    }
  `);
  const data = insertDate(getExistDate(allMdx.distinct), allMdx.nodes);
  return (
    <div className="post-list">
      {data.map(({ type, timeLine, frontmatter, fields, id }) =>
        type === "time" ? (
          <div id={`post_time_${timeLine}`} className="time" key={timeLine}>
            {timeLine}
          </div>
        ) : (
          <PostItem
            key={id}
            name={frontmatter.title}
            date={frontmatter.date}
            tag={frontmatter.tags[0]}
            link={fields.slug}
          />
        )
      )}
    </div>
  );
};

export default PostList;
