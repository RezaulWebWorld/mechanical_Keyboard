/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';


const ProductCart = ({product}:{product:any}) => {
  
  const navigate=useNavigate()

  
    const handleDetails=()=>{
       navigate(`/details/${product.id}`)
    }
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg text-center">
           <img className="w-full h-64 object-cover" src={product.image} alt={product.title} />
           <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
           <p className="text-gray-600">Brand : {product.brand}</p>
           <p className="text-gray-600">Price: {product.price}</p>
           <p className="text-gray-600">Available Quantity: {product.availableQuantity}</p>
           <p className="text-gray-600">Rating: {product.rating}</p>
           <button onClick={handleDetails} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded 
                       text-sm sm:text-base md:text-xs lg:text-xl 
                       transition-all duration-300 ease-in-out">See Details
    </button>
          
         </div>
         
        
  );
};

export default ProductCart;