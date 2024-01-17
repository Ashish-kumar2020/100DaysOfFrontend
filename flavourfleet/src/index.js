import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";

import App, { AppRouter } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter}>
    <App />
  </RouterProvider>
);
