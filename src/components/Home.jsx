import React from "react";
import Trend from "./trend";

const Home = () => {
  return (
    <div className="">
      <div className="  pt-30 px-15 bg-[url('./assets/relax3.jpeg')] bg-cover bg-center h-screen bg-amber-400">
        <div className="w-[50%]">
          <h1 className="text-7xl font-semibold  text-white ">
            Elevate Your Work Experience at GOK Cowork
          </h1>
          <p className="font-semibold text-white text-xl pt-5 w-[70%]">
            Discover a Dynamic Workspace where innovation and Collaboration
          </p>
        </div>
      </div>
      <section>
        <Trend />
      </section>
    </div>
  );
};

export default Home;
