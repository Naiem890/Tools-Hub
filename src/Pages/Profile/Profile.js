import React from "react";

const Profile = () => {
  return (
    <div className="my-10 mx-5 sm:mx-0">
      <div className="sm:max-w-md  mx-auto shadow bg-white p-5">
        <h2 className="text-xl font-medium">Profile Information</h2>
        <form action="" className="mt-4">
          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              value={"solaiman.naiem890@gmail.com"}
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
              defaultValue={"Solaiman Islam Naiem"}
              className="input input-bordered w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
