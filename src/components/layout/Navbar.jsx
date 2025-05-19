// // // // // import { useState, useEffect } from "react";
// // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // import { Link, useLocation } from "react-router-dom";
// // // // // // import NavigationMenu from './NavigationMenu';

// // // // // import {
// // // // //   NavigationMenu,
// // // // //   NavigationMenuContent,
// // // // //   NavigationMenuItem,
// // // // //   NavigationMenuList,
// // // // //   NavigationMenuTrigger,
// // // // // } from "@/components/ui/navigation-menu";
// // // // // import NavigationMenuDemo from "./NavigationMenu";
// // // // // // import Logo from '../assets/Logo.png';

// // // // // const Navbar = () => {
// // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // //   const [ setScrollPosition] = useState(0);
// // // // //   const location = useLocation(); // This hook gives you the current location
// // // // //   // const [isHovered, setIsHovered] = useState(false);

// // // // //   const toggleNavbar = () => {
// // // // //     setIsOpen(!isOpen);
// // // // //   };

// // // // //   // Function to check if the link is active
// // // // //   const isActive = (path) => {
// // // // //     return location.pathname === path;
// // // // //   };

// // // // //   // Function to handle scroll event
// // // // //   const handleScroll = () => {
// // // // //     setScrollPosition(window.scrollY);
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     window.addEventListener("scroll", handleScroll);
// // // // //     return () => {
// // // // //       window.removeEventListener("scroll", handleScroll);
// // // // //     };
// // // // //   }, []);

// // // // //   const links = [
// // // // //     { to: "/", label: "Home" },
// // // // //     { to: "/about", label: "About" },
// // // // //     { to: "/services", label: "Services" },
// // // // //     { to: "/contact", label: "Contact" },
// // // // //     { to: "/courses", label: "Courses" },
// // // // //   ];

// // // // //   return (
// // // // //     <nav
// // // // //       className={`w-full sticky top-0 z-50 flex items-center justify-center`}
// // // // //     >
// // // // //       <div className="md:w-[80%] w-full py-5 px-10 rounded-md md:fixed md:top-10 z-50 bg-white transition-all duration-300">
// // // // //         <div className="flex justify-between items-center">
// // // // //           {/* Logo */}
// // // // //           <Link to="/" className="flex-shrink-0 flex items-center">
// // // // //             {/* <img src={Logo} alt="Logo" className="w-28" /> */}
// // // // //             <h1 className="text-2xl font-bold text-black">Logo</h1>
// // // // //           </Link>

// // // // //           {/* Desktop Navigation */}
// // // // //           <div className="hidden md:flex items-center justify-center flex-1">
// // // // //             <div className="flex space-x-2 lg:space-x-8">
// // // // //               {/* {links.map((link) => (
// // // // //                 <Link
// // // // //                   key={link.to}
// // // // //                   to={link.to}
// // // // //                   className={`${
// // // // //                     isActive(link.to)
// // // // //                       ? 'text-white font-semibold bg-[#bf3900]'
// // // // //                       : 'text-black'
// // // // //                   } hover:text-white hover:font-semibold hover:bg-[#a4522f] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
// // // // //                 >
// // // // //                   {link.label}
// // // // //                 </Link>
// // // // //               ))} */}
// // // // //               <Link
// // // // //                 key={"/"}
// // // // //                 to={"/"}
// // // // //                 className={`${
// // // // //                   isActive("/")
// // // // //                     ? "text-white font-semibold bg-[#bf3900]"
// // // // //                     : "text-black"
// // // // //                 } hover:text-white hover:font-semibold hover:bg-[#a4522f] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
// // // // //               >
// // // // //                 Home
// // // // //               </Link>
// // // // //               <Link
// // // // //                 key={"/about"}
// // // // //                 to={"/about"}
// // // // //                 className={`${
// // // // //                   isActive("/about")
// // // // //                     ? "text-white font-semibold bg-[#bf3900]"
// // // // //                     : "text-black"
// // // // //                 } hover:text-white hover:font-semibold hover:bg-[#a4522f] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
// // // // //               >
// // // // //                 About
// // // // //               </Link>
// // // // //               <Link
// // // // //                 key={"/services"}
// // // // //                 to={"/services"}
// // // // //                 className={`${
// // // // //                   isActive("/services")
// // // // //                     ? "text-white font-semibold bg-[#bf3900]"
// // // // //                     : "text-black"
// // // // //                 } hover:text-white hover:font-semibold hover:bg-[#a4522f] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
// // // // //               >
// // // // //                 Services
// // // // //               </Link>
// // // // //               <div
// // // // //                 className={`hover:text-white hover:font-semibold hover:bg-[#a4522f] rounded-md text-base font-medium transition-colors duration-200`}
// // // // //               > 
// // // // //                 <NavigationMenu>
// // // // //                   <NavigationMenuList>
// // // // //                     <NavigationMenuItem>
// // // // //                       <NavigationMenuTrigger>
// // // // //                         <p>Courses</p>
// // // // //                       </NavigationMenuTrigger>
// // // // //                       <NavigationMenuContent>
// // // // //                         <div className="flex flex-col backdrop-blur-sm bg-white/20 gap-3 py-3 px-2">
// // // // //                           <NavigationMenuDemo />
// // // // //                         </div>
// // // // //                       </NavigationMenuContent>
// // // // //                     </NavigationMenuItem>
// // // // //                   </NavigationMenuList>
// // // // //                 </NavigationMenu>
// // // // //               </div>
// // // // //               {/* Show component when hovered */}
// // // // //               {/* {isHovered && (
// // // // //         <div
// // // // //         className='absolute top-16 left-1/2 transform -translate-x-1/2 z-50'
// // // // //           onMouseEnter={() => setIsHovered(true)}
// // // // //           onMouseLeave={() => setIsHovered(false)}
// // // // //         >
// // // // //           <NavigationMenu />
// // // // //         </div>
// // // // //       )} */}
// // // // //               <Link
// // // // //                 key={"/contact"}
// // // // //                 to={"/contact"}
// // // // //                 className={`${
// // // // //                   isActive("/contact")
// // // // //                     ? "text-white font-semibold bg-[#bf3900]"
// // // // //                     : "text-black"
// // // // //                 } hover:text-white hover:font-semibold hover:bg-[#a4522f] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
// // // // //               >
// // // // //                 Contact
// // // // //               </Link>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Right Button */}
// // // // //           <div className="hidden md:flex items-center">
// // // // //             <Link
// // // // //               to="/contact"
// // // // //               className="bg-[#bf3900] cursor-pointer text-white px-4 py-2 rounded-md text-sm font-medium"
// // // // //             >
// // // // //               Get Started
// // // // //             </Link>
// // // // //           </div>

