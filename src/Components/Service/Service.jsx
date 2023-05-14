import React from "react";

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
    </div>
  );
};

export default Service;
