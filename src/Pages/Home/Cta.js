import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/solid";
import React from "react";
import toolsImage from "./../../assets/image/tools.png";

const Cta = () => {
  return (
    <div className="hero bg-[#3B4342]  pt-8 pb-8  mt-20 text-white">
      <div className="hero-content flex-col gap-8 md:gap-20 md:flex-row md:justify-evenly">
        <img
          src={toolsImage}
          className="lg:max-w-sm sm:max-w-xs rounded-lg md:px-0 px-6"
          alt="toolsimage"
        />

        <div className="md:w-1/2 sm:w-4/5">
          <h3 className="text-2xl lg:text-3xl font-bold capitalize leading-normal lg:leading-normal">
            Need help to customize your order?
          </h3>
          <p className="pt-3  text-lg text-gray-400">
            We understand the requirement of a growing business. That's why we
            have a{"  "}
            <span className="text-white font-bold tracking-widest">24x7</span>
            {"  "}
            service center. Please email or call us now and we will ensure your
            need.
          </p>

          <div className="flex items-center mt-6 flex-wrap gap-4">
            <div class="form-control ">
              <label class="input-group">
                {/* <span className=" text-black">Email</span> */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="input input-bordered text-black"
                />
                <button type="submit" className="btn btn-success text-white">
                  <ArrowRightIcon className="w-5 h-5 inline-block "></ArrowRightIcon>
                </button>
              </label>
            </div>
            <div class="divider  md:divider-horizontal">OR</div>

            <a href="tel:123-456-7890" className="btn btn-success  text-white">
              <PhoneIcon className="w-5 h-5 inline-block mr-3"></PhoneIcon>
              Call now{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
