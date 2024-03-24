import React, { useState } from "react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import { FaUserLarge, FaCartShopping } from "react-icons/fa6";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-violet-200">
      {/* desktop */}
      <div className=" flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10">
            <img src={logo} className="h-full" alt="" />
          </div>
        </Link>
        <div className=" flex items-center gap-5 md:gap-7">
          <nav className="flex gap-4 md:gap-7 text-base md:text-lg">
            <Link to={""} className="text-indigo-500 hover:text-indigo-700">
              Home
            </Link>
            <Link to={"menu"} className="text-indigo-500 hover:text-indigo-700">
              Menu
            </Link>
            <Link
              to={"about"}
              className="text-indigo-500 hover:text-indigo-700"
            >
              About
            </Link>
            <Link
              to={"contact"}
              className="text-indigo-500 hover:text-indigo-700"
            >
              Contact
            </Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <FaCartShopping />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 text-sm text-center w-4 rounded-full m-0 p-0">
              0
            </div>
          </div>
          <div className="text-lg text-slate-600" onClick={handleShowMenu}>
            <div className=" border-2 border-solid border-slate-600 p-1 rounded-full cursor-pointer">
              <FaUserLarge />
            </div>
            {showMenu && (
              <div className=" flex flex-col absolute right-2 bg-violet-200  px-1 shadow drop-shadow-md">
                <Link
                  to={"newProduct"}
                  className="whitespace-nowrap cursor-pointer text-indigo-500"
                >
                  New Product
                </Link>
                <Link
                  to={"login"}
                  className="whitespace-nowrap cursor-pointer text-indigo-500"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
