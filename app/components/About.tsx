/* eslint-disable */
import React from "react";

const About = () => {
  return (
    <section className="h-screen w-screen mt-[120px]">
      <h1 className="text-white text-[#FFFFFF] uppercase text-6xl ml-[240px] text-[68px]">
        Profiting Through
      </h1>
      <h2 className="text-white text-[#FFFFFF] uppercase text-4xl text-right mr-[240px] text-[38px]">
        AI Innovation & Decentralization
      </h2>
      <div className="flex h-[1920px] w-[976px]">
        <video className="h-[500px] w-[500px]" autoPlay loop muted playsInline>
          <source src="/videos/creon-logo.mp4" type="video/mp4" />
        </video>
        <p className="text-white">
          The dynamic community driven business model of the future. At Creon,
          we blend the power of AI tools with the dynamic crypto and NFT
          markets, utilizing an innovative business model to drive
          profitability. This approach empowers our community, as our NFT and
          token holders directly benefit from the growth and prosperity of the
          Creon network, creating a win-win scenario for both our community and
          for the projects we launch.
        </p>
      </div>
    </section>
  );
};

export default About;
