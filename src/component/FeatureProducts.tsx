import getAllProducts from "../Data/products";
import ProductCart from "./ProductCart";

const FeatureProducts = () => {
  const products=  getAllProducts()
  
  return (
    <section className="py-10 my-5 bg-gray-100">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Our Featured Product</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12 bg-gray-300">
      
       {products.map((product)=><ProductCart key={product.id} product={product}/>)}
      
       </div>
    </div>
    </section>
  );
};

export default FeatureProducts;