import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { AllProductsResponse, CategoriesResponse } from "../../types/api-types";

export const productAPI = createApi({
  reducerPath: "productApi",
  // /api/v1/user/new
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/product/`,
  }),
  endpoints: (builder) => ({
    latestProducts: builder.query<AllProductsResponse, string>({
      query: () => "latest",
    }),
    allProducts: builder.query<AllProductsResponse, string>({
      query: (id) => `admin-products?id=${id}`,
    }),
    categories: builder.query<CategoriesResponse, string>({
      query: () => `categories`,
    }),
  }),
});

export const {
  useLatestProductsQuery,
  useAllProductsQuery,
  useCategoriesQuery,
} = productAPI;