import React from "react";
import TransitionTo from "../TransitionTo";

import "./index.scss";

const Arrow = ({ color = "currentColor" }) => (
  <svg viewBox="0 0 512 512" width="2rem" height="2rem" fill={color}>
    <path d="M508.875 248.458l-160-160c-4.167-4.167-10.917-4.167-15.083 0-4.167 4.167-4.167 10.917 0 15.083l141.792 141.792H10.667C4.771 245.333 0 250.104 0 256s4.771 10.667 10.667 10.667h464.917L333.792 408.458c-4.167 4.167-4.167 10.917 0 15.083a10.634 10.634 0 007.542 3.125c2.729 0 5.458-1.042 7.542-3.125l160-160c4.166-4.166 4.166-10.916-.001-15.083z" />
  </svg>
);

const HomeNav = () => (
  <div className="home-nav">
    <div className="home-nav-intro">
      <img alt="👋" src="https://twemoji.maxcdn.com/2/svg/1f44b.svg" />
    </div>
    <div hidden className="home-nav-projects">
      <h2>
        Projects（没做）
        <Arrow />
      </h2>
      <p>一些轮子</p>
    </div>
    <TransitionTo direction="left" to="/blog">
      <div className="home-nav-blog">
        <h2>
          Blog <Arrow />
        </h2>
        <p>学习记录</p>
      </div>
    </TransitionTo>
  </div>
);

export default HomeNav;
