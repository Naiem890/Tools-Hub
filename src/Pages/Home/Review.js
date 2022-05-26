import React from "react";

const Review = () => {
  return (
    <article className="border px-7 py-5 bg-slate-50 hover:shadow-lg hover:border-transparent transition-all cursor-pointer">
      <div className="flex gap-3">
        <div className="flex items-center mb-4 space-x-4">
          <div className="avatar">
            <div className="w-14 ring ring-offset-2 ring-green-400 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=28212" alt="" />
            </div>
          </div>
          <div className="space-y-1 font-medium ">
            <div>
              <div className="flex items-center gap-4 justify-between ">
                <p>Jese Leos </p>
                <div className="rating">
                  <svg className="mask mask-star-2 w-4 h-4 bg-green-500" />
                  <svg className="mask mask-star-2 w-4 h-4 bg-green-500" />
                  <svg className="mask mask-star-2 w-4 h-4 bg-green-500" />
                  <svg className="mask mask-star-2 w-4 h-4 bg-green-500" />
                  <svg className="mask mask-star-2 w-4 h-4 bg-green-500" />
                </div>
              </div>
              <time
                dateTime="2014-08-16 19:00"
                className="block text-sm text-gray-500 "
              >
                Joined on August 2014
              </time>
            </div>
          </div>
        </div>
      </div>

      <p className="mb-2 font-light text-gray-500 ">
        This is my third Invicta Pro Diver. They are just fantastic value for
        money. This one arrived yesterday and the first thing I did was set the
        time
      </p>
    </article>
  );
};

export default Review;
