import ProductSearch from "../component/ProductSearch";
import ProductSummary from "../component/ProductSummary";


const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 ">
      <section className="border border-red-500 md:grid-cols-1"> <ProductSearch/> </section>
      <section className="border border-gray-500 md:col-span-2"> <ProductSummary/> </section>
    </div>
  );
};

export default Products;