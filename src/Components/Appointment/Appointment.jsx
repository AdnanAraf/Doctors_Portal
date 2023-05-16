import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Appointment = () => {
  const [card, setcard] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/DoctorsCollection")
      .then((res) => res.json())
      .then((data) => setcard(data));
  }, []);
  return (
    <div>
      <div className="flex justify-between mt-[200px]">
        <div>
          <p className="w-[500px] ml-[100px] m-auto mt-[50px] font-semibold leading-[30px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            minus corporis quam magni aut vero nostrum deleniti, ad in
            cupiditate qui eius necessitatibus. Nostrum necessitatibus rem,
            distinctio tenetur quo quidem?Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eum, hic facilis mollitia laboriosam
            deleniti adipisci optio eius rem ullam natus quam molestias
            consequatur! Officiis, quo veniam quos incidunt eligendi
            omnis?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum provident nulla ad odio dolores cumque enim laboriosam quasi
            odit fuga.
          </p>
        </div>
        <div className="">
          <img
            className="mx-[100px]"
            src="https://i.ibb.co/2tvFNjV/chair-1.png"
          ></img>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 mt-[50px] ml-[100px]">
          {card.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
