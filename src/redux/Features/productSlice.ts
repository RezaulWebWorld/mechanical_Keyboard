/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: "",
  title: "",
  brand: "",
  availableQuantity: "",
  price: "",
  rating: "",
  description: "",
  isDeleted: false,
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.image = action.payload;
    },
    addTitle: (state, action) => {
      state.title = action.payload;
    },
    addBrand: (state, action) => {
      state.brand = action.payload;
    },
    addAvailable: (state, action) => {
      state.availableQuantity = action.payload;
    },
    addPrice: (state, action) => {
      state.price = action.payload;
    },
    addRating: (state, action) => {
      state.rating = action.payload;
    },
    addDescription: (state, action) => {
      state.description = action.payload;
    },
    clearProduct: (state) => {
      state.image = "";
      state.title = "";
      state.brand = "";
      state.availableQuantity = "";
      state.price = "";
      state.rating = "";
      state.description = "";
    },
  },
});

export const {
  addImage,
  addTitle,
  addBrand,
  addAvailable,
  addDescription,
  addPrice,
  addRating,
  clearProduct,
} = productSlice.actions;

export default productSlice.reducer;
