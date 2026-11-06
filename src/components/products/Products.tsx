import React from 'react'

function Products() {
  return (
    <div className='flex flex-col flex-1'>
      <div className="flex justify-between p-2">
       <div>Products</div>
       <div className=""><button>Add Product</button></div>
      </div>

      <div className="bg-white border border-gray-300 rounded-xl py-2">
        <div className="flex gap-4 font-bold border-b border-gray-200 px-4 text-sm">
          <button>All (6)</button>
          <button>Active (5)</button>
          <button>Draft (0)</button>
          <button>Archived (1)</button>
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
              <option value="">Sort: Inventory</option>
              <option value="saab">Sort: Title</option>
              <option value="mercedes">Sort: Price</option>
            </select>
          </div>
        </div>

        <div className="flex flex-1">
          <table className="table-auto flex-1">
            <thead className='bg-gray-200'>
              <tr className='border-y border-gray-200 '>
                <th className='text-start font-semibold text-sm text-gray-500 px-4 py-2'><input type="checkbox" /></th>
                <th className='text-start font-semibold text-sm text-gray-500'>Product</th>
                <th className='text-start font-semibold text-sm text-gray-500'>Status</th>
                <th className='text-start font-semibold text-sm text-gray-500'>Inventory</th>
                <th className='text-start font-semibold text-sm text-gray-500'>Type</th>
                <th className='text-start font-semibold text-sm text-gray-500'>Vendor</th>
                <th className='text-start font-semibold text-sm text-gray-500'>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-gray-200 border-t border-gray-300'>
                <td className='font-semibold px-4 py-2 text-sm'><input type="checkbox" /></td>
                <td className='text-sm'>Walnut desk shelf</td>
                <td className='text-sm'>Active</td>
                <td className='text-sm'>Out of stock</td>
                <td className='text-sm'>Office</td>
                <td className='text-sm'>Grain Works</td>
                <td className='text-sm'>$149.00</td>
              </tr>

              <tr className='hover:bg-gray-200 border-t border-gray-300 '>
                <td className='font-semibold px-4 py-2 text-sm'><input type="checkbox" /></td>
                <td className='text-sm'>Canvas tote (2023)</td>
                <td className='text-sm'>Archived</td>
                <td className='text-sm'>3 in stock</td>
                <td className='text-sm'>Accessories</td>
                <td className='text-sm'>North Knit</td>
                <td className='text-sm'>$26.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Products