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
              <th>User Name</th>
              <th>Product Name</th>
              <th>Amount</th>
              <th>Bill</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => {
              return (
                <tr className="h-14" key={order?._id}>
                  <th className="text-center">{i + 1}</th>
                  <td>{order?.userName}</td>
                  <td>{order?.tool?.toolName}</td>
                  <td>{order?.orderQuantity}</td>
                  <td>{order?.totalBill}</td>
                  <td></td>
                  <td
                    onClick={() => setDeleteOrder(order)}
                    className="text-center"
                  >
                    <label
                      for="delete-order-modal"
                      className="btn btn-outline btn-primary border-none btn-xs  bg-red-50 text-primary hover:text-white"
                    >
                      {/* <TrashIcon className="h-5 w-5 "></TrashIcon> */}
                      cancel
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
