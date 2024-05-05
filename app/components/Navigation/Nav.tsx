// Nav.tsx
import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";

const Nav = () => {
  return (
    <nav className="absolute top-30 left-[50px] right-[50px] p-0 mt-[30px] flex items-center justify-between z-50">
      <Image src={Logo} alt="Logo" />
      <ul className="flex items-center space-x-6">
        <li className="text-white hover:text-blue-500 text-[18px]">
          Creon Pass
        </li>
        <li className="text-white flex items-center">
          Token
          <span className="inline-block bg-black text-white text-xs p-1 rounded-lg ml-1 mb-[12px]">
            soon
          </span>
        </li>
        <li className="text-white flex items-center">
          AI Revenue
          <span className="inline-block bg-black text-white text-xs p-1 rounded-lg ml-1 mb-[12px]">
            soon
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
