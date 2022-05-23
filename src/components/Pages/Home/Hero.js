import React from "react";
import heroImage from "./../../../assets/image/hero.png";
const Hero = () => {
  return (
    <div className="hero  bg-base-200 pt-16 pb-9">
      <div className="hero-content flex-col lg:gap-20 md:flex-row">
        <img
          src={heroImage}
          className="lg:max-w-lg sm:max-w-sm rounded-lg md:px-0 px-6"
          alt="toolsimage"
        />

        <div>
          <h1 className="text-4xl lg:text-5xl font-bold capitalize leading-normal lg:leading-normal">
            Get all your carpentry tools in{" "}
            <span className="bg-secondary text-slate-200 px-3 py-1 italic">
              bulk amount
            </span>
          </h1>
          <p className="py-6 text-lg">
            We are the Bangladesh best tools manufacturer for carpenter in a
            very reasonable price including 7 days fast delivery. We also offer
            6 month of replacement guarantee.
          </p>
          <button className="btn btn-primary text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
