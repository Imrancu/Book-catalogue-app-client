import { configureStore } from "@reduxjs/toolkit";
import { apiBookAndUserSlice } from "./features/Book/apiBookSlice";

const store = configureStore({
  reducer: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    [apiBookAndUserSlice.reducerPath]: apiBookAndUserSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiBookAndUserSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
