import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: "",
  title: "",
  brand: "",
  price: "",
};
const updateSlice = createSlice({
  name: "updateProduct",
  initialState,
  reducers: {
    pickId: (state, action) => {
      state.id = action.payload;
    },
    updatedTitle: (state, action) => {
      state.title = action.payload;
    },
    updatedBrand: (state, action) => {
      state.brand = action.payload;
    },
    updatedPrice: (state, action) => {
      state.price = action.payload;
    },
    clearField: (state) => {
      state.title = "";
      state.brand = "";
      state.price = "";
    },
  },
});

export const { pickId, updatedTitle, updatedBrand, updatedPrice, clearField } =
  updateSlice.actions;

export default updateSlice.reducer;
