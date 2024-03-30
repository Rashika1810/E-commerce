import React from "react";
import Loader from "./Loader";

const CardSlider = ({ image, pname, price, category }) => {
  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white mb-2 hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col ">
      {image ? (
        <>
          <div className="h-28 flex flex-col justify-center items-center">
            <img src={image} className="h-full" />
          </div>
          <h3 className="font-semibold text-slate-600  capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
            {pname}
          </h3>
          <p className=" text-slate-500  font-medium">{category}</p>
          <p className=" font-bold">
            <span className="text-red-500">₹ </span>
            <span>{price}</span>
          </p>
          <button className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full">
            Add To Cart
          </button>
        </>
      ) : (
        <div className="min-h-[150px]">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default CardSlider;
