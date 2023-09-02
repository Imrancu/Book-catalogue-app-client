/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiBookAndUserSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://simple-book-catalog-application-5-server.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
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

    updateBook: builder.mutation({
      query: ({ bookId, bookData }) => ({
        url: `/book/${bookId}`,
        method: "PATCH",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json", // Make sure to include the Content-Type header
        },
        body: bookData, // Include the data you want to update in the request body
      }),
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
    // WishList and ReadingLis
    createBookWishlist: builder.mutation({
      query: (data) => ({
        url: "/wishlist/",
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Berar ${localStorage.getItem("accessToken")}`,
        },
        body: data,
      }),
    }),
    getBookWishlist: builder.query({
      query: (queryParams) => ({
        url: "/wishlist/",
        headers: {
          "content-type": "application/json",
          authorization: `Berar ${localStorage.getItem("accessToken")}`,
        },
        params: queryParams,
      }),
    }),

    deleteBookWishlist: builder.mutation({
      query: (id) => ({
        url: `/wishlist/${id}`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json", // Make sure to include the Content-Type header
        },
        // Include the data you want to update in the request body
      }),
    }),

    createBookReadinglist: builder.mutation({
      query: (data) => ({
        url: "/readinglist/",
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Berar ${localStorage.getItem("accessToken")}`,
        },
        body: data,
      }),
    }),

    getBookReadinglist: builder.query({
      query: (queryParams) => ({
        url: "/readinglist/",
        headers: {
          "content-type": "application/json",
          authorization: `Berar ${localStorage.getItem("accessToken")}`,
        },
        params: queryParams,
      }),
    }),
    readingBookUpdate: builder.mutation({
      query: ({ id, Status }) => ({
        url: `/readinglist/${id}`,
        method: "PATCH",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json", // Make sure to include the Content-Type header
        },
        body: Status, // Include the data you want to update in the request body
      }),
    }),

    deleteBookReading: builder.mutation({
      query: (id) => ({
        url: `/readinglist/${id}`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json", // Make sure to include the Content-Type header
        },
        // Include the data you want to update in the request body
      }),
    }),
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/book/${bookId}`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useReadingBookUpdateMutation,
  useGetBookReadinglistQuery,
  useDeleteBookMutation,
  useGetSingleBooksQuery,
  useGetBooksReviewsQuery,
  useCreateBookMutation,
  useCreateUserMutation,
  useLoginUserMutation,
  useGetBooksQuery,
  useUpdateBookMutation,
  useGetBookWishlistQuery,
  useCreateBookReviewMutation,
  useDeleteBookWishlistMutation,
  useDeleteBookReadingMutation,
  useCreateBookWishlistMutation,
  useCreateBookReadinglistMutation,
} = apiBookAndUserSlice;
