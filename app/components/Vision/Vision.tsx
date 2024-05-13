import Image from "next/image";
import React from "react";
import VisionPageImage from "@/public/images/Image.png";
import VisionListCard from "./VisionListCard";

const Vision = () => {
  return (
    <div className="ml-[240px] mt-[120px] mr-[240px]">
      <div className="flex gap-[120px]">
        <div className="max-w-[700px]">
          <h3 className="text-white text-[34px] mb-[30px] leading-[40px] uppercase font-monument w-[700px] h-[322]">
            Our vision is to <br /> support the innovation of AI blockchain
            <br />
            projects
            <span className="text-blue-500">
              while prioritizing communities and democratizing profits
            </span>
          </h3>
          <Image src={VisionPageImage} alt="Vision Page Image" />
        </div>
        <div className="w-[552px] h-[804px] h-[804px]">
          <div className="">
            <VisionListCard
              img="/images/icon1.png"
              desc="Profitability and "
              descLine2="Growth"
            />
            <p className="text-white ml-[100px] mt-[10px]">
              At Creon, we handpick cutting-edge AI projects and offer our
              community and token holders early access and investment
              opportunities. Our community actively contributes to the growth
              and profitability of these projects, creating a dynamic ecosystem
              of innovation and shared success.
            </p>
          </div>
          <VisionListCard
            img="/images/icon2.png"
            desc="Transparent & Fair Decentralized "
            descLine2="Earnings"
          />
          <VisionListCard
            img="/images/icon2.png"
            desc="Launching the "
            descLine2="future"
          />
          <VisionListCard
            img="/images/icon2.png"
            desc="Limitless Possibilities of AI "
            descLine2="& Crypto"
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;
