import React from "react";
import "./Topbar.css";

export default function Topbar() {
  return (
    <header>
      <h3>Somesh.dev</h3>
      <nav>
        <a href="#home">Home</a>
        <a href="#aboutme">About Me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
