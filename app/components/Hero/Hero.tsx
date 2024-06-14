/* eslint-disable */
import React from "react";
import "../../globals.css";

const Hero = () => {
  return (
    <header className="relative">
      <div className="relative w-full overflow-hidden">
        <video
          className="w-screen object-cover mt-0 h-screen "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/main-background-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute bottom-0 left-0  text-white py-4 text-left lg:ml-[160px] lg:mr-[160px]">
        <h1 className="md:text-[50px] lg:text-[px] font-monument uppercase ml-[24px] mb-[50px] sm:text-[38px] xl:leading-[75px] xl:text-[68px] lg:leading-[55px] md:leading-[35px] sm:leading-[40px] lg:mx-[30px] text-[25px] max-w-[65%] lg:max-w-[100%] leading-[30px]">
          <span className="hidden lg:inline">
            The world's first platform for Tokenizing AI blockchain projects.
          </span>
          <span className="block lg:hidden">
            The world's first
            <br /> platform for Tokenizing
            <br /> AI blockchain projects.
          </span>
        </h1>
        <div className="mb-[100px]">
          <p className="ml-[24px] text-blue-500 border-b-[1px] border-t-[1px]  border-blue-500 my-6 inline text-[22px] xl:text=[27px] md:text-[17px] sm:text-[18px] mt-[40px]">
            Hold the Creon Pass NFT and earn passive income from AI Tools.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
