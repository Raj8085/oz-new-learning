// // // // import { useState, useEffect } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { Link, useLocation } from "react-router-dom";
// // // // // import NavigationMenu from './NavigationMenu';

// // // // import {
// // // //   NavigationMenu,
// // // //   NavigationMenuContent,
// // // //   NavigationMenuItem,
// // // //   NavigationMenuList,
// // // //   NavigationMenuTrigger,
// // // // } from "@/components/ui/navigation-menu";
// // // // import NavigationMenuDemo from "./NavigationMenu";
// // // // // import Logo from '../assets/Logo.png';

// // // // const Navbar = () => {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [ setScrollPosition] = useState(0);
// // // //   const location = useLocation(); // This hook gives you the current location
// // // //   // const [isHovered, setIsHovered] = useState(false);

// // // //   const toggleNavbar = () => {
// // // //     setIsOpen(!isOpen);
// // // //   };

// // // //   // Function to check if the link is active
// // // //   const isActive = (path) => {
// // // //     return location.pathname === path;
// // // //   };

// // // //   // Function to handle scroll event
// // // //   const handleScroll = () => {
// // // //     setScrollPosition(window.scrollY);
// // // //   };

// // // //   useEffect(() => {
// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => {
// // // //       window.removeEventListener("scroll", handleScroll);
// // // //     };
// // // //   }, []);

// // // //   const links = [
// // // //     { to: "/", label: "Home" },
// // // //     { to: "/about", label: "About" },
// // // //     { to: "/services", label: "Services" },
// // // //     { to: "/contact", label: "Contact" },
// // // //     { to: "/courses", label: "Courses" },
// // // //   ];

// // // //   return (
// // // //     <nav
// // // //       className={`w-full sticky top-0 z-50 flex items-center justify-center`}
// // // //     >
// // // //       <div className="md:w-[80%] w-full py-5 px-10 rounded-md md:fixed md:top-10 z-50 bg-white transition-all duration-300">
// // // //         <div className="flex justify-between items-center">
// // // //           {/* Logo */}
// // // //           <Link to="/" className="flex-shrink-0 flex items-center">
// // // //             {/* <img src={Logo} alt="Logo" className="w-28" /> */}
// // // //             <h1 className="text-2xl font-bold text-black">Logo</h1>
// // // //           </Link>

// // // //           {/* Desktop Navigation */}
// // // //           <div className="hidden md:flex items-center justify-center flex-1">
// // // //             <div className="flex space-x-2 lg:space-x-8">
// // // //               {/* {links.map((link) => (
// // // //                 <Link
// // // //                   key={link.to}
// // // //                   to={link.to}
// // // //                   className={`${
// // // //                     isActive(link.to)
// // // //                       ? 'text-white font-semibold bg-[#bf3900]'
// // // //                       : 'text-black'
// // // //                   } hover:text-white hover:font-semibold hover:bg-[#a4522f] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
// // // //                 >
// // // //                   {link.label}
// // // //                 </Link>
// // // //               ))} */}
// // // //               <Link
// // // //                 key={"/"}
// // // //                 to={"/"}
// // // //                 className={`${
// // // //                   isActive("/")
// // // //                     ? "text-white font-semibold bg-[#bf3900]"
// // // //                     : "text-black"
// // // //                 } hover:text-white hover:font-semibold hover:bg-[#a4522f] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
// // // //               >
// // // //                 Home
// // // //               </Link>
// // // //               <Link
// // // //                 key={"/about"}
// // // //                 to={"/about"}
// // // //                 className={`${
// // // //                   isActive("/about")
// // // //                     ? "text-white font-semibold bg-[#bf3900]"
// // // //                     : "text-black"
// // // //                 } hover:text-white hover:font-semibold hover:bg-[#a4522f] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
// // // //               >
// // // //                 About
// // // //               </Link>
// // // //               <Link
// // // //                 key={"/services"}
// // // //                 to={"/services"}
// // // //                 className={`${
// // // //                   isActive("/services")
// // // //                     ? "text-white font-semibold bg-[#bf3900]"
// // // //                     : "text-black"
// // // //                 } hover:text-white hover:font-semibold hover:bg-[#a4522f] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
// // // //               >
// // // //                 Services
// // // //               </Link>
// // // //               <div
// // // //                 className={`hover:text-white hover:font-semibold hover:bg-[#a4522f] rounded-md text-base font-medium transition-colors duration-200`}
// // // //               > 
// // // //                 <NavigationMenu>
// // // //                   <NavigationMenuList>
// // // //                     <NavigationMenuItem>
// // // //                       <NavigationMenuTrigger>
// // // //                         <p>Courses</p>
// // // //                       </NavigationMenuTrigger>
// // // //                       <NavigationMenuContent>
// // // //                         <div className="flex flex-col backdrop-blur-sm bg-white/20 gap-3 py-3 px-2">
// // // //                           <NavigationMenuDemo />
// // // //                         </div>
// // // //                       </NavigationMenuContent>
// // // //                     </NavigationMenuItem>
// // // //                   </NavigationMenuList>
// // // //                 </NavigationMenu>
// // // //               </div>
// // // //               {/* Show component when hovered */}
// // // //               {/* {isHovered && (
// // // //         <div
// // // //         className='absolute top-16 left-1/2 transform -translate-x-1/2 z-50'
// // // //           onMouseEnter={() => setIsHovered(true)}
// // // //           onMouseLeave={() => setIsHovered(false)}
// // // //         >
// // // //           <NavigationMenu />
// // // //         </div>
// // // //       )} */}
// // // //               <Link
// // // //                 key={"/contact"}
// // // //                 to={"/contact"}
// // // //                 className={`${
// // // //                   isActive("/contact")
// // // //                     ? "text-white font-semibold bg-[#bf3900]"
// // // //                     : "text-black"
// // // //                 } hover:text-white hover:font-semibold hover:bg-[#a4522f] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
// // // //               >
// // // //                 Contact
// // // //               </Link>
// // // //             </div>
// // // //           </div>

