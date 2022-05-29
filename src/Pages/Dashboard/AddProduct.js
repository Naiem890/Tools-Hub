import { PhotographIcon } from "@heroicons/react/outline";
import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const AddProduct = () => {
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const [updatingTool, setUpdatingTool] = useState(false);
  const handleUpdate = async (updatedInfo) => {
    console.log(updatedInfo);
    const imageLink = updatedInfo.imageLink[0];
    console.log("=>", imageLink);

    let body = new FormData();
    body.set("key", "4f64d6de9449c916e1d70aba9cdc8689");
    body.append("image", imageLink);

    //for getting image bb url
    if (imageLink) {
      setUpdatingTool(true);
      axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload",
        data: body,
      }).then(async (res) => {
        if (res.data.status == 200) {
          updatedInfo.imageLink = res.data.data.url;
          console.log(updatedInfo);
          axios
            .post("https://morning-sands-54796.herokuapp.com/tool", {
              updatedInfo,
            })
            .then((res) => {
              if (res.data.insertedId) {
                toast.success("Tool Added Successfully");
                reset();
              }
              console.log(res.data);
              setUpdatingTool(false);
            })
            .catch((err) => console.error(err));
        }
        return console.log(res.data.data.url);
      });
    }
  };

  if (loading || updatingTool) {
    return <Loading></Loading>;
  }

  if (error) {
    return "error ocurred: " + error?.message;
  }
  return (
    <div className="my-10 sm:mr-5 sm:px-5">
      <div className="shadow bg-white p-5">
        <h2 className="text-xl font-medium ">Tools Information</h2>
        <form action="" className="mt-4" onSubmit={handleSubmit(handleUpdate)}>
          <div className="grid md:grid-cols-2 gap-x-8">
            {/* flex gap-0 sm:gap-8 sm:flex-row flex-col */}
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Tools Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Tools Name"
                {...register("toolName", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Tools Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Available Piece</span>
              </label>
              <input
                type="number"
                placeholder="Tools Available"
                {...register("available", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Min Order</span>
              </label>
              <input
                type="number"
                placeholder="Minmum Order"
                {...register("minOrder", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="number"
                placeholder="Tools Description"
                {...register("toolDescription", { required: true })}
                className="textarea input-bordered w-full"
              />
            </div>
            <div className="flex items-center gap-5 flex-wrap self-end">
              <div class="flex  justify-center items-center  w-full">
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
                    {...register("imageLink", { required: true })}
                    class="hidden"
                  />
                </label>
              </div>
            </div>

            <div></div>
            <button type="submit" className="btn self-end mt-4 block ml-auto">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
