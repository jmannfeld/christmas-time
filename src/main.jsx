import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Snowfall from "react-snowfall";
import Home from "./pages/Home";
import MerryChristmas from "./pages/MerryChristmas";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/MerryChristmas",
    element: <MerryChristmas />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Snowfall
      color="#e2e2e2"
      snowflakeCount={75}
      radius={[1.0, 4.0]}
      wind={[0.25, 1]}
    />
    <RouterProvider router={router} />
  </React.StrictMode>
);
