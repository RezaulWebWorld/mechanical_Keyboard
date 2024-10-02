import { Button } from "../components/ui/button";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { addAvailable, addBrand, addDescription, addImage, addPrice, addRating, addTitle, clearProduct } from "../redux/Features/productSlice";
import { useCreateProductMutation } from "../redux/api/api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ModalCreate({ onClose, onAdd }: any) {
  const dispatch=useAppDispatch()
  const {title,price,description,availableQuantity,rating,image,brand}=useAppSelector((state)=>state.product)

  const [createProduct]=useCreateProductMutation()
  

  const handleSubmit = async(e:React.FormEvent) => {
    e.preventDefault()
    console.log({title,price,description,availableQuantity,rating, image, brand})
    await createProduct({title,price,description,availableQuantity,rating, image, brand})
    dispatch(clearProduct())
  
    onAdd(false)
   
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Add New Product</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e)=> dispatch(addTitle(e.target.value))}
            placeholder="Product Name"
            className="border p-2 w-full"
          />
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e)=> dispatch(addPrice(e.target.value))}
            placeholder="Price"
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e)=> dispatch(addDescription(e.target.value))}
            placeholder="Description"
            className="border p-2 w-full"
          />
          <input
            type="number"
            name="quantity"
            value={availableQuantity}
            onChange={(e)=> dispatch(addAvailable(e.target.value),)}
            placeholder="Available Quantity"
            className="border p-2 w-full"
          />
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={(e)=> dispatch(addRating(e.target.value))}
            placeholder="Rating"
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e)=> dispatch(addImage(e.target.value))}
            placeholder="Image URL"
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="brand"
            value={brand}
            onChange={(e)=> dispatch(addBrand(e.target.value))}
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
