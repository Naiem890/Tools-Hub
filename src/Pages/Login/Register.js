import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImage from "./../../assets/image/logo.svg";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import ButtonLoading from "../Shared/ButtonLoading";

import axios from "axios";
import useToken from "../../hooks/useToken";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  console.log(error1);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [token] = useToken(user);

  useEffect(() => {
    if (token) {
      /* axios
        .post("http://localhost:5000/user", user)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        }); */

      navigate(from, { replace: true });
    }
  }, [from, navigate, token, updating, user]);

  const handleRegister = async (user) => {
    const { fullName, email, password } = user;
    await createUserWithEmailAndPassword(email, password);

    await updateProfile({
      displayName: fullName,
      photoURL:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    });
  };

  return (
    <div className="my-10">
      <div className="max-w-sm mx-auto shadow bg-white p-5 text-center">
        <img src={logoImage} alt="" className="inline-block mt-4" />
        {/* <h2 className="text-3xl font-medium mt-4">Sign In</h2> */}

        <SocialLogin></SocialLogin>

        <div className="divider">OR</div>
        <form
          className="flex flex-col gap-2 mt-4"
          onSubmit={handleSubmit(handleRegister)}
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              placeholder="enter full name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="enter email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="enter password"
              className="input input-bordered w-full"
            />
          </div>

          {error ? (
            <p className=" text-sm text-primary">{error?.message}</p>
          ) : (
            ""
          )}

          <button type="submit" className="btn mt-3">
            {loading || updating ? <ButtonLoading></ButtonLoading> : "Register"}
          </button>

          <p className="mt-3 text-gray-400">Already have an account?</p>
          <Link to="/login">Login Here</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
