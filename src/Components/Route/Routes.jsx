import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home1 from "../Home1/Home1";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home1 />,
  },
]);

export default Routes;
