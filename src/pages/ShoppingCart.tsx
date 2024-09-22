import SelectedProduct from '../component/SelectedProduct';

const ShoppingCart = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 my-5 ">
      <section className="border border-red-500"> <SelectedProduct/> </section>
      
    </div>
    </div>
  );
};

export default ShoppingCart;