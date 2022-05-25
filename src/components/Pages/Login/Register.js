import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImage from "./../../../assets/image/logo.svg";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import ButtonLoading from "../../Shared/ButtonLoading";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleRegister = (user) => {
    const { email, password } = user;
    console.log(email, password);
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="my-10">
      <div className="max-w-sm mx-auto shadow bg-white p-5 text-center">
        <img src={logoImage} alt="" className="inline-block mt-4" />
        {/* <h2 className="text-3xl font-medium mt-4">Sign In</h2> */}

        <SocialLogin></SocialLogin>

        <div class="divider">OR</div>
        <form
          className="flex flex-col gap-2 mt-4"
          onSubmit={handleSubmit(handleRegister)}
        >
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Full Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="enter name"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Email Address</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="enter email"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="enter password"
              class="input input-bordered w-full"
            />
          </div>

          {error ? (
            <p className=" text-sm text-primary">{error?.message}</p>
          ) : (
            ""
          )}

          <button type="submit" className="btn mt-3">
            {loading ? <ButtonLoading></ButtonLoading> : "Register"}
          </button>

          <p className="mt-3 text-gray-400">Already have an account?</p>
          <Link to="/login">Login Here</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
