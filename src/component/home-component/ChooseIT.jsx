// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import backend from "../../assets/backend.jpg"
// import python from "../../assets/Python-Full-Stack-image.jpg"
// import frontend from "../../assets/frontend.jpg"
// import mern from "../../assets/mern.png"
// import js from "../../assets/growtika-qaedPly-Uro-unsplash.jpg"
// import react from "../../assets/react.jpg"
// import front from "../../assets/htmlcssjs.png"
// import node from "../../assets/nodejs_cover_photo_smaller_size.png"
// import django from "../../assets/django.jpg"
// import { Link } from 'react-router-dom';
 
// const courses = [
//   {
//     id : 1,
//     title: "Frontend Development",
//     // price: 5000,
//     duration: "3–4 months",
//     description: "Master HTML, CSS, JavaScript, and React to build beautiful, responsive UIs.",
//     image: frontend,
//     route: "/frontend",
//   },
//   {
//     id : 2,
//     title: "Backend Development (Node.js)",
//     // price: 5000,
//     duration: "3–4 months",
//     description: "Learn backend development using Node.js, Express, MongoDB, and REST APIs.",
//     image: backend,
//     route: "/backend",
//   },
//   {
//     id : 3,
//     title: "Python Full Stack Development",
//     // price: 7000,
//     duration: "4–5 months",
//     description: "Full stack development with Python, Django, HTML, CSS, JavaScript, and MySQL.",
//     image: python,
//     route : "/python"
//   },
//   {
//     id : 4,
//     title: "MERN Stack Development",
//     // price: 7500,
//     duration: "5–6 months",
//     description: "Master MongoDB, Express, React, and Node to build full stack JavaScript applications.",
//     image: mern,
//     route : "/fullstack"
//   },
//   {
//     id : 5,
//     title: "JavaScript Mastery",
//     // price: 2500,
//     duration: "2–2.5 months",
//     description: "In-depth JavaScript training from basics to DOM, events, and advanced concepts.",
//     image: js,
//     route: "/frontend",
//   },
//   {
//     id : 6,
//     title: "React.js Specialization",
//     // price: 2500,
//     duration: "2 months",
//     description: "Focus on React development including components, hooks, and routing.",
//     image: react,
//     route: "/react",

//   },
//   {
//     id : 7,
//     title: "HTML, CSS, JavaScript (Basics)",
//     // price: 3500,
//     duration: "3 months",
//     description: "Complete beginner course covering structure, styling, and scripting for the web.",
//     image: front,
//     route: "/frontend",
//   },
//   {
//     id : 8,
//     title: "Node.js & Express Bootcamp",
//     // price: 2700,
//     duration: "2 months",
//     description: "Backend API development using Node.js and Express, including routing and middleware.",
//     image: node,
//     route: "/backend",
//   },
//   {
//     id : 9,
//     title: "Django Web Development",
//     // price: 2800,
//     duration: "2 months",
//     description: "Learn Django framework, models, views, and admin panel for powerful web apps.",
//     image: django,
//     route: "/python",
//   },
// ];


// const WhyChooseITCareer = () => {
//   const [activeImage, setActiveImage] = useState(null);
  
//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <header className="text-center mb-12">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-500 text-transparent bg-clip-text mb-4">
//             Explore Our IT Career-Oriented Courses
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
//             Structured learning paths to kickstart your career in technology.
//           </p>
//         </header>
        
