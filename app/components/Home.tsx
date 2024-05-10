/* eslint-disable */

import React from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import About from "./About/About";
import Services from "./Services";
import Vision from "./Vision";
import AiInformation from "./AiInformation/AiInformation";

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Vision />
      <Services />
      <AiInformation />
    </main>
  );
};

export default Home;