// // // // //           {/* Mobile menu button */}
// // // // //           <div className="md:hidden flex items-center">
// // // // //             <button
// // // // //               onClick={toggleNavbar}
// // // // //               className={`inline-flex items-center justify-center p-2 rounded-md hover:text-indigo-700 hover:bg-gray-100 focus:outline-none`}
// // // // //             >
// // // // //               <span className="sr-only">Open main menu</span>
// // // // //               {isOpen ? (
// // // // //                 <svg
// // // // //                   className="block h-6 w-6"
// // // // //                   xmlns="http://www.w3.org/2000/svg"
// // // // //                   fill="none"
// // // // //                   viewBox="0 0 24 24"
// // // // //                   stroke="currentColor"
// // // // //                   aria-hidden="true"
// // // // //                 >
// // // // //                   <path
// // // // //                     strokeLinecap="round"
// // // // //                     strokeLinejoin="round"
// // // // //                     strokeWidth={2}
// // // // //                     d="M6 18L18 6M6 6l12 12"
// // // // //                   />
// // // // //                 </svg>
// // // // //               ) : (
// // // // //                 <svg
// // // // //                   className="block h-6 w-6"
// // // // //                   xmlns="http://www.w3.org/2000/svg"
// // // // //                   fill="none"
// // // // //                   viewBox="0 0 24 24"
// // // // //                   stroke="currentColor"
// // // // //                   aria-hidden="true"
// // // // //                 >
// // // // //                   <path
// // // // //                     strokeLinecap="round"
// // // // //                     strokeLinejoin="round"
// // // // //                     strokeWidth={2}
// // // // //                     d="M4 6h16M4 12h16M4 18h16"
// // // // //                   />
// // // // //                 </svg>
// // // // //               )}
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //         <AnimatePresence>
// // // // //           {isOpen && (
// // // // //             <motion.div
// // // // //               className="md:hidden pb-3"
// // // // //               initial={{ opacity: 0, height: 0 }}
// // // // //               animate={{ opacity: 1, height: "auto" }}
// // // // //               exit={{ opacity: 0, height: 0 }}
// // // // //               transition={{ duration: 0.3, ease: "easeInOut" }}
// // // // //             >
// // // // //               <div className="px-2 pt-5 pb-1 space-y-1 sm:px-3 ">
// // // // //                 {links.map((link) => (
// // // // //                   <Link
// // // // //                     key={link.to}
// // // // //                     to={link.to}
// // // // //                     className={`block ${
// // // // //                       isActive(link.to)
// // // // //                         ? "text-white bg-[#bf3900] font-semibold"
// // // // //                         : "text-gray-500"
// // // // //                     } px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
// // // // //                   >
// // // // //                     {link.label}
// // // // //                   </Link>
// // // // //                 ))}
// // // // //               </div>
// // // // //               {/* <Link
// // // // //                   key={"/contact"}
// // // // //                   to={"/contact"}
// // // // //                   className={`block ${
// // // // //                     isActive('/contact')
// // // // //                       ? 'text-white bg-[#bf3900] font-semibold'
// // // // //                       : 'text-gray-500'
// // // // //                   } ${
// // // // //                     scrollPosition > 100 ? 'text-white' : ''
// // // // //                   } hover:bg-indigo-50 hover:text-indigo-700 ml-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
// // // // //                 >
// // // // //                   Contact
// // // // //                 </Link> */}
// // // // //             </motion.div>
// // // // //           )}
// // // // //         </AnimatePresence>
// // // // //       </div>

// // // // //       {/* Mobile menu, show/hide based on menu state */}
// // // // //     </nav>
// // // // //   );
// // // // // };
// // // // // export default Navbar;



// // // // import { useState, useEffect } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { Link, useLocation } from "react-router-dom";
// // // // import {
// // // //   NavigationMenu,
// // // //   NavigationMenuContent,
// // // //   NavigationMenuItem,
// // // //   NavigationMenuList,
// // // //   NavigationMenuTrigger,
// // // // } from "@/components/ui/navigation-menu";
// // // // import NavigationMenuDemo from "./NavigationMenu";

// // // // const Navbar = () => {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [scrolled, setScrolled] = useState(false);
// // // //   const [rendered, setRendered] = useState(false);
// // // //   const location = useLocation();

// // // //   const toggleNavbar = () => {
// // // //     setIsOpen(!isOpen);
// // // //   };

// // // //   // Function to check if the link is active
// // // //   const isActive = (path) => {
// // // //     return location.pathname === path;
// // // //   };

// // // //   // Function to handle scroll event
// // // //   const handleScroll = () => {
// // // //     if (window.scrollY > 20) {
// // // //       setScrolled(true);
// // // //     } else {
// // // //       setScrolled(false);
// // // //     }
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
// // // //   ];

// // // //   // Animation variants
// // // //   const navbarVariants = {
// // // //     hidden: { opacity: 0, y: -20 },
// // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// // // //   };

// // // //   const menuItemVariants = {
// // // //     hidden: { opacity: 0, y: -10 },
// // // //     visible: custom => ({
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       transition: { delay: custom * 0.1, duration: 0.3 }
// // // //     })
// // // //   };

// // // //   const logoVariants = {
// // // //     normal: { scale: 1 },
// // // //     hover: { scale: 1.05, transition: { duration: 0.3 } }
// // // //   };

