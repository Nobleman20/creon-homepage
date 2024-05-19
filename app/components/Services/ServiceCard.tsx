import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  subtitle: string;
  img: string;
  paragraph: string;
  state: string;
}

const ServiceCard = ({ title, subtitle, img, paragraph, state }: Props) => {
  return (
    <div className="text-white bg-[#13171D] w-full relative">
      <div className="absolute top-[-10px] right-[30px]">
        <p className="uppercase text-black bg-white inline px-[5px] text-[10px] rounded-[10px] sm:text-[12px]">
          {state}
        </p>
      </div>
      <h3 className="uppercase text-[30px] mb-[15px] font-monument ml-[30px] mt-[80px]">
        {title}
      </h3>
      <h6 className="text-blue-500 text-[22px] mb-[50px]  ml-[30px] mr-[30px] w-[90%]">
        {subtitle}
      </h6>
      <div className=" w-[90%]  mb-[18px] relative overflow-hidden">
        <Image
          src={img}
          alt="service card"
          width={423}
          height={234}
          className=" w-[full] h-[full] transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <p className="text-[18px]  ml-[30px] mr-[30px]">{paragraph}</p>
    </div>
  );
};

export default ServiceCard;
