import React from "react"

import "./index.scss"

const PostItem = ({ tag, date, name }) => (
  <div className="post-item">
    <div className="post-item-content">
      <div className="tag">{tag}</div>
      <small className="date">{date}</small>
      <h2 className="name">{name}</h2>
    </div>
  </div>
)

const PostList = ({ children }) => <div className="post-list">{children}</div>

export default PostList
export { PostItem }