// // // //   return (
// // // //     <motion.nav
// // // //       initial="hidden"
// // // //       animate="visible"
// // // //       variants={navbarVariants}
// // // //       className={`w-full sticky top-0 z-50 flex items-center justify-center transition-all duration-300`}
// // // //     >
// // // //       <div 
// // // //         className={`w-full md:w-[85%] py-4 md:py-5 px-4 md:px-8 lg:px-10 md:rounded-b-2xl z-50 transition-all duration-500 ${
// // // //           scrolled 
// // // //             ? "bg-white/95 backdrop-blur-md shadow-lg md:mt-0" 
// // // //             : "bg-white md:mt-4"
// // // //         }`}
// // // //       >
// // // //         <div className="flex justify-between items-center">
// // // //           {/* Logo */}
// // // //           <motion.div
// // // //             variants={logoVariants}
// // // //             initial="normal"
// // // //             whileHover="hover"
// // // //             className="flex-shrink-0"
// // // //           >
// // // //             <Link to="/" className="flex items-center space-x-2">
// // // //               <div className="bg-gradient-to-r from-orange-600 to-red-500 p-2 rounded-lg">
// // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// // // //                 </svg>
// // // //               </div>
// // // //               <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">BrandName</h1>
// // // //             </Link>
// // // //           </motion.div>

// // // //           {/* Desktop Navigation */}
// // // //           <div className="hidden md:flex items-center justify-center flex-1">
// // // //             <motion.div 
// // // //               className="flex space-x-1 lg:space-x-4"
// // // //               initial="hidden"
// // // //               animate="visible"
// // // //               variants={menuItemVariants}
// // // //             >
// // // //               {links.map((link, index) => (
// // // //                 <motion.div key={link.to} custom={index} variants={menuItemVariants}>
// // // //                   <Link
// // // //                     to={link.to}
// // // //                     className={`relative px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
// // // //                       isActive(link.to)
// // // //                         ? "text-orange-600 font-semibold"
// // // //                         : "text-gray-700 hover:text-orange-500"
// // // //                     }`}
// // // //                   >
// // // //                     {link.label}
// // // //                     {isActive(link.to) && (
// // // //                       <motion.div
// // // //                         layoutId="activeTab"
// // // //                         className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-600 to-red-500"
// // // //                         initial={{ opacity: 0 }}
// // // //                         animate={{ opacity: 1 }}
// // // //                         transition={{ duration: 0.3 }}
// // // //                       />
// // // //                     )}
// // // //                   </Link>
// // // //                 </motion.div>
// // // //               ))}
              
// // // //               <motion.div custom={4} variants={menuItemVariants}>
// // // //                 <div className="relative flex items-center">
// // // //                   <NavigationMenu>
// // // //                     <NavigationMenuList>
// // // //                       <NavigationMenuItem>
// // // //                         <NavigationMenuTrigger className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
// // // //                           isActive("/courses") ? "text-orange-600 font-semibold" : "text-gray-700 hover:text-orange-500"
// // // //                         }`}>
// // // //                           Courses
// // // //                         </NavigationMenuTrigger>
// // // //                         <NavigationMenuContent>
// // // //                           <div className="flex flex-col bg-white shadow-xl rounded-lg border border-gray-100 backdrop-blur-sm gap-3 py-4 px-3 min-w-[220px]">
// // // //                             <NavigationMenuDemo />
// // // //                           </div>
// // // //                         </NavigationMenuContent>
// // // //                       </NavigationMenuItem>
// // // //                     </NavigationMenuList>
// // // //                   </NavigationMenu>
// // // //                   {isActive("/courses") && (
// // // //                     <motion.div
// // // //                       layoutId="activeTab"
// // // //                       className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-orange-600 to-red-500"
// // // //                     />
// // // //                   )}
// // // //                 </div>
// // // //               </motion.div>
// // // //             </motion.div>
// // // //           </div>

// // // //           {/* Right Button */}
// // // //           <motion.div 
// // // //             className="hidden md:flex items-center"
// // // //             variants={menuItemVariants}
// // // //             custom={5}
// // // //           >
// // // //             <Link
// // // //               to="/contact"
// // // //               className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
// // // //             >
// // // //               <span className="relative z-10">Get Started</span>
// // // //               <motion.span 
// // // //                 className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
// // // //                 initial={{ scale: 0 }}
// // // //                 whileHover={{ scale: 1.5, opacity: 0.2 }}
// // // //                 transition={{ duration: 0.4 }}
// // // //               />
// // // //             </Link>
// // // //           </motion.div>

// // // //           {/* Mobile menu button */}
// // // //           <div className="md:hidden flex items-center">
// // // //             <motion.button
// // // //               onClick={toggleNavbar}
// // // //               whileTap={{ scale: 0.95 }}
// // // //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none transition-colors duration-200"
// // // //             >
// // // //               <span className="sr-only">Open main menu</span>
// // // //               {isOpen ? (
// // // //                 <svg
// // // //                   className="block h-6 w-6"
// // // //                   xmlns="http://www.w3.org/2000/svg"
// // // //                   fill="none"
// // // //                   viewBox="0 0 24 24"
// // // //                   stroke="currentColor"
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
// // // //                 >
// // // //                   <path
// // // //                     strokeLinecap="round"
// // // //                     strokeLinejoin="round"
// // // //                     strokeWidth={2}
// // // //                     d="M4 6h16M4 12h16M4 18h16"
// // // //                   />
// // // //                 </svg>
// // // //               )}
// // // //             </motion.button>
// // // //           </div>
// // // //         </div>
// // // //         {/* Mobile menu */}
// // // //         <AnimatePresence>
// // // //           {isOpen && (
// // // //             <motion.div
// // // //               className="md:hidden pt-3"
// // // //               initial={{ opacity: 0, height: 0 }}
// // // //               animate={{ opacity: 1, height: "auto" }}
// // // //               exit={{ opacity: 0, height: 0 }}
// // // //               transition={{ duration: 0.3, ease: "easeInOut" }}
// // // //             >
// // // //               <motion.div 
// // // //                 className="px-2 pt-2 pb-3 space-y-2 border-t border-gray-100 mt-3"
// // // //                 initial="hidden"
// // // //                 animate="visible"
// // // //                 variants={menuItemVariants}
// // // //               >
// // // //                 {links.map((link, index) => (
// // // //                   <motion.div key={link.to} custom={index} variants={menuItemVariants}>
// // // //                     <Link
// // // //                       to={link.to}
// // // //                       className={`block transition-colors duration-200 px-4 py-2.5 rounded-lg ${
// // // //                         isActive(link.to)
// // // //                           ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
// // // //                           : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
// // // //                       }`}
// // // //                       onClick={() => setIsOpen(false)}
// // // //                     >
// // // //                       {link.label}
// // // //                     </Link>
// // // //                   </motion.div>
// // // //                 ))}
                
