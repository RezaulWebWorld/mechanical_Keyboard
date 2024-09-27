/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { useNavigate } from 'react-router-dom';
import { Button } from '@headlessui/react';
import { clearCart } from '../redux/Features/cartSlice';

const OrderSummary = () => {
  const navigate=useNavigate()
  const dispatch=useAppDispatch()
  const {selectedItems, totalPrice, tax, grandTotal}=useAppSelector((state:any)=>state.cart)
  const isDisabled= selectedItems <=0
  const handleProceedCheckout=()=>{
    navigate("/checkout")
  }
  const handleClearCart=()=>{
    dispatch(clearCart())
  }
  return (
    <div>
      <div className="shadow-lg text-center py-3 divide-y ">
      <h3 className="text-xl  md:text-3xl font-semibold mb-2"> Order Summary</h3>
           <p className="text-gray-600 text-xl py-2 md:text-2xl">Total Quantity: {selectedItems} </p>
           <p className="text-gray-600 text-xl py-2 md:text-2xl" >Total Price: {totalPrice.toFixed(1)}</p>
           <p  className="text-gray-600 text-xl py-2 md:text-2xl" id='quantity'>Tax: {tax.toFixed(1)}  </p>
           <p className="text-gray-600 text-xl py-2 md:text-2xl">GrandTotal : {grandTotal.toFixed(1)} </p>
           
  <div className='grid grid-cols-1 md:grid-cols-2'>
  <div className='text-center'><Button onClick={handleProceedCheckout} disabled={isDisabled} className= {`mx-auto mt-5 bg-blue-500 text-white px-4 py-2 rounded 
  ${!isDisabled ? `bg-blue-500 text-white hover`
 : `bg-gray-400 text-gray-200 cursor-not-allowed `}`}>   Place Order</Button></div>
  <div className='text-center'><Button onClick={handleClearCart} disabled={isDisabled} className= {`mx-auto mt-5 bg-blue-500 text-white px-4 py-2 rounded 
  ${!isDisabled ? `bg-blue-500 text-white hover`
 : `bg-gray-400 text-gray-200 cursor-not-allowed `}`}>  Clear Cart</Button></div>

  </div>
 </div>
      
    </div>
  );
};

export default OrderSummary;