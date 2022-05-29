import React from "react";

const AdminModal = ({ adminUser, handleAdmin }) => {
  console.log(adminUser);
  return (
    <div>
      {/* Modal Here */}

      <input type="checkbox" id="admin-modal" class="modal-toggle" />
      <label for="admin-modal" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <label
            for="admin-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold text-center">
            Are you sure you want to make admin?
          </h3>
          <div class="pt-8 flex gap-8 items-center justify-center">
            <div class="avatar">
              <div class="w-20 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                <img src={adminUser.photoURL} alt="" />
              </div>
            </div>
            <div>
              <p className="text-xl">{adminUser.displayName}</p>
              <p class="">{adminUser.email}</p>
            </div>
          </div>
          <div class="modal-action">
            <label
              onClick={() => handleAdmin(adminUser.email)}
              class="btn btn-success text-white"
            >
              Confirm
            </label>
            <label
              for="admin-modal"
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

export default AdminModal;
