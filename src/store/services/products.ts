import Product from "models/product.model";
import service from ".";

export const productsApi = service.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<
      Product[],
      { page?: string | number; limit?: number | string | null; search?: string }
    >({
      query({ page, limit, search }) {
        return {
          url: `products?_page=${page}&_limit=${limit}&titleFa_like=${search}`,
          method: "GET",
        };
      },
      providesTags: ["Product"],
    }),
  }),
});

export const { endpoints, useGetProductsQuery } = productsApi;
