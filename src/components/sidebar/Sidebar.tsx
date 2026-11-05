import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { BsBorderStyle } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { CiUser } from "react-icons/ci";

function Sidebar() {
  return (
    <div className='flex flex-col gap-2 w-42'>
        <div className="flex items-center gap-1.5 py-1 px-2">
            <span><IoHomeOutline /></span>Home
        </div>

        <div className="flex items-center gap-1.5 py-1 px-2">
           <span><BsBorderStyle /></span> Orders
        </div>

        <div className="flex items-center gap-1.5 py-1 px-2">
            <span><AiOutlineProduct /></span>Products
        </div>

        <div className="flex items-center gap-1.5 py-1 px-2 bg-white border border-gray-300 rounded-lg">
            <span><CiUser /></span>Customers
        </div>
    </div>
  )
}

export default Sidebar