// // // //                 <motion.div custom={4} variants={menuItemVariants}>
// // // //                   <Link
// // // //                     to="/courses"
// // // //                     className={`block transition-colors duration-200 px-4 py-2.5  rounded-lg ${
// // // //                       isActive("/courses")
// // // //                         ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
// // // //                         : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
// // // //                     }`}
// // // //                     onClick={() => setIsOpen(false)}
// // // //                   >
// // // //                     Courses
// // // //                   </Link>
// // // //                 </motion.div>
                
// // // //                 <motion.div custom={5} variants={menuItemVariants} className="pt-2">
// // // //                   <Link
// // // //                     to="/contact"
// // // //                     className="block w-full text-center bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
// // // //                     onClick={() => setIsOpen(false)}
// // // //                   >
// // // //                     Get Started
// // // //                   </Link>
// // // //                 </motion.div>
// // // //               </motion.div>
// // // //             </motion.div>
// // // //           )}
// // // //         </AnimatePresence>
// // // //       </div>
// // // //     </motion.nav>
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
// // //       className="w-full sticky top-0 z-50 flex items-center justify-center transition-all duration-300"
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
// // //           <div className="hidden md:flex items-center justify-center">
// // //             <ul className="flex space-x-1 lg:space-x-2">
// // //               {links.map((link, index) => (
// // //                 <motion.li key={link.to} custom={index} variants={menuItemVariants} className="flex items-center">
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
// // //                 </motion.li>
// // //               ))}
              
// // //               <motion.li custom={4} variants={menuItemVariants} className="flex items-center">
// // //                 <NavigationMenu>
// // //                   <NavigationMenuList>
// // //                     <NavigationMenuItem>
// // //                       <NavigationMenuTrigger className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
// // //                         isActive("/courses") ? "text-orange-600 font-semibold" : "text-gray-700 hover:text-orange-500"
// // //                       }`}>
// // //                         Courses
// // //                       </NavigationMenuTrigger>
// // //                       <NavigationMenuContent>
// // //                         <div className="flex flex-col bg-white shadow-xl rounded-lg border border-gray-100 backdrop-blur-sm gap-3 py-4 px-3 min-w-[220px]">
// // //                           <NavigationMenuDemo />
// // //                         </div>
// // //                       </NavigationMenuContent>
// // //                     </NavigationMenuItem>
// // //                   </NavigationMenuList>
// // //                 </NavigationMenu>
// // //                 {isActive("/courses") && (
// // //                   <motion.div
// // //                     layoutId="activeTab"
// // //                     className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-orange-600 to-red-500"
// // //                   />
// // //                 )}
// // //               </motion.li>
// // //             </ul>
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
// // //                     className={`block transition-colors duration-200 px-4 py-2.5 rounded-lg ${
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

// //           {/* Desktop Navigation - Only visible on large screens (lg and above) */}
// //           <div className="hidden lg:flex items-center justify-center">
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

// //           {/* Right Button - Only visible on large screens */}
// //           <motion.div 
// //             className="hidden lg:flex items-center"
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

// //           {/* Mobile & Tablet menu button - Visible on small and medium screens (below lg) */}
// //           <div className="lg:hidden flex items-center">
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
        
// //         {/* Mobile & Tablet menu - Visible on small and medium screens (md and below) */}
// //         <AnimatePresence>
// //           {isOpen && (
// //             <motion.div
// //               className="lg:hidden pt-3"
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
//         className={`w-full md:w-[85%] md:py-5 py-6 px-4 md:px-8 lg:px-10 md:rounded-b-2xl z-50 transition-all duration-500 ${
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
//               <img src="/ozLearningLogoNew.jpg" alt="" className="w-20 h-20"/>
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
//               className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white px-5 py-2 .5 rounded-full  text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
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
//                   <div className="block transition-colors duration-200 px-4 py-2.5 rounded-lg">
//                     <div className="mb-2">
//                       <div className={`flex justify-between items-center ${
//                         isActive("/courses")
//                           ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
//                           : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
//                       }`}>
//                         <span>Courses</span>
//                       </div>
//                     </div>
//                     <div className="pl-3 border-l-2 border-gray-200">
//                       <NavigationMenuDemo />
//                     </div>
//                   </div>
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


// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, useLocation, useNavigate } from "react-router-dom";
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
//   const [navbarVisible, setNavbarVisible] = useState(true);
//   const location = useLocation();
//   const navigate = useNavigate();

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

//   // Reset navbar visibility when location changes
//   useEffect(() => {
//     setNavbarVisible(true);
//   }, [location.pathname]);

//   const links = [
//     { to: "/", label: "Home" },
//     { to: "/about", label: "About" },
//     { to: "/services", label: "Services" },
//     { to: "/contact", label: "Contact" },
//   ];

//   // Handler for navigation menu item clicks
//   const handleMenuItemClick = (path) => {
//     setIsOpen(false);
//     setNavbarVisible(false);
//     navigate(path);
//   };

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

//   if (!navbarVisible) {
//     return null; // Don't render the navbar when it should be hidden
//   }

