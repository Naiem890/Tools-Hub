import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Review from "./Review";

const Reviews = () => {
  const {
    isLoading,
    error,
    data: reviews,
  } = useQuery("repoData", () =>
    fetch("https://morning-sands-54796.herokuapp.com/reviews").then((res) =>
      res.json()
    )
  );

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;

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
        {reviews.map((review) => {
          return <Review key={review?._id} review={review}></Review>;
        })}
      </div>
    </div>
  );
};

export default Reviews;
