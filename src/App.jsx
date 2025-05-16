/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Service from "./pages/service/Service";
import ContactPage from "./pages/contact/ContactPage";
import ScrollToTop from "./components/layout/TopScroll";
import Home from "./pages/Home/Home";
// import InquiryForm from "./components/layout/InquiryForm";
import Courses from "./pages/courses/Courses";
import FrontendCoursePage from "./courses/FrontendCourse";
import BackendCoursePage from "./courses/BackendCourse";
import Navbar from "./components/layout/Navbar";
import JavaCoursePage from "./courses/JavaCourse";
import ReactCoursePage from "./courses/ReactCourse";
import PythonCoursePage from "./courses/PythonCourse";
import FullStackCoursePage from "./courses/FullStackCourse";
import AppDevelopmentCoursePage from "./courses/AppCourse";
import DSACourse from "./courses/DSACourse";
import AIMLCoursePage from "./courses/AL-Ml";
import PopupForm from "./component/PopUp";
import ExploreCourses from "./component/home-component/ExploreCourses";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data or assets)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed (2 seconds here)

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/frontend" element={<FrontendCoursePage/>} />
        <Route path="/backend" element={<BackendCoursePage/>}/>
        <Route path="/java" element={<JavaCoursePage/>}/>
        <Route path="/react" element={<ReactCoursePage/>}/>
        <Route path="/python" element={<PythonCoursePage/>}/>
        <Route path="/fullstack" element={<FullStackCoursePage/>}/>
        <Route path="/appdevelopment" element={<AppDevelopmentCoursePage/>}/>
        <Route path="/dsa" element={<DSACourse/>}/>
        <Route path="/alml" element={<AIMLCoursePage/>}/>
        <Route path="/getintouch" element={<PopupForm/>}/>
        <Route path="/explore-course" element={<ExploreCourses/>}/>
      </Routes>
    </Router>
  );
}
export default App;





// // import React, { useState, useEffect } from 'react';
// // import { ChevronDown, Clock, Users, Award, BookOpen, Briefcase, PlayCircle, Check, Star, ArrowRight } from 'lucide-react';

// // function App() {
// //   const [activeTab, setActiveTab] = useState('web');
// //   const [isVisible, setIsVisible] = useState(false);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setIsVisible(true);
// //     }, 100);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <div className="min-h-screen font-sans">
// //       {/* Hero Section */}
// //       <section className="min-h-[90vh] bg-gradient-to-r from-orange-600 to-red-500 relative overflow-hidden">
// //         {/* Animated background elements */}
// //         <div className="absolute inset-0 overflow-hidden">
// //           <div className="absolute -top-20 -right-20 w-72 h-72 bg-white opacity-10 rounded-full"></div>
// //           <div className="absolute top-1/3 -left-20 w-96 h-96 bg-white opacity-5 rounded-full"></div>
// //           <div className="absolute -bottom-20 right-1/3 w-60 h-60 bg-white opacity-10 rounded-full"></div>
// //         </div>

// //         <div className="container mx-auto px-6 relative z-10">
// //           <div className="flex flex-col lg:flex-row items-center justify-between min-h-[90vh] gap-12">
// //             <div className={`transition-all duration-1000 ease-out transform ${
// //               isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
// //             } lg:w-1/2 text-center lg:text-left`}>
// //               <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
// //                 Transform Your Future with Expert Tech Training
// //               </h1>
              
// //               <p className="text-xl text-white opacity-90 mb-8">
// //                 Join our industry-leading programs and master the skills that top employers demand. 
// //                 Start your journey to a successful tech career today.
// //               </p>

// //               <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
// //                 <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg 
// //                   hover:bg-opacity-95 transition-all duration-300 transform hover:-translate-y-1 
// //                   hover:shadow-lg flex items-center justify-center group">
// //                   Enroll Now 
// //                   <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
// //                 </button>
                
// //                 <button className="bg-transparent border-2 border-white text-white px-8 py-4 
// //                   rounded-lg font-semibold text-lg hover:bg-white hover:bg-opacity-10 
// //                   transition-all duration-300 flex items-center justify-center">
// //                   Free Demo Class
// //                   <PlayCircle className="ml-2 w-5 h-5" />
// //                 </button>
// //               </div>

// //               <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white">
// //                 {[
// //                   'Limited Time Offer - 20% Off',
// //                   'Job Placement Assistance',
// //                   'Industry Expert Trainers'
// //                 ].map((item, index) => (
// //                   <div key={index} className="flex items-center">
// //                     <Check className="w-5 h-5 mr-2" />
// //                     <span>{item}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className={`lg:w-1/2 transition-all duration-1000 delay-300 transform ${
// //               isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
// //             }`}>
// //               <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md mx-auto">
// //                 <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Started Today</h3>
// //                 <p className="text-gray-600 mb-6">Fill this form to claim your free consultation</p>
                
