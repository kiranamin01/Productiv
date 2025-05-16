import React from "react";
import Logo from "../assets/logosaas.png";
import MenuIcon from "../assets/menu.svg";
import { MdDarkMode } from "react-icons/md";
import { SlLogin } from "react-icons/sl";
import DarkMode from "@/DarkMode";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3 ">
        <div className="inline-flex gap-1 items-center">
          <p className="text-white/60 hidden md:block px-4">
            Get Hands-On Best Productivity App from Us
          </p>
          <p className="text-white hidden md:block ">Get started for free </p>
        </div>
      </div>
      <div className="nav mt-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <img
                src={Logo}
                alt="Saas logo"
                className="h-12 w-12 object-contain"
              />
            </div>

            <div className="md:hidden">
              <img
                src={MenuIcon}
                className="h-6 w-6 cursor-pointer"
                alt="MenuIcon"
              />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                Customers
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                Updates
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                Help
              </a>
              <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                Get for Free
              </button>
            </nav>

            <div className="nav-right flex justify-end space-x-4">
              <DarkMode />
              <button className="flex items-center dark-mode-btn2 ">
                <SlLogin className="text-lg mr-2" />
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