//   return (
//     <motion.nav
//       initial="hidden"
//       animate="visible"
//       variants={navbarVariants}
//       className="w-full sticky top-0 z-50 flex items-center justify-center transition-all duration-300"
//     >
//       <div 
//         className={`w-full md:w-[85%] md:py-5 py-4 px-4 md:px-8 lg:px-10 md:rounded-b-2xl z-50 transition-all duration-500 ${
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
//             <Link to="/" className="flex items-center">
//               <img src="/ozLearningLogoNew.jpg" alt="" className="w-16 h-16 md:w-20 md:h-20"/>
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
//                     onClick={() => handleMenuItemClick(link.to)}
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
//                           <NavigationMenuDemo onItemClick={() => setNavbarVisible(false)} />
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
//               onClick={() => handleMenuItemClick('/contact')}
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
//               className="lg:hidden pt-2"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//               <motion.div 
//                 className="px-2 pt-2 pb-3 space-y-2 border-t border-gray-100 mt-2"
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
//                       onClick={() => handleMenuItemClick(link.to)}
//                     >
//                       {link.label}
//                     </Link>
//                   </motion.div>
//                 ))}
                
//                 <motion.div custom={4} variants={menuItemVariants}>
//                   <div className="block transition-colors duration-200 px-4 py-2.5 rounded-lg">
//                     <div className="mb-2">
//                       <div className={`flex justify-between items-center ${
//                         isActive("/courses")
//                           ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
//                           : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
//                       }`}>
//                         <span>Courses</span>
//                       </div>
//                     </div>
//                     <div className="pl-3 border-l-2 border-gray-200">
//                       <NavigationMenuDemo onItemClick={() => setNavbarVisible(false)} />
//                     </div>
//                   </div>
//                 </motion.div>
                
//                 <motion.div custom={5} variants={menuItemVariants} className="pt-2">
//                   <Link
//                     to="/contact"
//                     className="block w-full text-center bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
//                     onClick={() => handleMenuItemClick('/contact')}
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






// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Link, useLocation, useNavigate } from "react-router-dom"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"
// import NavigationMenuDemo from "./NavigationMenu"

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [navbarVisible, setNavbarVisible] = useState(true)
//   const location = useLocation()
//   const navigate = useNavigate()

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen)
//   }

//   // Function to check if the link is active
//   const isActive = (path) => {
//     return location.pathname === path
//   }

//   // Function to handle scroll event
//   const handleScroll = () => {
//     if (window.scrollY > 20) {
//       setScrolled(true)
//     } else {
//       setScrolled(false)
//     }
//   }

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   // Reset navbar visibility when location changes
//   useEffect(() => {
//     setNavbarVisible(true)
//   }, [location.pathname])

//   const links = [
//     { to: "/", label: "Home" },
//     { to: "/about", label: "About" },
//     { to: "/services", label: "Services" },
//     { to: "/contact", label: "Contact" },
//   ]

//   // Handler for navigation menu item clicks
//   const handleMenuItemClick = (path) => {
//     setIsOpen(false)
//     setNavbarVisible(false)
//     navigate(path)
//   }

//   // Handler for course menu item clicks
//   const handleCourseItemClick = () => {
//     setIsOpen(false)
//     setNavbarVisible(false)
//   }

//   // Animation variants
//   const navbarVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   }

//   const menuItemVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: (custom) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: custom * 0.1, duration: 0.3 },
//     }),
//   }

//   const logoVariants = {
//     normal: { scale: 1 },
//     hover: { scale: 1.05, transition: { duration: 0.3 } },
//   }

//   if (!navbarVisible) {
//     return null // Don't render the navbar when it should be hidden
//   }

//   return (
//     <motion.nav
//       initial="hidden"
//       animate="visible"
//       variants={navbarVariants}
//       className="w-full sticky top-0 z-50 flex items-center justify-center transition-all duration-300"
//     >
//       <div
//         className={`w-full md:w-[85%] md:py-5 py-4 px-4 md:px-8 lg:px-10 md:rounded-b-2xl z-50 transition-all duration-500 ${
//           scrolled ? "bg-white/95 backdrop-blur-md shadow-lg md:mt-0" : "bg-white md:mt-4"
//         }`}
//       >
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <motion.div variants={logoVariants} initial="normal" whileHover="hover" className="flex-shrink-0">
//             <Link to="/" className="flex items-center">
//               <img src="/ozLearningLogoNew.jpg" alt="Logo" className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
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
//                       isActive(link.to) ? "text-orange-600 font-semibold" : "text-gray-700 hover:text-orange-500"
//                     }`}
//                     onClick={() => handleMenuItemClick(link.to)}
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
//                       <NavigationMenuTrigger
//                         className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
//                           isActive("/courses") ? "text-orange-600 font-semibold" : "text-gray-700 hover:text-orange-500"
//                         }`}
//                       >
//                         Courses
//                       </NavigationMenuTrigger>
//                       <NavigationMenuContent>
//                         <div className="flex flex-col bg-white shadow-xl rounded-lg border border-gray-100 backdrop-blur-sm gap-3 py-4 px-3 min-w-[220px]">
//                           <NavigationMenuDemo onItemClick={handleCourseItemClick} />
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
//           <motion.div className="hidden lg:flex items-center" variants={menuItemVariants} custom={5}>
//             <Link
//               to="/contact"
//               className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
//               onClick={() => handleMenuItemClick("/contact")}
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
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </motion.button>
//           </div>
//         </div>

//         {/* Mobile & Tablet menu - Visible on small and medium screens (md and below) */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               className="lg:hidden pt-2"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//               <motion.div
//                 className="px-2 pt-2 pb-3 space-y-2 border-t border-gray-100 mt-2"
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
//                       onClick={() => handleMenuItemClick(link.to)}
//                     >
//                       {link.label}
//                     </Link>
//                   </motion.div>
//                 ))}

