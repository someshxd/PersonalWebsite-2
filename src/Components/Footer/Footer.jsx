import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="f-text">Copyright © 2023. All rights are reserved</div>
      <div className="f-links">
        <a
          href="https://www.linkedin.com/in/somesh-verma-053270213/"
          target="_blank"
        >
          <img src="images/linked.png" className="f-img" />
        </a>
        <a href="https://www.instagram.com/someshvrma/" target="_blank">
          <img src="images/insta.png" className="f-img" />
        </a>
        <a href="https://twitter.com/someshvma" target="_blank">
          <img src="images/twitter.png" className="f-img" />
        </a>
      </div>
    </div>
  );
}
