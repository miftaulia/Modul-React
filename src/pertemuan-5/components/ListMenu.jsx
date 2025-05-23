import { BiDonateHeart } from "react-icons/bi"; 
import { BiCartAdd } from "react-icons/bi"; 
import { MdDashboard } from "react-icons/md";

export default function ListMenu() {
    return (
    <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <div
              id="menu-1"
              className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium 
              text-gray-600 hover:bg-green-200 hover:font-extrabold">
            <MdDashboard className="me-4 text-xl" />
            <span>Dashboard</span>
            </div>
          </li>
          <li>
            <div id="menu-2"
              className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium 
              text-gray-600 hover:bg-green-200 hover:font-extrabold">
              <BiCartAdd className="me-4 text-xl"/> 
              <span>Orders</span>
              </div>
          </li>
          <li>
            <div
              id="menu-3"
              className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium 
              text-gray-600 hover:bg-green-200 hover:font-extrabold" >
              <BiDonateHeart className="me-4 text-xl"/>
              <span>Customers</span>
              </div>
          </li>
          <li>
            <div
              id="menu-4"
              className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium 
              text-gray-600 hover:bg-green-200 hover:font-extrabold" >
               <BiCartAdd className="me-4 text-xl"/>
              <span>Order List</span>
              </div>
          </li>
        </ul>
      </div>
    )
}
