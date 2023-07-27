import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="a-card">
        <div className="left">
          <img src="images/aboutme.jpg" alt="aboutme" />
        </div>
        <div className="right">
          <div className="desc">
            <p>
              <span className="a-m">ABOUT ME</span>
              <br />
              <br />

              <span className="a-desc">
                Hello there! 👋 I'm Somesh Verma, a dedicated and enthusiastic
                Full Stack Web Developer currently pursuing my 3rd year of
                studies in Computer Science.
              </span>
              <br />
              <br />
              <span>
                My tech stack includes a wide array of tools and technologies,
                encompassing JavaScript, React, Node.js, Express.js, MongoDB,
                HTML, CSS, and more. I am always eager to explore new frameworks
                and languages to ensure my solutions are robust and efficient.
                <br /> Throughout my academic journey, I have had the
                opportunity to make some real life projects for local
                businessman and couple of freelance projects as well, which have
                honed my teamwork, problem-solving, and communication skills.
                <br />
                As I approach the completion of my Computer Science degree, I am
                excited to explore new career opportunities in the realm of web
                development. If you're looking for a passionate and driven Full
                Stack Web Developer to join your team or collaborate on exciting
                projects, feel free to reach out. I'm always up for a chat!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
