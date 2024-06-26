import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  desc: string;
  descLine2: string;
}

const VisionListCard = ({ img, desc, descLine2 }: Props) => {
  return (
    <div className="flex items-center font-bold my-[30px]">
      <Image src={img} alt="icon1" width={67} height={76} />
      <h6 className="text-white">
        {desc} <br />
        {descLine2}
      </h6>
    </div>
  );
};

export default VisionListCard;
