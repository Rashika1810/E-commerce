import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
const FilterProduct = ({ category, onClick }) => {
  return (
    <div className="flex flex-col items-center my-5" onClick={onClick}>
      {/* <div className="text-3xl p-4 cursor-pointer rounded-full bg-yellow-500 hover:bg-yellow-400">
        <IoFastFoodOutline color="white" />
      </div>
      <p className=" text-center font-medium my-1 capitalize">{category}</p> */}
      <button
        type="button"
        className="text-white bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2"
      >
        {category}
      </button>
    </div>
  );
};

export default FilterProduct;
