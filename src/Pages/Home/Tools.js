import React from "react";
import useTools from "../../hooks/useTools";
import Loading from "../Shared/Loading";
import Tool from "./Tool";

const Tools = () => {
  const { isLoading, error, data: tools } = useTools();

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="container 2xl:px-32 px-4  mx-auto mt-20 ">
      <h2 className="text-4xl text-center">
        Our <span className=" border-b-4 pb-2 border-red-500">Popular</span>{" "}
        Tools
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16">
        {tools.slice(0, 6).map((tool) => (
          <Tool key={tool?._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
