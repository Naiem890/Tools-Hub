import React from "react";
import toolIamge from "./../../../assets/image/hammer.png";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
const Order = () => {
  return (
    <div className="container 2xl:px-20 px-8 py-3  mx-auto my-6">
      <div className="border bg-white flex md:flex-row flex-col p-4 md:p-9 gap-6 lg:gap-10">
        <div className="lg:w-1/3 w-full">
          <div className="">
            <img
              src={toolIamge}
              className="xl:max-w-sm bg-slate-100 px-5 py-4 md:px-8  md:py-8"
              alt=""
            />
          </div>
          <h3 className="text-xl font-medium mt-6">
            Tolsen Machinist Hammer (300g) Fiberglass Handle 25002
          </h3>
          <div class="divider xl:max-w-sm -mb-3"></div>

          <div className="mt-3 flex justify-between gap-1 flex-wrap font-medium text-lg xl:max-w-sm">
            <p className="text-info">Min Order: 200 pc </p>
            <p className="text-success">Available: 400 pc </p>
          </div>
          <div class="divider xl:max-w-sm mt-1 mb-0"></div>

          <p className="text-gray-500 mt-3">
            Machinist hammers feature a square beveled face and angular cross
            peen. The distance between the face and the center of the eye make
            this one a greater starter hammer. It is easier to balance and
            control when using the edges and peen.
          </p>
        </div>
        <div className="lg:w-2/3 w-full">
          <h2 className="text-2xl md:text-3xl">
            Complete Your Order Information
          </h2>
          <form className="mt-6">
            <div className="flex gap-3 lg:gap-6 lg:flex-row flex-col">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered bg-slate-50 w-full"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here"
                  class="input input-bordered bg-slate-50 w-full"
                />
              </div>
            </div>
            <div className="flex gap-3 lg:gap-6 lg:flex-row flex-col mt-2">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder="Type here"
                  class="input input-bordered bg-slate-50 w-full"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Order Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Type here"
                  class="input input-bordered bg-slate-50 w-full"
                />
              </div>
            </div>

            <div className="flex gap-2 lg:gap-6 lg:flex-row flex-col mt-2">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Enter Delivery Address</span>
                </label>
                <textarea
                  class="textarea bg-slate-50 textarea-bordered"
                  placeholder="Example: 1382 Plainfield Avenue, Syracuse, New York"
                ></textarea>
              </div>
            </div>
            <div class="divider"></div>
            <div className="flex gap-4 flex-wrap mt-2 justify-between items-center">
              <div className="flex items-center gap-2">
                <p className="text-xl">Total Price: $4579</p>

                <div class="tooltip" data-tip="Extra delivery charge 100$">
                  <QuestionMarkCircleIcon className="w-6 h-6 text-info"></QuestionMarkCircleIcon>
                </div>
              </div>
              <button type="submit" className="btn btn-primary text-white">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
