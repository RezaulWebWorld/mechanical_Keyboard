/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../components/ui/button"
import { Table, TableBody, TableCaption, TableCell,TableHead, TableHeader, TableRow } from "../components/ui/table"
// import { FaDeleteLeft } from "react-icons/fa6";
// import { FiEdit } from "react-icons/fi";
import {  useState } from "react";
// import UpdateProductModal from "./ModalUpdate";
// import DeleteConfirmationModal from "./ModalDelete";
import ModalCreate from "./ModalCreate";
import {  useGetProductsQuery } from "../redux/api/api";


export function DataTable() {
  const {data,isLoading, isError}=useGetProductsQuery({})
 const initialData= data?.data?.data
  //  const [products, setProducts]=useState(initialData)
  // const [selectedProduct, setSelectedProduct]=useState(null)
  // const [isUpdatedModalOpen, setUpdatedModalOpen]=useState(false)
  // const [isDeletedModalOpen, setDeletedModalOpen]=useState(false)
  const [isNewProductModalOpen, setNewProductModalOpen]=useState(false)

// const handleUpdateModal=(product:any)=>{
//   setSelectedProduct(product)
//  setUpdatedModalOpen(true)
// }
  
  // const handleCreateProduct=async(newProducts:any)=>{
  // //  setProducts([...products,newProducts])
  // //  console.log(products)
  
    
  // }
// const handleDeleteModal=(product: any)=>{
//   setSelectedProduct(product)
//   setDeletedModalOpen(true)
// }
  // const handleUpdateData=(updatedProduct:any)=>{
  //   setProducts((prevProducts:any) =>
  //     prevProducts?.map((product:any) =>
  //       product._id === updatedProduct ? updatedProduct : product
  //     )
  //   );
  // }
  
  // const handleDeleteData=(selectedProduct:any)=>{
  //   console.log(selectedProduct, "Select Product Clicked")
  //    setProducts((prevProducts:any)=>
  //   prevProducts.filter((product:any)=>product.id !== selectedProduct.id))
  // }
  if (isLoading){
    return <p>Is Loading .....</p>
  }
  if (isError){
    return <p>Is Error .....</p>
  }
  return (
    
    <div>
      <Button
        onClick={() => setNewProductModalOpen(true)}
        className="my-4 mx-auto bg-green-500 text-white"
      >
        Add New Product
      </Button>
      <Table className="mt-5 border border-red-500 container mx-auto">
      <TableCaption>A list of Created Products</TableCaption>
      
      <TableHeader className=" ">
        <TableRow className="grid grid-cols-4   border border-blue-500">
          <TableHead className="mx-auto">Name</TableHead>
          <TableHead className="mx-auto">Price</TableHead>
          <TableHead className="mx-auto">Brand</TableHead>
          <TableHead className="mx-auto">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody >
         {initialData?.map((product:any) =><TableRow key={product._id} className="grid grid-cols-4" >
              <TableCell className="mx-auto">{product.title}</TableCell>
              <TableCell className="mx-auto">{product.price}</TableCell>
              <TableCell className="mx-auto">{product.brand}</TableCell>
              <TableCell className="grid grid-cols-2 gap-2 mx-auto">
              {/* <Button onClick={()=>
                    handleUpdateModal(product._id)}><FiEdit/></Button> 
              <Button onClick={()=>handleDeleteModal(product)}><FaDeleteLeft/>
              </Button> */}
              </TableCell>
            </TableRow> )
        } 
      </TableBody>
    </Table>
     {/* {isUpdatedModalOpen && (
      <UpdateProductModal
        product={selectedProduct}
        onClose={() => setUpdatedModalOpen(false)}
        // onUpdate={(updatedProduct:any) => {
        //   handleUpdateData(updatedProduct)
        //   setUpdatedModalOpen(false);
        // }}
      />
    )} */}

    {/* Delete Confirmation Modal */}
     {/* {isDeletedModalOpen && selectedProduct &&  (
      <DeleteConfirmationModal
        product={selectedProduct}
        onClose={() => setDeletedModalOpen(false)}
        onConfirm={()=>{handleDeleteData(selectedProduct)
          setDeletedModalOpen(false)
        }
          
        }
      />
    )}  */}

{isNewProductModalOpen && (
        <ModalCreate
          onClose={() => setNewProductModalOpen(false)}
          onAdd={(e:boolean) => {
            // handleCreateProduct(newProduct);
            setNewProductModalOpen(e);
          }}
        />
      )} 
    </div>
  )
}