//                 <motion.div custom={4} variants={menuItemVariants}>
//                   <div className="block transition-colors duration-200 px-4 py-2.5 rounded-lg">
//                     <div className="mb-2">
//                       <div
//                         className={`flex justify-between items-center ${
//                           isActive("/courses")
//                             ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
//                             : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
//                         }`}
//                       >
//                         <span>Courses</span>
//                       </div>
//                     </div>
//                     <div className="pl-3 border-l-2 border-gray-200">
//                       <NavigationMenuDemo onItemClick={handleCourseItemClick} />
//                     </div>
//                   </div>
//                 </motion.div>

//                 <motion.div custom={5} variants={menuItemVariants} className="pt-2">
//                   <Link
//                     to="/contact"
//                     className="block w-full text-center bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
//                     onClick={() => handleMenuItemClick("/contact")}
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
//   )
// }

// export default Navbar



// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Link, useLocation, useNavigate } from "react-router-dom"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"
// import NavigationMenuDemo from "./NavigationMenu"

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [navbarVisible, setNavbarVisible] = useState(true)
//   const [coursesExpanded, setCoursesExpanded] = useState(false)
//   const location = useLocation()
//   const navigate = useNavigate()

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen)
//   }

//   const toggleCourses = () => {
//     setCoursesExpanded(!coursesExpanded)
//   }

//   // Function to check if the link is active
//   const isActive = (path) => {
//     return location.pathname === path
//   }

//   // Function to handle scroll event
//   const handleScroll = () => {
//     if (window.scrollY > 20) {
//       setScrolled(true)
//     } else {
//       setScrolled(false)
//     }
//   }

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   // Reset navbar visibility when location changes
//   useEffect(() => {
//     setNavbarVisible(true)
//     setIsOpen(false)
//     setCoursesExpanded(false)
//   }, [location.pathname])

//   const links = [
//     { to: "/", label: "Home" },
//     { to: "/about", label: "About" },
//     { to: "/services", label: "Services" },
//     { to: "/contact", label: "Contact" },
//   ]

//   // Handler for navigation menu item clicks
//   const handleMenuItemClick = (path) => {
//     setIsOpen(false)
//     setNavbarVisible(false)
//     setCoursesExpanded(false)
//     navigate(path)
//   }

//   // Handler for course menu item clicks
//   const handleCourseItemClick = () => {
//     setIsOpen(false)
//     setNavbarVisible(false)
//     setCoursesExpanded(false)
//   }

//   // Animation variants
//   const navbarVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   }

//   const menuItemVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: (custom) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: custom * 0.1, duration: 0.3 },
//     }),
//   }

//   const logoVariants = {
//     normal: { scale: 1 },
//     hover: { scale: 1.05, transition: { duration: 0.3 } },
//   }

//   const mobileMenuVariants = {
//     hidden: { opacity: 0, height: 0 },
//     visible: { 
//       opacity: 1, 
//       height: "auto",
//       transition: { 
//         duration: 0.3, 
//         ease: "easeInOut",
//         staggerChildren: 0.1
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       height: 0,
//       transition: { 
//         duration: 0.2,
//         ease: "easeInOut"
//       }
//     }
//   }

//   const mobileItemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { 
//       opacity: 1, 
//       x: 0,
//       transition: { duration: 0.3 }
//     }
//   }

//   if (!navbarVisible) {
//     return null
//   }

//   return (
//     <motion.nav
//       initial="hidden"
//       animate="visible"
//       variants={navbarVariants}
//       className="w-full sticky top-0 z-50 flex items-center justify-center transition-all duration-300"
//     >
//       <div
//         className={`w-full md:w-[90%] lg:w-[85%] transition-all duration-500 ${
//           scrolled 
//             ? "bg-white/95 backdrop-blur-md shadow-lg md:rounded-b-2xl" 
//             : "bg-white md:mt-4 md:rounded-b-2xl shadow-sm"
//         }`}
//       >
//         {/* Main Navbar Content */}
//         <div className="px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5">
//           <div className="flex justify-between items-center">
//             {/* Logo */}
//             <motion.div 
//               variants={logoVariants} 
//               initial="normal" 
//               whileHover="hover" 
//               className="flex-shrink-0"
//             >
//               <Link to="/" className="flex items-center">
//                 <img 
//                   src="/ozLearningLogoNew.jpg" 
//                   alt="Logo" 
//                   className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg" 
//                 />
//               </Link>
//             </motion.div>

//             {/* Desktop Navigation - Hidden on tablet and mobile */}
//             <div className="hidden lg:flex items-center justify-center">
//               <ul className="flex space-x-1 xl:space-x-2">
//                 {links.map((link, index) => (
//                   <motion.li key={link.to} custom={index} variants={menuItemVariants}>
//                     <Link
//                       to={link.to}
//                       className={`relative px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
//                         isActive(link.to) 
//                           ? "text-orange-600 font-semibold bg-orange-50" 
//                           : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
//                       }`}
//                       onClick={() => handleMenuItemClick(link.to)}
//                     >
//                       {link.label}
//                       {isActive(link.to) && (
//                         <motion.div
//                           layoutId="activeTab"
//                           className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-orange-600 to-red-500"
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           transition={{ duration: 0.3 }}
//                         />
//                       )}
//                     </Link>
//                   </motion.li>
//                 ))}

//                 <motion.li custom={4} variants={menuItemVariants}>
//                   <NavigationMenu>
//                     <NavigationMenuList>
//                       <NavigationMenuItem>
//                         <NavigationMenuTrigger
//                           className={`px-4 pb-8  rounded-lg text-base font-medium transition-all duration-300 ${
//                             location.pathname.includes("/courses") 
//                               ? "text-orange-600 font-semibold bg-orange-50" 
//                               : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
//                           }`}
//                         >
//                           Courses
//                         </NavigationMenuTrigger>
//                         <NavigationMenuContent>
//                           <div className="flex flex-col bg-white shadow-xl rounded-xl border border-gray-100 backdrop-blur-sm gap-3 py-6 px-4 min-w-[240px]">
//                             <NavigationMenuDemo onItemClick={handleCourseItemClick} />
//                           </div>
//                         </NavigationMenuContent>
//                       </NavigationMenuItem>
//                     </NavigationMenuList>
//                   </NavigationMenu>
//                   {location.pathname.includes("/courses") && (
//                     <motion.div
//                       layoutId="activeTab"
//                       className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-orange-600 to-red-500"
//                     />
//                   )}
//                 </motion.li>
//               </ul>
//             </div>

