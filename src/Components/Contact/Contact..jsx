import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <br />
      <hr className="hr" />

      <br />
      <p className="c-title">Contact</p>
      <p className="c-desc">Don't be shy! Hit me up! 👇</p>
      <p className="c-add">
        <a href="mailto:someshverma.dev@gmail.com" className="mail">
          someshverma.dev@gmail.com
        </a>
      </p>

      <br />
      <br />
    </div>
  );
}
