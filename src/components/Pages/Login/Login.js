import React from "react";
import { Link } from "react-router-dom";
import logoImage from "./../../../assets/image/logo.svg";
const Login = () => {
  return (
    <div className="my-10">
      <div className="max-w-sm mx-auto shadow bg-white p-5 text-center">
        <img src={logoImage} alt="" className="inline-block mt-4" />
        {/* <h2 className="text-3xl font-medium mt-4">Sign In</h2> */}
        <div className="mt-6">
          <button
            type="button"
            class="btn w-full text-black  bg-sky-100 border-none hover:bg-slate-200"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Continue with Google
          </button>
        </div>
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
