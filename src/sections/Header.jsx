import React from "react";
import Logo from "../assets/logosaas.webp";
import MenuIcon from "../assets/menu.webp";
import { LogIn } from "lucide-react";
import DarkMode from "@/DarkMode";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/app");
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenu = () => {
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menubtn");
    navbar.classList.toggle("hidden");
    menuBtn.classList.toggle("active");
  };

  return (
    <>
      <header className="backdrop-blur-sm">
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3 ">
          <div className="inline-flex gap-1 items-center">
            <p className="text-muted-foreground px-4">
              Get Hands-On Best Productivity App from Us
            </p>
            <p className="text-white hidden md:block ">Get started for free </p>
          </div>
        </div>
      </header>
      <nav className="bg-transparent">
        <div className="nav-container flex justify-between lg:justify-around lg:mx-6 items-center m-5">
          <div className="nav-left flex items-center space-x-4">
            <img src={Logo} alt="Logo" className="w-10 h-10 ml-4" />
          </div>
          <div className="nav-center flex items-center">
            <div className="darkmodebtn md:hidden mr-4">
              <DarkMode />
            </div>
            <button
              onClick={handleMenu}
              className="menubtn hover:cursor-pointer hover:scale-90 md:hidden group"
            >
              <img
                src={MenuIcon}
                alt="MenuIcon"
                className="h-12 dark:invert transition-transform duration-300 ease-in-out group-[.active]:rotate-90"
              />
            </button>
            <div
              onClick={handleMenu}
              className="navbar hidden absolute top-30 right-5 inset-0 z-30 bg-white/10 backdrop-blur-sm md:static md:bg-transparent md:flex md:items-center md:justify-center md:w-full"
            >
              <div className="navbar-items w-[280px] rounded-xl ml-auto py-15 bg-white dark:bg-gray-900 md:dark:bg-transparent p-6 shadow-2xl flex flex-col gap-6 md:flex-row md:items-center md:justify-center md:gap-4 lg:gap-10 md:w-full md:bg-transparent md:p-0 md:shadow-none text-2xl md:text-lg">
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="text-gray-600 hover:text-black hover:font-bold dark:text-gray-300 dark:hover:text-white transition-colors duration-200 md:dark:text-gray-600 relative group/item"
                >
                  About
                  <span className="line-active absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white origin-left transition-transform duration-300 scale-x-0 group-hover/item:scale-x-100"></span>
                </a>
                <a
                  href="#features"
                  onClick={(e) => scrollToSection(e, "features")}
                  className="text-gray-600 hover:text-black hover:font-bold dark:text-gray-300 dark:hover:text-white transition-colors duration-200 md:dark:text-gray-600"
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  onClick={(e) => scrollToSection(e, "testimonials")}
                  className="text-gray-600 hover:text-black hover:font-bold dark:text-gray-300 dark:hover:text-white transition-colors duration-200 md:dark:text-gray-600"
                >
                  Customers
                </a>
                <a
                  href="#updates"
                  onClick={(e) => scrollToSection(e, "updates")}
                  className="text-gray-600 hover:text-black hover:font-bold dark:text-gray-300 dark:hover:text-white transition-colors duration-200 md:dark:text-gray-600"
                >
                  Updates
                </a>
                <a
                  href="#help"
                  onClick={(e) => scrollToSection(e, "help")}
                  className="text-gray-600 hover:text-black hover:font-bold dark:text-gray-300 dark:hover:text-white transition-colors duration-200 md:dark:text-gray-600"
                >
                  Help
                </a>
              </div>
            </div>
          </div>
          <div className="nav-right hidden md:flex mx-5 gap-4">
            <div className="darkmodebtn hidden md:block">
              <DarkMode />
            </div>
            <button
              onClick={handlelogin}
              className="loginbtn flex items-center dark-mode-btn hover:text-white hover:gap-0.5"
            >
              <LogIn className="text-lg mr-1" />
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
