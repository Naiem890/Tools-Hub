import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import FullScreenLoading from "../Shared/FullScreenLoading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51MBDH3JpssBhTbZMBUKpxfMhPcrkYR6c2U6JkPzuIRWBVl32BJdfjXXbDwDxbyuRcyhvjvcXrNt1QKb3WBXqjuu900mPH0DWa7"
);

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
      <div>Order payment for {order.tool.toolName}</div>
      <div>Order payment for {order.totalBill}</div>
      {/* {!order.isPaid && (
        <button className="btn btn-outline btn-success border-none  bg-green-50 text-primary hover:text-white">
          Pay now
        </button>
      )} */}
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      </div>
    </div>
  );
};

export default OrderPayment;
