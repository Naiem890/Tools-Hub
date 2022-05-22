import React from "react";
import hammerImage from "./../../../assets/image/hammer.png";

const Tool = () => {
  return (
    <div>
      <div class="card card-compact card-bordered">
        <figure className="bg-base-200 min-h-72 px-8 py-6">
          <img src={hammerImage} className="object-cover" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p className="text-base text-slate-400">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div class="card-actions mt-2 justify-between">
            <button class="btn btn-primary text-white">Buy Now</button>
            <span className="text-3xl">$123</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
