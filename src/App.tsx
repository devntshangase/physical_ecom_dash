import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./components/home/Home";
import Orders from "./components/orders/Orders";
import Products from "./components/products/Products";
import Customers from "./components/customers/Customers";

function App() {

  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="customers" element={<Customers />} />
      </Route>
    </Routes>
  )
}

export default App
