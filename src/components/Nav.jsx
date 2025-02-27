import React from "react";
import { Button } from "./component";

const Nav = () => {
  return (
    <div className="fixed flex justify-between px-15 py-6  bg-black text-white items-center  w-full">
      <h2 className="font-bold text-blue-400">GOK SPACEWORKS</h2>
      <ul className=" flex gap-9 ">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Facilities</a>
        </li>
        <li>
          <a href="">Our Plans</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className="flex flex-row gap-4 ">
        <Button label="Sign  Up" />
        <a href="">
          <button className=" px-4 py-2 rounded-xl shadow-sm shadow-white hover:bg-blue-950 hover:text-white hover:shadow-none">
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default Nav;
