import React from "react";
import Topbar from "./Components/Topbar/Topbar";
import MIdSection from "./Components/MidSection/MIdSection";
import AboutMe from "./Components/AboutMe/AboutMe";
import Portfolio from "./Components/Portfolio/portfolio";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact.";

export default function () {
  return (
    <div>
      <Topbar />
      <MIdSection />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
