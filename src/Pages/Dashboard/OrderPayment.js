import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import FullScreenLoading from "../Shared/FullScreenLoading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const OrderPayment = () => {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: order,
  } = useQuery("order", () =>
    fetch(`${process.env.REACT_APP_BACKEND_URL}/order/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <FullScreenLoading></FullScreenLoading>;
  }

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-3 md:mr-11">
        <div className="max-w-md">
          <figure>
            <img
              src={order.tool.imageLink}
              alt={order.tool.toolName}
              className="w-full"
            />
            <figcaption className="text-sm mt-6 text-gray-400">
              Fig: {order.tool.toolName}
            </figcaption>
          </figure>
        </div>
        <div>
          <div className="mt-8 gap-6 grid grid-cols-2">
            <div>
              <div className="w-40">Order Name: </div>
              <span className="text-gray-500">{order.tool.toolName}</span>
            </div>
            <div>
              <div className="w-28">Amount: </div>
              <span className="text-gray-500">
                {order.totalBill / order.tool.price}
              </span>
            </div>
            <div>
              <div className="w-28">Order Price: </div>
              <span className="text-gray-500">{order.totalBill}$</span>
            </div>
            <div>
              <div className="w-28">Payment:</div>
              <span className="text-gray-500">
                {order.isPaid ? "Paid" : "Not Paid"}
              </span>
            </div>
          </div>
          <div className="border-b-2 my-5 border-gray-300"></div>
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
