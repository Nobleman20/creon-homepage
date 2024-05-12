/* eslint-disable */
import React from "react";
import "../../globals.css";

const Hero = () => {
  return (
    <header className="relative">
      <div className="relative h-screen overflow-hidden">
        <video
          className="w-full h-full object-cover mt-0 "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/main-background-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute bottom-0 left-0  text-white py-4 text-left">
        <h1 className=" md:text-3xl lg:text-[68px] font-monument uppercase ml-[240px] mb-[50px] sm:text-[5px] leading-[75px] ">
          The world&apos;s first
          <br /> platform for Tokenizing
          <br /> AI blockchain projects.
        </h1>
        <div className="mb-[100px]">
          <p className="ml-[240px] text-blue-500 border-b-[1px] border-t-[1px]  border-blue-500 my-6 inline text-[22px] mt-[40px]">
            Hold the Creon Pass NFT and earn passive income from AI Tools.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
