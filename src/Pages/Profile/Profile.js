import { PhotographIcon } from "@heroicons/react/outline";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  const [imageUpdating, setImageUpdating] = useState(false);
  const [defaultValue, setDefaultValue] = useState([]);

  useEffect(() => {
    fetch(`https://morning-sands-54796.herokuapp.com/user/${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDefaultValue(data));
  }, [user.email]);
  console.log("default value", defaultValue);
  if (loading || updating || imageUpdating) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    return "error ocurred: " + error?.message;
  }

  const handleUpdate = async (updatedInfo) => {
    setImageUpdating(true);

    console.log(updatedInfo);
    const profileImage = updatedInfo.profileImage[0];
    console.log(profileImage);

    let body = new FormData();
    body.set("key", "4f64d6de9449c916e1d70aba9cdc8689");
    body.append("image", profileImage);

    //for getting image bb url
    if (profileImage) {
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
          updatedInfo.photoURL = res.data.data.url;
          // console.log(res.data);
        }
        return console.log(res.data.data.url);
      });
    }
    console.log(updatedInfo);
    if (!updatedInfo.photoURL) {
      updatedInfo.photoURL = user.photoURL;
    }

    if (!updatedInfo.displayName) {
      updatedInfo.displayName = defaultValue.displayName;
    }
    if (!updatedInfo.education) {
      updatedInfo.education = defaultValue.education;
    }
    if (!updatedInfo.phoneNumber) {
      updatedInfo.phoneNumber = defaultValue.phoneNumber;
    }
    if (!updatedInfo.location) {
      updatedInfo.location = defaultValue.location;
    }

    console.log(updatedInfo);
    console.log(defaultValue);
    delete updatedInfo.profileImage;

    fetch(
      `https://morning-sands-54796.herokuapp.com/user/update/${user?.email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(updatedInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("User Information Updated");
        }
        return console.log(data);
      });
    setImageUpdating(false);
  };

  return (
    <div className="my-10 sm:mr-5 sm:px-5">
      <div className="shadow bg-white p-5">
        <h2 className="text-xl font-medium ">Profile Information</h2>
        <form action="" className="mt-4" onSubmit={handleSubmit(handleUpdate)}>
          <div className="flex items-center gap-5 flex-wrap ">
            <div className="flex gap-5 items-center mx-5 flex-wrap">
              <div class="avatar ">
                <div class="w-24 rounded-full ">
                  <img src={user.photoURL} alt="userPhoto" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold">{user.displayName}</h2>
                <p>{user.email}</p>
              </div>
            </div>
            {/* <input type="file" {...register("profileImage")} /> */}
            <div class="flex  justify-center items-center  px-4">
              <label
                for="dropzone-file"
                class="flex flex-col justify-center items-center w-full  bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer  hover:bg-gray-100 "
              >
                <div class="flex flex-col justify-center items-center m-4">
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
          <div className="grid md:grid-cols-2 gap-x-8">
            {/* flex gap-0 sm:gap-8 sm:flex-row flex-col */}
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

            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Education</span>
              </label>
              <input
                type="text"
                defaultValue={defaultValue.education}
                placeholder="Enter your institute name"
                {...register("education")}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                defaultValue={defaultValue.location}
                placeholder="Your Location"
                {...register("location")}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                defaultValue={defaultValue.phoneNumber}
                placeholder="Your Location"
                {...register("phoneNumber")}
                className="input input-bordered w-full"
              />
            </div>

            <button type="submit" className="btn self-end mt-4 block ml-auto">
              Save Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
