import ProductDetails from '../component/ProductDetails';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DetailProduct = ({id}:{id:any}) => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 ">
      <section className="border border-brown-500 md:grid-cols-1">
      <section className="border border-red-500 "> Product Image </section>
      <section className="border border-gray-500"> Add to cart Details </section>
      </section>
      <section>
      <section className="border border-gray-500 md:col-span-1"> <ProductDetails/> </section>
      </section>
  </div>
  );
};

export default DetailProduct;