import { Button } from '@headlessui/react';
import React from 'react';

const product=5 
const ProductDetails = () => {
  const handleClick=()=>{
    console.log(" Add to Cart Successful")
  }
  return (
    <div>
      <div className=" my-3 grid grid-cols-1 md:grid-cols-2 gap-4">
 
  <div className="col-span-2 ">
  <div className="grid grid-rows-1 md:grid-rows-2 gap-4">
  <div>
  <img src='/src/assets/images/demo_image.jpg' alt="New Image"  className=" shadow-lg w-auto h-full mx-auto object-cover rounded-md" /></div>
  <div className="shadow-lg text-center py-3 divide-y ">
  <h3 className="text-xl  md:text-3xl font-semibold mb-2">Ridmik Keyboard</h3>
           <p className="text-gray-600 text-xl py-2 md:text-2xl">Brand : Hatectafsg </p>
           <p className="text-gray-600 text-xl py-2 md:text-2xl" >Price: $ 100</p>
           <p  className="text-gray-600 text-xl py-2 md:text-2xl" id='quantity'>Available Quantity: {product} </p>
           <p className="text-gray-600 text-xl py-2 md:text-2xl">Rating:4.5 </p>
           <p className="text-gray-600 text-xl py-2 md:text-2xl">Description: This is a good keyBoard </p>
  <div className='text-center'><Button onClick={handleClick} className= {`mx-auto mt-5 bg-blue-500 text-white px-4 py-2 rounded 
  ${product>0 ? 'bg-blue-500 text-white hover'
 : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}> Add to cart</Button></div>
</div>
  </div>
    </div>
 
</div>
    </div>
  );
};

export default ProductDetails;