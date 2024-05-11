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
    <div className="text-white">
      <h3>{title}</h3>
      <h6 className="text-blue-500">{subtitle}</h6>
      <Image src={img} alt="service card" />
      <p>{paragraph}</p>
    </div>
  );
};

export default ServiceCard;
