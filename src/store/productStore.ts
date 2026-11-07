
import { create } from "zustand";
import type { Product } from "../types/product";

interface ProductStore {
    products: Product[];

    addProduct: (product: Omit<Product, "id" | "createdAt" | "updatedAt">) => void;
    updateProduct: (id: number, updates: Partial<Product>) => void;
    deleteProduct: (id: number) => void;
    getProduct: (id: number) => Product | undefined;
    updateStock: (id: number, quantity: number) => void;
    setProductStatus: (id: number, status: Product["status"]) => void;
}

export const useProductStore = create<ProductStore>((set, get) => ({
    products: [],

    addProduct: (product) => set((state) => ({
        products: [
            ...state.products,
            {
                ...product,
                id: Date.now(),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
        ]
    })),

    updateProduct: (id, updates) => set((state) => ({
        products: state.products.map((product) =>
            product.id === id
                ? {
                    ...product,
                    ...updates,
                    id: product.id,
                    updatedAt: new Date().toISOString()
                }
                : product
        )
    })),

    deleteProduct: (id) => set((state) => ({
        products: state.products.filter((product) => product.id !== id)
    })),

    getProduct: (id) => get().products.find((product) => product.id === id),

    updateStock: (id, quantity) => set((state) => ({
        products: state.products.map((product) =>
            product.id === id
                ? {
                    ...product,
                    stock: Math.max(0, product.stock + quantity),
                    updatedAt: new Date().toISOString()
                }
                : product
        )
    })),

    setProductStatus: (id, status) => set((state) => ({
        products: state.products.map((product) =>
            product.id === id
                ? {
                    ...product,
                    status,
                    updatedAt: new Date().toISOString()
                }
                : product
        )
    }))
}));
