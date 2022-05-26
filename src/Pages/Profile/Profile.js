import { PhotographIcon } from "@heroicons/react/outline";
import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return "error ocurred: " + error.message;
  }

  const handleUpdate = async (updatedInfo) => {
    console.log(updatedInfo);

    const profileImage = updatedInfo.profileImage[0];
    console.log(profileImage);
    const formData = new FormData();
    formData.append("profileImage", profileImage);

    const api_key = "4f64d6de9449c916e1d70aba9cdc8689";
    await fetch(`https://api.imgbb.com/1/upload?key=${api_key}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    /* await axios
      .post(
        `https://api.imgbb.com/1/upload?key=2e98b583f59c2b8eb6abdd2106835d68`,
        formData
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error)); */
  };

  return (
    <div className="my-10 mx-5 sm:mx-0">
      <div className="sm:max-w-md  mx-auto shadow bg-white p-5">
        <h2 className="text-xl font-medium ">Profile Information</h2>
        <form action="" className="mt-4" onSubmit={handleSubmit(handleUpdate)}>
          <div className="flex items-center gap-5 ">
            <div class="avatar ">
              <div class="w-24 rounded-full ">
                <img src={user.photoURL} alt="userPhoto" />
              </div>
            </div>
            <input type="file" {...register("profileImage")} />
            {/* <div class="flex justify-center items-center w-full pr-4">
              <label
                for="dropzone-file"
                class="flex flex-col justify-center items-center w-full  bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col justify-center items-center my-4">
                  <PhotographIcon className="h-8"></PhotographIcon>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload photo</span>
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  {...register("profileImage")}
                  class=""
                />
              </label>
            </div> */}
          </div>

          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              value={user?.email}
              disabled
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              defaultValue={user.displayName}
              {...register("displayName")}
              className="input input-bordered w-full"
            />
          </div>
          <button className="btn mt-4 block ml-auto">Save Info</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
