import { LineAxisOutlined } from "@mui/icons-material";
import Product from "models/product.model";
import service from ".";

export const productsApi = service.injectEndpoints({
  endpoints: (build) => ({
    
    getProducts: build.query<
      Product[],
      {
        page?: string | number;
        limit?: number | string | null;
        search?: string;
      }
    >({
      query({ page, limit, search }) {
        return {
          url: `products?_page=${page}&_limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Product", id } as const)),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
    }),
  }),
});

export const { endpoints, useGetProductsQuery } = productsApi;
