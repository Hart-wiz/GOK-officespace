import React from "react";
import { icon, picture } from "../assets/assets";
import { Button, Card } from "./component";

export default function Curvefly() {
  return (
    <div className=" flex flex-col items-center relative">
      <img
        src={icon.curve}
        alt=""
        className="w-full top-[-350px] h-[650px] absolute  z-30   "
      />
      <div className="  flex flex-col items-center justify-center bg-black text-white z-30  w-[50%]  gap-6">
        <h1 className="text-2xl font-bold ">
          Experience{" "}
          <b className="text-blue-500">
            a workspace designed for innovation productivity,
          </b>
          productivity, and community.
        </h1>
        <p>
          Discover a Dynamic Workspace where innovation and collaboration meet.
          Enhance performance of employees by attributed workspace envirnment.
          Efficiency at its best. Discover a Dynamic Workspace where innovation
          and collaboration
        </p>
        <Button label="Learn More About Us" />
      </div>

      <section className=" flex gap-20 justify-center p-9  z-30 mt-[40px] bg-black w-full">
        <Card picture={picture.office3} />
        <Card picture={picture.office4} />
        <Card picture={picture.office} />
      </section>
    </div>
  );
}
