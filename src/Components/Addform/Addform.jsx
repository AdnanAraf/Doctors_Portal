import React from "react";
import { useLoaderData } from "react-router-dom";

const Addform = () => {
  const AddFormdata = useLoaderData();
  console.log(AddFormdata);

  return (
    <div>
      <div>
        <h1>{AddFormdata.title}</h1>
      </div>
    </div>
  );
};

export default Addform;
