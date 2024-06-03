import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import img from "../assets/logo.png";
import { useContext } from "react";
import { CartContext } from "../CartContext";
// import CartProduct from './CartProduct';

const Navbar = () => {

  const navigate = useNavigate();
  const cart = useContext(CartContext);

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header>
      <div className="flex justify-between max-w-6xl mx-auto py-7">
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
              to="/all"
              className={({ isActive }) =>
                isActive
                  ? "text-red-700 hover:text-red-700"
                  : "text-slate-700 hover:text-red-700"
              }
            >
              <li className="hidden sm:inline">All Products</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-red-700 hover:text-red-700"
                  : "text-slate-700 hover:text-red-700"
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        {/* <button className="cart" onClick={handleCartClick} >cart</button> */}
        <button className="cart" onClick={handleCartClick}>
            Cart ({cart.items.length}) {/* Display total items in cart */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
