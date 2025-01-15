import React from "react";
import logo from "/images/Logo.png";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="flex items-center ml-8">
      <Link to="/" className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-10 rounded-md" />
        <h3 className="font-bold text-primary text-2xl">Tokoo</h3>
      </Link>
    </div>
  );
};
