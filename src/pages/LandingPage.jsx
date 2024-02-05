import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Vision from "../sections/Vision";
import Testimonials from "../sections/Testimonials";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Vision />
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default LandingPage;
