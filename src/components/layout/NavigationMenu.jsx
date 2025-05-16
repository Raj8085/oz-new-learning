// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { ChevronDown } from "lucide-react";
// import ReactDOM from "react-dom";
// import { useNavigate } from "react-router-dom";


// const SubMenu = ({ subItems, position, closeMenu }) => {
//   const navigate = useNavigate();

//   const handleItemClick = (subItem) => {
//     if (subItem.path) {
//       navigate(subItem.path);
//       closeMenu(); // Close submenu on click
//     }
//   };

//   return ReactDOM.createPortal(
//     <motion.div
//       className="bg-white shadow-lg rounded-md z-[9999]"
//       style={{
//         position: "fixed",
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//         width: "180px",
//       }}
//       initial={{ opacity: 0, x: -10 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: -10 }}
//       transition={{ duration: 0.2 }}
//     >
//       {subItems.map((subItem) => (
//         <div
//           key={subItem.id}
//           className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
//           onClick={() => handleItemClick(subItem)}
//         >
//           {subItem.title}
//         </div>
//       ))}
//     </motion.div>,
//     document.body
//   );
// };

// const NavigationMenuDemo = () => {
//   const navigate = useNavigate();
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
//   const menuItemRefs = useRef({});


//   const menuItems = [
//     {
//       id: 1,
//       title: "App Development",
//       hasSubItems: true,
//       subItems: [
//         { id: 101, title: "iOS Development", path: "/appdevelopment" },
//         { id: 102, title: "Android Development", path: "/appdevelopment" },
//         { id: 103, title: "Flutter", path: "/appdevelopment" },
//         { id: 104, title: "React Native", path: "/appdevelopment" },
//       ],
      
//     },
//     {
//       id: 2,
//       title: "Web Development",
//       hasSubItems: true,
//       subItems: [
//         { id: 201, title: "Frontend", path: "/frontend" },
//         { id: 202, title: "Backend", path: "/backend" },
//         { id: 203, title: "Full Stack", path: "/fullstack" },
//       ],
//     },
//     {
//       id: 3,
//       title: "Java Development",
//       hasSubItems: true,
//       subItems: [
//         { id: 401, title: "Spring Boot", path: "/java" },
//         { id: 402, title: "Hibernate", path: "/java" },
//         { id: 403, title: "JavaFX", path: "/java" },
//       ],
//     },
//     {
//       id: 4,
//       title: "React Development",
//       hasSubItems: false,
//       path: "/react",
//     },
//     {
//       id: 5,
//       title: "Python Development",
//       hasSubItems: false,
//       path: "/python",
//     },
//     {
//       id: 6,
//       title: "AI/ML",
//       hasSubItems: false,
//       path: "/alml",
//     },
//     {
//       id: 7,
//       title: "DSA/C++",
//       hasSubItems: false,
//       path: "/dsa",
//     },
//   ];
  


//   // Menu items
//   // const menuItems = [
//   //   {
//   //     id: 1,
//   //     title: "App Development",
//   //     hasSubItems: true,
//   //     subItems: [
//   //       { id: 101, title: "iOS Development" },
//   //       { id: 102, title: "Android Development" },
//   //       { id: 103, title: "Flutter" },
//   //       { id: 104, title: "React Native" },
//   //     ],
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Web Development",
//   //     hasSubItems: true,
//   //     subItems: [
//   //       { id: 201, title: "Frontend" },
//   //       { id: 202, title: "Backend" },
//   //       { id: 203, title: "Full Stack" },
//   //     ],
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "React Development",
//   //     hasSubItems: false, // No subitems
//   //     subItems: [],
//   //   },
//   //   {
//   //     id: 4,
//   //     title: "Java Development",
//   //     hasSubItems: true,
//   //     subItems: [
//   //       { id: 401, title: "Spring Boot" },
//   //       { id: 402, title: "Hibernate" },
//   //       { id: 403, title: "JavaFX" },
//   //     ],
//   //   },
//   //   {
//   //     id: 5,
//   //     title: "Python Development",
//   //   },
//   //   {
//   //     id: 6,
//   //     title: "DSA/C++",
//   //   },
    
//   // ];

//   const handleMouseEnter = (id) => {
//     const element = menuItemRefs.current[id];
//     if (element) {
//       const rect = element.getBoundingClientRect();
//       setMenuPosition({
//         x: rect.right,
//         y: rect.top,
//       });
//       setHoveredItem(id);
//     }
//   };

//   // ✅ Handle click for items **without** subitems
//   // const handleDirectClick = (item) => {
//   //   if (!item.hasSubItems) {
//   //     navigate(`/form`);
//   //   }
//   // };

//   const handleDirectClick = (item) => {
//     if (!item.hasSubItems && item.path) {
//       navigate(item.path);
//     }
//   };
//   return (
//     <div className="w-60">
//       {menuItems.map((item) => (
//         <div
//           key={item.id}
//           className="relative"
//           ref={(el) => (menuItemRefs.current[item.id] = el)}
//           onMouseEnter={() => handleMouseEnter(item.id)}
//           onMouseLeave={() => setHoveredItem(null)}
//           onClick={() => handleDirectClick(item)} // ✅ Direct click for items without subitems
//         >
//           <div className="w-full p-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
//             <p>{item.title}</p>
//             {item.hasSubItems && <ChevronDown className="ml-2 h-4 w-4" />}
//           </div>

