import { MdError } from "react-icons/md"; 
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
    const menuClass = ({ isActive }) =>
      `flex cursor-pointer items-center rounded-xl p-4 space-x-2
        ${
          isActive
            ? "text-hijau bg-green-200 font-extrabold"
            : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;

    return (
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-error" className="space-y-3">
          <li>
            <NavLink id="400" to="/error/400" className={menuClass}>
              <MdError className="me-4 text-xl"  /> 
              <span>Error 400</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="401" to="/error/401" className={menuClass}>
            <MdError className="me-4 text-xl"  />               
            <span>Error 401</span>
            </NavLink>
          </li>
          <li>
            <NavLink id="403" to="/error/403" className={menuClass}>
            <MdError className="me-4 text-xl"  />               
            <span>Error 403</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
}
