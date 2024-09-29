import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/product" }),
  tagTypes: ["products", "get"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/",
      }),
      providesTags: ["products"],
    }),
    getFeaturedProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/home",
      }),
      providesTags: ["products"],
    }),
    createProduct: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/`,
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetFeaturedProductsQuery,
  useCreateProductMutation,
} = baseApi;
