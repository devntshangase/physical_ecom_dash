import React from 'react'
import type { Order } from '../../types/order'
import { formatDate } from '../../utils/dateFormat'

interface OrderItemProps{
    order: Order
}

const priceFormatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'ZAR',
})

function OrderItem({order}: OrderItemProps) {
  return (
    <tr className='hover:bg-gray-200 border-t border-gray-300'>
        <td className='font-semibold px-4 py-2 text-sm'>#{order.id}</td>
        <td className='text-sm'>{formatDate(order.createdAt)}</td>
        <td className='text-sm'>{order.customer}</td>
        <td className='text-sm'>{order.paymentStatus}</td>
        <td className='text-sm'>{order.status}</td>
        <td className='text-sm'>{order.items.length}</td>
        <td className='text-sm'>{priceFormatter.format(order.total)}</td>
    </tr>
  )
}

export default OrderItem