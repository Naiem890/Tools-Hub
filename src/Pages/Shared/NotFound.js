import React from "react";
import { Link } from "react-router-dom";
import notFound from "./../../assets/image/notfound.svg";

const NotFound = () => {
  return (
    <div className="container 2xl:px-20 py-3  mx-auto mt-6 mb-10 text-center">
      <img src={notFound} className="sm:max-w-lg mx-auto" alt="" />
      <Link to="/" className="btn my-6">
        Return to home
      </Link>
    </div>
  );
};

export default NotFound;
