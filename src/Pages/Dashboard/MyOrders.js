import { TrashIcon } from "@heroicons/react/outline";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import axios from "axios";
import { toast } from "react-toastify";

const MyOrders = () => {
  const {
    isLoading,
    error,
    data: orders,
    refetch,
  } = useQuery("repoData", () =>
    fetch("http://localhost:5000/orders").then((res) => res.json())
  );

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (confirm) {
      await axios
        .delete(`http://localhost:5000/order/${id}`)
        .then((res) => {
          refetch();
          if (res.data.acknowledged) {
            toast.success(`order ID: ${id} deleted`);
          }
          return console.log(res.data);
        })
        .catch((error) => console.error(error));
    }

    /* fetch(`http://localhost:5000/order/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        if(data.)
      })
      .catch((error) => {
        console.error("Error:", error);
      }); */
  };

  return (
    <div>
      <h3 className="text-xl mt-4">My Orders</h3>
      <div class="overflow-x-auto mt-4 ">
        <table class="table border-y-0 rounded-lg border border-separate table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>User Name</th>
              <th>Product Name</th>
              <th>Amount</th>
              <th>Bill</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => {
              return (
                <tr className="h-14" key={order._id}>
                  <th className="text-center">{i + 1}</th>
                  <td>{order.userName}</td>
                  <td>{order.tool.toolName}</td>
                  <td>{order.orderQuantity}</td>
                  <td>{order.totalBill}</td>
                  <td>button</td>
                  <td
                    className="text-center"
                    onClick={() => handleDelete(order._id)}
                  >
                    <button className="btn btn-outline btn-primary border-none  btn-circle bg-red-50 text-primary hover:text-white">
                      <TrashIcon className="h-5 w-5 "></TrashIcon>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
