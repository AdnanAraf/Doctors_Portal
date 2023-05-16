import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ item }) => {
  console.log(item);
  const { _id, title, time, space } = item;

  // function HandleClick(id) {
  //   console.log(id);
  // }

  return (
    <div>
      <div className="h-[300px] w-[400px] shadow-lg m-[30px] p-[50px] leading-[50px]  transition ease-in-out delay-150 b hover:-translate-y-1 hover:scale-110  duration-300 rounded-lg ">
        <h1 className="text-center font-bold text-[20px]">{title}</h1>
        <p className="text-center  ">{time}</p>
        <p className="text-center  ">{space}</p>
        <Link to={`/addform/${_id}`}>
          <button className="btn btn-accent mt-[20px] ml-[80px] cursor-pointer">
            Booking Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
