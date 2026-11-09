import React from 'react'

function Orders() {
  return (
    <div className='flex flex-col flex-1'>
      <div className="flex justify-between p-2 items-center">
       <div className='font-bold text-lg'>Orders</div>
       <div className="">
        <button className='bg-black text-white px-2 py-1 rounded-lg font-semibold'>Create Order</button></div>
      </div>

      <div className="bg-white border border-gray-300 rounded-xl py-2">
        <div className="flex gap-4 font-bold border-b border-gray-200 px-4 text-sm">
          <button>All</button>
          <button>Unfulfilled</button>
          <button>Unpaid</button>
          <button>Fulfilled</button>
          <button>Cancelled</button>
        </div>

        <div className="flex px-4 py-2">
          <input 
            className="flex-1 px-2 py-1.5 rounded-lg border border-gray-300" 
            type="text" 
            placeholder='Search by order number or customer' 
          />
        </div>

        <div className="flex flex-1">
          <table className="table-auto flex-1">
            <thead className='bg-gray-200'>
              <tr className='border-y border-gray-200 '>
                <th className='text-start font-semibold text-sm text-gray-500 px-4 py-2'>Order</th>
                <th className='text-start font-semibold text-sm text-gray-500'>Date</th>
                <th className='text-start font-semibold text-sm text-gray-500'>Customer</th>
                <th className='text-start font-semibold text-sm text-gray-500'>Payment</th>
                <th className='text-start font-semibold text-sm text-gray-500'>Fulfillment</th>
                <th className='text-start font-semibold text-sm text-gray-500'>items</th>
                <th className='text-start font-semibold text-sm text-gray-500'>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-gray-200 border-t border-gray-300'>
                <td className='font-semibold px-4 py-2 text-sm'>#1006</td>
                <td className='text-sm'>Oct 25, 2026</td>
                <td className='text-sm'>Priya Nair</td>
                <td className='text-sm'>Cancelled</td>
                <td className='text-sm'></td>
                <td className='text-sm'>3</td>
                <td className='text-sm'>$102.00</td>
              </tr>

              <tr className='hover:bg-gray-200 border-t border-gray-300 '>
                <td className='font-semibold px-4 py-2 text-sm'>#1002</td>
                <td className='text-sm'>Nov 2, 2026</td>
                <td className='text-sm'>Liam Bennett</td>
                <td className='text-sm'>Payment pending</td>
                <td className='text-sm'>Unfulfilled</td>
                <td className='text-sm'>1</td>
                <td className='text-sm'>$112.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Orders