//         {/* Image Modal */}
//         {activeImage && (
//           <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
//             <div className="relative max-w-4xl w-full">
//               <button 
//                 onClick={() => setActiveImage(null)}
//                 className="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none"
//               >
//                 <X size={24} />
//               </button>
//               <img 
//                 src={activeImage} 
//                 alt="Course preview" 
//                 className="w-full h-auto rounded-lg"
//               />
//             </div>
//           </div>
//         )}
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course, index) => (
//             <div 
//               key={course.id} 
//               className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
//             >
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 onClick={() => setActiveImage(course.image)}
//                 className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity duration-300"
//               />
//               <div className="p-5 flex flex-col flex-grow">
//                 <h3 className="text-lg font-semibold text-indigo-700 mb-2">
//                   {course.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4 flex-grow">
//                   {course.description}
//                 </p>
//                 <div className="text-sm text-gray-500 mb-4">
//                   <span className="font-medium">Duration:</span> {course.duration}
//                 </div>
//                 <Link 
//   to={course.route}
//   className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center justify-center border border-indigo-600 rounded-md py-2 hover:bg-indigo-50 transition-colors duration-300"
// >
//   View Details
// </Link>

//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-16 bg-indigo-700 rounded-xl p-6 sm:p-8 lg:p-10 text-center text-white">
//           <h3 className="text-xl sm:text-2xl font-bold mb-3">
//             Ready to Begin?
//           </h3>
//           <p className="mb-6 max-w-2xl mx-auto">
//             Choose the course that fits your goals and start learning today with practical, project-based training.
//           </p>
//           <Link to="/fullstack">
//           <button className="bg-white text-indigo-700 font-medium py-3 px-6 rounded-full hover:bg-indigo-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
//             View Course Details
//           </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default WhyChooseITCareer;


// // const WhyChooseITCareer = () => {
// //   const [activeImage, setActiveImage] = useState(null);

// //   return (
// //     <section className="py-16 px-5 md:px-20 lg:px-40 bg-gray-50 dark:bg-gray-900">
// //       <motion.div
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         className="text-center mb-12"
// //       >
// //         <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
// //           Explore Our IT Career-Oriented Courses
// //         </h2>
// //         <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
// //           Structured learning paths to kickstart your career in technology.
// //         </p>
// //       </motion.div>

// //       {/* Image Modal */}
// //       {activeImage && (
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
// //           onClick={() => setActiveImage(null)}
// //         >
// //           <motion.img
// //             initial={{ scale: 0.8 }}
// //             animate={{ scale: 1 }}
// //             src={activeImage}
// //             alt="Course Preview"
// //             className="max-w-4xl w-full max-h-[80vh] object-cover rounded-lg shadow-2xl"
// //           />
// //         </motion.div>
// //       )}
// //       <div className="grid md:grid-cols-3 gap-8">
// //         {courses.map((course, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.5, delay: index * 0.2 }}
// //             whileHover={{ scale: 1.05 }}
// //             className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
// //           >
// //             <img
// //               src={course.image}
// //               alt={course.title}
// //               onClick={() => setActiveImage(course.image)}
// //               className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
// //             />
// //             <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
// //               {course.title}
// //             </h3>
// //             <p className="text-gray-600 dark:text-gray-300 mb-2">{course.description}</p>
// //             <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
// //               Duration: {course.duration} | Fee: ₹{course.price}
// //             </p>
// //           </motion.div>
// //         ))}
// //       </div>

// //       <motion.div
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6, delay: 0.8 }}
// //         className="text-center mt-12"
// //       >
// //         <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
// //           <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
// //             Ready to Begin?
// //           </h3>
// //           <p className="text-gray-600 dark:text-gray-300 mb-6">
// //             Choose the course that fits your goals and start learning today with practical, project-based training.
// //           </p>
// //           <button className="bg-[#bf3900] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[bf3900] transition-colors shadow-lg hover:shadow-xl">
// //             View Course Details
// //           </button>
// //         </div>
// //       </motion.div>
// //     </section>
// //   );
// // };
// // export default WhyChooseITCareer;


