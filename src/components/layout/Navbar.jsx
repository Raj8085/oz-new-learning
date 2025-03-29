import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
// import NavigationMenu from './NavigationMenu';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import NavigationMenudemo from "./NavigationMenu";
import NavigationMenuDemo from "./NavigationMenu";
// import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation(); // This hook gives you the current location
  const [isHovered, setIsHovered] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Function to handle scroll event
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
    { to: "/courses", label: "Courses" },
  ];

  return (
    <nav
      className={`w-full sticky top-0 z-50 flex items-center justify-center`}
    >
      <div className="md:w-[80%] w-full py-5 px-10 rounded-md md:fixed md:top-10 z-50 bg-white transition-all duration-300">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            {/* <img src={Logo} alt="Logo" className="w-28" /> */}
            <h1 className="text-2xl font-bold text-black">Logo</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-2 lg:space-x-8">
              {/* {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`${
                    isActive(link.to)
                      ? 'text-white font-semibold bg-blue-700'
                      : 'text-black'
                  } hover:text-white hover:font-semibold hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              ))} */}
              <Link
                key={"/"}
                to={"/"}
                className={`${
                  isActive("/")
                    ? "text-white font-semibold bg-blue-700"
                    : "text-black"
                } hover:text-white hover:font-semibold hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Home
              </Link>
              <Link
                key={"/about"}
                to={"/about"}
                className={`${
                  isActive("/about")
                    ? "text-white font-semibold bg-blue-700"
                    : "text-black"
                } hover:text-white hover:font-semibold hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                About
              </Link>
              <Link
                key={"/services"}
                to={"/services"}
                className={`${
                  isActive("/services")
                    ? "text-white font-semibold bg-blue-700"
                    : "text-black"
                } hover:text-white hover:font-semibold hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Services
              </Link>
              <div
                className={`hover:text-white hover:font-semibold hover:bg-blue-700 rounded-md text-base font-medium transition-colors duration-200`}
              >
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <p>Courses</p>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex flex-col backdrop-blur-sm bg-white/20 gap-3 py-3 px-2">
                          <NavigationMenuDemo />
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Show component when hovered */}
              {/* {isHovered && (
        <div
        className='absolute top-16 left-1/2 transform -translate-x-1/2 z-50'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <NavigationMenu />
        </div>
      )} */}
              <Link
                key={"/contact"}
                to={"/contact"}
                className={`${
                  isActive("/contact")
                    ? "text-white font-semibold bg-blue-700"
                    : "text-black"
                } hover:text-white hover:font-semibold hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-blue-700 cursor-pointer text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className={`inline-flex items-center justify-center p-2 rounded-md hover:text-indigo-700 hover:bg-gray-100 focus:outline-none`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden pb-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-2 pt-5 pb-1 space-y-1 sm:px-3 ">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block ${
                      isActive(link.to)
                        ? "text-white bg-blue-700 font-semibold"
                        : "text-gray-500"
                    } px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              {/* <Link
                  key={"/contact"}
                  to={"/contact"}
                  className={`block ${
                    isActive('/contact')
                      ? 'text-white bg-blue-700 font-semibold'
                      : 'text-gray-500'
                  } ${
                    scrollPosition > 100 ? 'text-white' : ''
                  } hover:bg-indigo-50 hover:text-indigo-700 ml-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                >
                  Contact
                </Link> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
    </nav>
  );
};

export default Navbar;
