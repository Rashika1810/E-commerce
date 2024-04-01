import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import CardSlider from "../components/CardSlider";
// 6606f2ce9a64f8df56e666ba
const Menu = () => {
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);
  const productDisplay = productData.filter((el) => el._id === filterby)[0];
  console.log(productDisplay);
  const proimage = productDisplay.image;

  const homeProductCartListGrocery = productData.filter(
    (e1) =>
      e1.category === productDisplay.category && e1._id !== productDisplay._id,
    []
  );

  console.log(homeProductCartListGrocery);

  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextproduct = () => {
    slideProductRef.current.scrollLeft += 220;
  };
  const prevproduct = () => {
    slideProductRef.current.scrollLeft -= 220;
  };

  return (
    <div className="p-2 md:p-4 my-5">
      <div class="flex my-5 flex-col md:flex-row gap-6 w-full max-w-2xl shadow-xl hover:drop-shadow-md bg-white p-4 md:p-8 items-center m-auto">
        <div class="md:h-auto w-36">
          <img
            src={proimage}
            alt={productDisplay.pname}
            class="hover:scale-110 hover:shadow-lg w-full h-full object-cover"
          />
        </div>
        <div class="flex flex-col gap-2">
          <div class="py-1">
            <div class="text-lg md:text-2xl my-1 font-semibold capitalize text-indigo-600">
              {productDisplay.pname}
            </div>
            <div class="text-sm my-1 text-indigo-300">
              {productDisplay.category}
            </div>
          </div>
          <div class="text-red-500 font-semibold">₹ {productDisplay.price}</div>
          <div class="text-sm md:text-lg text-gray-500">
            {productDisplay.description}
          </div>
          <div class="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-5">
            <div class="flex hover:scale-105 gap-2 items-center justify-center bg-yellow-500 px-2 py-1 rounded-md cursor-pointer hover:bg-yellow-600 text-white font-bold drop-shadow-md">
              <button class="transform hover:scale-105 transition-transform duration-300">
                Add To Cart
              </button>
              <img
                src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
                class="w-6 h-6"
                alt="Add To Cart Icon"
              />
            </div>
            <div class="flex hover:scale-105 gap-2 items-center justify-center bg-red-500 px-2 py-1 rounded-md cursor-pointer hover:bg-red-600 text-white font-bold drop-shadow-md">
              <button class="transform hover:scale-105 transition-transform duration-300">
                Buy
              </button>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3684/3684620.png"
                class="w-6 h-6"
                alt="Buy Icon"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h1 className="text-3xl font-medium text-indigo-700">
          Similar Product
        </h1>

        <div className=" my-5 flex justify-center items-center gap-2">
          {homeProductCartListGrocery.length > 6 && (
            <button
              onClick={prevproduct}
              className=" bg-violet-300 hover:bg-violet-400 p-1 rounded text-lg"
            >
              <GrLinkPrevious />
            </button>
          )}

          <div
            className="flex gap-5 mt-2 overflow-scroll scrollbar-none scroll-smooth transition-all"
            ref={slideProductRef}
          >
            {homeProductCartListGrocery[0]
              ? homeProductCartListGrocery.map((e1) => {
                  return (
                    <CardSlider
                      key={e1._id}
                      id={e1._id}
                      pname={e1.pname}
                      price={e1.price}
                      image={e1.image}
                    />
                  );
                })
              : loadingArrayFeature.map((e) => {
                  return <CardSlider />;
                })}
          </div>
          {homeProductCartListGrocery.length > 6 && (
            <button
              onClick={nextproduct}
              className=" bg-violet-300 hover:bg-violet-400 p-1 rounded text-lg"
            >
              <GrLinkNext />
            </button>
          )}
        </div>
      </div>

      <div class="flex justify-end">
        <Link to={"/"}>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-full shadow-md">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
