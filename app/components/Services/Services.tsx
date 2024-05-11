import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex items-center flex-cols-3 justify-center gap-[100px] mt-[120px] ml-[240px] mr-[240px]">
      <ServiceCard
        title="Token"
        subtitle="The Gateway token to the world of AI"
        img=""
        paragraph="Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects."
      />
      <ServiceCard
        title="Token"
        subtitle="The Gateway token to the world of AI"
        img=""
        paragraph="Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects."
      />
      <ServiceCard
        title="Token"
        subtitle="The Gateway token to the world of AI"
        img=""
        paragraph="Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects."
      />
    </div>
  );
};

export default Services;
