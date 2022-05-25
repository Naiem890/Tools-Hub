import {
  ArrowRightIcon,
  DeviceMobileIcon,
  ReceiptRefundIcon,
  TruckIcon,
} from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="container mx-auto 2xl:px-32 px-4 mt-20">
      <h2 className="text-4xl text-center ">
        We Offer{" "}
        <span className="border-b-4 sm:pb-2 leading-normal border-primary">
          Best
        </span>{" "}
        Service
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-16 md:gap-9 gap-4 mb-9">
        <div className="text-center border py-6 hover:shadow-lg hover:border-transparent transition-all cursor-pointer bg-success hover:bg-[#3B4342] text-white">
          <div className="bg-[#ffffff40] rounded-full inline-block  p-4">
            <DeviceMobileIcon className="w-8 h-8  inline-block text-white"></DeviceMobileIcon>
          </div>
          <h2 className="text-2xl font-medium mt-5 ">Very easy to use</h2>
          <p className="mx-auto w-4/5 mt-4 opacity-80">
            Select, and Order all your carpentry tools for your business.
          </p>
          <Link to="/" className=" mt-6 inline-block font-medium">
            Learn More{"  "}
            <ArrowRightIcon className="inline w-5 h-5"></ArrowRightIcon>
          </Link>
        </div>
        <div className="text-center border py-6 hover:shadow-lg hover:border-transparent transition-all cursor-pointer bg-success hover:bg-[#3B4342] text-white">
          <div className="bg-[#ffffff40] rounded-full inline-block  p-4">
            <TruckIcon className="w-8 h-8  inline-block text-white"></TruckIcon>
          </div>
          <h2 className="text-2xl font-medium mt-5 ">Fastest Delivery</h2>
          <p className="mx-auto w-4/5 mt-4 opacity-80">
            Business Door delivery of any kind of carpentry tools in 7 days
          </p>
          <Link to="/" className=" mt-6 inline-block font-medium">
            Learn More{"  "}
            <ArrowRightIcon className="inline w-5 h-5"></ArrowRightIcon>
          </Link>
        </div>
        <div className="text-center border py-6 hover:shadow-lg hover:border-transparent transition-all cursor-pointer bg-success hover:bg-[#3B4342] text-white">
          <div className="bg-[#ffffff40] rounded-full inline-block  p-4">
            <ReceiptRefundIcon className="w-8 h-8  inline-block text-white"></ReceiptRefundIcon>
          </div>
          <h2 className="text-2xl font-medium mt-5 ">Trusted Refund Policy</h2>
          <p className="mx-auto w-4/5 mt-4 opacity-80">
            Order without hesitation. We offer refunding without question asked.
          </p>
          <Link to="/" className=" mt-6 inline-block font-medium">
            Learn More{"  "}
            <ArrowRightIcon className="inline w-5 h-5"></ArrowRightIcon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