//           {/* SubMenu Component */}
//           {item.hasSubItems && hoveredItem === item.id && (
//             <SubMenu
//               subItems={item.subItems}
//               position={menuPosition}
//               closeMenu={() => setHoveredItem(null)}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };
// export default NavigationMenuDemo;

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

// Updated version compatible with both desktop and mobile/tablet layouts
const NavigationMenuDemo = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const menuItemRefs = useRef({});
  
  // Check if we're on mobile/tablet based on screen width
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  
  // Add resize listener to update isMobile state
  useState(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    {
      id: 1,
      title: "App Development",
      hasSubItems: true,
      subItems: [
        { id: 101, title: "iOS Development", path: "/appdevelopment" },
        { id: 102, title: "Android Development", path: "/appdevelopment" },
        { id: 103, title: "Flutter", path: "/appdevelopment" },
        { id: 104, title: "React Native", path: "/appdevelopment" },
      ],
    },
    {
      id: 2,
      title: "Web Development",
      hasSubItems: true,
      subItems: [
        { id: 201, title: "Frontend", path: "/frontend" },
        { id: 202, title: "Backend", path: "/backend" },
        { id: 203, title: "Full Stack", path: "/fullstack" },
      ],
    },
    {
      id: 3,
      title: "Java Development",
      hasSubItems: true,
      subItems: [
        { id: 401, title: "Spring Boot", path: "/java" },
        { id: 402, title: "Hibernate", path: "/java" },
        { id: 403, title: "JavaFX", path: "/java" },
      ],
    },
    {
      id: 4,
      title: "React Development",
      hasSubItems: false,
      path: "/react",
    },
    {
      id: 5,
      title: "Python Development",
      hasSubItems: false,
      path: "/python",
    },
    {
      id: 6,
      title: "AI/ML",
      hasSubItems: false,
      path: "/alml",
    },
    {
      id: 7,
      title: "DSA/C++",
      hasSubItems: false,
      path: "/dsa",
    },
  ];

  const handleMouseEnter = (id) => {
    if (isMobile) return; // Skip hover behavior on mobile/tablet
    
    const element = menuItemRefs.current[id];
    if (element) {
      const rect = element.getBoundingClientRect();
      setMenuPosition({
        x: rect.right,
        y: rect.top,
      });
      setHoveredItem(id);
    }
  };

  const handleDirectClick = (item) => {
    if (!item.hasSubItems && item.path) {
      navigate(item.path);
    } else if (item.hasSubItems && isMobile) {
      // Toggle expanded state for the item on mobile
      setExpandedMobileItem(expandedMobileItem === item.id ? null : item.id);
    }
  };
  
  const handleSubItemClick = (subItem) => {
    if (subItem.path) {
      navigate(subItem.path);
      setHoveredItem(null);
      setExpandedMobileItem(null);
    }
  };

  return (
    <div className={`${isMobile ? "w-full" : "w-60"}`}>
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="relative"
          ref={(el) => (menuItemRefs.current[item.id] = el)}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={() => !isMobile && setHoveredItem(null)}
          onClick={() => handleDirectClick(item)}
        >
          <div className="w-full p-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer rounded-md">
            <p className="text-gray-700">{item.title}</p>
            {item.hasSubItems && (
              isMobile ? 
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${expandedMobileItem === item.id ? "rotate-180" : ""}`} /> :
                <ChevronRight className="ml-2 h-4 w-4" />
            )}
          </div>

          {/* Desktop SubMenu Component (Portal) */}
          {!isMobile && item.hasSubItems && hoveredItem === item.id && (
            <SubMenu
              subItems={item.subItems}
              position={menuPosition}
              closeMenu={() => setHoveredItem(null)}
              onItemClick={handleSubItemClick}
            />
          )}

          {/* Mobile Expanded SubMenu (Inline) */}
          {isMobile && item.hasSubItems && expandedMobileItem === item.id && (
            <AnimatePresence>
              <motion.div 
                className="pl-4 mt-1 border-l-2 border-gray-200"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.id}
                    className="py-2 px-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-600"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent parent click
                      handleSubItemClick(subItem);
                    }}
                  >
                    {subItem.title}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      ))}
    </div>
  );
};

// Desktop-only SubMenu using portal
const SubMenu = ({ subItems, position, closeMenu, onItemClick }) => {
  return ReactDOM.createPortal(
    <motion.div
      className="bg-white shadow-lg rounded-md z-[9999]"
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "180px",
      }}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.2 }}
    >
      {subItems.map((subItem) => (
        <div
          key={subItem.id}
          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); // Prevent parent click
            onItemClick(subItem);
          }}
        >
          {subItem.title}
        </div>
      ))}
    </motion.div>,
    document.body
  );
};

export default NavigationMenuDemo;