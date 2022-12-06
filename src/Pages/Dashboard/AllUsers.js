import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

import Loading from "../Shared/Loading";
import AdminModal from "./AdminModal";
import DeleteModal from "./DeleteModal";

const AllUsers = () => {
  const [user, loading] = useAuthState(auth);
  const [deleteUser, setDeleteUser] = useState(null);
  const [adminUser, setAdminUser] = useState(null);

  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery(
    "userData",
    async () =>
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
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

  const handleAdmin = async (email) => {
    console.log(email);
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.matchedCount > 0) {
          toast.success(`User: ${email} Admin added successfully`);
          setAdminUser(null);
        }
        refetch();

        console.log(data);
      });
  };

  const handleDelete = async (email) => {
    await axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/user/${email}`)
      .then(async (res) => {
        if (res.data.deletedCount) {
          toast.success(`User: ${email} deleted`);
          setDeleteUser(null);
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
        <h3 className="text-xl mt-4">All users {users.length}</h3>

        <div class="overflow-x-auto mt-4 ">
          <table class="table border-y-0 rounded-lg  table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th className="text-center">Avatar</th>
                <th>User Name</th>
                <th>Email Address</th>
                <th className="text-center">Admin</th>
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
                        <div class="w-10  rounded-full ">
                          <img src={user.photoURL} alt="" />
                        </div>
                      </div>
                    </td>
                    <td className="font-semibold">{user.displayName}</td>
                    <td>{user.email}</td>
                    <td className="text-center">
                      {user.role == "admin" ? (
                        ""
                      ) : (
                        <label
                          for="admin-modal"
                          onClick={() => setAdminUser(user)}
                          class=" modal-button btn btn-outline btn-success border-none btn-xs  bg-green-50 text-primary hover:text-white"
                        >
                          Make Admin
                        </label>
                      )}
                    </td>
                    <td className="text-center">
                      <label
                        for="delete-modal"
                        onClick={() => setDeleteUser(user)}
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
        {deleteUser && (
          <DeleteModal
            deleteUser={deleteUser}
            handleDelete={handleDelete}
          ></DeleteModal>
        )}
        {adminUser && (
          <AdminModal
            adminUser={adminUser}
            handleAdmin={handleAdmin}
          ></AdminModal>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
