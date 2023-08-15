/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiBookSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/book",
    }),
    getSingleBooks: builder.query({
      query: (id) => `/book/${id}`,
    }),
  }),
});

export const { useGetBooksQuery, useGetSingleBooksQuery } = apiBookSlice;
