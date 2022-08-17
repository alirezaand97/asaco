import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "constants/config";
import axiosBaseQuery from "utils/axiosBaseQuery";


const service = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: config.baseUrl }),
  reducerPath: "service",
  tagTypes: ["User", "Auth","Product","General"],
  endpoints: () => ({}),
  refetchOnMountOrArgChange: false,
  keepUnusedDataFor:60
});

export default service;
