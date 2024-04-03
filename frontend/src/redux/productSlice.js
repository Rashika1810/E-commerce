import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  productList: [],
  cartItem: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },
    addToCart: (state, action) => {
      const check = state.cartItem.some((el) => el._id === action.payload._id);
      console.log(check);
      if (!check) {
        const total = action.payload.price;
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total },
        ];
        toast("One item added to your bag");
      } else {
        toast("Already in your bag!");
      }
    },
    deleteFromCart: (state, action) => {
      console.log(action.payload);
      toast("One item deleted from your bag");
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      state.cartItem.splice(index, 1);
      console.log(index);

      if (state.cartItem.length === 0) {
        toast("Your Bag is empty!");
      }
    },

    increaseQuantity: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      state.cartItem[index].qty = ++qty;
      let price = state.cartItem[index].price;
      state.cartItem[index].total = price * qty;
    },
    decreaseQuantity: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      if (qty > 1) {
        state.cartItem[index].qty = --qty;
        let price = state.cartItem[index].price;
        state.cartItem[index].total = price * qty;
      }
    },
  },
});

export const {
  setDataProduct,
  addToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
} = productSlice.actions;

export default productSlice.reducer;