// // // //           {/* Right Button */}
// // // //           <div className="hidden md:flex items-center">
// // // //             <Link
// // // //               to="/contact"
// // // //               className="bg-[#bf3900] cursor-pointer text-white px-4 py-2 rounded-md text-sm font-medium"
// // // //             >
// // // //               Get Started
// // // //             </Link>
// // // //           </div>

// // // //           {/* Mobile menu button */}
// // // //           <div className="md:hidden flex items-center">
// // // //             <button
// // // //               onClick={toggleNavbar}
// // // //               className={`inline-flex items-center justify-center p-2 rounded-md hover:text-indigo-700 hover:bg-gray-100 focus:outline-none`}
// // // //             >
// // // //               <span className="sr-only">Open main menu</span>
// // // //               {isOpen ? (
// // // //                 <svg
// // // //                   className="block h-6 w-6"
// // // //                   xmlns="http://www.w3.org/2000/svg"
// // // //                   fill="none"
// // // //                   viewBox="0 0 24 24"
// // // //                   stroke="currentColor"
// // // //                   aria-hidden="true"
// // // //                 >
// // // //                   <path
// // // //                     strokeLinecap="round"
// // // //                     strokeLinejoin="round"
// // // //                     strokeWidth={2}
// // // //                     d="M6 18L18 6M6 6l12 12"
// // // //                   />
// // // //                 </svg>
// // // //               ) : (
// // // //                 <svg
// // // //                   className="block h-6 w-6"
// // // //                   xmlns="http://www.w3.org/2000/svg"
// // // //                   fill="none"
// // // //                   viewBox="0 0 24 24"
// // // //                   stroke="currentColor"
// // // //                   aria-hidden="true"
// // // //                 >
// // // //                   <path
// // // //                     strokeLinecap="round"
// // // //                     strokeLinejoin="round"
// // // //                     strokeWidth={2}
// // // //                     d="M4 6h16M4 12h16M4 18h16"
// // // //                   />
// // // //                 </svg>
// // // //               )}
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //         <AnimatePresence>
// // // //           {isOpen && (
// // // //             <motion.div
// // // //               className="md:hidden pb-3"
// // // //               initial={{ opacity: 0, height: 0 }}
// // // //               animate={{ opacity: 1, height: "auto" }}
// // // //               exit={{ opacity: 0, height: 0 }}
// // // //               transition={{ duration: 0.3, ease: "easeInOut" }}
// // // //             >
// // // //               <div className="px-2 pt-5 pb-1 space-y-1 sm:px-3 ">
// // // //                 {links.map((link) => (
// // // //                   <Link
// // // //                     key={link.to}
// // // //                     to={link.to}
// // // //                     className={`block ${
// // // //                       isActive(link.to)
// // // //                         ? "text-white bg-[#bf3900] font-semibold"
// // // //                         : "text-gray-500"
// // // //                     } px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
// // // //                   >
// // // //                     {link.label}
// // // //                   </Link>
// // // //                 ))}
// // // //               </div>
// // // //               {/* <Link
// // // //                   key={"/contact"}
// // // //                   to={"/contact"}
// // // //                   className={`block ${
// // // //                     isActive('/contact')
// // // //                       ? 'text-white bg-[#bf3900] font-semibold'
// // // //                       : 'text-gray-500'
// // // //                   } ${
// // // //                     scrollPosition > 100 ? 'text-white' : ''
// // // //                   } hover:bg-indigo-50 hover:text-indigo-700 ml-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
// // // //                 >
// // // //                   Contact
// // // //                 </Link> */}
// // // //             </motion.div>
// // // //           )}
// // // //         </AnimatePresence>
// // // //       </div>

