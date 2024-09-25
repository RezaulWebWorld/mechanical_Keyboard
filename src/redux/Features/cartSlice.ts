/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.15,
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      const isExist = state.products.find(
        (product: any) => product.id === action.payload.id
      );
      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.selectedItems = selectedQuantity(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectedTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
  },
});

export const selectedQuantity = (state: any) => {
  state.products.reduce((total: number, product: any) => {
    return Number(total + product.quantity);
  }, 0);
};

export const selectTotalPrice = (state: any) => {
  return state.products.reduce((total: number, product: any) => {
    return Number(total + product.quantity * product.price);
  }, 0);
};
export const selectedTax = (state: any): number =>
  selectTotalPrice(state) * state.taxRate;
export const selectGrandTotal = (state: any) => {
  const totalPrice = selectTotalPrice(state);
  const taxRate = state?.taxRate ?? 0;
  return totalPrice + totalPrice * taxRate;
};

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
