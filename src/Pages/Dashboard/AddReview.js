import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const AddReview = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return "error occured" + error.message;
  }

  const handleReview = (data) => {
    // console.log(data);
    const review = data;
    if (user.photoURL) {
      review.reviewerImage = user.photoURL;
    } else {
      review.reviewerImage =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    }
    console.log(review);

    axios
      .post("http://localhost:5000/review", { review })
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Review Added Successfully");
          reset();
        }
      })
      .catch((err) => console.error(err));
  };

  // console.log(user);
  return (
    <div>
      <h3 className="text-xl mt-4">Please add your valuable feedback here</h3>
      <form className="mt-6 sm:max-w-xs" onSubmit={handleSubmit(handleReview)}>
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            defaultValue={user?.displayName}
            {...register("reviewerName")}
            class="input input-bordered w-full "
          />
        </div>
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Your Email</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            defaultValue={user?.email}
            {...register("reviewerEmail")}
            class="input input-bordered w-full "
          />
        </div>
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Your Review</span>
          </label>
          <textarea
            class="textarea textarea-bordered"
            {...register("reviewText", { required: true })}
            placeholder="Write here"
          ></textarea>
        </div>
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Your Rating (1 - 5)</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            {...register("reviewRating", { max: 5, min: 1 })}
            class="input input-bordered w-full "
          />
          {errors?.reviewRating?.type === "min" && (
            <span className="text-sm text-primary">Minimum rating is 1</span>
          )}
          {errors?.reviewRating?.type === "max" && (
            <span className="text-sm text-primary">Maximum rating is 5</span>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-outline btn-success mt-4 ml-auto block"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
