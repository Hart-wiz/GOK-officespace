import React from "react";
import { Button } from "./component";
import { picture } from "../assets/assets";

export default function Facility() {
  return (
    <div className=" text-white bg-black px-30 py-9 flex flex-col gap-9 z-80 w-full absolute">
      <h1 className="text-lg font-bold text-blue-500 text-center">
        Our Facilities
      </h1>
      <div>
        <p className="text-3xl font-semibold text-center">
          Primary Coworking Space.
        </p>
        <p className="text-3xl font-semibold text-center">
          Always in Small Variations
        </p>
      </div>
      <div className="flex justify-between">
        <section className="w-[500px] gap-3 flex flex-col text-lg">
          <h1 className="font-bold text-3xl">Flexible Work.</h1>
          <h1 className="font-bold text-3xl leading-0"> Focused Growth</h1>
          <p className=" leading-5 pt-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero sunt
            in iusto ab repellat ipsam impedit eaque aliquid dolorem natus
            quasi, officia, maxime itaque culpa voluptas nam eveniet non dolore.
          </p>
          <div className="flex justify-between py-3">
            <ul className="check list-disc">
              <li>High Speed internet</li>
              <li>Wellness Programs</li>
              <li>On-site support</li>
              <li>Printing Services</li>
            </ul>
            <ul className="check">
              <li>Event Spaces</li>
              <li>39/7 Access</li>
              <li>Private Offices</li>
              <li>Conference offices</li>
            </ul>
          </div>
          <Button label="Learn More" />
        </section>
        <div className=" w-[500px] h-[300px]  relative rounded-xl border-blue-500 border-4 ">
          <img
            src={picture.office}
            alt=""
            className="absolute w-[500px] h-[290px] left-[19px] bottom-[19px] hover:relative transition-[400ms] hover:bottom-0 hover:left-0  rounded-xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
