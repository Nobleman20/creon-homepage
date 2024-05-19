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

      <div className="absolute bottom-0 left-0  text-white py-4 text-left">
        <h1 className=" md:text-[50px] lg:text-[48px] font-monument uppercase ml-[24px] mb-[50px] sm:text-[38px] xl:leading-[75px] xl:text-[68px] lg:leading-[55px] md:leading-[35px] sm:leading-[40px] text-[25px] max-w-[65%] leading-[30px]">
          The world&apos;s first
          <br /> platform for Tokenizing
          <br /> AI blockchain projects.
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
