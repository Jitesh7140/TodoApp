import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navdiv flex justify-between bg-blue-500  text-amber-50 py-2 ">
        <div className="mx-6">
          <span className="font-bold cursor-pointer">iTask</span>
        </div>

        <ul className="flex gap-5 mx-6">
          <li className="hover:font-bold transition-all  cursor-pointer" >Home</li>
          <li className="hover:font-bold transition-all  cursor-pointer" >Your Task</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
