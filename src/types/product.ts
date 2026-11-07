export type ProductStatus = "active" | "archived";

export interface Product {
    id : number;
    title: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    vendor: string;
    image: string[]
    status: ProductStatus;
    createdAt: string;
    updatedAt: string;
}