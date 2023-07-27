import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <hr className="hr" />
      <div className="p-head">Portfolio</div>
      <a href="https://github.com/someshxd" target="_blank">
        <img src="images/git.png" className="p-git" />
      </a>
      <div className="p-cum">Coming Soon...</div>
    </div>
  );
}
