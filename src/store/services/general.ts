import service from ".";

export const productsApi = service.injectEndpoints({
  endpoints: (build) => ({
    getBanners: build.query<string[], void>({
      query() {
        return {
          url: `banners`,
          method: "GET",
        };
      },
      providesTags: ["General"],
    }),
  }),
});

export const {endpoints,useGetBannersQuery}=productsApi;
