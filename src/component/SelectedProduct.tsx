/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAppSelector } from '../redux/hook';
import SelectedProductCart from './SelectedProductCart';
 
const SelectedProduct = () => {
  // const handleDelete=()=>{
  //   console.log("Clicked on Delete")
  // }
  const products=useAppSelector((state)=>state.cart.products)
  // const handleCheckOut=()=>{
  //     // eslint-disable-next-line react-hooks/rules-of-hooks
  //     const navigate=useNavigate()
  //     navigate('/checkout')
  // }
  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40 ">
        <div className="space-y-5 lg:mt-0 mt-5">
          {products.length ? (
            products.map((product: any) => (
              <SelectedProductCart key={product.id} product={product} />
            ))
          ) : (
            <p className="text-2xl text-red-500"> not product found</p>
          )}
        </div>
 
      </div>
    </div>
  );
};

export default SelectedProduct;