import React from "react";
import { useLoaderData } from "react-router-dom";

const Addform = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
};

export default Addform;
