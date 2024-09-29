import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

const SuccessPage = () => {
  const navigate=useNavigate()
  const handleProductPage=()=>{
    navigate('/products')
  }

  return (
    <div>
       <img src="/src/assets/images/succesh.avif" alt="" />
       <p>Product Order Complete</p>
       <Button onClick={handleProductPage}> Go Back to Buy Product</Button>
    </div>
  );
};

export default SuccessPage;