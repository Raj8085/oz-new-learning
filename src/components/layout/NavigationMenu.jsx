import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

const SubMenu = ({ subItems, position, closeMenu }) => {
  const navigate = useNavigate();

  const handleItemClick = (subItem) => {
    navigate(`/form`);
    closeMenu(); // Close submenu on click
  };

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
          onClick={() => handleItemClick(subItem)}
        >
          {subItem.title}
        </div>
      ))}
    </motion.div>,
    document.body
  );
};

const NavigationMenuDemo = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const menuItemRefs = useRef({});

  // Menu items
  const menuItems = [
    {
      id: 1,
      title: "App Development",
      hasSubItems: true,
      subItems: [
        { id: 101, title: "iOS Development" },
        { id: 102, title: "Android Development" },
        { id: 103, title: "Flutter" },
        { id: 104, title: "React Native" },
      ],
    },
    {
      id: 2,
      title: "Web Development",
      hasSubItems: true,
      subItems: [
        { id: 201, title: "Frontend" },
        { id: 202, title: "Backend" },
        { id: 203, title: "Full Stack" },
      ],
    },
    {
      id: 3,
      title: "React Development",
      hasSubItems: false, // No subitems
      subItems: [],
    },
    {
      id: 4,
      title: "Java Development",
      hasSubItems: true,
      subItems: [
        { id: 401, title: "Spring Boot" },
        { id: 402, title: "Hibernate" },
        { id: 403, title: "JavaFX" },
      ],
    },
    {
      id: 5,
      title: "App Development",
      hasSubItems: true,
      subItems: [
        { id: 101, title: "iOS Development" },
        { id: 102, title: "Android Development" },
        { id: 103, title: "Flutter" },
        { id: 104, title: "React Native" },
      ],
    },
    {
      id: 6,
      title: "Web Development",
      hasSubItems: true,
      subItems: [
        { id: 201, title: "Frontend" },
        { id: 202, title: "Backend" },
        { id: 203, title: "Full Stack" },
      ],
    },
    {
      id: 7,
      title: "React Development",
      hasSubItems: false, // No subitems
      subItems: [],
    },
    {
      id: 8,
      title: "Java Development",
      hasSubItems: true,
      subItems: [
        { id: 401, title: "Spring Boot" },
        { id: 402, title: "Hibernate" },
        { id: 403, title: "JavaFX" },
      ],
    },
  ];

  const handleMouseEnter = (id) => {
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

  // ✅ Handle click for items **without** subitems
  const handleDirectClick = (item) => {
    if (!item.hasSubItems) {
      navigate(`/form`);
    }
  };

  return (
    <div className="w-60">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="relative"
          ref={(el) => (menuItemRefs.current[item.id] = el)}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => handleDirectClick(item)} // ✅ Direct click for items without subitems
        >
          <div className="w-full p-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
            <p>{item.title}</p>
            {item.hasSubItems && <ChevronDown className="ml-2 h-4 w-4" />}
          </div>

          {/* SubMenu Component */}
          {item.hasSubItems && hoveredItem === item.id && (
            <SubMenu
              subItems={item.subItems}
              position={menuPosition}
              closeMenu={() => setHoveredItem(null)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default NavigationMenuDemo;
