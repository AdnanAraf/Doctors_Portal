import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home1 from "../Home1/Home1";
import Template from "../Template/Template";
import Appointment from "../Appointment/Appointment";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home1 />,
    children: [
      {
        path: "/",
        element: <Template />,
      },
      {
        path: "appiontment",
        element: <Appointment />,
      },
    ],
  },
]);

export default Routes;
