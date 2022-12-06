import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import FullScreenLoading from "../Shared/FullScreenLoading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
const Order = () => {
  const { id: productId } = useParams();

  const {
    isLoading,
    error,
    data: tool,
  } = useQuery("tool", () =>
    fetch(`${process.env.REACT_APP_BACKEND_URL}/tool/${productId}`).then((res) => res.json())
  );

  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const order = {
      userName: user.displayName,
      userEmail: user.email,
      phoneNumber: data.phoneNumber,
      tool,
      orderQuantity: data.orderQuantity,
      orderAddress: data.orderAddress,
      totalBill: data.orderQuantity * tool.price,
      isPaid: false,
    };
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/order`, { order })
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success(
            "Order Placed Successfully. Visit my order page for payment"
          );
          reset();
        }
      })
      .catch((err) => console.error(err));
  };

  if (isLoading) {
    return <FullScreenLoading></FullScreenLoading>;
  }

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="container 2xl:px-20 px-4  mx-auto my-6">
      <div className="border bg-white flex md:flex-row flex-col p-4 md:p-9 gap-6 lg:gap-10">
        <div className="lg:w-1/3 w-full">
          <div className="">
            <img
              src={tool.imageLink}
              className="xl:max-w-sm bg-slate-100 px-5 py-4 md:px-8  md:py-8"
              alt=""
            />
          </div>
          <h3 className="text-xl font-medium mt-6">{tool.toolName}</h3>
          <p className="text-xl mt-3 -mb-2 font-medium text-slate-500">
            Price/Piece: ${tool.price}
          </p>
          <div className="divider xl:max-w-sm -mb-3"></div>

          <div className="mt-3 flex justify-between gap-1 flex-wrap font-medium text-lg xl:max-w-sm">
            <p className="text-info">Min Order: {tool.minOrder} pc </p>
            <p className="text-success">Available: {tool.available} pc </p>
          </div>
          <div className="divider xl:max-w-sm mt-1 mb-0"></div>

          <p className="text-gray-500 mt-3">{tool.toolDescription}</p>
        </div>
        <div className="lg:w-2/3 w-full">
          <h2 className="text-2xl md:text-3xl">
            Complete Your Order Information
          </h2>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-3 lg:gap-6 lg:flex-row flex-col">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  value={user.displayName}
                  disabled
                  className="input input-bordered bg-slate-50 w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="input input-bordered bg-slate-50 w-full"
                />
              </div>
            </div>
            <div className="flex gap-3 lg:gap-6 lg:flex-row flex-col mt-2">
              <div className="form-control w-full relative">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  {...register("phoneNumber", {
                    required: true,
                    minLength: 11,
                    maxLength: 11,
                  })}
                  className="input input-bordered bg-slate-50 w-full"
                />
                <p className="text-primary text-xs absolute top-full translate-y-1">
                  {errors.phoneNumber && `Enter valid phone number of 11 digit`}
                </p>
              </div>
              <div className="form-control w-full relative">
                <label className="label">
                  <span className="label-text">Order Quantity</span>
                </label>
                <input
                  type="number"
                  defaultValue={tool.minOrder}
                  {...register("orderQuantity", {
                    min: tool.minOrder,
                    max: tool.available,
                  })}
                  className="input input-bordered bg-slate-50 w-full"
                />
                <p className="text-primary text-xs absolute top-full translate-y-1">
                  {errors.orderQuantity?.type === "min" &&
                    `Minimum order amount : ${tool.minOrder} piece`}
                  {errors.orderQuantity?.type === "max" &&
                    `Maximum available order : ${tool.available} piece`}
                </p>
              </div>
            </div>

            <div className="flex gap-2 lg:gap-6 lg:flex-row flex-col mt-2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Enter Delivery Address</span>
                </label>
                <textarea
                  className="textarea bg-slate-50 textarea-bordered"
                  placeholder="Example: 1382 Plainfield Avenue, Syracuse, New York"
                  {...register("orderAddress", { required: true })}
                ></textarea>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex gap-4 flex-wrap mt-2 justify-between items-center">
              <div className="flex items-center gap-2">
                <p className="text-xl">
                  Total Price:{" "}
                  <span className="font-medium">
                    {" "}
                    $
                    {watch("orderQuantity") === undefined
                      ? tool.minOrder * tool.price
                      : watch("orderQuantity") * tool.price}
                  </span>
                </p>
              </div>
              <button type="submit" className="btn btn-primary text-white">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
