import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navOpenStyle = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`transform transition-all ${navOpenStyle} duration-500 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-black`}
    >
      <XMarkIcon
        onClick={closeNav}
        className="w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem]"
        style={{ color: "white" }}
      />
      <ul className="relative z-[201] space-y-10 flex flex-col justify-center h-[100%] items-center ">
        <li className="text-[25px] cursor-pointer text-yellow-300">
          <Link href="/">Creon Pass</Link>
        </li>
        <li className="text-[25px] text-white flex items-center">
          Token
          <span className="inline-block bg-black text-purple-500 text-xs p-1 rounded-lg ml-1 mb-[12px]">
            soon
          </span>
        </li>
        <li className="text-[25px] text-white flex items-center">
          AI Income
          <span className="inline-block bg-black text-purple-500 text-xs p-1 rounded-lg ml-1 mb-[12px]">
            soon
          </span>
        </li>
        <li className="text-[25px] text-white flex items-center">
          AI Launchpad
          <span className="inline-block bg-black text-purple-500 text-xs p-1 rounded-lg ml-1 mb-[12px]">
            soon
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
