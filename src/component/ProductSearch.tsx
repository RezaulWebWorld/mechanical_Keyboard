import { useState } from "react";
import getAllProducts from "../Data/products";
import ProductCart from "./ProductCart";
import { useGetProductsQuery } from "../redux/api/api";

const ProductSearch = () => {
  const {data}=useGetProductsQuery({})
  console.log(data)
  const products=getAllProducts()
  const [searchQuery, setSearchQuery]= useState('')
  const [miniPrice, setMiniPrice]= useState('')
  const [maxPrice, setMaxPrice]= useState('')
  const [sortOrder, setSortOrder]= useState<'a'|'d'|''>('')

  const sortedProducts=products.filter((product)=>product.title.toLowerCase().includes(searchQuery.toLowerCase())|| product.brand.toLowerCase().includes(searchQuery.toLowerCase())).filter((product)=> {
    const min=parseFloat(miniPrice)
    const max=parseFloat(maxPrice)
    return (!min||product.price >= min ) && (!max || product.price<= max)
  
  }).sort((a, b)=>
 {
  if(sortOrder === 'a') return a.price-b.price; 
  if(sortOrder === 'd')return b.price- a.price;
  return 0
 })

  const clearFilters=()=>{
    setSearchQuery('')
    setMiniPrice('')
    setMaxPrice('')
    setSortOrder('')
  }
  
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="grid grid-cols-1 space-y-4 p-5">
    <div>
    <div className="flex items-center space-x-2">
  <input
    type="text"
    placeholder="Search by name or brand"
    className="border p-2 rounded w-full my-2"
    value={searchQuery}
   onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>


<div className="flex space-x-4">
  <input
    type="number"
    placeholder="Min Price"
    className="border p-2 m-2 rounded w-full"
    value={miniPrice}
     onChange={(e) => setMiniPrice(e.target.value)}
  />
  <input
    type="number"
    placeholder="Max Price"
    className="border p-2 m-2 rounded w-full"
    value={maxPrice}
    onChange={(e) => setMaxPrice(e.target.value)}
  />
</div>

{/* Sort Options */}
<div className="flex space-x-4">
  <select
    value={sortOrder}
     onChange={(e) => setSortOrder(e.target.value as 'a'|'d')}
    className="border p-2 m-2 rounded w-full"
  >
    <option value="">Sort by Price</option>
    <option value="a">Low to High</option>
    <option value="d">High to Low</option>
  </select>
</div>

{/* Clear Filters Button */}
<div className="flex justify-end">
  <button
     onClick={clearFilters}
    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
  >
    Clear Filters
  </button>
</div>
    </div>



</div>
    <div className="grid grid col-span-2 space-y-4 p-5 border border-grey-600">
      {/* Display Filtered Products */}
<div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
  {sortedProducts.length > 0 ? (
    sortedProducts.map((product) => (
      <ProductCart key={product.id} product={product}/>
    ))
  ) : (
    <div>
    <img className="col-span-full text-center" src="/src/assets/images/No_Product.png"/>
    <p className="col-span-full text-center">No products found</p>
    </div>
  )}
  
</div>
</div>
    </div>
    </div>
  );
};

export default ProductSearch;