// // // //       {/* Mobile menu, show/hide based on menu state */}
// // // //     </nav>
// // // //   );
// // // // };
// // // // export default Navbar;



// // // import { useState, useEffect } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { Link, useLocation } from "react-router-dom";
// // // import {
// // //   NavigationMenu,
// // //   NavigationMenuContent,
// // //   NavigationMenuItem,
// // //   NavigationMenuList,
// // //   NavigationMenuTrigger,
// // // } from "@/components/ui/navigation-menu";
// // // import NavigationMenuDemo from "./NavigationMenu";

// // // const Navbar = () => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [scrolled, setScrolled] = useState(false);
// // //   const [rendered, setRendered] = useState(false);
// // //   const location = useLocation();

// // //   const toggleNavbar = () => {
// // //     setIsOpen(!isOpen);
// // //   };

// // //   // Function to check if the link is active
// // //   const isActive = (path) => {
// // //     return location.pathname === path;
// // //   };

// // //   // Function to handle scroll event
// // //   const handleScroll = () => {
// // //     if (window.scrollY > 20) {
// // //       setScrolled(true);
// // //     } else {
// // //       setScrolled(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => {
// // //       window.removeEventListener("scroll", handleScroll);
// // //     };
// // //   }, []);

// // //   const links = [
// // //     { to: "/", label: "Home" },
// // //     { to: "/about", label: "About" },
// // //     { to: "/services", label: "Services" },
// // //     { to: "/contact", label: "Contact" },
// // //   ];

// // //   // Animation variants
// // //   const navbarVariants = {
// // //     hidden: { opacity: 0, y: -20 },
// // //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// // //   };

// // //   const menuItemVariants = {
// // //     hidden: { opacity: 0, y: -10 },
// // //     visible: custom => ({
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: { delay: custom * 0.1, duration: 0.3 }
// // //     })
// // //   };

// // //   const logoVariants = {
// // //     normal: { scale: 1 },
// // //     hover: { scale: 1.05, transition: { duration: 0.3 } }
// // //   };

// // //   return (
// // //     <motion.nav
// // //       initial="hidden"
// // //       animate="visible"
// // //       variants={navbarVariants}
// // //       className={`w-full sticky top-0 z-50 flex items-center justify-center transition-all duration-300`}
// // //     >
// // //       <div 
// // //         className={`w-full md:w-[85%] py-4 md:py-5 px-4 md:px-8 lg:px-10 md:rounded-b-2xl z-50 transition-all duration-500 ${
// // //           scrolled 
// // //             ? "bg-white/95 backdrop-blur-md shadow-lg md:mt-0" 
// // //             : "bg-white md:mt-4"
// // //         }`}
// // //       >
// // //         <div className="flex justify-between items-center">
// // //           {/* Logo */}
// // //           <motion.div
// // //             variants={logoVariants}
// // //             initial="normal"
// // //             whileHover="hover"
// // //             className="flex-shrink-0"
// // //           >
// // //             <Link to="/" className="flex items-center space-x-2">
// // //               <div className="bg-gradient-to-r from-orange-600 to-red-500 p-2 rounded-lg">
// // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// // //                 </svg>
// // //               </div>
// // //               <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">BrandName</h1>
// // //             </Link>
// // //           </motion.div>

// // //           {/* Desktop Navigation */}
// // //           <div className="hidden md:flex items-center justify-center flex-1">
// // //             <motion.div 
// // //               className="flex space-x-1 lg:space-x-4"
// // //               initial="hidden"
// // //               animate="visible"
// // //               variants={menuItemVariants}
// // //             >
// // //               {links.map((link, index) => (
// // //                 <motion.div key={link.to} custom={index} variants={menuItemVariants}>
// // //                   <Link
// // //                     to={link.to}
// // //                     className={`relative px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
// // //                       isActive(link.to)
// // //                         ? "text-orange-600 font-semibold"
// // //                         : "text-gray-700 hover:text-orange-500"
// // //                     }`}
// // //                   >
// // //                     {link.label}
// // //                     {isActive(link.to) && (
// // //                       <motion.div
// // //                         layoutId="activeTab"
// // //                         className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-600 to-red-500"
// // //                         initial={{ opacity: 0 }}
// // //                         animate={{ opacity: 1 }}
// // //                         transition={{ duration: 0.3 }}
// // //                       />
// // //                     )}
// // //                   </Link>
// // //                 </motion.div>
// // //               ))}
              
