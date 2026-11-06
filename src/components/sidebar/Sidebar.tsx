import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { BsBorderStyle } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { CiUser } from "react-icons/ci";

const links = [
  { to: "/", label: "Home", icon: <IoHomeOutline />, end: true },
  { to: "/orders", label: "Orders", icon: <BsBorderStyle /> },
  { to: "/products", label: "Products", icon: <AiOutlineProduct /> },
  { to: "/customers", label: "Customers", icon: <CiUser /> },
];

function Sidebar() {
  return (
    <nav className="flex flex-col gap-2 w-42">
      {links.map(({ to, label, icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `flex items-center gap-1.5 py-1 px-2 rounded-lg border ${
              isActive
                ? "bg-white border-gray-300 font-medium"
                : "border-transparent hover:bg-gray-300"
            }`
          }
        >
          <span>{icon}</span>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Sidebar;