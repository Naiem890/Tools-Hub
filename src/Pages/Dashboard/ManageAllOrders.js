import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { Navigate, useLocation } from "react-router-dom";
import DeleteOrderModal from "./DeleteOrderModal";

const ManageAllOrders = () => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [deleteOrder, setDeleteOrder] = useState(true);

  const {
    isLoading,
    error,
    data: orders,
    refetch,
  } = useQuery(
    "orderData",
    async () =>
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/orders/`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then(
        (res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            Navigate("/");
          }
          return res.json();
        },
        {
          enabled: false,
        }
      )
  );

  /* useEffect(() => {
    refetch();
  }, [orders, refetch]); */

  if (isLoading || loading) return <Loading></Loading>;

  if (error) {
    return "An error has occurred: " + error.message;
  }

  const handleDelete = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/order/${id}`)
      .then(async (res) => {
        if (res.data.acknowledged) {
          toast.success(`order ID: ${id} deleted`);
        }
        refetch();
        // refetch();
        return console.log(res.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h3 className="text-xl mt-4">All Orders ({orders.length})</h3>
      <div class="overflow-x-auto mt-4 ">
        <table class="table border-y-0 rounded-lg border border-separate table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Order Info</th>
              <th>Product Info</th>
              <th>Amount</th>
              <th>Bill</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => {
              return (
                <tr className="h-14" key={order?._id}>
                  <th className="text-center">{i + 1}</th>
                  <td>
                    <div>{order?.userEmail}</div>
                    <span className="text-xs">{order?._id}</span>
                  </td>
                  <td>
                    <div className="flex items-center gap-4">
                      <div class="avatar">
                        <div class="w-10  rounded-full ">
                          <img src={order?.tool?.imageLink} alt="" />
                        </div>
                      </div>
                      <div>{order?.tool?.toolName}</div>
                    </div>
                  </td>
                  <td>{order?.orderQuantity}</td>
                  <td>{order?.totalBill}$</td>
                  <td>
                    {order?.totalBill && order?.isPaid ? (
                      <span className="text-green-500 hover:bg-white">
                        Paid
                      </span>
                    ) : (
                      <span className="text-red-400 hover:bg-white">
                        Not Paid
                      </span>
                    )}
                  </td>
                  <td
                    onClick={() => setDeleteOrder(order)}
                    className="text-center"
                  >
                    <label
                      for="delete-order-modal"
                      className="btn btn-outline btn-primary border-none btn-xs  bg-red-50 text-primary hover:text-white"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {deleteOrder && (
          <DeleteOrderModal
            deleteOrder={deleteOrder}
            handleDelete={handleDelete}
          ></DeleteOrderModal>
        )}
      </div>
    </div>
  );
};

export default ManageAllOrders;
