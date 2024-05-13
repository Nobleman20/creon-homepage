// Nav.tsx
import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import NavMenuList from "./NavMenuList/NavMenuList";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <nav className="absolute top-30 left-[50px] right-[50px] mt-[33px] flex items-center justify-between z-50 ml-[50px] font-satoshi">
      <Image src={Logo} alt="Logo" />
      <div className="flex items-center space-x-6">
        <ul className="flex items-center space-x-6 text-[18px]">
          <li className="text-white hover:text-blue-500">Creon Pass</li>
          <NavMenuList menu="Token" status="soon" />
          <NavMenuList menu="AI Revenue" status="soon" />
          <NavMenuList menu="AI Launchpad" status="soon" />
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
