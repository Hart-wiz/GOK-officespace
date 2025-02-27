import React from "react";
import { icon, picture } from "../assets/assets";

export default function Footer() {
  return (
    <div className="footer bg-gray-300 w-full  h-auto  flex justify-center items-center bg-cover bg-center flex-col  relative mt-[700px] py-30">
      <img
        src={icon.curve}
        alt=""
        className="rotate-180 w-full top-[-350px] h-[650px] absolute  z-30 "
      />
      <div className="rounded-3xl w-[80%] h-[300px] bg-black text-white mt-30 px-5 py-7 flex flex-col gap-7">
        <section className="flex justify-between gap-9 h-[80%]">
          <div className="flex flex-col items-center ">
            <h1 className="text-blue-800 font-bold p-4">GOK SPACEWORKS</h1>
            <p>Dynamic Workspace Where</p>
            <p>Inovation and collaboration meets</p>

            <h1 className="font-semibold pt-5 text-blue-500">
              Designed by <br />
              <b className="text-blue-300">WECONETDATA TECHNOLOGIES</b>
            </h1>
          </div>
          <div className="flex flex-row gap-30">
            <section>
              <h2 className="font-semibold text-xl py-4">Contact Us</h2>
              <ul className="flex flex-col gap-3">
                <li>
                  <img src={icon.mail} alt="" />
                  info@supportgok.com
                </li>
                <li>
                  <img src={icon.phone} alt="" />
                  (0)909044890 4000
                </li>
                <li>
                  <img src={icon.mappin} alt="" />
                  67 Lokoja str Abuja, Nigeria
                </li>
                <li>
                  <img src={icon.clock} alt="" />
                  Monday -Friday (8am - 5pm)
                </li>
              </ul>
            </section>
            <div className="w-[300px] bg-amber-300 h-full rounded-2xl ">
              <img
                src={picture.map}
                alt=""
                className="rounded-xl hover:scale-150 cursor-grab transition-[400ms]"
              />
            </div>
          </div>
        </section>
        <section className="flex justify-between">
          <div>Copyright Gok LTD All rights reserved</div>
          <section className="flex gap-2.5">
            <div className="bg-white size-9 rounded-full flex justify-center items-center">
              <a href="">
                <img src={icon.gmail} alt="" className="size-7" />
              </a>
            </div>
            <div className="bg-white size-9 rounded-full flex justify-center items-center">
              <a href="">
                <img src={icon.linkedin} alt="" className="size-7" />
              </a>
            </div>
            <div className="bg-white size-9 rounded-full flex justify-center items-center">
              <a href="">
                <img src={icon.fb} alt="" className="size-7" />
              </a>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
