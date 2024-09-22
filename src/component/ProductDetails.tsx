
const ProductDetails = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Title / Name</h3>
         <p className="text-gray-600">Brand</p>
         <p className="text-gray-600">Available Quantity</p>
         <p className="text-gray-600">Price</p>
         <p className="text-gray-600">Rating (In Stars)</p>
         <p className="text-gray-600">Description</p>
         <button type="button">Add to cart</button>
    </div>
  );
};

export default ProductDetails;