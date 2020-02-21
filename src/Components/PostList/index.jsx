import React from "react";

import useStore from "../../store";

import "./index.scss";

const PostItem = ({ tag, date, name }) => (
  <div className="post-item">
    <div className="post-item-content">
      <div className="tag">{tag}</div>
      <small className="date">{date}</small>
      <h2 className="name">{name}</h2>
    </div>
  </div>
);

const PostList = () => {
  const { state } = useStore();
  console.log(state);
  return (
    <div className="post-list">
      {state.filterPosts.allMdx.nodes.map(({ frontmatter, id }) => (
        <PostItem
          key={id}
          name={frontmatter.title}
          date={frontmatter.date}
          tag={frontmatter.tags[0]}
        />
      ))}
    </div>
  );
};

export default PostList;
