import React from "react";

const Review = () => {
  return (
    <article className="border px-7 py-5 bg-slate-50">
      <div className="flex gap-3">
        <div class="flex items-center mb-4 space-x-6">
          <div class="avatar">
            <div class="w-14 ring ring-offset-2 ring-green-400 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=28212" alt="" />
            </div>
          </div>
          <div class="space-y-1 font-medium dark:text-white">
            <p>
              <div className="flex items-center gap-2 justify-between ">
                <p>Jese Leos </p>
                <div class="rating">
                  <svg class="mask mask-star-2 w-4 h-4 bg-green-500" />
                  <svg class="mask mask-star-2 w-4 h-4 bg-green-500" />
                  <svg class="mask mask-star-2 w-4 h-4 bg-green-500" />
                  <svg class="mask mask-star-2 w-4 h-4 bg-green-500" />
                  <svg class="mask mask-star-2 w-4 h-4 bg-green-500" />
                </div>
              </div>
              <time
                datetime="2014-08-16 19:00"
                class="block text-sm text-gray-500 dark:text-gray-400"
              >
                Joined on August 2014
              </time>
            </p>
          </div>
        </div>
      </div>

      <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
        This is my third Invicta Pro Diver. They are just fantastic value for
        money. This one arrived yesterday and the first thing I did was set the
        time
      </p>
    </article>
  );
};

export default Review;
