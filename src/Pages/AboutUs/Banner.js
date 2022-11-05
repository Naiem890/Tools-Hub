import React from "react";
import toolsImage from "./../../assets/image/bricolage-milano.jpg";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img
          src={toolsImage}
          alt=""
          srcset=""
          className="md:h-80 h-48 object-cover w-screen"
        />
        <div className="absolute bg-black opacity-50 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 container">
          <h1 className="font-poppins text-5xl text-white font-bold text-center drop-shadow">
            About Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
