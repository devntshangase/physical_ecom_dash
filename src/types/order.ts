export interface Order {
    id: number;
    date: string;
    customer: string;
    email: string;
    items: Item[];
    paid: "Paid" | "Cancelled" | "Payment pending";
    fulfilled: boolean;
    cancelled: boolean
}

export interface Item {
    pid: number,
    qty: number
}