// // //               <motion.div custom={4} variants={menuItemVariants}>
// // //                 <div className="relative flex items-center">
// // //                   <NavigationMenu>
// // //                     <NavigationMenuList>
// // //                       <NavigationMenuItem>
// // //                         <NavigationMenuTrigger className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
// // //                           isActive("/courses") ? "text-orange-600 font-semibold" : "text-gray-700 hover:text-orange-500"
// // //                         }`}>
// // //                           Courses
// // //                         </NavigationMenuTrigger>
// // //                         <NavigationMenuContent>
// // //                           <div className="flex flex-col bg-white shadow-xl rounded-lg border border-gray-100 backdrop-blur-sm gap-3 py-4 px-3 min-w-[220px]">
// // //                             <NavigationMenuDemo />
// // //                           </div>
// // //                         </NavigationMenuContent>
// // //                       </NavigationMenuItem>
// // //                     </NavigationMenuList>
// // //                   </NavigationMenu>
// // //                   {isActive("/courses") && (
// // //                     <motion.div
// // //                       layoutId="activeTab"
// // //                       className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-orange-600 to-red-500"
// // //                     />
// // //                   )}
// // //                 </div>
// // //               </motion.div>
// // //             </motion.div>
// // //           </div>

// // //           {/* Right Button */}
// // //           <motion.div 
// // //             className="hidden md:flex items-center"
// // //             variants={menuItemVariants}
// // //             custom={5}
// // //           >
// // //             <Link
// // //               to="/contact"
// // //               className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
// // //             >
// // //               <span className="relative z-10">Get Started</span>
// // //               <motion.span 
// // //                 className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
// // //                 initial={{ scale: 0 }}
// // //                 whileHover={{ scale: 1.5, opacity: 0.2 }}
// // //                 transition={{ duration: 0.4 }}
// // //               />
// // //             </Link>
// // //           </motion.div>

// // //           {/* Mobile menu button */}
// // //           <div className="md:hidden flex items-center">
// // //             <motion.button
// // //               onClick={toggleNavbar}
// // //               whileTap={{ scale: 0.95 }}
// // //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none transition-colors duration-200"
// // //             >
// // //               <span className="sr-only">Open main menu</span>
// // //               {isOpen ? (
// // //                 <svg
// // //                   className="block h-6 w-6"
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   fill="none"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                 >
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     strokeWidth={2}
// // //                     d="M6 18L18 6M6 6l12 12"
// // //                   />
// // //                 </svg>
// // //               ) : (
// // //                 <svg
// // //                   className="block h-6 w-6"
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   fill="none"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                 >
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     strokeWidth={2}
// // //                     d="M4 6h16M4 12h16M4 18h16"
// // //                   />
// // //                 </svg>
// // //               )}
// // //             </motion.button>
// // //           </div>
// // //         </div>
// // //         {/* Mobile menu */}
// // //         <AnimatePresence>
// // //           {isOpen && (
// // //             <motion.div
// // //               className="md:hidden pt-3"
// // //               initial={{ opacity: 0, height: 0 }}
// // //               animate={{ opacity: 1, height: "auto" }}
// // //               exit={{ opacity: 0, height: 0 }}
// // //               transition={{ duration: 0.3, ease: "easeInOut" }}
// // //             >
// // //               <motion.div 
// // //                 className="px-2 pt-2 pb-3 space-y-2 border-t border-gray-100 mt-3"
// // //                 initial="hidden"
// // //                 animate="visible"
// // //                 variants={menuItemVariants}
// // //               >
// // //                 {links.map((link, index) => (
// // //                   <motion.div key={link.to} custom={index} variants={menuItemVariants}>
// // //                     <Link
// // //                       to={link.to}
// // //                       className={`block transition-colors duration-200 px-4 py-2.5 rounded-lg ${
// // //                         isActive(link.to)
// // //                           ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
// // //                           : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
// // //                       }`}
// // //                       onClick={() => setIsOpen(false)}
// // //                     >
// // //                       {link.label}
// // //                     </Link>
// // //                   </motion.div>
// // //                 ))}
                
