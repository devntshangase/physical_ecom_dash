
import { create } from "zustand";
import type { Order } from "../types/order";

interface OrderStore {
    orders: Order[];

    addOrder: (order: Omit<Order, "id" | "createdAt" | "updatedAt" | "total">) => void;

    updateOrder: (id: number, updates: Partial<Order>) => void;

    deleteOrder: (id: number) => void;

    getOrder: (id: number) => Order | undefined;

    cancelOrder: (id: number) => void;

    updatePaymentStatus: (
        id: number,
        status: Order["paymentStatus"]
    ) => void;
}

export const useOrderStore = create<OrderStore>((set, get) => ({
    orders: [  {
    id: 1,
    createdAt: '2026-11-01T09:15:00.000Z',
    updatedAt: '2026-11-01T09:15:00.000Z',
    customer: 'John Doe',
    email: 'john@example.com',
    items: [{ pid: 101, qty: 2, price: 1299.99 }],
    total: 2599.98,
    currency: 'ZAR',
    paymentStatus: 'Pending',
    status: 'Pending',
  },
  {
    id: 2,
    createdAt: '2026-11-03T13:40:00.000Z',
    updatedAt: '2026-11-04T08:00:00.000Z',
    customer: 'Thandi Nkosi',
    email: 'thandi.nkosi@example.co.za',
    items: [
      { pid: 102, qty: 1, price: 849.5 },
      { pid: 103, qty: 3, price: 149.99 },
    ],
    total: 1299.47,
    currency: 'ZAR',
    paymentStatus: 'Paid',
    status: 'Processing',
  },
  {
    id: 3,
    createdAt: '2026-10-28T16:20:00.000Z',
    updatedAt: '2026-11-02T10:30:00.000Z',
    customer: 'Sarah Miller',
    email: 'sarah.miller@example.com',
    items: [
      { pid: 105, qty: 1, price: 249 },
      { pid: 106, qty: 2, price: 35.5 },
    ],
    total: 320,
    currency: 'USD',
    paymentStatus: 'Paid',
    status: 'Fulfilled',
  },
  {
    id: 4,
    createdAt: '2026-10-30T11:05:00.000Z',
    updatedAt: '2026-10-31T09:00:00.000Z',
    customer: 'Pieter van der Merwe',
    email: 'pieter.vdm@example.co.za',
    items: [{ pid: 103, qty: 5, price: 149.99 }],
    total: 749.95,
    currency: 'ZAR',
    paymentStatus: 'Failed',
    status: 'Cancelled',
  },
  {
    id: 5,
    createdAt: '2026-10-25T07:50:00.000Z',
    updatedAt: '2026-11-05T14:10:00.000Z',
    customer: 'Luca Rossi',
    email: 'luca.rossi@example.eu',
    items: [{ pid: 102, qty: 1, price: 799 }],
    total: 799,
    currency: 'EUR',
    paymentStatus: 'Refunded',
    status: 'Fulfilled',
  }],

    addOrder: (order) => set((state) => {
        const now = new Date().toISOString();

        const total = order.items.reduce(
            (sum, item) => sum + item.price * item.qty,
            0
        );

        return {
            orders: [
                ...state.orders,
                {
                    ...order,
                    id: Date.now(),
                    total,
                    createdAt: now,
                    updatedAt: now
                }
            ]
        };
    }),

    updateOrder: (id, updates) => set((state) => ({
        orders: state.orders.map((order) =>
            order.id === id
                ? {
                    ...order,
                    ...updates,
                    id: order.id,
                    updatedAt: new Date().toISOString()
                }
                : order
        )
    })),

    deleteOrder: (id) => set((state) => ({
        orders: state.orders.filter((order) => order.id !== id)
    })),

    getOrder: (id) => get().orders.find((order) => order.id === id),

    // Cancel an order
    cancelOrder: (id) => set((state) => ({
        orders: state.orders.map((order) =>
            order.id === id
                ? {
                    ...order,
                    status: "Cancelled",
                    updatedAt: new Date().toISOString()
                }
                : order
        )
    })),

    updatePaymentStatus: (id, status) => set((state) => ({
        orders: state.orders.map((order) =>
            order.id === id
                ? {
                    ...order,
                    paymentStatus: status,
                    updatedAt: new Date().toISOString()
                }
                : order
        )
    }))
}));
