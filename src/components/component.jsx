import React from "react";

// bg-gradient-to-r from-white to-blue-500
export function Button({ label, url }) {
  return (
    <div>
      <a href={url}>
        <button className="text-black   bg-gradient-to-r from-white to-blue-500 px-4 py-2 rounded-xl cursor-pointer hover:from-blue-900 hover:to-white hover:text-white transition-[300ms]">
          {label}
        </button>
      </a>
    </div>
  );
}

export function Card({ picture }) {
  return (
    <div className="w-[300px] h-[300px]  relative rounded-xl border-blue-500 border-4 ">
      <img
        src={picture}
        alt=""
        className="absolute w-[300px] h-[290px] left-[-19px] bottom-[19px] hover:relative transition-[400ms] hover:bottom-0 hover:left-0  rounded-xl cursor-pointer"
      />
    </div>
  );
}

export function Followcard({ image }) {
  return (
    <div>
      <img
        src={image}
        alt=""
        className="size-[300px] hover:scale-[120%] transition-[400ms]"
      />
    </div>
  );
}
