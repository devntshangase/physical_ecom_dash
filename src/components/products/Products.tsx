import React,{useMemo} from 'react'
import { useProductStore } from '../../store/productStore'
import type { Product } from '../../types/product'
import ProductItem from './ProductItem'

function Products() {
  const products = useProductStore((s) => s.products)
  const addProduct = useProductStore((s) => s.addProduct)

  const handleAddProduct = () =>{
    addProduct({
            title: "Wireless Headphones",
            description: "Bluetooth headphones",
            price: 1299.99,
            stock: 20,
            category: "Electronics",
            vendor: "TechStore",
            images: ["/images/headphones.jpg"],
            status: "active"
    })
  }

  const counts = useMemo(() => ({
    all: products.length,
    active: products.filter((p) => p.status === 'active').length,
    draft: products.filter((p) => p.status === 'draft').length,
    archived: products.filter((p) => p.status === 'archived').length,
  }), [products])

  return (
    <div className='flex flex-col flex-1'>
      <div className="flex justify-between p-2 items-center">
       <div className='font-bold text-lg'>Products</div>
       <div className="">
        <button 
          className='bg-black text-white px-2 py-1 rounded-lg font-semibold'
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
      </div>

      <div className="bg-white border border-gray-300 rounded-xl py-2">
        <div className="flex gap-4 font-bold border-b border-gray-200 px-4 text-sm">
          <button>All ({counts.all})</button>
          <button>Active ({counts.active})</button>
          <button>Draft ({counts.draft})</button>
          <button>Archived ({counts.archived})</button>
        </div>

        <div className="flex px-4 py-2 gap-4">
          <div className="flex-1 flex">
            <input 
              className="flex-1 px-2 py-1.5 rounded-lg border border-gray-300" 
              type="text" 
              placeholder='Search by order number or customer' 
            />
          </div>

          <div className="flex">
            <select className="rounded-lg border border-gray-300 px-2" name="sort" id="sort">
              <option value="inventory">Sort: Inventory</option>
              <option value="title">Sort: Title</option>
              <option value="price">Sort: Price</option>
            </select>
          </div>
        </div>

        <div className="flex flex-1">
          <table className="table-auto flex-1">
            <thead className='bg-gray-200'>
              {products.length !== 0 ? (
                <tr className='border-y border-gray-200 '>
                  <th className='text-start font-semibold text-sm text-gray-500 px-4 py-2'><input type="checkbox" /></th>
                  <th className='text-start font-semibold text-sm text-gray-500'>Product</th>
                  <th className='text-start font-semibold text-sm text-gray-500'>Status</th>
                  <th className='text-start font-semibold text-sm text-gray-500'>Inventory</th>
                  <th className='text-start font-semibold text-sm text-gray-500'>Type</th>
                  <th className='text-start font-semibold text-sm text-gray-500'>Vendor</th>
                  <th className='text-start font-semibold text-sm text-gray-500'>Price</th>
                </tr>) : null 
              }
            </thead>
            <tbody>
              {products.length !== 0 ? (
                  products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center text-gray-500 text-sm py-10">
                      No products match. Try a different search or add a product.
                    </td>
                  </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Products