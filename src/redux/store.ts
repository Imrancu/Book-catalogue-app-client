import { configureStore } from "@reduxjs/toolkit";
import { apiBookSlice } from "./features/Book/apiBookSlice";

const store = configureStore({
  reducer: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    [apiBookSlice.reducerPath]: apiBookSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    getDefaultMiddleware().concat(apiBookSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
