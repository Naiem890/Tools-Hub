import React from "react";
import aboutContentImg from "./../../assets/image/about-us.png";

const AboutContent = () => {
  return (
    <div className="container mx-auto 2xl:px-32 px-4 -mb-20">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center">
        <div>
          <h2 className="text-4xl mb-5 font-bold capitalize">
            Lorem ipsum dolor sit <br /> amet consectetur.
          </h2>
          <p className="text-slate-500 md:pr-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
            exercitationem sint, ipsa odit inventore minima quo officiis, culpa
            voluptatum enim aperiam cumque reprehenderit eligendi! Quis pariatur
            repellendus recusandae deserunt enim tenetur quaerat repellat
            temporibus, rerum necessitatibus eaque soluta perspiciatis porro?
          </p>
        </div>
        <div>
          <img src={aboutContentImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