//             {/* Desktop CTA Button */}
//             <motion.div className="hidden lg:flex items-center" variants={menuItemVariants} custom={5}>
//               <Link
//                 to="/contact"
//                 className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
//                 onClick={() => handleMenuItemClick("/contact")}
//               >
//                 <span className="relative z-10">Get Started</span>
//                 <motion.span
//                   className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
//                   initial={{ scale: 0 }}
//                   whileHover={{ scale: 1.5, opacity: 0.2 }}
//                   transition={{ duration: 0.4 }}
//                 />
//               </Link>
//             </motion.div>

//             {/* Mobile & Tablet menu button */}
//             <div className="lg:hidden flex items-center">
//               <motion.button
//                 onClick={toggleNavbar}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center justify-center p-2.5 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none transition-colors duration-200"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 <motion.div
//                   animate={{ rotate: isOpen ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {isOpen ? (
//                     <svg
//                       className="block h-6 w-6"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   ) : (
//                     <svg
//                       className="block h-6 w-6"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                     </svg>
//                   )}
//                 </motion.div>
//               </motion.button>
//             </div>
//           </div>

//           {/* Tablet Navigation - Visible only on medium screens (md but not lg) */}
//           <div className="hidden md:flex lg:hidden mt-4 pt-4 border-t border-gray-100">
//             <div className="flex flex-wrap items-center justify-center gap-2 w-full">
//               {links.map((link, index) => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
//                     isActive(link.to)
//                       ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
//                       : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
//                   }`}
//                   onClick={() => handleMenuItemClick(link.to)}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
              
//               <NavigationMenu>
//                 <NavigationMenuList>
//                   <NavigationMenuItem>
//                     <NavigationMenuTrigger
//                       className={`px-8  py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
//                         location.pathname.includes("/courses")
//                           ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
//                           : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
//                       }`} 
//                     >
//                       Courses
//                     </NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                       <div className="flex flex-col bg-white shadow-xl rounded-xl border border-gray-100 backdrop-blur-sm gap-3 py-4 px-3 min-w-[200px]">
//                         <NavigationMenuDemo onItemClick={handleCourseItemClick} />
//                       </div>
//                     </NavigationMenuContent>
//                   </NavigationMenuItem>
//                 </NavigationMenuList>
//               </NavigationMenu>

//               <Link
//                 to="/contact"
//                 className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200"
//                 onClick={() => handleMenuItemClick("/contact")}
//               >
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu - Visible only on small screens */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               className="md:hidden"
//               variants={mobileMenuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               <div className="px-4 py-3 space-y-1 bg-gray-50 border-t border-gray-200">
//                 {links.map((link, index) => (
//                   <motion.div key={link.to} variants={mobileItemVariants}>
//                     <Link
//                       to={link.to}
//                       className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
//                         isActive(link.to)
//                           ? "bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-md"
//                           : "text-gray-700 hover:bg-white hover:text-orange-500 hover:shadow-sm"
//                       }`}
//                       onClick={() => handleMenuItemClick(link.to)}
//                     >
//                       <span>{link.label}</span>
//                       {isActive(link.to) && (
//                         <motion.div
//                           className="ml-auto"
//                           initial={{ scale: 0 }}
//                           animate={{ scale: 1 }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                             <path
//                               fillRule="evenodd"
//                               d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </motion.div>
//                       )}
//                     </Link>
//                   </motion.div>
//                 ))}

//                 {/* Courses section with expandable menu */}
//                 <motion.div variants={mobileItemVariants}>
//                   <button
//                     onClick={toggleCourses}
//                     className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
//                       location.pathname.includes("/courses")
//                         ? "bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-md"
//                         : "text-gray-700 hover:bg-white hover:text-orange-500 hover:shadow-sm"
//                     }`}
//                   >
//                     <span>Courses</span>
//                     <motion.svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       animate={{ rotate: coursesExpanded ? 180 : 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </motion.svg>
//                   </button>
                  
//                   <AnimatePresence>
//                     {coursesExpanded && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.2 }}
//                         className="ml-4 mt-2 pl-4 border-l-2 border-orange-200"
//                       >
//                         <NavigationMenuDemo onItemClick={handleCourseItemClick} />
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>

//                 {/* Mobile CTA Button */}
//                 <motion.div variants={mobileItemVariants} className="pt-3">
//                   <Link
//                     to="/contact"
//                     className="flex items-center justify-center w-full bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
//                     onClick={() => handleMenuItemClick("/contact")}
//                   >
//                     <span>Get Started</span>
//                     <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                     </svg>
//                   </Link>
//                 </motion.div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   )
// }
// export default Navbar










