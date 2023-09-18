import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import "./main.css";
import HeroInfo from "./screens/HeroInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/hero/:nameOftheHero", // Define the new route
    element: <HeroInfo />, // Use the HeroDetails component for this route
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
