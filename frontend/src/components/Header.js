import React, { useState } from "react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import { BsBagHeart } from "react-icons/bs";

import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  // console.log(userData);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logged Out Successfully");
  };

  const NoOfItemsInCart = useSelector((state) => state.product.cartItem);
  // console.log(process.env.REACT_APP_ADMIN_EMAIL);
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
          <nav className=" gap-4 md:gap-7 text-base md:text-lg hidden md:flex">
            <Link to={""} className="text-indigo-500 hover:text-indigo-700">
              Home
            </Link>
            <Link
              to={"menu/6606f2ce9a64f8df56e666ba"}
              className="text-indigo-500 hover:text-indigo-700"
            >
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
            <Link to={"/cart"} className="font-medium">
              <BsBagHeart />
              <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 text-sm text-center w-4 rounded-full m-0 p-0">
                {NoOfItemsInCart.length}
              </div>
            </Link>
          </div>
          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? (
                <img
                  src={userData.image}
                  alt={userData.pname}
                  className="h-full w-full"
                />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenu && (
              <div className=" flex flex-col absolute right-2 bg-violet-200  px-1 shadow drop-shadow-md min-w-[120px] text-center">
                <nav className=" text-base md:text-lg flex flex-col md:hidden">
                  <Link
                    to={""}
                    className=" px-2 text-indigo-500 hover:text-indigo-700 py-1"
                  >
                    Home
                  </Link>
                  <Link
                    to={"menu/6606f2ce9a64f8df56e666ba"}
                    className=" px-2 text-indigo-500 hover:text-indigo-700 py-1"
                  >
                    Menu
                  </Link>
                  <Link
                    to={"about"}
                    className=" px-2 text-indigo-500 hover:text-indigo-700 py-1"
                  >
                    About
                  </Link>
                  <Link
                    to={"contact"}
                    className=" px-2 text-indigo-500 hover:text-indigo-700 py-1"
                  >
                    Contact
                  </Link>
                </nav>
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"newProduct"}
                    className="whitespace-nowrap cursor-pointer text-indigo-500 py-1"
                  >
                    New Product
                  </Link>
                )}
                {userData.email ? (
                  <p
                    className="cursor-pointer  text-indigo-500 px-2"
                    onClick={handleLogout}
                  >
                    Logout <span>({userData.firstName})</span>
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer text-indigo-500 px-2"
                  >
                    Login
                  </Link>
                )}
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
