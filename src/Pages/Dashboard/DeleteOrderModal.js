import React from "react";

const DeleteOrderModal = ({ deleteOrder, handleDelete }) => {
  console.log(deleteOrder);
  return (
    <div>
      {/* Modal Here */}

      <input type="checkbox" id="delete-order-modal" class="modal-toggle" />
      <label for="delete-order-modal" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <label
            for="delete-order-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold ">
            Are you sure you want to cancel this order?
          </h3>
          {/* <p className="text-xl mt-4">Order Description</p> */}
          <div className=" divider"></div>
          <div className="flex gap-6">
            <img
              className="w-24 h-24 object-contain"
              src={deleteOrder?.tool?.imageLink}
              alt=""
            />
            <div>
              <p>
                {deleteOrder?.tool?.toolName}{" "}
                <span className="font-bold">
                  ( X {deleteOrder?.orderQuantity})
                </span>
              </p>
              <p className="text-2xl font-bold mt-2">
                $ {deleteOrder?.totalBill}
              </p>
            </div>
          </div>
          <div class="modal-action">
            <label
              for="delete-order-modal"
              onClick={() => handleDelete(deleteOrder?._id)}
              class="btn btn-primary text-white"
            >
              Confirm
            </label>
            <label
              for="delete-order-modal"
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

export default DeleteOrderModal;