// // //                 <motion.div custom={4} variants={menuItemVariants}>
// // //                   <Link
// // //                     to="/courses"
// // //                     className={`block transition-colors duration-200 px-4 py-2.5  rounded-lg ${
// // //                       isActive("/courses")
// // //                         ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
// // //                         : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
// // //                     }`}
// // //                     onClick={() => setIsOpen(false)}
// // //                   >
// // //                     Courses
// // //                   </Link>
// // //                 </motion.div>
                
// // //                 <motion.div custom={5} variants={menuItemVariants} className="pt-2">
// // //                   <Link
// // //                     to="/contact"
// // //                     className="block w-full text-center bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
// // //                     onClick={() => setIsOpen(false)}
// // //                   >
// // //                     Get Started
// // //                   </Link>
// // //                 </motion.div>
// // //               </motion.div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>
// // //       </div>
// // //     </motion.nav>
// // //   );
// // // };
// // // export default Navbar;



// // import { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Link, useLocation } from "react-router-dom";
// // import {
// //   NavigationMenu,
// //   NavigationMenuContent,
// //   NavigationMenuItem,
// //   NavigationMenuList,
// //   NavigationMenuTrigger,
// // } from "@/components/ui/navigation-menu";
// // import NavigationMenuDemo from "./NavigationMenu";

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);
// //   const location = useLocation();

// //   const toggleNavbar = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   // Function to check if the link is active
// //   const isActive = (path) => {
// //     return location.pathname === path;
// //   };

// //   // Function to handle scroll event
// //   const handleScroll = () => {
// //     if (window.scrollY > 20) {
// //       setScrolled(true);
// //     } else {
// //       setScrolled(false);
// //     }
// //   };

