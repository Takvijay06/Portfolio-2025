import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import { links } from "../../../common/constants";

export const NavigationLinks = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <button
        className="lg:hidden p-2 rounded-md text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full lg:flex lg:w-auto lg:items-center`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-8 font-medium">
          {links.map(({ label, link }) => (
            <li key={label}>
              <NavLink
                to={link}
                onClick={() => setMenuOpen(!menuOpen)}
                className={({ isActive }) =>
                  `block py-2 px-4 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b lg:border-0 hover:bg-gray-50 lg:hover:bg-transparent`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
