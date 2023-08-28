/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiBookAndUserSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  refetchOnMountOrArgChange: 30,
  endpoints: (builder) => ({
    // global configuration for the api
    // refetchOnMountOrArgChange: 30,
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/create-book/",
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Berar ${localStorage.getItem("accessToken")}`,
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: bookData,
      }),
    }),

    getBooks: builder.query({
      query: (queryParams) => ({
        url: "/book/",
        // headers: {
        //   "content-type": "application/json",
        //   authorization: `Berar ${localStorage.getItem("accessToken")}`,
        // },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        params: queryParams,
      }),
    }),
    getSingleBooks: builder.query({
      query: (id) => `/book/${id}`,
    }),

    //  user login and register
    createUser: builder.mutation({
      query: (userData) => ({
        url: "/create-user/",
        method: "POST",
        // headers:authorization,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/login-user/",
        method: "POST",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: userData,
      }),
    }),
    // REVIEW
    createBookReview: builder.mutation({
      query: (reviewData) => ({
        url: "/review/",
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Berar ${localStorage.getItem("accessToken")}`,
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: reviewData,
      }),
    }),
    getBooksReviews: builder.query({
      query: (queryParams) => `/review/${queryParams}`,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBooksReviewsQuery,
  useCreateBookMutation,
  useGetSingleBooksQuery,
  useCreateUserMutation,
  useCreateBookReviewMutation,
  useLoginUserMutation,
} = apiBookAndUserSlice;
