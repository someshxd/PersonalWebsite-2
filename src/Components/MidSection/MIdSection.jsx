import React from "react";
import "./MidSection.css";

export default function MIdSection() {
  return (
    <div className="wrapper">
      <div className="section">
        <div className="left">
          <div className="text">
            <span className="title">
              Full-stack Web <span className="developer">Developer.</span>{" "}
              <span className="wave"> </span>
            </span>
            <br />

            <span className="desc">
              Hi, I'm Somesh Verma. A{" "}
              <span className="passionate">passionate</span> and
              <span className="skilled"> skilled</span> Full-Stack Developer
              based in India. 📍
            </span>
          </div>
          <div className="contact-here">
            <button className="ch-button">
              <a href="https://drive.google.com/file/d/1zN2g_Ctq8QKU01dz6FsYxBNEd3-HO_v0/view?usp=sharing">
                RESUME
              </a>
            </button>
            <button className="ch-button">
              <a href="#portfolio">PROJECTS</a>
            </button>
          </div>

          <div className="p-img">
            <img className="profile" src="images/laptop.png" alt="my-profile" />
          </div>
        </div>
        <hr className="hr" />
        <div className="right">
          <div className="skills">
            <span className="s-text">MERN Stack |</span>
            <img className="s-img" src="images/mongo.png" alt="javascript" />
            <img className="s-img" src="images/express.jpg" alt="react" />
            <img className="s-img" src="images/react.png" alt="html" />
            <img className="s-img" src="images/node.png" alt="css" />
          </div>
        </div>
        <hr className="hr" />
      </div>
    </div>
  );
}
