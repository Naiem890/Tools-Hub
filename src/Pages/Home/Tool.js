import React from "react";
import { Link } from "react-router-dom";
import hammerImage from "./../../assets/image/hammer.png";

const Tool = () => {
  return (
    <div className="card bg-white card-compact card-bordered hover:shadow-lg hover:border-transparent transition-all cursor-pointer">
      <figure className="bg-base-200 min-h-72 px-8 py-6">
        <img src={hammerImage} className="object-cover" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p className="text-base text-slate-400">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions mt-2 justify-between">
          <Link to="/order" className="btn btn-primary text-white">
            Buy Now
          </Link>
          <span className="text-3xl">$123</span>
        </div>
      </div>
    </div>
  );
};

export default Tool;
