import React from 'react'

function Home() {
  return (
    <div className='flex flex-col gap-4'>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-gray-300 rounded-xl min-w-46">
          <h3>Total Sales</h3>
          <h3>$500</h3>
        </div>

        <div className="p-2 bg-white border border-gray-300 rounded-xl">
          <h3>Orders</h3>
          <h3>5</h3>
        </div>

        <div className="p-2 bg-white border border-gray-300 rounded-xl">
          <h3>To Fulfill</h3>
          <h3>3</h3>
        </div>

        <div className="p-2 bg-white border border-gray-300 rounded-xl">
          <h3>Active Products</h3>
          <h3>5</h3>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="bg-white rounded-xl">
          <div className="border-b border-gray-300 p-2">Recent Orders</div>
          <div className="flex gap-4 p-2">
            <div className="">#1002</div>
            <div className="">Priya Nair</div>
            <div className="">Cancelled</div>
            <div className="">$102.00</div>
          </div>
        </div>
        <div className="">Inventory Alerts</div>
      </div>
    </div>
  )
}

export default Home