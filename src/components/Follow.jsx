import React from "react";
import { Button, Followcard } from "./component";
import { picture } from "../assets/assets";

export default function Follow() {
  return (
    <div className="text-white bg-gray-900 flex flex-col items-center  relative gap-3 py-9">
      <h1 className=" text-xl font-bold text-blue-500">
        Follow Us On Instagram
      </h1>
      <h2 className="text-3xl w-[40%] text-center font-semibold">
        Stay Connected and Inspired ! Follow us on instagram for the Latest
        updates
      </h2>
      <section className=" flex gap-8">
        <Followcard image={picture.office5} />
        <Followcard image={picture.office6} />
        <Followcard image={picture.office7} />
      </section>
      <Button label="Follow Us on Instagram" />
    </div>
  );
}
