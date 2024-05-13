import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  desc: string;
  descLine2: string;
}

const VisionListCard = ({ img, desc, descLine2 }: Props) => {
  return (
    <div className="flex items-center font-bold mb-[40px] gap-[25px]">
      <Image src={img} alt="icon1" width={100} height={114} />
      <h6 className="text-white">
        {desc} <br />
        {descLine2}
      </h6>
    </div>
  );
};

export default VisionListCard;
