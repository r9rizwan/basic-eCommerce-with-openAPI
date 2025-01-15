import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "./icons";

const Footer = () => {
  return (
    <footer className="bg-blue-600 pt-12 px-6 pb-2">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Company Information */}
        <div className="w-full md:w-1/3 mb-20 md:mb-0 md:pr-20">
          <h2 className="font-bold text-white text-2xl mb-4">Tokoo</h2>
          <p className="text-gray-200">
            Tokoo is your one-stop shop for all your product needs. Discover a
            wide range of categories and enjoy an unparalleled shopping
            experience.
          </p>
        </div>

        {/* Customer Service */}
        <div className="w-full md:w-1/3 mb-20 md:mb-0 md:px-20">
          <h3 className="font-bold text-white text-lg mb-4">
            Customer Service
          </h3>
          <ul className="text-gray-200">
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Returns
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Shipping Info
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-1/3 mb-20 md:mb-0 md:pl-20">
          <h3 className="font-bold text-white text-lg mb-4">Follow Us</h3>
          <div className=" space-y-4">
            <div className="flex items-center">
              <Facebook className=" w-6 h-6" />
              <span className="ml-2 text-white">Tokoo Facebook</span>
            </div>
            <div className="flex items-center">
              <Twitter className=" w-6 h-6" />
              <span className="ml-2 text-white">Tokoo Twitter</span>
            </div>
            <div className="flex items-center">
              <Instagram className=" w-6 h-6" />
              <span className="ml-2 text-white">Tokoo Instagram</span>
            </div>
            <div className="flex items-center">
              <Linkedin className=" w-6 h-6" />
              <span className="ml-2 text-white">Tokoo LinkedIn</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-center text-gray-200 mt-8">
        <p>&copy; {new Date().getFullYear()} Tokoo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
