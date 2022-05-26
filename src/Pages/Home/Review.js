import React from "react";

const Review = ({ review }) => {
  return (
    <article className="border px-7 py-5 bg-slate-50 hover:shadow-lg hover:border-transparent transition-all cursor-pointer">
      <div className="flex gap-3">
        <div className="flex items-center mb-4 space-x-4">
          <div className="avatar">
            <div className="w-14 ring ring-offset-2 ring-green-400 rounded-full">
              <img src={review.reviewerImage} alt="" />
            </div>
          </div>
          <div className="space-y-1 font-medium ">
            <div>
              <div className="flex items-center gap-4 justify-between ">
                <p>{review.reviewerName} </p>
              </div>
              <div className="rating items-center gap-1">
                <span className="text-base text-gray-500 font-normal mr-1">
                  Rating:{" "}
                </span>
                <span className="text-lg text-green-500">{`${review.reviewRating}`}</span>
                <svg className="mask mask-star-2 w-4 h-4 bg-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mb-2 font-light text-gray-500 ">{review.reviewText}</p>
    </article>
  );
};

export default Review;
