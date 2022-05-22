import React from "react";
import heroImage from "./../../../assets/image/hero.png";
const Hero = () => {
  return (
    <div>
      <div class="hero  bg-base-200 pt-16 pb-9">
        <div class="hero-content flex-col md:gap-20 lg:flex-row">
          <img
            src={heroImage}
            class="lg:max-w-lg sm:max-w-sm rounded-lg"
            alt="toolsimage"
          />

          <div>
            <h1 class="text-4xl lg:text-5xl font-bold capitalize leading-normal">
              Get all your carpentry tools in{" "}
              <span className="bg-secondary text-slate-200 px-3 py-1 italic">
                bulk amount
              </span>
            </h1>
            <p class="py-6 text-lg">
              We are the Bangladesh best tools manufacturer for carpenter in a
              very reasonable price including 7 days fast delivery. We also
              offer 6 month of replacement guarantee.
            </p>
            <button class="btn btn-primary text-white">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
