import type { Product } from '../types/product'
import type { Order } from '../types/order'
import type { FieldGetter } from './search'

export const productFields: FieldGetter<Product> = (p) => [p.title, p.vendor, p.category]

export const orderFields: FieldGetter<Order> = (o) => [o.id, o.customer, o.status]