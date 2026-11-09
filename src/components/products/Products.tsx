import {useMemo, useState} from 'react'
import { useProductStore } from '../../store/productStore'
import ProductItem from './ProductItem'

type Tab = 'all' | 'active' | 'draft' | 'archived'
type SortKey = 'inventory' | 'title' | 'price'

const TABS: { key: Tab; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'draft', label: 'Draft' },
  { key: 'archived', label: 'Archived' },
]

const COLUMNS = ['Product', 'Status', 'Inventory', 'Type', 'Vendor', 'Price']

function Products() {
  const products = useProductStore((s) => s.products)
  const addProduct = useProductStore((s) => s.addProduct)

  const [tab, setTab] = useState<Tab>('all')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState<SortKey>('inventory')

  const counts = useMemo(() => {
    const c: Record<Tab, number> = { all: products.length, active: 0, draft: 0, archived: 0 }
    for (const p of products) {
      if (p.status in c) c[p.status as Tab]++
    }
    return c
  }, [products])

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

  const visibleProducts = useMemo(() => {
      const q = query.trim().toLowerCase()

      return products
        .filter((p) => tab === 'all' || p.status === tab)
        .filter(
          (p) =>
            !q ||
            p.title.toLowerCase().includes(q) ||
            p.vendor.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        )
        .sort((a, b) => {
          switch (sort) {
            case 'title':
              return a.title.localeCompare(b.title)
            case 'price':
              return a.price - b.price
            case 'inventory':
            default:
              return b.stock - a.stock
          }
        })
    }, [products, tab, query, sort])

    const emptyMessage =
      products.length === 0
        ? 'No products yet. Add your first product.'
        : 'No products match. Try a different search or tab.'

    const tableHeaderStyles = 'text-start font-semibold text-sm text-gray-500 py-2'

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
        <div className="flex gap-4 border-b border-gray-200 px-4 text-sm" role="tablist">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tab === key}
              onClick={() => setTab(key)}
              className={`pb-2 -mb-px border-b-2 font-semibold ${
                tab === key
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              {label} ({counts[key]})
            </button>
          ))}
        </div>

        <div className="flex px-4 py-2 gap-4">
          <input
            className="flex-1 px-2 py-1.5 rounded-lg border border-gray-300"
            type="text"
            placeholder="Search by title, vendor or type"
            aria-label="Search products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select
            className="rounded-lg border border-gray-300 px-2"
            aria-label="Sort products"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
          >
            <option value="inventory">Sort: Inventory</option>
            <option value="title">Sort: Title</option>
            <option value="price">Sort: Price</option>
          </select>
        </div>

        <div className="flex flex-1">
          <table className="table-auto flex-1">
            <thead className='bg-gray-200'>
              {products.length !== 0 ? (
                <tr className='border-y border-gray-200 '>
                  <th scope="col" className={`${tableHeaderStyles} px-4 py-2`}>
                    <input type="checkbox" aria-label="Select all products" />
                  </th>
                  {COLUMNS.map((c) => <th key={c} scope="col" className={tableHeaderStyles}>{c}</th>)}
                </tr>) : null 
              }
            </thead>
            <tbody>
              {visibleProducts.length > 0 ? (
                visibleProducts.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))
              ) : (
                <tr>
                  <td colSpan={COLUMNS.length + 1} className="text-center text-gray-500 text-sm py-10">
                    {emptyMessage}
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