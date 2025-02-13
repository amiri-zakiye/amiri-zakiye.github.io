"use client";
import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./slices/cart/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: CartSliceReducer,
    }
  });
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
