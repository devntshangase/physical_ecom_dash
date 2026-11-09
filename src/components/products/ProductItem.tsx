import { memo } from 'react'
import type { Product } from '../../types/product'

interface ProductItemProps{
    product: Product;
}

const priceFormatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'ZAR',
})

const ProductItem = memo(function ProductItem({ product }: ProductItemProps) {
  return (
    <tr className='hover:bg-gray-200 border-t border-gray-300'>
        <td className='px-4 py-2 text-sm'><input type="checkbox" /></td>
        <td className='text-sm'>{product.title}</td>
        <td className='text-sm'>{product.status}</td>
        <td className='text-sm'>{product.stock}</td>
        <td className='text-sm'>{product.category}</td>
        <td className='text-sm'>{product.vendor}</td>
        <td className='text-sm'>{priceFormatter.format(product.price)}</td>
    </tr>
  )
})

export default ProductItem