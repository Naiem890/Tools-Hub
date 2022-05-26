import { PhotographIcon } from "@heroicons/react/outline";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const [updateProfile, updating, error1] = useUpdateProfile(auth);

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    return "error ocurred: " + error?.message;
  }

  const handleUpdate = async (updatedInfo) => {
    const profileImage = updatedInfo.profileImage[0];
    console.log(profileImage);

    let body = new FormData();
    body.set("key", "4f64d6de9449c916e1d70aba9cdc8689");
    body.append("image", profileImage);

    axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload",
      data: body,
    }).then(async (res) => {
      if (res.data.status == 200) {
        await updateProfile({
          displayName: updatedInfo.displayName,
          photoURL: res.data.data.url,
        });
        // console.log(res.data);
      }
      return console.log(res.data.data.url);
    });
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
            {/* <input type="file" {...register("profileImage")} /> */}
            <div class="flex justify-center items-center w-full pr-4">
              <label
                for="dropzone-file"
                class="flex flex-col justify-center items-center w-full  bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer  hover:bg-gray-100 "
              >
                <div class="flex flex-col justify-center items-center my-4">
                  <PhotographIcon className="h-8"></PhotographIcon>
                  <p class="text-sm text-gray-500">
                    <span class="font-semibold">Click to upload photo</span>
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  {...register("profileImage")}
                  class="hidden"
                />
              </label>
            </div>
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
