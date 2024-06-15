import Image from "next/image";
import React from "react";
import VisionPageImage from "@/public/images/Image.png";
import VisionListCard from "./VisionListCard";

const Vision = () => {
  return (
    <div className="ml-[24px] mt-[12px] mr-[24px] w-full lg:mt-[77px]">
      <div className="lg:flex lg:mx-[160px] lg:justify-center">
        <div className="">
          <h3 className="text-white text-[20px] mb-[3px] leading-[35px] uppercase font-monument w-[80%] lg:text-[25px] lg:leading-[30px]">
            Our vision is to <br /> support the innovation of AI blockchain
            <br />
            projects
            <span className="text-blue-500">
              while prioritizing communities and democratizing profits
            </span>
          </h3>
          <Image
            src={VisionPageImage}
            alt="Vision Page Image"
            className="py-[60px]"
          />
        </div>
        <div className="w-[90%] lg:mt-[-40px]">
          <div className="">
            <VisionListCard
              img="/images/icon1.png"
              desc="Profitability and "
              descLine2="Growth"
            />
            <p className="text-white ml-[10px] mt-[10px] w-[90%]">
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
