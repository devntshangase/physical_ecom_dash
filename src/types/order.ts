export interface Order {
    id: number;
    date: string;
    customer: string;
    email: string;
    items: [{pid: number, qty: number}];
    paid: "Paid" | "Cancelled" | "Payment pending";
    fulfilled: boolean;
    cancelled: boolean
}