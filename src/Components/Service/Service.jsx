import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Service = () => {
  return (
    <div>
      <div className="mt-[100px]">
        <h1 className="text-[#19D3AE] font-bold text-center">OUR SERVICES</h1>
        <h2 className="text-center text-[30px] font-semibold">
          Services We Provide
        </h2>
      </div>
      <div className="grid grid-cols-3  gap-10 m-[50px] mx-[200px]">
        <div className="h-[300px] w-[300px] shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-lg">
          <img
            className="h-[100px] w-[100px] m-auto mt-[20px]"
            src="https://i.ibb.co/4PmFmg7/fluoride-1.png"
          ></img>
          <h1 className="text-center mt-[5px] font-semibold">
            Fluoride Treatment
          </h1>
          <p className="text-center mt-[10px]">
            Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
            has been the
          </p>
        </div>
        <div className="h-[300px] w-[300px] shadow-lg transition ease-in-out delay-150 b hover:-translate-y-1 hover:scale-110 hover:bg- duration-300 rounded-lg">
          <img
            className="h-[100px] w-[100px]  m-auto mt-[20px]"
            src="https://i.ibb.co/4PmFmg7/fluoride-1.png"
          ></img>
          <h1 className="text-center mt-[5px] font-semibold">Cavity Filling</h1>
          <p className="text-center mt-[10px]">
            Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
            has been the
          </p>
        </div>
        <div className="h-[300px] w-[300px] shadow-lg transition ease-in-out delay-150 b hover:-translate-y-1 hover:scale-110  duration-300 rounded-lg ">
          <img
            className="h-[100px] w-[100px]  m-auto mt-[20px]"
            src="https://i.ibb.co/j6VVcVK/whitening-1.png"
          ></img>
          <h1 className="text-center mt-[5px] font-semibold">
            Teeth Whitening
          </h1>
          <p className="text-center mt-[10px]">
            Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
            has been the
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <img
            className="h-[590px] w-[450px] mx-[302px]"
            src="https://i.ibb.co/VpFgD6n/treatment-1.png"
          ></img>
        </div>
        <div className="mx-[302px] mt-[160px]">
          <h1 className="text-[48px] w-[497px] font-semibold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="w-[492px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
