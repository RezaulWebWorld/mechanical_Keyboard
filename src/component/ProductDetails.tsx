
import { useParams } from 'react-router-dom';
import getAllProducts from '../Data/products';
import ProductDetailsCart from './ProductDetailsCart';

const ProductDetails = () => {
  const products=getAllProducts()
  const {id}=useParams()
  const product=products.find((p)=>p.id=== parseInt(id as string))
  
 
  return (
    <div>
      <div className=" my-3 grid grid-cols-1 md:grid-cols-2 gap-4">

  <div className="col-span-2 ">
  <div className="grid grid-rows-1 md:grid-rows-2 gap-4">
  <ProductDetailsCart key={product?.id} product={product}/>
  
  </div>
    </div>
 
</div>
    </div>
  );
};

export default ProductDetails;