/* eslint-disable */
import React from "react";

const Hero = () => {
  return (
    <header className="relative">
      <div className="relative h-screen overflow-hidden">
        <video
          className="w-full h-full object-cover mt-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/main-background-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute bottom-0 left-0 w-full text-white py-4 text-left">
        <h1 className=" text-6xl md:text-3xl lg:text-6xl font-barlow-condensed uppercase font-bold ml-[240px] mr-[240px] mb-[60px] sm:text-[5px] ">
          The world&apos;s first
          <br /> platform for Tokenizing
          <br /> AI blockchain projects.
        </h1>
        <p className="ml-[240px] text-blue-500">
          {" "}
          Hold the Creon Pass NFT and earn passive income from AI Tools.
        </p>
      </div>
    </header>
  );
};

export default Hero;
