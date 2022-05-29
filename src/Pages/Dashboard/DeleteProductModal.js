import React from "react";

const DeleteProductModal = ({ deleteTool, handleProductDelete }) => {
  console.log(deleteTool);
  return (
    <div>
      {/* Modal Here */}

      <input type="checkbox" id="delete-product-modal" class="modal-toggle" />
      <label for="delete-product-modal" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <label
            for="delete-product-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold text-center">
            Are you sure you want to delete this product?
          </h3>
          <div className=" divider"></div>
          <div className="flex gap-6">
            <img
              className="w-24 h-24 object-contain"
              src={deleteTool?.imageLink}
              alt=""
            />
            <div>
              <p>
                {deleteTool?.toolName}{" "}
                <span className="font-bold">( X {deleteTool.minOrder})</span>
              </p>
              <p className="text-2xl font-bold mt-2">
                $ {deleteTool?.available}
              </p>
            </div>
          </div>
          <div class="modal-action">
            <label
              for="delete-product-modal"
              onClick={() => handleProductDelete(deleteTool?._id)}
              class="btn btn-primary text-white"
            >
              Confirm
            </label>
            <label
              for="delete-product-modal"
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

export default DeleteProductModal;
