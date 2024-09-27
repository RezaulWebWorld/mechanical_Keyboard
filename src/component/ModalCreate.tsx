import { useState } from "react";
import { Button } from "../components/ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ModalCreate({ onClose, onAdd }: any) {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    quantity: "",
    rating: "",
    image: "",
    brand: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const productWithId = { ...newProduct, id: Date.now() };
    onAdd(productWithId);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Add New Product</h2>

        <form className="space-y-4">
          <input
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
            placeholder="Product Name"
            className="border p-2 w-full"
          />
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="border p-2 w-full"
          />
          <input
            type="number"
            name="quantity"
            value={newProduct.quantity}
            onChange={handleInputChange}
            placeholder="Available Quantity"
            className="border p-2 w-full"
          />
          <input
            type="number"
            name="rating"
            value={newProduct.rating}
            onChange={handleInputChange}
            placeholder="Rating"
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="image"
            value={newProduct.image}
            onChange={handleInputChange}
            placeholder="Image URL"
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="brand"
            value={newProduct.brand}
            onChange={handleInputChange}
            placeholder="Brand"
            className="border p-2 w-full"
          />

          <div className="flex justify-end space-x-4">
            <Button onClick={onClose} className="bg-gray-500 text-white">
              Cancel
            </Button>
            <Button onClick={handleSubmit} className="bg-blue-500 text-white">
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
