import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Logo, DisplayPicture } from "../components";
import { Trolley, Heart, Message } from "../components/icons";
import { TrolleyWrapper } from "../components/icons/trolleyiconWrapper";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const authStore = useSelector((store) => store.auth);
  const { wishlist, newCount } = useSelector((store) => store.wishlist);
  const { newCount: cartCount } = useSelector((store) => store.cart);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-around h-24 sticky top-0 z-10 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}>
      <Logo />
      <div className="flex items-center w-3/5 mx-4">
        <span className="mr-4 text-gray-700">Categories:</span>
        <input
          type="text"
          placeholder="Search Product"
          className="w-full px-4 py-2 border border-gray-300 rounded-full bg-gray-50 focus:ring-2 focus:ring-primary focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-4">
          <span
            role="button"
            title="Chat with our customer service center."
            className="hover:bg-primary/10 p-2 rounded-full transition-colors duration-300">
            <Message className="w-8 h-8 text-gray-600" />
          </span>
          <Link
            role="button"
            to="/favorite-list"
            title="See your favorite list."
            className="relative hover:bg-primary/10 p-2 rounded-full transition-colors duration-300">
            <Heart
              className={`w-8 h-8 ${
                location.pathname === "/favorite-list"
                  ? "text-red-500"
                  : "text-red-500/70"
              }`}
            />
            {newCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {newCount}
              </span>
            )}
          </Link>

          <Link
            title="Add Items to your cart."
            className="hover:bg-primary/10 p-2 rounded-full transition-colors duration-300"
            to="/add-cart">
            <TrolleyWrapper className="w-8 h-8 text-primary" />
          </Link>
        </div>
        <div className="h-10 border-r border-[1.8px] border-gray-300" />
        {authStore.isAuthenticated ? (
          <DisplayPicture />
        ) : (
          <Link
            to="/signIn"
            className="hover:text-blue-600 hover:bg-blue-50 transition px-4 py-2 rounded-3xl duration-300 text-xl font-bold text-gray-600">
            LOGIN
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
