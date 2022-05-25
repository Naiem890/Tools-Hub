import React from "react";
import { Link } from "react-router-dom";
import logoImage from "./../../../assets/image/logo.svg";
import SocialLogin from "./SocialLogin";
const Login = () => {
  return (
    <div className="my-10">
      <div className="max-w-sm mx-auto shadow bg-white p-5 text-center">
        <img src={logoImage} alt="" className="inline-block mt-4" />
        {/* <h2 className="text-3xl font-medium mt-4">Sign In</h2> */}
        <SocialLogin></SocialLogin>
        <div class="divider">OR</div>
        <form action="" className="flex flex-col gap-2 mt-4">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="enter your email"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="enter your password"
              class="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="btn mt-5">
            Login
          </button>

          <p className="mt-3 text-gray-400">Don't have an account?</p>
          <Link to="/register">Create an account</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
