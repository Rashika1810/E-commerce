import React, { useEffect, useRef, useState } from "react";
import HomeCard from "../components/HomeCard";
import { useSelector } from "react-redux";

import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import AllProduct from "../components/AllProduct";
import CardSlider from "../components/CardSlider";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Flavors",
    "Freshness",
    "Convenience",
    "Quality",
    "Variety",
    "Ease",
    "Comfort",
    "Innovation",
    "Simplicity",
    "Joy",
    "Health",
    "Sustainability",
    "Delight",
    "Wellness",
    "Efficiency",
    "Taste",
    "Luxury",
    "Accessibility",
  ];

  const pairSize = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + pairSize) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getTextIndex = (index, offset) => {
    return (index + offset) % texts.length;
  };

  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  const homeProductCartList = productData.slice(14, 18);

  const homeProductCartListGrocery = productData.filter(
    (e1) => e1.category === "Groceries",
    []
  );

  console.log(homeProductCartListGrocery);

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextproduct = () => {
    slideProductRef.current.scrollLeft += 220;
  };
  const prevproduct = () => {
    slideProductRef.current.scrollLeft -= 220;
  };

  //filter data display

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-5 p-3 ">
        {/* right section */}
        <div className="md: w-1/2 md:p-7">
          <div className=" flex gap-3 bg-violet-300 w-36 px-2 items-center mb-4 rounded-full">
            <p className=" text-sm font-medium text-indigo-500">
              Free Delivery
            </p>
            <img
              alt="icon"
              src="https://cdn-icons-png.flaticon.com/128/4947/4947265.png"
              className="h-6"
            />
          </div>
          <p className="text-4xl md:text-5xl font-normal md:leading-normal">
            Explore a world of{" "}
            <span className="text-yellow-500 hover:text-yellow-400">
              {texts[getTextIndex(textIndex, 0)]}
            </span>
            ,{" "}
            <span className="text-green-500 hover:text-green-400">
              {texts[getTextIndex(textIndex, 1)]}
            </span>
            , and{" "}
            <span className="text-blue-500 hover:text-blue-400">
              {texts[getTextIndex(textIndex, 2)]}
            </span>
            , all in one place.
          </p>

          <div className=" flex items-center">
            <button className=" mt-5 border px-5 py-2  rounded-full font-bold text-white bg-red-500 hover:bg-red-600 cursor-pointer">
              Order Now
            </button>
          </div>
        </div>

        {/* left section */}
        <div className="md:w-1/2 flex flex-wrap gap-4 p-2 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((e1) => {
                return (
                  <HomeCard
                    id={e1._id}
                    key={e1._id}
                    image={e1.image}
                    pname={e1.pname}
                    price={e1.price}
                    category={e1.category}
                  />
                );
              })
            : loadingArray.map((e1) => {
                return <HomeCard />;
              })}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-medium text-indigo-700">Grocery Store</h1>

        <div className="flex justify-center items-center gap-2">
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
      <AllProduct />
    </div>
  );
};

export default Home;
