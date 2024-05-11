/* eslint-disable */
import React from "react";

const About = () => {
  return (
    <section className="h-screen w-screen mt-[120px]">
      <h1 className="text-white text-[#FFFFFF] uppercase ml-[240px] text-[75px] font-barlow-condensed font-bold ">
        Profiting Through
      </h1>
      <h2 className="uppercase text-4xl text-right mr-[120px] text-[38px] font-barlow-condensed text-blue-500 font-bold">
        AI Innovation & Decentralization
      </h2>
      <div className="flex items-center ml-[240px] justify-center flex-cols-2 gap-[30px] mt-[60px] ml-[240px]">
        <video className=" w-[800px]" controls playsInline>
          <source src="/videos/creon-logo.mp4" type="video/mp4" />
        </video>
        <div className="text-white mr-[120px]">
          <p>The dynamic community driven business model of the future.</p>
          <p className="mt-[20px]">
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
