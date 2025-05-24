import React from "react";
import Logo from "../assets/logosaas.png";
import MenuIcon from "../assets/menu.svg";
import { MdDarkMode } from "react-icons/md";
import { SlLogin } from "react-icons/sl";
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
      <nav>
        <div className="nav-container flex justify-between lg:justify-around lg:mx-6 items-center m-5">
          <div className="nav-left flex items-center space-x-4">
            <img src={Logo} alt="Logo" className="h-12" />
          </div>
          <div className="nav-center flex items-center">
            <div className="darkmodebtn md:hidden mr-4">
              <DarkMode />
            </div>
            <button className="menubtn md:hidden">
              <img src={MenuIcon} alt="Menu" className="h-12 dark:invert" />
            </button>
            <div className="navbar hidden md:flex items-center space-x-8 mx-5">
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="text-gray-600 hover:text-black dark:hover:text-foreground transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#features"
                onClick={(e) => scrollToSection(e, "features")}
                className="text-gray-600 hover:text-black dark:hover:text-foreground transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#testimonials"
                onClick={(e) => scrollToSection(e, "testimonials")}
                className="text-gray-600 hover:text-black dark:hover:text-foreground transition-colors duration-200"
              >
                Customers
              </a>
              <a
                href="#updates"
                onClick={(e) => scrollToSection(e, "updates")}
                className="text-gray-600 hover:text-black dark:hover:text-foreground transition-colors duration-200"
              >
                Updates
              </a>
              <a
                href="#help"
                onClick={(e) => scrollToSection(e, "help")}
                className="text-gray-600 hover:text-black dark:hover:text-foreground transition-colors duration-200"
              >
                Help
              </a>
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
              <SlLogin className="text-lg mr-1" />
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
