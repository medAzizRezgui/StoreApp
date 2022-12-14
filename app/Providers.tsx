"use client";

import React from "react";
import { store } from "../redux/store";
import { Provider } from "react-redux";
// @ts-ignore
export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
