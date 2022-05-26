import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
  const { imageLink, toolName, minOrder, available, price, toolDescription } =
    tool;
  return (
    <div className="card bg-white card-compact card-bordered hover:shadow-lg hover:border-transparent transition-all cursor-pointer">
      <figure className="bg-base-200 min-h-72 px-8 py-6">
        <img src={imageLink} className="object-cover" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-medium">{toolName}</h2>
        <div className="flex gap-2 text-base">
          <p className="text-info">Minimum Order: {minOrder}</p>
          <p className="text-success">Available :{available}</p>
        </div>
        <p className="text-base text-slate-400">
          {toolDescription.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
        <div className="card-actions mt-2 justify-between">
          <Link
            to={`/order/${tool._id} `}
            className="btn btn-primary text-white"
          >
            Buy Now
          </Link>

          <span className="text-3xl">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default Tool;