// //   useEffect(() => {
// //     window.addEventListener("scroll", handleScroll);
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   const links = [
// //     { to: "/", label: "Home" },
// //     { to: "/about", label: "About" },
// //     { to: "/services", label: "Services" },
// //     { to: "/contact", label: "Contact" },
// //   ];

// //   // Animation variants
// //   const navbarVariants = {
// //     hidden: { opacity: 0, y: -20 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// //   };

// //   const menuItemVariants = {
// //     hidden: { opacity: 0, y: -10 },
// //     visible: custom => ({
// //       opacity: 1,
// //       y: 0,
// //       transition: { delay: custom * 0.1, duration: 0.3 }
// //     })
// //   };

// //   const logoVariants = {
// //     normal: { scale: 1 },
// //     hover: { scale: 1.05, transition: { duration: 0.3 } }
// //   };

// //   return (
// //     <motion.nav
// //       initial="hidden"
// //       animate="visible"
// //       variants={navbarVariants}
// //       className="w-full sticky top-0 z-50 flex items-center justify-center transition-all duration-300"
// //     >
// //       <div 
// //         className={`w-full md:w-[85%] py-4 md:py-5 px-4 md:px-8 lg:px-10 md:rounded-b-2xl z-50 transition-all duration-500 ${
// //           scrolled 
// //             ? "bg-white/95 backdrop-blur-md shadow-lg md:mt-0" 
// //             : "bg-white md:mt-4"
// //         }`}
// //       >
// //         <div className="flex justify-between items-center">
// //           {/* Logo */}
// //           <motion.div
// //             variants={logoVariants}
// //             initial="normal"
// //             whileHover="hover"
// //             className="flex-shrink-0"
// //           >
// //             <Link to="/" className="flex items-center space-x-2">
// //               <div className="bg-gradient-to-r from-orange-600 to-red-500 p-2 rounded-lg">
// //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// //                 </svg>
// //               </div>
// //               <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">BrandName</h1>
// //             </Link>
// //           </motion.div>

// //           {/* Desktop Navigation */}
// //           <div className="hidden md:flex items-center justify-center">
// //             <ul className="flex space-x-1 lg:space-x-2">
// //               {links.map((link, index) => (
// //                 <motion.li key={link.to} custom={index} variants={menuItemVariants} className="flex items-center">
// //                   <Link
// //                     to={link.to}
// //                     className={`relative px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
// //                       isActive(link.to)
// //                         ? "text-orange-600 font-semibold"
// //                         : "text-gray-700 hover:text-orange-500"
// //                     }`}
// //                   >
// //                     {link.label}
// //                     {isActive(link.to) && (
// //                       <motion.div
// //                         layoutId="activeTab"
// //                         className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-600 to-red-500"
// //                         initial={{ opacity: 0 }}
// //                         animate={{ opacity: 1 }}
// //                         transition={{ duration: 0.3 }}
// //                       />
// //                     )}
// //                   </Link>
// //                 </motion.li>
// //               ))}
              
// //               <motion.li custom={4} variants={menuItemVariants} className="flex items-center">
// //                 <NavigationMenu>
// //                   <NavigationMenuList>
// //                     <NavigationMenuItem>
// //                       <NavigationMenuTrigger className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
// //                         isActive("/courses") ? "text-orange-600 font-semibold" : "text-gray-700 hover:text-orange-500"
// //                       }`}>
// //                         Courses
// //                       </NavigationMenuTrigger>
// //                       <NavigationMenuContent>
// //                         <div className="flex flex-col bg-white shadow-xl rounded-lg border border-gray-100 backdrop-blur-sm gap-3 py-4 px-3 min-w-[220px]">
// //                           <NavigationMenuDemo />
// //                         </div>
// //                       </NavigationMenuContent>
// //                     </NavigationMenuItem>
// //                   </NavigationMenuList>
// //                 </NavigationMenu>
// //                 {isActive("/courses") && (
// //                   <motion.div
// //                     layoutId="activeTab"
// //                     className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-orange-600 to-red-500"
// //                   />
// //                 )}
// //               </motion.li>
// //             </ul>
// //           </div>

// //           {/* Right Button */}
// //           <motion.div 
// //             className="hidden md:flex items-center"
// //             variants={menuItemVariants}
// //             custom={5}
// //           >
// //             <Link
// //               to="/contact"
// //               className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
// //             >
// //               <span className="relative z-10">Get Started</span>
// //               <motion.span 
// //                 className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
// //                 initial={{ scale: 0 }}
// //                 whileHover={{ scale: 1.5, opacity: 0.2 }}
// //                 transition={{ duration: 0.4 }}
// //               />
// //             </Link>
// //           </motion.div>

// //           {/* Mobile menu button */}
// //           <div className="md:hidden flex items-center">
// //             <motion.button
// //               onClick={toggleNavbar}
// //               whileTap={{ scale: 0.95 }}
// //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none transition-colors duration-200"
// //             >
// //               <span className="sr-only">Open main menu</span>
// //               {isOpen ? (
// //                 <svg
// //                   className="block h-6 w-6"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M6 18L18 6M6 6l12 12"
// //                   />
// //                 </svg>
// //               ) : (
// //                 <svg
// //                   className="block h-6 w-6"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M4 6h16M4 12h16M4 18h16"
// //                   />
// //                 </svg>
// //               )}
// //             </motion.button>
// //           </div>
// //         </div>
        
// //         {/* Mobile menu */}
// //         <AnimatePresence>
// //           {isOpen && (
// //             <motion.div
// //               className="md:hidden pt-3"
// //               initial={{ opacity: 0, height: 0 }}
// //               animate={{ opacity: 1, height: "auto" }}
// //               exit={{ opacity: 0, height: 0 }}
// //               transition={{ duration: 0.3, ease: "easeInOut" }}
// //             >
// //               <motion.div 
// //                 className="px-2 pt-2 pb-3 space-y-2 border-t border-gray-100 mt-3"
// //                 initial="hidden"
// //                 animate="visible"
// //                 variants={menuItemVariants}
// //               >
// //                 {links.map((link, index) => (
// //                   <motion.div key={link.to} custom={index} variants={menuItemVariants}>
// //                     <Link
// //                       to={link.to}
// //                       className={`block transition-colors duration-200 px-4 py-2.5 rounded-lg ${
// //                         isActive(link.to)
// //                           ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
// //                           : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
// //                       }`}
// //                       onClick={() => setIsOpen(false)}
// //                     >
// //                       {link.label}
// //                     </Link>
// //                   </motion.div>
// //                 ))}
                
// //                 <motion.div custom={4} variants={menuItemVariants}>
// //                   <Link
// //                     to="/courses"
// //                     className={`block transition-colors duration-200 px-4 py-2.5 rounded-lg ${
// //                       isActive("/courses")
// //                         ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
// //                         : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
// //                     }`}
// //                     onClick={() => setIsOpen(false)}
// //                   >
// //                     Courses
// //                   </Link>
// //                 </motion.div>
                
// //                 <motion.div custom={5} variants={menuItemVariants} className="pt-2">
// //                   <Link
// //                     to="/contact"
// //                     className="block w-full text-center bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
// //                     onClick={() => setIsOpen(false)}
// //                   >
// //                     Get Started
// //                   </Link>
// //                 </motion.div>
// //               </motion.div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     </motion.nav>
// //   );
// // };
// // export default Navbar;


// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, useLocation } from "react-router-dom";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import NavigationMenuDemo from "./NavigationMenu";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   // Function to check if the link is active
//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   // Function to handle scroll event
//   const handleScroll = () => {
//     if (window.scrollY > 20) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const links = [
//     { to: "/", label: "Home" },
//     { to: "/about", label: "About" },
//     { to: "/services", label: "Services" },
//     { to: "/contact", label: "Contact" },
//   ];

//   // Animation variants
//   const navbarVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   const menuItemVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: custom => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: custom * 0.1, duration: 0.3 }
//     })
//   };

//   const logoVariants = {
//     normal: { scale: 1 },
//     hover: { scale: 1.05, transition: { duration: 0.3 } }
//   };

//   return (
//     <motion.nav
//       initial="hidden"
//       animate="visible"
//       variants={navbarVariants}
//       className="w-full sticky top-0 z-50 flex items-center justify-center transition-all duration-300"
//     >
//       <div 
//         className={`w-full md:w-[85%] py-4 md:py-5 px-4 md:px-8 lg:px-10 md:rounded-b-2xl z-50 transition-all duration-500 ${
//           scrolled 
//             ? "bg-white/95 backdrop-blur-md shadow-lg md:mt-0" 
//             : "bg-white md:mt-4"
//         }`}
//       >
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <motion.div
//             variants={logoVariants}
//             initial="normal"
//             whileHover="hover"
//             className="flex-shrink-0"
//           >
//             <Link to="/" className="flex items-center space-x-2">
//               <div className="bg-gradient-to-r from-orange-600 to-red-500 p-2 rounded-lg">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">BrandName</h1>
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation - Only visible on large screens (lg and above) */}
//           <div className="hidden lg:flex items-center justify-center">
//             <ul className="flex space-x-1 lg:space-x-2">
//               {links.map((link, index) => (
//                 <motion.li key={link.to} custom={index} variants={menuItemVariants} className="flex items-center">
//                   <Link
//                     to={link.to}
//                     className={`relative px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
//                       isActive(link.to)
//                         ? "text-orange-600 font-semibold"
//                         : "text-gray-700 hover:text-orange-500"
//                     }`}
//                   >
//                     {link.label}
//                     {isActive(link.to) && (
//                       <motion.div
//                         layoutId="activeTab"
//                         className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-600 to-red-500"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     )}
//                   </Link>
//                 </motion.li>
//               ))}
              
