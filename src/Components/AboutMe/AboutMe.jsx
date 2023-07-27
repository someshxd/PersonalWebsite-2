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
                A dedicated Full-Stack Web Developer based in India 📍
              </span>
              <br />
              <br />
              <span>
                A MERN stack developer is proficient in building web
                applications using cutting-edge technologies: MongoDB,
                Express.js, React.js, and Node.js. They excel in both front-end
                and back-end development, creating dynamic, scalable, and
                user-friendly applications. Their skills in database management,
                RESTful API development, and version control make them adept at
                delivering high-quality, modern solutions for web development
                projects.
                <br /> I have experience developing responsive, scalable, and
                maintainable web applications that meet business requirements
                and user needs.
                <br />
                In addition to technical skills, I have excellent communication
                and collaboration abilities that allow me to work effectively
                with team members, stakeholders, and clients. My attention to
                detail, problem-solving skills, and commitment to quality ensure
                that I deliver solutions that meet or exceed expectations.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
