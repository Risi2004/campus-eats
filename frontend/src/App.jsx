import { Routes, Route, NavLink } from "react-router-dom";
import MenuPage from "./features/menu/pages/MenuPage";
import DishDetailPage from "./features/menu/pages/DishDetailPage";
import OrderPage from "./features/menu/pages/OrderPage";
import "./App.css";

export default function App() {
  return (
    <div>
      <nav style={{ padding: "10px 0", marginBottom: "20px" }}>
        <NavLink to="/" style={{ marginRight: "10px" }}>Menu</NavLink> |
        <NavLink to="/order" style={{ marginLeft: "10px" }}>Place Order</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/dish/:id" element={<DishDetailPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="*" element={<p>404 — Page not found</p>} />
      </Routes>
    </div>
  );
}
