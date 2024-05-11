// Nav.tsx
import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <nav className="absolute top-30 left-[50px] right-[50px] p-0 mt-[30px] flex items-center justify-between z-50">
      <Image src={Logo} alt="Logo" />
      <div className="flex items-center space-x-6">
        <ul className="flex items-center space-x-6 ">
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
          <li className="text-white flex items-center">
            AI Launchpad
            <span className="inline-block bg-black text-white text-xs p-1 rounded-lg ml-1 mb-[12px]">
              soon
            </span>
          </li>
        </ul>
        <div className=" flex items-center">
          <button className="border border-white border-2 rounded-[7px]">
            <h1 className="text-white hover:text-blue-500 text-[18px] mx-[25px] my-[7px]">
              Connect
            </h1>
          </button>
          <Bars3BottomRightIcon
            onClick={openNav}
            className="w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer"
            style={{ color: "white" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
