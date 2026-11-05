import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { BsBorderStyle } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { CiUser } from "react-icons/ci";

function SIdebar() {
  return (
    <div className='flex flex-col gap-2'>
        <div className="flex items-center gap-1.5">
            <span><IoHomeOutline /></span>Home
        </div>

        <div className="flex items-center gap-1.5">
           <span><BsBorderStyle /></span> Orders
        </div>

        <div className="flex items-center gap-1.5">
            <span><AiOutlineProduct /></span>Products
        </div>

        <div className="flex items-center gap-1.5">
            <span><CiUser /></span>Customers
        </div>
    </div>
  )
}

export default SIdebar