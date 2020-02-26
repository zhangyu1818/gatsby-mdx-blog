import React, { forwardRef } from "react";
import { graphql, useStaticQuery } from "gatsby";

import "./style.scss";

const Timeline = forwardRef(({ onClick }, ref) => {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx {
        distinct(field: frontmatter___date)
      }
    }
  `);

  const timeLine = [
    ...new Set(
      allMdx.distinct.map(value => +value.substring(0, 4)).sort((a, b) => b - a)
    ),
  ];

  const onClickTimeline = timeline => {
    const hashEle = document.querySelector(`#post_time_${timeline}`);
    if (hashEle) {
      onClick(hashEle.offsetLeft);
    }
  };

  return (
    <ul ref={ref} className="time-line">
      {timeLine.map(timeline => (
        <span
          role="button"
          tabIndex="-1"
          onClick={() => onClickTimeline(timeline)}
          className="time-line-item cp"
          key={timeline}
        >
          {timeline}
        </span>
      ))}
    </ul>
  );
});

export default Timeline;
