import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "constants/config";

const service = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: config.baseUrl }),
  reducerPath: "service",
  tagTypes: ["User", "Auth","Product","General"],
  endpoints: () => ({}),
  refetchOnMountOrArgChange: false,
});

export default service;
