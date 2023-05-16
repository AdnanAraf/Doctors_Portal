import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home1 from "../Home1/Home1";
import Template from "../Template/Template";
import Appointment from "../Appointment/Appointment";
import Addform from "../Addform/Addform";

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
      {
        path: "addform/:id",
        element: <Addform />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/DoctorsCollection/${params.id}`),
      },
    ],
  },
]);

export default Routes;
