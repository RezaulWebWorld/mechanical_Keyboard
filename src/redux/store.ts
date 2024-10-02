import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/cartSlice";
import { baseApi } from "./api/api";
import productSlice from "./Features/productSlice";
// ...

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  //Compolesary Middlewares For Redux Rtk Query
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