//               <motion.li custom={4} variants={menuItemVariants} className="flex items-center">
//                 <NavigationMenu>
//                   <NavigationMenuList>
//                     <NavigationMenuItem>
//                       <NavigationMenuTrigger className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
//                         isActive("/courses") ? "text-orange-600 font-semibold" : "text-gray-700 hover:text-orange-500"
//                       }`}>
//                         Courses
//                       </NavigationMenuTrigger>
//                       <NavigationMenuContent>
//                         <div className="flex flex-col bg-white shadow-xl rounded-lg border border-gray-100 backdrop-blur-sm gap-3 py-4 px-3 min-w-[220px]">
//                           <NavigationMenuDemo />
//                         </div>
//                       </NavigationMenuContent>
//                     </NavigationMenuItem>
//                   </NavigationMenuList>
//                 </NavigationMenu>
//                 {isActive("/courses") && (
//                   <motion.div
//                     layoutId="activeTab"
//                     className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-orange-600 to-red-500"
//                   />
//                 )}
//               </motion.li>
//             </ul>
//           </div>

//           {/* Right Button - Only visible on large screens */}
//           <motion.div 
//             className="hidden lg:flex items-center"
//             variants={menuItemVariants}
//             custom={5}
//           >
//             <Link
//               to="/contact"
//               className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
//             >
//               <span className="relative z-10">Get Started</span>
//               <motion.span 
//                 className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
//                 initial={{ scale: 0 }}
//                 whileHover={{ scale: 1.5, opacity: 0.2 }}
//                 transition={{ duration: 0.4 }}
//               />
//             </Link>
//           </motion.div>

//           {/* Mobile & Tablet menu button - Visible on small and medium screens (below lg) */}
//           <div className="lg:hidden flex items-center">
//             <motion.button
//               onClick={toggleNavbar}
//               whileTap={{ scale: 0.95 }}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none transition-colors duration-200"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </motion.button>
//           </div>
//         </div>
        
