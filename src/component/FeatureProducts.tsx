/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetFeaturedProductsQuery } from "../redux/api/api";
import ProductCart from "./ProductCart";
import { useNavigate } from "react-router-dom";


const FeatureProducts = () => {
  const {data, isLoading}= useGetFeaturedProductsQuery({})
  console.log(data?.data?.data)
  const products=data?.data?.data
  const navigate=useNavigate()
  const handleMore=()=>{
    navigate('/products')
  }
  if(isLoading){
    return <p>Loading ! Please Wait</p>
  }
  return (
    <section className="py-10 my-5 bg-gray-100">
    <div className="container mx-auto px-4">
        <div className=" flex flex-col ">
        <div className="text-center mb-10 ">
        <h2 className="text-3xl font-bold mb-4">Our Featured Product</h2>
      </div>
      <div className=" 4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-gray-300">
       {/* // eslint-disable-next-line @typescript-eslint/no-explicit-any */}
       {products.map((product:any)=><ProductCart key={product.id} product={product}/>)}
       </div>
       <div className="text-center pt-6 ">
         <button onClick={handleMore} className="w-1/2 px-8 py-4 text-2xl  rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 ease-in-out">See More</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureProducts;