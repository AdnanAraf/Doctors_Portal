import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home1 from "../Home1/Home1";
import Template from "../Template/Template";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home1 />,
    children: [
      {
        path: "/",
        element: <Template />,
      },
    ],
  },
]);

export default Routes;