//         {/* Mobile & Tablet menu - Visible on small and medium screens (md and below) */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               className="lg:hidden pt-3"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//               <motion.div 
//                 className="px-2 pt-2 pb-3 space-y-2 border-t border-gray-100 mt-3"
//                 initial="hidden"
//                 animate="visible"
//                 variants={menuItemVariants}
//               >
//                 {links.map((link, index) => (
//                   <motion.div key={link.to} custom={index} variants={menuItemVariants}>
//                     <Link
//                       to={link.to}
//                       className={`block transition-colors duration-200 px-4 py-2.5 rounded-lg ${
//                         isActive(link.to)
//                           ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
//                           : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
//                       }`}
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {link.label}
//                     </Link>
//                   </motion.div>
//                 ))}
                
//                 <motion.div custom={4} variants={menuItemVariants}>
//                   <Link
//                     to="/courses"
//                     className={`block transition-colors duration-200 px-4 py-2.5 rounded-lg ${
//                       isActive("/courses")
//                         ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
//                         : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
//                     }`}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Courses
//                   </Link>
//                 </motion.div>
                
//                 <motion.div custom={5} variants={menuItemVariants} className="pt-2">
//                   <Link
//                     to="/contact"
//                     className="block w-full text-center bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Get Started
//                   </Link>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// };
// export default Navbar;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavigationMenuDemo from "./NavigationMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
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
  ];

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.3 }
    })
  };

  const logoVariants = {
    normal: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="w-full sticky top-0 z-50 flex items-center justify-center transition-all duration-300"
    >
      <div 
        className={`w-full md:w-[85%] py-4 md:py-5 px-4 md:px-8 lg:px-10 md:rounded-b-2xl z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg md:mt-0" 
            : "bg-white md:mt-4"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="normal"
            whileHover="hover"
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-2">
              <img src="/ozLearningLogoNew.jpg" alt="" className="w-20 h-20"/>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Only visible on large screens (lg and above) */}
          <div className="hidden lg:flex items-center justify-center">
            <ul className="flex space-x-1 lg:space-x-2">
              {links.map((link, index) => (
                <motion.li key={link.to} custom={index} variants={menuItemVariants} className="flex items-center">
                  <Link
                    to={link.to}
                    className={`relative px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      isActive(link.to)
                        ? "text-orange-600 font-semibold"
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                  >
                    {link.label}
                    {isActive(link.to) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-600 to-red-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
              
              <motion.li custom={4} variants={menuItemVariants} className="flex items-center">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                        isActive("/courses") ? "text-orange-600 font-semibold" : "text-gray-700 hover:text-orange-500"
                      }`}>
                        Courses
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex flex-col bg-white shadow-xl rounded-lg border border-gray-100 backdrop-blur-sm gap-3 py-4 px-3 min-w-[220px]">
                          <NavigationMenuDemo />
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                {isActive("/courses") && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-orange-600 to-red-500"
                  />
                )}
              </motion.li>
            </ul>
          </div>

          {/* Right Button - Only visible on large screens */}
          <motion.div 
            className="hidden lg:flex items-center"
            variants={menuItemVariants}
            custom={5}
          >
            <Link
              to="/contact"
              className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <span className="relative z-10">Get Started</span>
              <motion.span 
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.2 }}
                transition={{ duration: 0.4 }}
              />
            </Link>
          </motion.div>

          {/* Mobile & Tablet menu button - Visible on small and medium screens (below lg) */}
          <div className="lg:hidden flex items-center">
            <motion.button
              onClick={toggleNavbar}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile & Tablet menu - Visible on small and medium screens (md and below) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden pt-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="px-2 pt-2 pb-3 space-y-2 border-t border-gray-100 mt-3"
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
              >
                {links.map((link, index) => (
                  <motion.div key={link.to} custom={index} variants={menuItemVariants}>
                    <Link
                      to={link.to}
                      className={`block transition-colors duration-200 px-4 py-2.5 rounded-lg ${
                        isActive(link.to)
                          ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
                          : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div custom={4} variants={menuItemVariants}>
                  <div className="block transition-colors duration-200 px-4 py-2.5 rounded-lg">
                    <div className="mb-2">
                      <div className={`flex justify-between items-center ${
                        isActive("/courses")
                          ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
                          : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                      }`}>
                        <span>Courses</span>
                      </div>
                    </div>
                    <div className="pl-3 border-l-2 border-gray-200">
                      <NavigationMenuDemo />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div custom={5} variants={menuItemVariants} className="pt-2">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
export default Navbar;