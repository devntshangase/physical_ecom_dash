export type PaymentStatus =
    | "Pending"
    | "Paid"
    | "Failed"
    | "Refunded";

export type OrderStatus =
    | "Pending"
    | "Processing"
    | "Fulfilled"
    | "Cancelled";

export interface OrderItem {
    pid: number;
    qty: number;
    price: number;
}

export interface Order {
    id: number;
    createdAt: string;
    updatedAt: string;
    customer: string;
    email: string;
    items: OrderItem[];
    total: number;
    currency: "ZAR" | "USD" | "EUR";
    paymentStatus: PaymentStatus;
    status: OrderStatus;
}

