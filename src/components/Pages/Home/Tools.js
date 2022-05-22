import React from "react";
import Tool from "./Tool";

const Tools = () => {
  return (
    <div className="container 2xl:px-32 px-4 py-3  mx-auto mt-20">
      <h2 className="text-4xl text-center">
        Our <span className=" border-b-4 pb-2 border-red-500">Popular</span>{" "}
        Tools
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16">
        <Tool></Tool>
        <Tool></Tool>
        <Tool></Tool>
      </div>
    </div>
  );
};

export default Tools;
