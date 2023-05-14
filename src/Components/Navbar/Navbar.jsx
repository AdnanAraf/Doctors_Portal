import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <div className="bg-gray-400 w-full h-[100px] flex justify-between">
            <div className="m-[30px]">
              <h1 className="text-[40px] ml-[85px]">Doctors Portal</h1>
            </div>

            <div className="m-[30px] mx-[300px]">
              <Link
                className="p-[20px] hover:text-white text-black text-[18px] font-mono"
                to="/home"
              >
                Home
              </Link>
              <Link
                className="p-[20px] hover:text-white text-black text-[18px] font-mono"
                to="/about"
              >
                About
              </Link>
              <Link
                className="p-[20px] hover:text-white text-black text-[18px] font-mono"
                to="/appiontment"
              >
                Appointment
              </Link>
              <Link to="/login">
                <button className="btn btn-primary mt-[-10px]">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