// //                 <form className="space-y-4">
// //                   <div>
// //                     <input 
// //                       type="text" 
// //                       placeholder="Full Name" 
// //                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
// //                     />
// //                   </div>
// //                   <div>
// //                     <input 
// //                       type="email" 
// //                       placeholder="Email Address" 
// //                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
// //                     />
// //                   </div>
// //                   <div>
// //                     <input 
// //                       type="tel" 
// //                       placeholder="Phone Number" 
// //                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
// //                     />
// //                   </div>
// //                   <div>
// //                     <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
// //                       <option value="">Select Course</option>
// //                       <option value="web">Web Development</option>
// //                       <option value="data">Data Science</option>
// //                       <option value="cloud">Cloud Computing</option>
// //                       <option value="cyber">Cybersecurity</option>
// //                     </select>
// //                   </div>
// //                   <button 
// //                     type="submit" 
// //                     className="w-full bg-gradient-to-r from-orange-600 to-red-500 text-white font-bold py-4 px-8 rounded-lg
// //                       hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
// //                   >
// //                     Book Free Consultation
// //                   </button>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section className="py-20 bg-white">
// //         <div className="container mx-auto px-6">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Institute</h2>
// //             <p className="text-xl text-gray-600">Industry-recognized training to launch your tech career</p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 icon: <BookOpen className="w-8 h-8 text-orange-500" />,
// //                 title: 'Industry-Aligned Curriculum',
// //                 description: 'Updated curriculum based on current industry demands and trends'
// //               },
// //               {
// //                 icon: <Users className="w-8 h-8 text-orange-500" />,
// //                 title: 'Expert Instructors',
// //                 description: 'Learn from professionals with extensive industry experience'
// //               },
// //               {
// //                 icon: <Briefcase className="w-8 h-8 text-orange-500" />,
// //                 title: 'Placement Assistance',
// //                 description: 'Get help with job placement and interview preparation'
// //               },
// //               {
// //                 icon: <Clock className="w-8 h-8 text-orange-500" />,
// //                 title: 'Flexible Schedule',
// //                 description: 'Choose from weekend, weekday, or evening batches'
// //               },
// //               {
// //                 icon: <Award className="w-8 h-8 text-orange-500" />,
// //                 title: 'Certification',
// //                 description: 'Industry-recognized certification upon course completion'
// //               },
// //               {
// //                 icon: <Star className="w-8 h-8 text-orange-500" />,
// //                 title: 'Practical Training',
// //                 description: 'Hands-on projects and real-world case studies'
// //               }
// //             ].map((feature, index) => (
// //               <div 
// //                 key={index}
// //                 className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
// //               >
// //                 <div className="bg-orange-50 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
// //                   {feature.icon}
// //                 </div>
// //                 <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
// //                 <p className="text-gray-600">{feature.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Courses Section */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="container mx-auto px-6">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Popular Courses</h2>
// //             <p className="text-xl text-gray-600">Start your tech career with our specialized programs</p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 title: 'Full Stack Web Development',
// //                 duration: '24 Weeks',
// //                 price: '$999',
// //                 features: ['HTML, CSS, JavaScript', 'React.js, Node.js', 'Database Management', 'Live Projects']
// //               },
// //               {
// //                 title: 'Data Science & Analytics',
// //                 duration: '20 Weeks',
// //                 price: '$1299',
// //                 features: ['Python Programming', 'Machine Learning', 'Data Visualization', 'Statistical Analysis']
// //               },
// //               {
// //                 title: 'Cloud Computing',
// //                 duration: '16 Weeks',
// //                 price: '$899',
// //                 features: ['AWS Services', 'Cloud Security', 'DevOps', 'Microservices']
// //               }
// //             ].map((course, index) => (
// //               <div 
// //                 key={index}
// //                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
// //               >
// //                 <div className="p-8">
// //                   <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
// //                   <div className="flex items-center mb-4">
// //                     <Clock className="w-5 h-5 text-orange-500 mr-2" />
// //                     <span className="text-gray-600">{course.duration}</span>
// //                   </div>
// //                   <ul className="space-y-3 mb-6">
// //                     {course.features.map((feature, i) => (
// //                       <li key={i} className="flex items-center">
// //                         <Check className="w-5 h-5 text-orange-500 mr-2" />
// //                         <span className="text-gray-600">{feature}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                   <div className="flex items-center justify-between">
// //                     <span className="text-3xl font-bold text-gray-900">{course.price}</span>
// //                     <button className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-6 py-2 rounded-lg
// //                       hover:opacity-90 transition-all duration-300">
// //                       Enroll Now
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-20 bg-gradient-to-r from-orange-600 to-red-500">
// //         <div className="container mx-auto px-6">
// //           <div className="max-w-4xl mx-auto text-center">
// //             <h2 className="text-4xl font-bold text-white mb-6">
// //               Start Your Tech Career Today
// //             </h2>
// //             <p className="text-xl text-white opacity-90 mb-8">
// //               Limited time offer - Get 20% off on all courses. Don't miss this opportunity!
// //             </p>
// //             <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg 
// //               hover:bg-opacity-95 transition-all duration-300 transform hover:-translate-y-1 
// //               hover:shadow-lg flex items-center justify-center mx-auto group">
// //               Get Started Now
// //               <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // export default App;


// // import formimg from "../../assets/images/formimg.jpg";

