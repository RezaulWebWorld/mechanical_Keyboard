import { Button } from "@headlessui/react";
import { useNavigate } from 'react-router-dom';

const SelectedProduct = () => {
  const handleDelete=()=>{
    console.log("Clicked on Delete")
  }
  const handleCheckOut=()=>{
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const navigate=useNavigate()
      navigate('/checkout')
  }
  return (
    <div className="container p-10">
      <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Cart View</h2>
        </div>
     <table className="table-fixed grid">
      
    <thead className="border border-grey-600 grid grid-cols-1 " >
    <tr className="border border-grey-600 grid grid-cols-4 justify-items-center" >
      <th className="border border-grey-600 justify-center" >Product Title</th>
      <th className="border border-grey-600 justify-center">Quantity</th>
      <th className="border border-grey-600 justify-center">Prices</th>
      <th className="border border-grey-600  justify-center">Remove</th>
    </tr>
  </thead>
  
  <tbody className="border border-grey-600 grid grid-cols-1 ">
    <tr className="border border-grey-600 grid grid-cols-4 justify-items-center">
      <td className="border600 border-grey-">Product Name</td>
      <td className="border border-grey-600  justify-center">Keyboard</td>
      <td className="border border-grey-600 justify-center"> 120</td>
      <td className="border border-grey-600  justify-center"> <Button onClick={handleDelete}>Delete</Button></td>
    </tr>
  </tbody>
</table>
<div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Pricing Details</h2>
        </div>
     <table className="table-fixed grid">
      
    <thead className="border border-grey-600 grid grid-cols-1 " >
    <tr className="border border-grey-600 grid grid-cols-4 justify-items-center" >
      <th className="border border-grey-600 justify-center" >Product Title</th>
      <th className="border border-grey-600 justify-center">Quantity</th>
      <th className="border border-grey-600 justify-center">Prices</th>
      <th className="border border-grey-600  justify-center">Remove</th>
    </tr>
  </thead>
  
  <tbody className="border border-grey-600 grid grid-cols-1 ">
    <tr className="border border-grey-600 grid grid-cols-4 justify-items-center">
      <td className="border600 border-grey-">Product Name</td>
      <td className="border border-grey-600  justify-center">Keyboard</td>
      <td className="border border-grey-600 justify-center"> 120</td>
      <td className="border border-grey-600  justify-center"> <Button onClick={handleDelete}>Delete</Button></td>
    </tr>
  </tbody>
</table>
<thead className="border border-grey-600 grid grid-cols-1 " >
<div className="text-center mb-8">
      <button onClick={handleCheckOut} className="rounded-full border border-grey-600 p-5">Proceed To checkout</button>
        </div>
  </thead>
    </div>
  );
};

export default SelectedProduct;