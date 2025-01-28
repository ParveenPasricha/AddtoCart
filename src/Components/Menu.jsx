import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="text-4xl text-right items-center flex m-5 gap-5">
      <Link to="/cart">
        <FaCartArrowDown className="cursor-pointer justify-end" />
        Cart
      </Link>
      <Link to="/">
        <FaHome className="cursor-pointer justify-end" />
        Home
      </Link>
    </div>
  );
};

export default Menu;
