import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const productCartItems = useSelector((state) => state.product.cartItem);
  console.log(productCartItems);
  return (
    <div className="p-2 md:p-4">
      <h2 className="text-4xl text-center text-indigo-400 font-semibold">
        My Shopping Bag
      </h2>
      <div className=" my-4">
        {/* display of cart items */}
        <div className="w-full max-w-xl">
          {productCartItems.map((el) => {
            return (
              <CartProduct
                key={el._id}
                id={el._id}
                pname={el.pname}
                category={el.category}
                price={el.price}
                image={el.image}
                qty={el.qty}
                total={el.total}
              />
            );
          })}
        </div>
        {/* total cart items */}
        <div></div>
      </div>
    </div>
  );
};

export default Cart;
