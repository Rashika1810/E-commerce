import React from "react";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/productSlice";

const CartProduct = ({ id, pname, price, category, qty, image, total }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-violet-100 p-2 flex gap-4 border border-indigo-300">
      <div className="p-3 bg-white rounded overflow-hidden">
        <img src={image} alt={pname} className="h-28 w-48 object-cover" />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="py-1">
          <div className="flex items-center justify-between">
            <div className="text-xl md:text-base my-1 font-medium capitalize text-indigo-600">
              {pname}
            </div>
            <div
              className="text-lg text-black relative hover:text-red-500 cursor-pointer "
              onClick={() => dispatch(deleteFromCart(id))}
            >
              <RiDeleteBin6Fill />
            </div>
          </div>
          <div className="text-sm my-1 text-indigo-300">{category}</div>
        </div>

        <div className="text-red-500 font-semibold">₹ {price}</div>
        <div className="flex justify-between">
          <div className="flex flex-row items-center md:flex-row gap-1 md:gap-2 border- border-gray-500">
            <div className=" flex px-2 py-1 rounded-md cursor-pointer text-white font-bold drop-shadow-md">
              <button
                className=" bg-gray-300 p-0.5 hover:bg-blue-950 text-black"
                onClick={() => dispatch(increaseQuantity(id))}
              >
                <IoMdAdd className="hover:text-white" />
              </button>
            </div>
            <div className="font-medium text-indigo-600 text-lg">{qty}</div>
            <div className=" flex px-2 py-1 rounded-md cursor-pointer text-white font-bold drop-shadow-md">
              <button
                className=" bg-gray-300 p-0.5 hover:bg-blue-950 text-black"
                onClick={() => dispatch(decreaseQuantity(id))}
              >
                <RiSubtractFill className="hover:text-white" />
              </button>
            </div>
          </div>
          <div className="flex  gap-2 font-medium text-red-500">
            <p>Total :</p>
            <p>₹ {total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
