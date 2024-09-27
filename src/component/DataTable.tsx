/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../components/ui/button"
import { Table, TableBody, TableCaption, TableCell,TableHead, TableHeader, TableRow } from "../components/ui/table"
import { FaDeleteLeft } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import getAllProducts from "../Data/products"
import {  useState } from "react";
import UpdateProductModal from "./ModalUpdate";
import DeleteConfirmationModal from "./ModalDelete";
import ModalCreate from "./ModalCreate";


export function DataTable() {
  const [products, setProducts]=useState(getAllProducts())
  const [selectedProduct, setSelectedProduct]=useState(null)
  const [isUpdatedModalOpen, setUpdatedModalOpen]=useState(false)
  const [isDeletedModalOpen, setDeletedModalOpen]=useState(false)
  const [isNewProductModalOpen, setNewProductModalOpen]=useState(false)
  
const handleUpdateModal=(product:any)=>{
  setSelectedProduct(product)
 setUpdatedModalOpen(true)
}
  
  const handleCreateProduct=(newProducts:any)=>{
    setProducts([...products,newProducts])
  }
const handleDeleteModal=(product: any)=>{
  setSelectedProduct(product)
  setDeletedModalOpen(true)
}
  const handleUpdateData=(updatedProduct:any)=>{
    console.log(updatedProduct, "Button Clicked")
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  }
  
  const handleDeleteData=(selectedProduct:any)=>{
    console.log(selectedProduct, "Clicked")
     setProducts((prevProducts)=>
    prevProducts.filter((product)=>product.id !== selectedProduct.id))
  }

  return (
    
    <div>
      <Button
        onClick={() => setNewProductModalOpen(true)}
        className="my-4 mx-auto bg-green-500 text-white align-center"
      >
        Add New Product
      </Button>
      <Table className="mt-5 border border-red-500 container mx-auto">
      <TableCaption>A list of your recent products.</TableCaption>
      
      <TableHeader className=" ">
        <TableRow className="grid grid-cols-4   border border-blue-500">
          <TableHead className="mx-auto">Name</TableHead>
          <TableHead className="mx-auto">Price</TableHead>
          <TableHead className="mx-auto">Brand</TableHead>
          <TableHead className="mx-auto">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody >
        {products.map((product) => (
          <TableRow className="grid grid-cols-4" >
            <TableCell className="mx-auto">{product.title}</TableCell>
            <TableCell className="mx-auto">{product.price}</TableCell>
            <TableCell className="mx-auto">{product.brand}</TableCell>
            <TableCell className="grid grid-cols-2 gap-2 mx-auto">
            <Button onClick={(e)=>{e.stopPropagation();
                  handleUpdateModal(product)}}><FiEdit/></Button>
            <Button onClick={()=>handleDeleteModal(product)}><FaDeleteLeft/></Button>
              </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    {isUpdatedModalOpen && (
      <UpdateProductModal
        product={selectedProduct}
        onClose={() => setUpdatedModalOpen(false)}
        onUpdate={(updatedProduct:any) => {
          handleUpdateData(updatedProduct)
          setUpdatedModalOpen(false);
        }}
      />
    )}

    {/* Delete Confirmation Modal */}
    {isDeletedModalOpen && selectedProduct &&  (
      <DeleteConfirmationModal
        product={selectedProduct}
        onClose={() => setDeletedModalOpen(false)}
        onConfirm={()=>{handleDeleteData(selectedProduct)
          setDeletedModalOpen(false)
        }
          
        }
      />
    )}

{isNewProductModalOpen && (
        <ModalCreate
          onClose={() => setNewProductModalOpen(false)}
          onAdd={(newProduct: any) => {
            handleCreateProduct(newProduct);
            setNewProductModalOpen(false);
          }}
        />
      )}
    </div>
  )
}


