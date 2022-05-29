import React from "react";

const DeleteModal = ({ deleteUser, handleDelete }) => {
  console.log(deleteUser);
  return (
    <div>
      {/* Modal Here */}

      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <label for="delete-modal" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <label
            for="delete-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold text-center">
            Are you sure you want to delete this user?
          </h3>
          <div class="pt-8 flex gap-8 items-center justify-center">
            <div class="avatar">
              <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={deleteUser.photoURL} alt="" />
              </div>
            </div>
            <div>
              <p className="text-xl">{deleteUser.displayName}</p>
              <p class="">{deleteUser.email}</p>
            </div>
          </div>
          <div class="modal-action">
            <label
              onClick={() => handleDelete(deleteUser.email)}
              class="btn btn-primary text-white"
            >
              Confirm
            </label>
            <label
              for="delete-modal"
              // onClick={() =>}
              class="btn btn-outline "
            >
              Close
            </label>
          </div>
        </label>
      </label>

      {/* Modal End */}
    </div>
  );
};

export default DeleteModal;
