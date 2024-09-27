/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";


interface UpdateProductModalProps {
  product: any;
  onClose: () => void;
  onUpdate: (updatedProduct:any) => void;
}

const UpdateProductModal: React.FC<UpdateProductModalProps> = ({
  product,
  onClose,
  onUpdate,
}) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSubmit = () => {
    onUpdate(updatedProduct); // Trigger update in parent component
    onClose(); // Close modal
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Update Product</h2>
        <form>
          <div className="mb-3">
            <label className="block">Name:</label>
            <input
              type="text"
              name="title"
              value={updatedProduct.title}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-3">
            <label className="block">Price:</label>
            <input
              type="number"
              name="price"
              value={updatedProduct.price}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-3">
            <label className="block">Brand:</label>
            <input
              type="text"
              name="brand"
              value={updatedProduct.brand}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductModal;
