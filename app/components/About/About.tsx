/* eslint-disable */
import React from "react";

const About = () => {
  return (
    <section className="w-screen h-screen mt-[300px] lg:mt-[80px]">
      <h1 className="text-white uppercase font-monument text-center mt-[10px] text-[38px] lg:text-[50px] lg:ml-[160px] lg:text-left">
        Profiting Through
      </h1>
      <h2 className="uppercase text-[24px] font-monument text-blue-500 mt-[5px] text-center lg:mr-[160px] lg:text-right lg:text-[26px]">
        AI Innovation & Decentralization
      </h2>
      <div className="items-center mx-[24px] mt-[60px] w-full lg:flex lg:gap-9">
        <video
          className="mb-[50px] lg:w-[800px] lg:ml-[160px]"
          controls
          playsInline
        >
          <source src="/videos/creon-logo.mp4" type="video/mp4" />
        </video>
        <div className="text-white mr-[24px] w-[80%] lg:mr-[160px] lg:max-w-[300px]">
          <p className="lg:text-[15px]">
            The dynamic community driven business model of the future.
          </p>
          <p className="mt-[20px] lg:text-[12px]">
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
