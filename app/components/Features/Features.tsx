/* eslint-disable */
import React from "react";

const Features = () => {
  return (
    <section className="flex flex-cols-2 h-screenl mx-auto items-center gap-[20px]">
      <header className="bg-black ml-[240px] mt-[100px] w-[700px] h-[708px]">
        <h2 className="text-[#FFFFFF] uppercase font-monument text-[68px] leading-[75px]">
          creon pass nft
        </h2>
        <p className="text-blue-500 mt-[71px] mb-[40px] w-[650px]">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </p>
        <ul className="text-white">
          <li className="mb-8">
            Pre-launch investment opportunities for upcoming AI projects
          </li>
          <li className="mb-8">
            Pre-launch investment opportunities for upcoming AI projects
          </li>
          <li className="mb-8">
            Higher allocation limits on the Creon AI Launchpad
          </li>
          <li className="mb-8">
            Revenue share distribution from Creon built AI projects
          </li>
        </ul>
        <button className="text-white bg-[#3D8BFF] w-full mt-[30px] h-[40px]">
          Buy Creon Pass
        </button>
      </header>
      <video
        className="ml-[40px] mt-[100px] w-[750px] h-[750px] bg-blue-300 mb-[80px]"
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
