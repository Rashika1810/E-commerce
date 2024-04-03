import React, { useEffect, useState } from "react";
import FilterProduct from "./FilterProduct";
import CardSlider from "./CardSlider";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import PageLoader from "./PageLoader";

const AllProduct = () => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.category))];

  //filter data display
  const [filterby, setFilterBy] = useState("");
  const [datafilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (category) => {
    setFilterBy(category);
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };

  const loadingArrayFeature = new Array(10).fill(null);
  return (
    <>
      <div className="my-5">
        <h1 className="text-3xl font-medium text-indigo-700 mb-4">
          Shop By Category
        </h1>

        <div className=" flex gap-4 justify-center overflow-scroll scrollbar-none scroll-smooth">
          {categoryList[0] ? (
            categoryList.map((e1, index) => {
              return (
                <FilterProduct
                  key={index}
                  category={e1}
                  onClick={() => handleFilterProduct(e1)}
                />
              );
            })
          ) : (
            <div className="min-h-[150px]">
              <PageLoader />
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-4 flex-wrap justify-center ">
        {datafilter.map((el) => {
          return (
            <CardSlider
              key={el._id}
              id={el._id}
              pname={el.pname}
              category={el.category}
              price={el.price}
              image={el.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default AllProduct;