// import { useState, useEffect } from "react";

// export default function PopupForm({ isOpen: externalIsOpen, setIsOpen: externalSetIsOpen }) {
//   // Internal state only used if no external control is provided
//   const [isInternalOpen, setIsInternalOpen] = useState(false);

//   const isControlled = externalIsOpen !== undefined && externalSetIsOpen !== undefined;
//   const isOpen = isControlled ? externalIsOpen : isInternalOpen;

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     captcha: "",
//   });

//   // Show popup initially after 3 seconds (internal only)
//   useEffect(() => {
//     if (!isControlled) {
//       const initialTimer = setTimeout(() => {
//         setIsInternalOpen(true);
//         document.body.style.overflow = "hidden";
//       }, 1000);

//       return () => {
//         clearTimeout(initialTimer);
//         document.body.style.overflow = "auto";
//       };
//     }
//   }, [isControlled]);

//   // Reopen popup after 10 seconds of closing (internal only)
//   useEffect(() => {
//     if (!isControlled) {
//       let reopenTimer;
//       if (!isInternalOpen) {
//         reopenTimer = setTimeout(() => {
//           setIsInternalOpen(true);
//           document.body.style.overflow = "hidden";
//         }, 10000);
//       }
//       return () => {
//         clearTimeout(reopenTimer);
//       };
//     }
//   }, [isInternalOpen, isControlled]);

//   const handleClose = () => {
//     if (isControlled) {
//       externalSetIsOpen(false);
//     } else {
//       setIsInternalOpen(false);
//     }
//     document.body.style.overflow = "auto";
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     handleClose();
//     // You can send form data to backend here
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-500 ease-in-out animate-fadeBackdrop">
//       <div className="relative flex w-full max-w-4xl bg-orange-50 shadow-xl md:rounded-xl overflow-hidden animate-slideUpFade">
//         {/* Close button */}
//         <button
//           onClick={handleClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 hover:rotate-90 transition-all duration-300 ease-in-out transform z-10 bg-white/80 rounded-full p-1 shadow-md"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         {/* Image - hidden on mobile */}
//         <div className="hidden md:block w-1/2 bg-orange-100 relative">
//           <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
//             <div className="relative w-full h-full animate-subtle-float">
//               {/* <img src={formimg} alt="Web development course" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" /> */}
//               {/* Technology icons */}
//               <div className="absolute inset-0">
//                 <div className="absolute top-16 left-16 animate-bounce-slow">
//                   <div className="bg-blue-500 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg border-2 border-white">
//                     <span className="font-bold">HTML</span>
//                   </div>
//                 </div>
//                 <div className="absolute top-32 right-20 animate-pulse">
//                   <div className="bg-yellow-500 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg border-2 border-white">
//                     <span className="font-bold">JS</span>
//                   </div>
//                 </div>
//                 <div className="absolute bottom-40 left-20 animate-bounce-slow delay-300">
//                   <div className="bg-teal-500 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg border-2 border-white">
//                     <span className="font-bold">CSS</span>
//                   </div>
//                 </div>
//                 <div className="absolute bottom-20 right-24 animate-pulse delay-500">
//                   <div className="bg-green-500 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg border-2 border-white">
//                     <span className="font-bold">React</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form */}
//         <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-orange-50 to-amber-50">
//           <div className="mb-6 animate-fadeIn">
//             <h2 className="text-3xl font-bold text-orange-600 animate-slideUp">15% Off.</h2>
//             <h3 className="text-2xl font-bold text-gray-900 mt-1 animate-slideUp delay-100">Limited Seats are available!</h3>
//           </div>

//           <div className="mb-6 animate-fadeIn delay-200">
//             <p className="text-gray-700">
//               Talk to us:{" "}
//               <span className="font-bold text-orange-600 hover:text-orange-700 transition-colors duration-300">
//                 +91-8777517741
//               </span>
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn delay-300">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name }
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="E-mail"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <div className="flex">
//               <div className="w-12 flex items-center justify-center border border-r-0 border-gray-300 bg-gray-50 rounded-l-lg">
//                 <span className="text-gray-500">🇮🇳</span>
//               </div>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//             </div>
//             <select
//               name="course"
//               value={formData.course}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             >
//               <option value="" disabled>Select Course</option>
//               <option value="web-development">Web Development</option>
//               <option value="app-development">App Development</option>
//               <option value="data-science">Data Science</option>
//               <option value="ui-ux">UI/UX Design</option>
//             </select>
//             <div className="flex items-center">
//               <span className="mr-2 font-medium text-gray-700">15 * 9 = </span>
//               <input
//                 type="text"
//                 name="captcha"
//                 placeholder="??"
//                 value={formData.captcha}
//                 onChange={handleChange}
//                 className="w-20 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all"
//             >
//               Book now
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Animation styles (optional — if not already globally declared)
// const styles = `
// @keyframes fadeIn {
//   from { opacity: 0; transform: scale(0.9); }
//   to { opacity: 1; transform: scale(1); }
// }
// .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
// `;

// const styleTag = document.createElement("style");
// styleTag.textContent = styles;
// document.head.appendChild(styleTag);