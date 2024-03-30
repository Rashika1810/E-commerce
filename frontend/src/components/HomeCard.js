import React from "react";
import Loader from "./Loader";

const HomeCard = ({ pname, image, category, price }) => {
  return (
    <div className=" p-2 border w-40 h-44  bg-white shadow-lg text-indigo-600 flex flex-col gap-2 rounded">
      {pname ? (
        <>
          <div className=" flex justify-center">
            <img
              src={image}
              alt={pname}
              className="w-20 h-20 border-gray-300 rounded"
            />
          </div>
          <div className="bg-violet-100 shadow-lg p-1">
            <h3 className="text-center capitalize text-lg font-medium whitespace-nowrap overflow-hidden">
              {pname}
            </h3>
            <div className="flex justify-between text-sm font-normal">
              <p className="">{category}</p>
              <p className="text-red-500 font-medium">₹ {price}</p>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default HomeCard;
