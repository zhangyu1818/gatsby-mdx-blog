import React from "react";

import avatar from "../../images/avatar.jpeg";

import "./index.scss";

const Bio = () => (
  <div className="bio">
    <div className="bio-avatar">
      <img src={avatar} alt="avatar" />
      <p>
        oh oh sometimes ~<br />i get a good feeling ~
      </p>
    </div>
  </div>
);

export default Bio;
