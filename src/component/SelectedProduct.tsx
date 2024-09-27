/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAppSelector } from '../redux/hook';
import SelectedProductCart from './SelectedProductCart';
 
const SelectedProduct = () => {
  
  const products=useAppSelector((state)=>state.cart.products)
  
  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40 ">
        <div className="space-y-5 lg:mt-0 mt-5">
          {products.length ? (
            products.map((product: any) => (
              <SelectedProductCart key={product.id} product={product} />
            ))
          ) : (
            <>
            <h3 className="text-5xl text-red-500"> Not product found</h3>
            <img src='/src/assets/images/No_Product.png'className="text-2xl text-red-500"/>
            </>
          )}
        </div>
 
      </div>
    </div>
  );
};

export default SelectedProduct;