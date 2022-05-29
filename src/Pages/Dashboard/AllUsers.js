import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import Modal from "./Modal";

const AllUsers = () => {
  const [user, loading] = useAuthState(auth);
  const [deleteUser, setDeleteUser] = useState(null);
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery(
    "userData",
    async () =>
      await fetch(`http://localhost:5000/users`, {
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

  const handleDelete = async (email) => {
    await axios
      .delete(`http://localhost:5000/user/${email}`)
      .then(async (res) => {
        if (res.data.deletedCount) {
          toast.success(`User: ${email} deleted`);
        }
        refetch();
        if (deleteUser?.email == user.email) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          Navigate("/");
        }
        return console.log(res.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div>
        <h3 className="text-xl mt-4">My users</h3>

        <div class="overflow-x-auto mt-4 ">
          <table class="table border-y-0 rounded-lg  table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th className="text-center">Avatar</th>
                <th>User Name</th>
                <th>Email Address</th>
                <th>Payment</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, i) => {
                return (
                  <tr className="h-14" key={user?._id}>
                    <th className="text-center">{i + 1}</th>
                    <td className="text-center">
                      <div class="avatar">
                        <div class="w-10  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={user.photoURL} alt="" />
                        </div>
                      </div>
                    </td>
                    <td className="font-semibold">{user.displayName}</td>
                    <td>{user.email}</td>
                    <td>Payment</td>
                    <td className="text-center">
                      <label
                        for="my-modal"
                        onClick={() => setDeleteUser(user)}
                        class="btn modal-button btn btn-outline btn-primary border-none btn-xs  bg-red-50 text-primary hover:text-white"
                      >
                        Delete
                      </label>
                      {/* <button
                        onClick={() => handleDelete(user.email)}
                        className="btn btn-outline btn-primary border-none btn-xs  bg-red-50 text-primary hover:text-white"
                      >
                        Delete
                      </button> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {deleteUser && (
          <Modal deleteUser={deleteUser} handleDelete={handleDelete}></Modal>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
