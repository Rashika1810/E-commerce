import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
const FilterProduct = ({ category, onClick }) => {
  return (
    <div className="flex flex-col items-center" onClick={onClick}>
      <div className="text-3xl p-4 cursor-pointer rounded-full bg-yellow-500 hover:bg-yellow-400">
        <IoFastFoodOutline color="white" />
      </div>
      <p className=" text-center font-medium my-1 capitalize">{category}</p>
    </div>
  );
};

export default FilterProduct;
