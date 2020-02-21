import React, { useEffect, useState } from "react";
import classnames from "classnames";

import * as postTags from "../../store/actionTypes";

import useStore from "../../store";

import "./index.scss";

const PostFilter = () => {
  const { dispatch } = useStore();
  const [current, setCurrent] = useState(postTags.ALLPOSTS);

  useEffect(() => {
    dispatch({ type: current });
  }, [current]);

  const onClickTag = tag => () => setCurrent(tag);

  return (
    <aside className="post-filter">
      <ul>
        {Object.values(postTags).map(tag => (
          <li
            key={tag}
            className={classnames({ active: current === tag })}
            onClick={onClickTag(tag)}
          >
            <span>{tag}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PostFilter;
