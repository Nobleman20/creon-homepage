import React from "react";

interface Props {
  menu: string;
  status: string;
}

const NavMenuList = ({ menu, status }: Props) => {
  return (
    <li className="flex items-center text-white mr-[40px]">
      {menu}
      <span className="inline-block bg-black text-purple-400 text-[10px] p-1 rounded-lg ml-1 mb-[12px]">
        {status}
      </span>
    </li>
  );
};

export default NavMenuList;
