import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type TOrder={
  name:string,
  email:string,
  phone:string,
  address:string
}
const UserForm = () => {
  const [order,setOrder]=useState<TOrder>({
    name:'',
    email:'',
    phone:'',
    address:''
  })

  const handleOrder=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setOrder({
      ...order,[e.target.value]:e.target.value
    })
    console.log(order)
  }
  const [paymentMethod, setPaymentMethod]=useState<string>('Cash On Delivery')
  const navigate=useNavigate()
  const handleSuccessPage=()=>{
    if(paymentMethod==="Cash On Delivery"){
      navigate('/success')
    }
  }
  const handleSubmit=(e: { preventDefault: () => void; })=>{
    e.preventDefault()
    if(paymentMethod==="Cash On Delivery"){
      console.log(" Go to Success")
    }
  }
  return (
      <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Enter Your Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
             value={order.name}
            onChange={handleOrder}
            className="w-full p-2 border rounded"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={order.email}
            onChange={handleOrder}
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone"
             value={order.phone}
            onChange={handleOrder}
            className="w-full p-2 border rounded"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Delivery Address</label>
          <textarea
            name="address"
            value={order.address}
            onChange={handleOrder}
            className="w-full p-2 border rounded"
            placeholder="Enter your delivery address"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Payment Method</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={paymentMethod === 'Cash on Delivery'}
                onChange={() => setPaymentMethod('Cash on Delivery')}
                className="form-radio"
              />
              <span className="ml-2">Cash on Delivery</span>
            </label>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSuccessPage}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Place Order
        </button>
      </form>
    </div>

  );
};

export default UserForm;