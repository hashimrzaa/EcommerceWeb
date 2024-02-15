import { configureStore } from "@reduxjs/toolkit";
import Count from "../Slices";

export const store = configureStore({
  reducer: Count,
});
