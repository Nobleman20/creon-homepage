/* eslint-disable */
import React from "react";

const Features = () => {
  return (
    <section className="mx-auto items-center w-screen h-screen mb-[50px]">
      <header className=" m-[24px] w-[90%] items-center">
        <h2 className="text-[#FFFFFF] uppercase font-monument text-[38px] leading-[40px] mb-[10px]">
          creon pass nft
        </h2>
        <p className="text-blue-500 mt-[2px] mb-[40px] w-[90%] text-[20px] leading-[25px]">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </p>
        <ul className="text-white text-[12px]">
          <li className="mb-[12px]">
            Pre-launch investment opportunities for upcoming AI projects
          </li>
          <li className="mb-[12px]">
            Pre-launch investment opportunities for upcoming AI projects
          </li>
          <li className="mb-[12px]">
            Higher allocation limits on the Creon AI Launchpad
          </li>
          <li className="mb-[40px]">
            Revenue share distribution from Creon built AI projects
          </li>
        </ul>
        <button className="text-white bg-[#3D8BFF] w-full h-[40px]">
          Buy Creon Pass
        </button>
      </header>
      <video
        className="ml-[24px] mt-[40px] w-[90%] mb-[8px]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/nft-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Features;
