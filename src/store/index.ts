// store.ts
import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "./slice/demoSlice";

export const store = configureStore({
  reducer: { demo: demoReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
