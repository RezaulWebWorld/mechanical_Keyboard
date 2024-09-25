import { Button } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/hook';
import { addToCart } from '../redux/Features/cartSlice';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductDetailsCart = ({product}:{product:any}) => {
  const dispatch= useAppDispatch()
  const navigate= useNavigate()
 const isDisabled= product.availableQuantity <=0

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCart=()=>{

    if(isDisabled===false){
      dispatch(addToCart(product))
    navigate('/cart')
    }
   
    
  }
  return (
    <div>
    <div>
  <img src='/src/assets/images/demo_image.jpg' alt="New Image"  className=" shadow-lg w-auto h-full mx-auto object-cover rounded-md" /></div>
  <div className="shadow-lg text-center py-3 divide-y ">
  <h3 className="text-xl  md:text-3xl font-semibold mb-2">{product.title}</h3>
           <p className="text-gray-600 text-xl py-2 md:text-2xl">Brand : {product.brand}</p>
           <p className="text-gray-600 text-xl py-2 md:text-2xl" >Price: $ {product.price}</p>
           <p  className="text-gray-600 text-xl py-2 md:text-2xl" id='quantity'>Available Quantity: {product.availableQuantity} </p>
           <p className="text-gray-600 text-xl py-2 md:text-2xl">Rating:4.5 </p>
           <p className="text-gray-600 text-xl py-2 md:text-2xl">Description: This is a good keyBoard </p>
  <div className='text-center'><Button onClick={handleCart} disabled={isDisabled} className= {`mx-auto mt-5 bg-blue-500 text-white px-4 py-2 rounded 
  ${!isDisabled ? `bg-blue-500 text-white hover`
 : `bg-gray-400 text-gray-200 cursor-not-allowed `}`}> Add to cart</Button></div>
</div>
</div>
  );
};

export default ProductDetailsCart;