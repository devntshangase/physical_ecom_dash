import React,{useEffect, useState, useMemo} from 'react'
import { useOrderStore } from '../../store/orderStore';
import OrderItem from './OrderItem';
import { orderFields } from '../../utils/searchFields';
import { useSearch } from '../../hooks/useSearch';
import type { Order } from '../../types/order'

type Tab = 'all' | 'unfulfilled' | 'unpaid' | 'fulfilled' | 'cancelled'

const TABS: { key: Tab; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'unfulfilled', label: 'unfulfilled' },
  { key: 'unpaid', label: 'unpaid' },
  { key: 'fulfilled', label: 'fulfilled' },
  { key: 'cancelled', label: 'cancelled' },
]

const TAB_RULES: Record<Tab, (o: Order) => boolean> = {
  all: () => true,
  unfulfilled: (o) => o.status === 'Pending' || o.status === 'Processing',
  unpaid: (o) =>
    (o.paymentStatus === 'Pending' || o.paymentStatus === 'Failed') &&
    o.status !== 'Cancelled',
  fulfilled: (o) => o.status === 'Fulfilled',
  cancelled: (o) => o.status === 'Cancelled',
}

const COLUMNS = ["Order", "Date",	"Customer", "Payment",	"Fulfillment","items","Total"]

function Orders() {
  const addOrder = useOrderStore(store => store.addOrder)
  const orders = useOrderStore(store => store.orders)

  const [tab, setTab] = useState<Tab>('all')

  const counts = useMemo(() => {
    const c = {} as Record<Tab, number>
    for (const { key } of TABS) {
      c[key] = orders.filter(TAB_RULES[key]).length
    }
    return c
  }, [orders])

  const tabOrders = useMemo(
    () => orders.filter(TAB_RULES[tab]),
    [orders, tab]
  )

  const { query, setQuery, results } = useSearch(tabOrders, orderFields)

  useEffect(()=>{
      console.log(orders)
  },[orders])

  const handleCreateOrder = () => {
    addOrder({
        customer: "John Doe",
        email: "john@example.com",

        items: [
            {
                pid: 101,
                qty: 2,
                price: 1299.99
            }
        ],

        currency: "ZAR",
        paymentStatus: "Paid",
        status: "Pending"
      });
    };

     const emptyMessage =
    orders.length === 0
      ? 'No orders yet. Add your first order.'
      : 'No orders match. Try a different search or tab.'


  return (
    <div className='flex flex-col flex-1'>
      <div className="flex justify-between p-2 items-center">
       <div className='font-bold text-lg'>Orders</div>
       <div className="">
          <button 
            className='bg-black text-white px-2 py-1 rounded-lg font-semibold'
            onClick={handleCreateOrder}
            >Create Order
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-300 rounded-xl py-2">
        <div className="flex gap-4 font-bold border-b border-gray-200 px-4 text-sm">
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

        <div className="flex px-4 py-2">
          <input 
            className="flex-1 px-2 py-1.5 rounded-lg border border-gray-300" 
            type="text" 
            placeholder='Search by order number or customer' 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
      
              {results.length > 0 ? (
                results.map((order) => (
                  <OrderItem key={order.id} order={order} />
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

export default Orders