import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation, useNavigate } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import NavigationMenuDemo from "./NavigationMenu"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [navbarVisible, setNavbarVisible] = useState(true)
  const [coursesExpanded, setCoursesExpanded] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Phone number for the call button
  const phoneNumber = "9171453224" // Replace with your actual phone number

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  const toggleCourses = () => {
    setCoursesExpanded(!coursesExpanded)
  }

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path
  }

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Reset navbar visibility when location changes
  useEffect(() => {
    setNavbarVisible(true)
    setIsOpen(false)
    setCoursesExpanded(false)
  }, [location.pathname])

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ]

  // Handler for navigation menu item clicks
  const handleMenuItemClick = (path) => {
    setIsOpen(false)
    setNavbarVisible(false)
    setCoursesExpanded(false)
    navigate(path)
  }

  // Handler for course menu item clicks
  const handleCourseItemClick = () => {
    setIsOpen(false)
    setNavbarVisible(false)
    setCoursesExpanded(false)
  }

  // Handler for phone call
  const handlePhoneCall = () => {
    window.open(`tel:${phoneNumber}`, '_self')
  }

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.3 },
    }),
  }

  const logoVariants = {
    normal: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3, 
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  }

  const phoneButtonVariants = {
    normal: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(251, 146, 60, 0.3)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  }

  if (!navbarVisible) {
    return null
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="w-full sticky top-0 z-50 flex items-center justify-center transition-all duration-300"
    >
      <div
        className={`w-full md:w-[90%] lg:w-[85%] transition-all duration-500 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg md:rounded-b-2xl" 
            : "bg-white md:mt-4 md:rounded-b-2xl shadow-sm"
        }`}
      >
        {/* Main Navbar Content */}
        <div className="px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              variants={logoVariants} 
              initial="normal" 
              whileHover="hover" 
              className="flex-shrink-0"
            >
              <Link to="/" className="flex items-center">
                <img 
                  src="/ozLearningLogoNew.jpg" 
                  alt="Logo" 
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg" 
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation - Hidden on tablet and mobile */}
            <div className="hidden lg:flex items-center justify-center">
              <ul className="flex space-x-1 xl:space-x-2">
                {links.map((link, index) => (
                  <motion.li key={link.to} custom={index} variants={menuItemVariants}>
                    <Link
                      to={link.to}
                      className={`relative px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                        isActive(link.to) 
                          ? "text-orange-600 font-semibold bg-orange-50" 
                          : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                      }`}
                      onClick={() => handleMenuItemClick(link.to)}
                    >
                      {link.label}
                      {isActive(link.to) && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-orange-600 to-red-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}

                <motion.li custom={4} variants={menuItemVariants}>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger
                          className={`px-4 pb-8  rounded-lg text-base font-medium transition-all duration-300 ${
                            location.pathname.includes("/courses") 
                              ? "text-orange-600 font-semibold bg-orange-50" 
                              : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                          }`}
                        >
                          Courses
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="flex flex-col bg-white shadow-xl rounded-xl border border-gray-100 backdrop-blur-sm gap-3 py-6 px-4 min-w-[240px]">
                            <NavigationMenuDemo onItemClick={handleCourseItemClick} />
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  {location.pathname.includes("/courses") && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-orange-600 to-red-500"
                    />
                  )}
                </motion.li>
              </ul>
            </div>

            {/* Desktop CTA Button */}
            <motion.div className="hidden lg:flex items-center" variants={menuItemVariants} custom={5}>
              <Link
                to="/contact"
                className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
                onClick={() => handleMenuItemClick("/contact")}
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

            {/* Tablet Phone Button - Visible only on medium screens (md but not lg) */}
            <motion.div 
              className="hidden md:flex lg:hidden items-center"
              variants={phoneButtonVariants}
              initial="normal"
              whileHover="hover"
              whileTap="tap"
            >
              <button
                onClick={handlePhoneCall}
                className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-400 text-orange-600hover:from-amber-400 hover:to-amber-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center space-x-2"
              >
                {/* Phone icon with animation */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    ease: "easeInOut" 
                  }}
                  className="relative z-10"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                </motion.div>
                
                {/* Phone number text */}
                <span className="relative z-10 font-medium text-sm">
                  {phoneNumber}
                </span>
                
                {/* Animated background highlight */}
                <motion.span
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1.5, rotate: 0, opacity: 0.2 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Pulse effect */}
                <motion.span
                  className="absolute inset-0 bg-red-400 rounded-full opacity-75"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </button>
            </motion.div>

            {/* Mobile menu button - Visible only on small screens */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={toggleNavbar}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center p-2.5 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none transition-colors duration-200"
              >
                <span className="sr-only">Open main menu</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Tablet Navigation - Visible only on medium screens (md but not lg) */}
          <div className="hidden md:flex lg:hidden mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap items-center justify-center gap-2 w-full">
              {links.map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(link.to)
                      ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
                      : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                  }`}
                  onClick={() => handleMenuItemClick(link.to)}
                >
                  {link.label}
                </Link>
              ))}
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`px-8  py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                        location.pathname.includes("/courses")
                          ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold"
                          : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                      }`} 
                    >
                      Courses
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex flex-col bg-white shadow-xl rounded-xl border border-gray-100 backdrop-blur-sm gap-3 py-4 px-3 min-w-[200px]">
                        <NavigationMenuDemo onItemClick={handleCourseItemClick} />
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200"
                onClick={() => handleMenuItemClick("/contact")}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu - Visible only on small screens */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-4 py-3 space-y-1 bg-gray-50 border-t border-gray-200">
                {links.map((link, index) => (
                  <motion.div key={link.to} variants={mobileItemVariants}>
                    <Link
                      to={link.to}
                      className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        isActive(link.to)
                          ? "bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-md"
                          : "text-gray-700 hover:bg-white hover:text-orange-500 hover:shadow-sm"
                      }`}
                      onClick={() => handleMenuItemClick(link.to)}
                    >
                      <span>{link.label}</span>
                      {isActive(link.to) && (
                        <motion.div
                          className="ml-auto"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </motion.div>
                      )}
                    </Link>
                  </motion.div>
                ))}

                {/* Courses section with expandable menu */}
                <motion.div variants={mobileItemVariants}>
                  <button
                    onClick={toggleCourses}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      location.pathname.includes("/courses")
                        ? "bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-md"
                        : "text-gray-700 hover:bg-white hover:text-orange-500 hover:shadow-sm"
                    }`}
                  >
                    <span>Courses</span>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: coursesExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  
                  <AnimatePresence>
                    {coursesExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 mt-2 pl-4 border-l-2 border-orange-200"
                      >
                        <NavigationMenuDemo onItemClick={handleCourseItemClick} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Mobile Phone Call Button */}
                <motion.div variants={mobileItemVariants}>
                  <button
                    onClick={handlePhoneCall}
                    className="flex items-center justify-center w-full bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call {phoneNumber}</span>
                  </button>
                </motion.div>

                {/* Mobile CTA Button */}
                <motion.div variants={mobileItemVariants} className="pt-3">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center w-full bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                    onClick={() => handleMenuItemClick("/contact")}
                  >
                    <span>Get Started</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
export default Navbar