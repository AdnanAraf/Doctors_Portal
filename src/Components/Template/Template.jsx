import React from "react";
import Service from "../Service/Service";

const Template = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="mt-[141px] ml-[130px]  ">
          <h1 className="text-[48px] w-[541px] font-semibold text-gray-700">
            Your New Smile Starts Here
          </h1>
          <p className="w-[605px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
        </div>
        <div>
          <img
            className="mt-[141px] mx-[60px]"
            src="https://i.ibb.co/2tvFNjV/chair-1.png"
          ></img>
        </div>
      </div>
      <Service />
    </div>
  );
};

export default Template;
