import { configureStore } from "@reduxjs/toolkit";
import bankSlice from "./bankSlice";

export const store = configureStore({
  reducer: {
    transactions: bankSlice,
  },
});
