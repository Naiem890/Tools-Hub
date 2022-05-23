import React from "react";
import Review from "./Review";

const Reviews = () => {
  return (
    <div className="container mx-auto 2xl:px-32 px-4 mt-20">
      <h2 className="text-4xl text-center ">
        We're{" "}
        <span className="border-b-4 sm:pb-2 leading-normal border-info">
          Trusted
        </span>{" "}
        By People
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-16 md:gap-9 gap-4 mb-9">
        <Review></Review>
        <Review></Review>
        <Review></Review>
      </div>
    </div>
  );
};

export default Reviews;
