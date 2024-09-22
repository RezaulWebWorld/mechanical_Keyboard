
const ProductSearch = () => {
  
  return (
    <div>
      <div className="space-y-4 p-5">

<div className="flex items-center space-x-2">
  <input
    type="text"
    placeholder="Search by name or brand"
    className="border p-2 rounded w-full"
    value='{searchQuery}'
    // onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>


<div className="flex space-x-4">
  <input
    type="number"
    placeholder="Min Price"
    className="border p-2 rounded w-full"
    value="{minPrice}"
    // onChange={(e) => setMinPrice(e.target.value)}
  />
  <input
    type="number"
    placeholder="Max Price"
    className="border p-2 rounded w-full"
    value='{maxPrice}'
    // onChange={(e) => setMaxPrice(e.target.value)}
  />
</div>

{/* Sort Options */}
<div className="flex space-x-4">
  <select
    value="{sortOrder}"
    // onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
    className="border p-2 rounded w-full"
  >
    <option value="">Sort by Price</option>
    <option value="asc">Low to High</option>
    <option value="desc">High to Low</option>
  </select>
</div>

{/* Clear Filters Button */}
<div className="flex justify-end">
  <button
    // onClick={clearFilters}
    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
  >
    Clear Filters
  </button>
</div>

{/* Display Filtered Products */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
  {/* {filteredProducts.length > 0 ? (
    filteredProducts.map((product) => (
      <div key={product.id} className="border p-4 rounded shadow">
        <h3 className="text-lg font-bold">{product.name}</h3>
        
      </div>
    ))
  ) : (
    <p className="col-span-full text-center">No products found</p>
  )} */}
  <p>Brand: </p>
  <p>Price: </p>
</div>
</div>

    </div>
  );
};

export default ProductSearch;