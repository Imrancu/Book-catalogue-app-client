import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    bookProduct: [],
  },
  reducers: {},
});

export default bookSlice.reducer;
