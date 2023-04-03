import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center h-16 w-full bg-slate-700">
      <Link to="/" className="text-white text-2xl">
        Brand
      </Link>
      <ul className="flex">
        <li className="mx-5 text-white">
          <Link to="/login">Login</Link>
        </li>
        <li className="mx-5 text-white">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
