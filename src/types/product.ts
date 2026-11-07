export interface Product {
    id : number;
    title: string;
    desc: string;
    price: number;
    stock: number;
    type: string;
    vendor: string;
    status: 'active' | 'archived'
}