import { useState } from 'react';
import { X, BookOpen, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import backend from "../../assets/backend.jpg"
import python from "../../assets/Python-Full-Stack-image.jpg"
import frontend from "../../assets/frontend.jpg"
import mern from "../../assets/mern.png"
import js from "../../assets/growtika-qaedPly-Uro-unsplash.jpg"
import react from "../../assets/react.jpg"
import front from "../../assets/htmlcssjs.png"
import node from "../../assets/nodejs_cover_photo_smaller_size.png"
import django from "../../assets/django.jpg"

const CourseSection = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Courses data
  const courses = [
    {
      id: 1,
      title: "Frontend Development",
      duration: "3–4 months",
      description: "Master HTML, CSS, JavaScript, and React to build beautiful, responsive UIs.",
      image: frontend,
      route: "/frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React"]
    },
    {
      id: 2,
      title: "Backend Development",
      duration: "3–4 months",
      description: "Learn backend development using Node.js, Express, MongoDB, and REST APIs.",
      image: backend,
      route: "/backend",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"]
    },
    {
      id: 3,
      title: "Python Full Stack",
      duration: "4–5 months",
      description: "Full stack development with Python, Django, HTML, CSS, JavaScript, and MySQL.",
      image: python,
      route: "/python",
      skills: ["Python", "Django", "MySQL", "JavaScript"]
    },
    {
      id: 4,
      title: "MERN Stack Development",
      duration: "5–6 months",
      description: "Master MongoDB, Express, React, and Node to build full stack JavaScript applications.",
      image: mern,
      route: "/fullstack",
      skills: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      id: 5,
      title: "JavaScript Mastery",
      duration: "2–2.5 months",
      description: "In-depth JavaScript training from basics to DOM, events, and advanced concepts.",
      image: js,
      route: "/frontend",
      skills: ["ES6+", "DOM", "Async JS", "Web APIs"]
    },
    {
      id: 6,
      title: "React.js Specialization",
      duration: "2 months",
      description: "Focus on React development including components, hooks, and routing.",
      image: react,
      route: "/react",
      skills: ["Components", "Hooks", "Redux", "React Router"]
    },
    {
      id: 7,
      title: "HTML, CSS, JavaScript",
      duration: "3 months",
      description: "Complete beginner course covering structure, styling, and scripting for the web.",
      image: front,
      route: "/frontend",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      id: 8,
      title: "Node.js & Express Bootcamp",
      duration: "2 months",
      description: "Backend API development using Node.js and Express, including routing and middleware.",
      image: node,
      route: "/backend",
      skills: ["Node.js", "Express", "API Design", "Middleware"]
    },
    {
      id: 9,
      title: "Django Web Development",
      duration: "2 months",
      description: "Learn Django framework, models, views, and admin panel for powerful web apps.",
      image: django,
      route: "/python",
      skills: ["Django", "Models", "Views", "Templates"]
    },
  ];

  return (
    <div style={{ backgroundColor: '#fceedb' }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Career-Focused IT Courses
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Accelerate your tech career with our hands-on, industry-aligned training programs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mt-6"></div>
        </div>
        
        {/* Image Modal */}
        {activeImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={() => setActiveImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-amber-300 focus:outline-none transition-colors duration-300"
                aria-label="Close image preview"
              >
                <X size={28} />
              </button>
              <img 
                src={activeImage} 
                alt="Course preview" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}
        
        {/* Course Cards Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
              style={{ 
                transform: hoveredCard === course.id ? 'translateY(-8px)' : 'translateY(0)',
              }}
              onMouseEnter={() => setHoveredCard(course.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  onClick={() => setActiveImage(course.image)}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-700"
                  style={{ 
                    transform: hoveredCard === course.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 flex items-end"
                  style={{ 
                    opacity: hoveredCard === course.id ? 1 : 0
                  }}
                >
                  <div className="p-3 text-white">
                    <p className="font-medium">Click to preview</p>
                  </div>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-5 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                
                {/* Course Info */}
                <div className="flex items-center text-amber-600 mb-3">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">{course.duration}</span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {course.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Call to Action */}
                <Link 
                  to={course.route}
                  className="mt-auto text-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Course Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 bg-[#fceedb] rounded-xl p-8 lg:p-10 text-center text-amber-600 shadow-lg border border-red-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 flex items-center">
                <Award className="w-8 h-8 mr-3 hidden md:inline" />
                Ready to Transform Your Career?
              </h3>
              <p className="text-black/90 max-w-xl">
                Join thousands of successful graduates who've launched their tech careers through our industry-recognized training programs.
              </p>
            </div>
            
            <Link to="/fullstack" className="group">
              <button className="bg-white text-amber-600 font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                Explore All Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;