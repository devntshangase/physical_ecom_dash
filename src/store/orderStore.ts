
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
    orders: [],

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
