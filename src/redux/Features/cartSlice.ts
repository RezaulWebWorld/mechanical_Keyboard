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
    // creating new order
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
    // update quantities
    updatedQuantity: (state: any, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const products = state.products.map((product: any) => {
        if (product.id === action.payload.id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
          } else if (action.payload.type === "decrement") {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            product.quantity -= 1;
          }
        }
        return product;
      });
      state.products = products.filter((product: any) => product.quantity > 0);
      state.selectedItems = selectedQuantity(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectedTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
    removedSelection: (state: any, action) => {
      state.products = state.products.filter(
        (product: any) => product.id !== action.payload.id
      );
      state.selectedItems = selectedQuantity(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectedTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
    clearCart: (state) => {
      state.products = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
      state.tax = 0;
      state.taxRate = 0.15;
      state.grandTotal = 0;
    },
  },
});

export const selectedQuantity = (state: any) => {
  return state.products.reduce((total: number, product: any) => {
    return total + product.quantity;
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

export const { addToCart, updatedQuantity, removedSelection, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
