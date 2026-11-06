import React from 'react'

function Customers() {
  return (
      <div className='flex flex-col flex-1'>
        <div className="flex justify-between p-2">
        <div>Orders</div>
        </div>


        <div className="flex flex-1 bg-white border border-gray-300 rounded-xl">
          <table className="table-auto flex-1">
            <thead className='bg-gray-200'>
              <tr className='border-y border-gray-300 '>
                <th className='text-start font-semibold text-sm text-gray-500 px-4 py-2'>Name</th>
                <th className='text-start font-semibold text-sm text-gray-500'>Email</th>
                <th className='text-start font-semibold text-sm text-gray-500'>Orders</th>
                <th className='text-start font-semibold text-sm text-gray-500'>Total spend</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-gray-200 border-t border-gray-300'>
                <td className='text-sm px-4'>Kenji Watanabe</td>
                <td className='text-sm'>kenji@example.com</td>
                <td className='text-sm'>3</td>
                <td className='text-sm'>$102.00</td>
              </tr>

              <tr className='hover:bg-gray-200 border-t border-gray-300 '>
                <td className='text-sm px-4'>Liam Bennett</td>
                <td className='text-sm'>liam@example.com</td>
                <td className='text-sm'>1</td>
                <td className='text-sm'>$112.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default Customers