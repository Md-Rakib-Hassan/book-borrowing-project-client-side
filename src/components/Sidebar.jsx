import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FiMenu,
  FiUpload,
  FiBook,
  FiUsers,
  FiShoppingCart,
} from "react-icons/fi";

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 text-white min-h-screen flex-shrink-0 ${
          isMinimized ? "w-16 bg-gray-700" : "w-64 bg-blue-500"
        } p-4`}
      >
        {/* Hamburger Button */}
        <div className="flex items-center gap-5">
          <button
            onClick={toggleSidebar}
            className="my-4 p-2 rounded focus:outline-none hover:bg-blue-400 text-white"
          >
            <FiMenu size={20} />
          </button>

          {!isMinimized && <h2 className="text-xl font-bold">Library</h2>}
        </div>

        <ul className={`space-y-4 ${isMinimized ? "text-center" : ""}`}>
          <li>
            <NavLink
              to="/upload-books"
              className={({ isActive }) =>
                `block p-2 rounded ${
                  isActive ? "bg-blue-400" : "hover:bg-blue-400"
                } ${
                  isMinimized ? "text-sm flex items-center justify-center" : ""
                }`
              }
            >
              {isMinimized ? <FiUpload size={20} /> : "Upload Books"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books-list"
              className={({ isActive }) =>
                `block p-2 rounded ${
                  isActive ? "bg-blue-400" : "hover:bg-blue-400"
                } ${
                  isMinimized ? "text-sm flex items-center justify-center" : ""
                }`
              }
            >
              {isMinimized ? <FiBook size={20} /> : "Books List"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-list"
              className={({ isActive }) =>
                `block p-2 rounded ${
                  isActive ? "bg-blue-400" : "hover:bg-blue-400"
                } ${
                  isMinimized ? "text-sm flex items-center justify-center" : ""
                }`
              }
            >
              {isMinimized ? <FiUsers size={20} /> : "User List"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `block p-2 rounded ${
                  isActive ? "bg-blue-400" : "hover:bg-blue-400"
                } ${
                  isMinimized ? "text-sm flex items-center justify-center" : ""
                }`
              }
            >
              {isMinimized ? <FiShoppingCart size={20} /> : "Orders"}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
