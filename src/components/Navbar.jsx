import React from "react";
import { NavLink } from "react-router-dom";
import img from "../assets/logo.png"

const Navbar = () => {
  return (
    <header>
      <div className="flex justify-between max-w-6xl mx-auto py-7 px-8">
        <div className="logo flex justify-start">
          <NavLink to="/">
            <img src={img} alt="logo" className="max-h-28" />
          </NavLink>
        </div>

        <div className="links">
          <ul className="flex gap-9">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-700 hover:text-red-700"
                  : "text-slate-700 hover:text-red-700"
              }
            >
              <li className="hidden sm:inline">Home</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-red-700 hover:text-red-700"
                  : "text-slate-700 hover:text-red-700"
              }
            >
              <li className="hidden sm:inline">All Products</li>
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-red-700 hover:text-red-700"
                  : "text-slate-700 hover:text-red-700"
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
