import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteOrderModal from "./DeleteOrderModal";
import DeleteProductModal from "./DeleteProductModal";

const AllProducts = () => {
  const [user, loading] = useAuthState(auth);
  const [deleteTool, setDeleteTool] = useState(null);

  const {
    isLoading,
    error,
    data: tools,
    refetch,
  } = useQuery(
    "toolsData",
    async () =>
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/tools`, {
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
  if (isLoading || loading) return <Loading></Loading>;

  if (error) {
    return "An error has occurred: " + error.message;
  }

  const handleProductDelete = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/tool/${id}`)
      .then(async (res) => {
        if (res.data.deletedCount) {
          toast.success(`Tools: ${id} deleted`);
          setDeleteTool(null);
        }
        refetch();
        return console.log(res.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div>
        <h3 className="text-xl mt-4">All tools {tools.length}</h3>

        <div class="overflow-x-auto mt-4 ">
          <table class="table border-y-0 rounded-lg  table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th className="text-center">Image</th>
                <th>Tool Name</th>
                <th className="text-center">Min Order</th>
                <th>Available</th>
                <th>Price Per Piece</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {tools?.map((tool, i) => {
                console.log(tool);
                return (
                  <tr className="h-14" key={tool?._id}>
                    <th className="text-center">{i + 1}</th>
                    <td className="text-center">
                      <div class="avatar">
                        <div class="w-10  rounded-full ">
                          <img src={tool.imageLink} alt="" />
                        </div>
                      </div>
                    </td>
                    <td className="font-semibold">{tool.toolName}</td>
                    <td className="text-center">{tool.minOrder}</td>
                    <td className="text-center">{tool.available}</td>
                    <td className="text-center">{tool.price}</td>
                    <td className="text-center">
                      <label
                        for="delete-product-modal"
                        onClick={() => setDeleteTool(tool)}
                        class=" modal-button btn btn-outline btn-primary border-none btn-xs  bg-red-50 text-primary hover:text-white"
                      >
                        Delete
                      </label>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {deleteTool && (
          <DeleteProductModal
            deleteTool={deleteTool}
            handleProductDelete={handleProductDelete}
          ></DeleteProductModal>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
