import Product from "models/product.model";
import service from ".";

export const productsApi = service.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Product[], { page?: number; limit?: number }>({
      query({ page, limit }) {
        return {
          url: `products?_page=${page}&_limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["Product"],
    }),
  }),
});

export const {endpoints,useGetProductsQuery}=productsApi;
