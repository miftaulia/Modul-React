import { AiOutlineUserAdd } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import { BiCartAdd } from "react-icons/bi";
import { MdDashboard, MdFastfood } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
      ${
        isActive
          ? "text-hijau bg-green-200 font-extrabold"
          : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
      }`;
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink id="menu-1" to="/" className={menuClass}>
            <MdDashboard className="me-4 text-xl" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-2" to="/orders" className={menuClass}>
            <BiCartAdd className="me-4 text-xl" />
            <span>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/customers" className={menuClass}>
            <BiDonateHeart className="me-4 text-xl" />
            <span>Customers</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-4" to="/" className={menuClass}>
            <BiCartAdd className="me-4 text-xl" />
            <span>Order List</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-5" to="/users" className={menuClass}>
            <AiOutlineUserAdd className="me-4 text-xl" />
            <span>User</span>
          </NavLink>
          <li>
            <NavLink id="menu-6" to="/products" className={menuClass}>
              <MdFastfood className="mr-4 text-xl" />
              Products
            </NavLink>
          </li>
        </li>
      </ul>
    </div>
  );
}
