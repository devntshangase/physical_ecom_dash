
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
    // products: [{
    //     id: 1,
    //     title: "Wireless Headphones",
    //     description: "Bluetooth headphones",
    //     price: 1299.99,
    //     stock: 20,
    //     category: "Electronics",
    //     vendor: "TechStore",
    //     images: ["/images/headphones.jpg"],
    //     status: "active",
    //     createdAt: "2026-11-01T10:00:00.000Z",
    //     updatedAt: "2026-11-01T10:00:00.000Z"
    // },
    // {
    //     id: 2,
    //     title: "Smart Watch",
    //     description: "Fitness tracking smartwatch with heart rate monitor",
    //     price: 1899.99,
    //     stock: 15,
    //     category: "Electronics",
    //     vendor: "GadgetHub",
    //     images: ["/images/smartwatch.jpg"],
    //     status: "active",
    //     createdAt: "2026-11-02T10:00:00.000Z",
    //     updatedAt: "2026-11-02T10:00:00.000Z"
    // },
    // {
    //     id: 3,
    //     title: "Gaming Mouse",
    //     description: "Ergonomic RGB gaming mouse with adjustable DPI",
    //     price: 599.99,
    //     stock: 30,
    //     category: "Electronics",
    //     vendor: "TechStore",
    //     images: ["/images/gaming-mouse.jpg"],
    //     status: "active",
    //     createdAt: "2026-11-03T10:00:00.000Z",
    //     updatedAt: "2026-11-03T10:00:00.000Z"
    // },
    // {
    //     id: 4,
    //     title: "Laptop Backpack",
    //     description: "Water-resistant backpack with a padded laptop compartment",
    //     price: 799.99,
    //     stock: 25,
    //     category: "Accessories",
    //     vendor: "BagWorld",
    //     images: ["/images/backpack.jpg"],
    //     status: "active",
    //     createdAt: "2026-11-04T10:00:00.000Z",
    //     updatedAt: "2026-11-04T10:00:00.000Z"
    // },
    // {
    //     id: 5,
    //     title: "Mechanical Keyboard",
    //     description: "RGB mechanical keyboard with responsive switches",
    //     price: 1499.99,
    //     stock: 12,
    //     category: "Electronics",
    //     vendor: "GadgetHub",
    //     images: ["/images/keyboard.jpg"],
    //     status: "active",
    //     createdAt: "2026-11-05T10:00:00.000Z",
    //     updatedAt: "2026-11-05T10:00:00.000Z"
    // }],

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
