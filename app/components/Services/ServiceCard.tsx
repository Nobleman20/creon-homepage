import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  subtitle: string;
  img: string;
  paragraph: string;
}

const ServiceCard = ({ title, subtitle, img, paragraph }: Props) => {
  return (
    <div className="text-white font-bold bg-[13171d]">
      <h3 className="uppercase text-[30px] mb-[10PX]">{title}</h3>
      <h6 className="text-blue-500 text-[18px] mb-[25px]">{subtitle}</h6>
      <Image src={img} alt="service card" className=" mb-[22px]" />
      <p className="text-[15px]">{paragraph}</p>
    </div>
  );
};

export default ServiceCard;
