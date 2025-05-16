// // import { motion } from 'framer-motion';
// // import { 
// //   Target, 
// //   Award, 
// //   Users, 
// //   Globe, 
// //   Building, 
// //   CheckCircle, 
// //   Brain 
// // } from 'lucide-react';
// // import WhyChooseUs from '../home-component/WhyChooseUs';


// // const AboutPage = () => {
// //   const pageVariants = {
// //     initial: { opacity: 0 },
// //     in: { opacity: 1 },
// //     out: { opacity: 0 }
// //   };

// //   const pageTransition = {
// //     type: "tween",
// //     ease: "anticipate",
// //     duration: 0.5
// //   };

// //   return (
// //     <div className="bg-gray-50">
// //       {/* Hero Section */}
// //       <motion.div 
// //         initial="initial"
// //         animate="in"
// //         exit="out"
// //         variants={pageVariants}
// //         transition={pageTransition}
// //         className="relative pt-14 md:pt-40 pb-20 px-5 md:px-20 lg:px-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
// //       >
// //         <div className="flex flex-col md:flex-row items-center">
// //           <div className="md:w-2/3 pr-8">
// //             <h1 className="text-4xl font-extrabold text-center md:text-start tracking-tight sm:text-5xl lg:text-6xl">
// //               Oz learning institute
// //             </h1>
// //             <p className="mt-6 text-lg md:text-xl text-center md:text-start text-blue-100 max-w-3xl">
// //               Transforming Potential into Technological Excellence. We're not just an educational institution; we're a launchpad for future tech leaders, innovators, and change-makers.
// //             </p>
// //           </div>
// //           <div className="md:w-1/3 mt-8 md:mt-0">
// //             <img 
// //               src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg" 
// //               alt="Institute Building" 
// //               className="rounded-xl shadow-2xl"
// //             />
// //           </div>
// //         </div>
// //       </motion.div>


// //       {/* About Our Institute Section */}
// //       <motion.section 
// //         initial={{ opacity: 0, y: 50 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.6 }}
// //         className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center"
// //       >
// //         <div>
// //           <Building className="h-12 w-12  mb-4" />
// //           <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-6">
// //             About Our Institute
// //           </h2>
// //           <p className="text-base md:text-lg text-gray-600 mb-4">
// //             Founded in 2023, Oz learning institute has been at the forefront of technological education. We pride ourselves on bridging the gap between academic learning and industry requirements.
// //           </p>
// //           <p className="text-lg text-gray-600">
// //             Our state-of-the-art campus spans 10 acres, equipped with cutting-edge laboratories, advanced computing facilities, and collaborative learning spaces designed to foster innovation and creativity.
// //           </p>
// //         </div>
// //         <img 
// //           src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg" 
// //           alt="Institute Campus" 
// //           className="rounded-xl shadow-lg"
// //         />
// //       </motion.section>

// //       <WhyChooseUs />
// //       {/* Mission and Vision */}
// //       <div className="bg-white overflow-hidden">
// //         <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
// //           {/* Mission */}
// //           <motion.div 
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //             className="bg-gray-50 shadow-md p-8 rounded-xl"
// //           >
// //             <Target className="h-12 w-12 text-green-600 mb-4" />
// //             <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //               Our Mission
// //             </h3>
// //             <p className="text-gray-600">
// //               To empower students with comprehensive technological education, industry-relevant skills, and innovative thinking. We aim to create tech professionals who are not just job-ready, but future-ready.
// //             </p>
// //             <ul className="mt-4 space-y-2 text-gray-600">
// //               <li className="flex items-center">
// //                 <CheckCircle className="mr-2 text-green-500 h-5 w-5" />
// //                 Provide world-class technological education
// //               </li>
// //               <li className="flex items-center">
// //                 <CheckCircle className="mr-2 text-green-500 h-5 w-5" />
// //                 Foster innovation and critical thinking
// //               </li>
// //               <li className="flex items-center">
// //                 <CheckCircle className="mr-2 text-green-500 h-5 w-5" />
// //                 Bridge academia and industry
// //               </li>
// //             </ul>
// //           </motion.div>

// //           {/* Vision */}
// //           <motion.div 
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //             className="bg-gray-50 shadow-md p-8 rounded-xl"
// //           >
// //             <Brain className="h-12 w-12  text-purple-600 mb-4" />
// //             <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //               Our Vision
// //             </h3>
// //             <p className="text-gray-600">
// //               To be a globally recognized leader in technological education, producing innovative tech professionals who drive digital transformation across industries worldwide.
// //             </p>
// //             <ul className="mt-4 space-y-2 text-gray-600">
// //               <li className="flex items-center">
// //                 <CheckCircle className="mr-2 text-purple-500 h-5 w-5" />
// //                 Global technological leadership
// //               </li>
// //               <li className="flex items-center">
// //                 <CheckCircle className="mr-2 text-purple-500 h-5 w-5" />
// //                 Continuous learning and adaptation
// //               </li>
// //               <li className="flex items-center">
// //                 <CheckCircle className="mr-2 text-purple-500 h-5 w-5" />
// //                 Preparing future tech innovators
// //               </li>
// //             </ul>
// //           </motion.div>
// //         </div>
// //       </div>

// //       {/* Key Achievements */}
// //       <motion.section 
// //         initial={{ opacity: 0, y: 50 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.6 }}
// //         className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
// //       >
// //         <div className="text-center mb-12">
// //           <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent sm:text-4xl">
// //             Our Key Achievements
// //           </h2>
// //           <p className="mt-4 text-lg md:text-xl text-gray-600">
// //             Milestones that define our commitment to excellence
// //           </p>
// //         </div>
// //         <div className="grid md:grid-cols-3 gap-8">
// //           <div className="bg-white shadow-lg rounded-xl p-6 text-center">
// //             <Award className="mx-auto h-16 w-16 text-yellow-500 mb-4" />
// //             <h3 className="text-2xl font-bold text-gray-900">
// //               500+
// //             </h3>
// //             <p className="text-gray-600">
// //               Industry Partnerships
// //             </p>
// //           </div>
// //           <div className="bg-white shadow-lg rounded-xl p-6 text-center">
// //             <Users className="mx-auto h-16 w-16 text-blue-500 mb-4" />
// //             <h3 className="text-2xl font-bold text-gray-900">
// //               10,000+
// //             </h3>
// //             <p className="text-gray-600">
// //               Alumni Network
// //             </p>
// //           </div>
// //           <div className="bg-white shadow-lg rounded-xl p-6 text-center">
// //             <Globe className="mx-auto h-16 w-16 text-green-500 mb-4" />
// //             <h3 className="text-2xl font-bold text-gray-900">
// //               25+
// //             </h3>
// //             <p className="text-gray-600">
// //               Countries Represented
// //             </p>
// //           </div>
// //         </div>
// //       </motion.section>
// //     </div>
// //   );
// // };

// // export default AboutPage;


// import { motion } from 'framer-motion';
// import { 
//   Target, 
//   Award, 
//   Users, 
//   Globe, 
//   Building, 
//   CheckCircle, 
//   Brain,
//   BookOpen,
//   Code,
//   Laptop,
//   GraduationCap,
//   Star,
//   TrendingUp,
//   Clock,
//   MapPin
// } from 'lucide-react';
// import { useState, useEffect } from 'react';

// // Simulating the WhyChooseUs component
// const WhyChooseUs = () => {
//   const features = [
//     {
//       icon: <BookOpen className="h-12 w-12 text-blue-500" />,
//       title: "Industry-Relevant Curriculum",
//       description: "Our courses are designed in collaboration with industry leaders to ensure students learn skills that are in demand."
//     },
//     {
//       icon: <Code className="h-12 w-12 text-green-500" />,
//       title: "Hands-on Learning",
//       description: "Practical experience is at the core of our teaching methodology with real-world projects and challenges."
//     },
//     {
//       icon: <Laptop className="h-12 w-12 text-purple-500" />,
//       title: "Modern Facilities",
//       description: "State-of-the-art labs, high-end equipment, and comfortable learning spaces to foster innovation."
//     },
//     {
//       icon: <GraduationCap className="h-12 w-12 text-red-500" />,
//       title: "Expert Faculty",
//       description: "Learn from industry professionals and academics with extensive experience in their respective fields."
//     }
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Why Choose Us
//           </h2>
//           <p className="mt-4 text-xl text-gray-600">
//             Experience education that transforms your career trajectory
//           </p>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const AboutPage = () => {
//   // Animation variants
//   const pageVariants = {
//     initial: { opacity: 0 },
//     in: { opacity: 1 },
//     out: { opacity: 0 }
//   };

//   const pageTransition = {
//     type: "tween",
//     ease: "anticipate",
//     duration: 0.5
//   };
  
//   // Counter animation for stats
//   const [countValues, setCountValues] = useState({ partnerships: 0, alumni: 0, countries: 0 });
//   const targetValues = { partnerships: 500, alumni: 10000, countries: 25 };
  
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCountValues(prev => ({
//         partnerships: prev.partnerships < targetValues.partnerships ? prev.partnerships + 5 : targetValues.partnerships,
//         alumni: prev.alumni < targetValues.alumni ? prev.alumni + 100 : targetValues.alumni,
//         countries: prev.countries < targetValues.countries ? prev.countries + 1 : targetValues.countries
//       }));
//     }, 30);
    
//     return () => clearInterval(intervalId);
//   }, []);

//   // Testimonials data
//   const testimonials = [
//     {
//       quote: "The hands-on learning approach and industry connections at Oz Learning Institute completely transformed my career prospects.",
//       name: "Sarah Johnson",
//       position: "Software Engineer at TechCorp",
//       image: "/api/placeholder/100/100"
//     },
//     {
//       quote: "The faculty members are true industry experts. Their guidance helped me develop not just technical skills but also professional aptitude.",
//       name: "Michael Chen",
//       position: "Data Scientist at DataSphere",
//       image: "/api/placeholder/100/100"
//     },
//     {
//       quote: "From day one, the institute provided me with opportunities to work on real-world projects that now form an impressive portfolio.",
//       name: "Emma Rodriguez",
//       position: "UX Designer at CreativeEdge",
//       image: "/api/placeholder/100/100"
//     }
//   ];

//   return (
//     <div className="bg-gray-50">
//       {/* Hero Section */}
//       <motion.div 
//         initial="initial"
//         animate="in"
//         exit="out"
//         variants={pageVariants}
//         transition={pageTransition}
//         className="relative pt-14 md:pt-40 pb-20 px-5 md:px-20 lg:px-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
//       >
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-2/3 pr-8">
//             <h1 className="text-4xl font-extrabold text-center md:text-start tracking-tight sm:text-5xl lg:text-6xl">
//               Oz Learning Institute
//             </h1>
//             <p className="mt-6 text-lg md:text-xl text-center md:text-start text-blue-100 max-w-3xl">
//               Transforming Potential into Technological Excellence. We're not just an educational institution; we're a launchpad for future tech leaders, innovators, and change-makers.
//             </p>
//             <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
//               <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:bg-blue-50 transition-colors"
//               >
//                 Explore Programs
//               </motion.button>
//               <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
//               >
//                 Virtual Tour
//               </motion.button>
//             </div>
//           </div>
//           <div className="md:w-1/3 mt-8 md:mt-0">
//             <motion.img 
//               whileHover={{ scale: 1.05, rotate: 2 }}
//               src="/api/placeholder/400/320" 
//               alt="Institute Building" 
//               className="rounded-xl shadow-2xl"
//             />
//           </div>
//         </div>
        
//         {/* Floating stats banner */}
//         <motion.div 
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-11/12 max-w-5xl"
//         >
//           <div className="bg-white rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
//             <div className="text-center p-4">
//               <h3 className="text-3xl font-bold text-blue-600">{countValues.partnerships}+</h3>
//               <p className="text-gray-600">Industry Partners</p>
//             </div>
//             <div className="text-center p-4 border-t md:border-t-0 md:border-l md:border-r border-gray-200">
//               <h3 className="text-3xl font-bold text-purple-600">{countValues.alumni.toLocaleString()}+</h3>
//               <p className="text-gray-600">Successful Alumni</p>
//             </div>
//             <div className="text-center p-4 border-t md:border-t-0 border-gray-200">
//               <h3 className="text-3xl font-bold text-green-600">{countValues.countries}+</h3>
//               <p className="text-gray-600">Countries Represented</p>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Spacing for floating banner */}
//       <div className="h-20 md:h-24"></div>

//       {/* About Our Institute Section */}
//       <motion.section 
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center"
//       >
//         <div>
//           <Building className="h-12 w-12 text-blue-600 mb-4" />
//           <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-6">
//             About Our Institute
//           </h2>
//           <p className="text-base md:text-lg text-gray-600 mb-4">
//             Founded in 2023, Oz Learning Institute has been at the forefront of technological education. We pride ourselves on bridging the gap between academic learning and industry requirements.
//           </p>
//           <p className="text-lg text-gray-600 mb-6">
//             Our state-of-the-art campus spans 10 acres, equipped with cutting-edge laboratories, advanced computing facilities, and collaborative learning spaces designed to foster innovation and creativity.
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="flex items-center">
//               <Star className="h-5 w-5 text-yellow-500 mr-2" />
//               <span className="text-gray-700">ISO 9001 Certified</span>
//             </div>
//             <div className="flex items-center">
//               <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
//               <span className="text-gray-700">93% Placement Rate</span>
//             </div>
//             <div className="flex items-center">
//               <Clock className="h-5 w-5 text-blue-500 mr-2" />
//               <span className="text-gray-700">24/7 Learning Access</span>
//             </div>
//             <div className="flex items-center">
//               <MapPin className="h-5 w-5 text-red-500 mr-2" />
//               <span className="text-gray-700">Prime Location</span>
//             </div>
//           </div>
//         </div>
//         <motion.img 
//           whileHover={{ scale: 1.03 }}
//           transition={{ duration: 0.3 }}
//           src="/api/placeholder/500/400" 
//           alt="Institute Campus" 
//           className="rounded-xl shadow-lg w-full h-full object-cover"
//         />
//       </motion.section>

//       {/* Why Choose Us Section (Enhanced) */}
//       <WhyChooseUs />

//       {/* Mission and Vision */}
//       <div className="bg-white overflow-hidden py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//               Our Mission & Vision
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Guiding principles that shape our educational approach and impact
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Mission */}
//             <motion.div 
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="bg-gray-50 shadow-md p-8 rounded-xl border-t-4 border-green-500"
//             >
//               <Target className="h-12 w-12 text-green-600 mb-4" />
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 Our Mission
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 To empower students with comprehensive technological education, industry-relevant skills, and innovative thinking. We aim to create tech professionals who are not just job-ready, but future-ready.
//               </p>
//               <ul className="space-y-3 text-gray-600">
//                 <li className="flex items-start">
//                   <CheckCircle className="mr-2 text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
//                   <span>Provide world-class technological education that meets international standards</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="mr-2 text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
//                   <span>Foster innovation, critical thinking, and problem-solving abilities</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="mr-2 text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
//                   <span>Bridge the gap between academia and industry through collaborative partnerships</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="mr-2 text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
//                   <span>Make quality technological education accessible to diverse communities</span>
//                 </li>
//               </ul>
//             </motion.div>

//             {/* Vision */}
//             <motion.div 
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="bg-gray-50 shadow-md p-8 rounded-xl border-t-4 border-purple-500"
//             >
//               <Brain className="h-12 w-12 text-purple-600 mb-4" />
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 Our Vision
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 To be a globally recognized leader in technological education, producing innovative tech professionals who drive digital transformation across industries worldwide.
//               </p>
//               <ul className="space-y-3 text-gray-600">
//                 <li className="flex items-start">
//                   <CheckCircle className="mr-2 text-purple-500 h-5 w-5 mt-1 flex-shrink-0" />
//                   <span>Establish global technological leadership and recognition in specialized domains</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="mr-2 text-purple-500 h-5 w-5 mt-1 flex-shrink-0" />
//                   <span>Foster continuous learning, adaptation, and technological evolution</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="mr-2 text-purple-500 h-5 w-5 mt-1 flex-shrink-0" />
//                   <span>Prepare next-generation tech innovators equipped to solve complex global challenges</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="mr-2 text-purple-500 h-5 w-5 mt-1 flex-shrink-0" />
//                   <span>Create an inclusive ecosystem that nurtures diverse talents and perspectives</span>
//                 </li>
//               </ul>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Key Achievements - Animated */}
//       <motion.section 
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
//       >
//         <div className="text-center mb-12">
//           <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent sm:text-4xl">
//             Our Key Achievements
//           </h2>
//           <p className="mt-4 text-lg md:text-xl text-gray-600">
//             Milestones that define our commitment to excellence
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           <motion.div 
//             whileHover={{ y: -10 }}
//             className="bg-white shadow-lg rounded-xl p-6 text-center relative overflow-hidden"
//           >
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
//             <Award className="mx-auto h-16 w-16 text-yellow-500 mb-4" />
//             <h3 className="text-3xl font-bold text-gray-900">
//               {countValues.partnerships}+
//             </h3>
//             <p className="text-gray-600">
//               Industry Partnerships
//             </p>
//             <p className="mt-3 text-sm text-gray-500">
//               Collaborating with leading tech companies to provide real-world experience
//             </p>
//           </motion.div>
//           <motion.div 
//             whileHover={{ y: -10 }}
//             className="bg-white shadow-lg rounded-xl p-6 text-center relative overflow-hidden"
//           >
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
//             <Users className="mx-auto h-16 w-16 text-blue-500 mb-4" />
//             <h3 className="text-3xl font-bold text-gray-900">
//               {countValues.alumni.toLocaleString()}+
//             </h3>
//             <p className="text-gray-600">
//               Alumni Network
//             </p>
//             <p className="mt-3 text-sm text-gray-500">
//               Building a global community of tech professionals making an impact
//             </p>
//           </motion.div>
//           <motion.div 
//             whileHover={{ y: -10 }}
//             className="bg-white shadow-lg rounded-xl p-6 text-center relative overflow-hidden"
//           >
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
//             <Globe className="mx-auto h-16 w-16 text-green-500 mb-4" />
//             <h3 className="text-3xl font-bold text-gray-900">
//               {countValues.countries}+
//             </h3>
//             <p className="text-gray-600">
//               Countries Represented
//             </p>
//             <p className="mt-3 text-sm text-gray-500">
//               Creating a diverse environment that enriches the learning experience
//             </p>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Testimonials Section (New) */}
//       <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//               Student Success Stories
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Hear from our alumni about how Oz Learning Institute transformed their careers
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2, duration: 0.5 }}
//                 className="bg-white p-6 rounded-xl shadow-md"
//               >
//                 <div className="flex items-center mb-4">
//                   <img 
//                     src={testimonial.image} 
//                     alt={testimonial.name} 
//                     className="w-12 h-12 rounded-full mr-4"
//                   />
//                   <div>
//                     <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
//                     <p className="text-sm text-gray-600">{testimonial.position}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 italic">"{testimonial.quote}"</p>
//               </motion.div>
//             ))}
//           </div>
          
//           <div className="text-center mt-10">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-colors"
//             >
//               Read More Success Stories
//               <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </motion.button>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action (New) */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-extrabold mb-4">Ready to Begin Your Tech Journey?</h2>
//           <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
//             Join Oz Learning Institute and transform your potential into technological excellence. Applications for the next intake are now open.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
//             >
//               Apply Now
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
//             >
//               Schedule a Visit
//             </motion.button>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default AboutPage;


import { motion } from 'framer-motion';
import { 
  Target, 
  Award, 
  Users, 
  Globe, 
  Building, 
  CheckCircle, 
  Brain,
  BookOpen,
  Code,
  Laptop,
  GraduationCap,
  Star,
  TrendingUp,
  Clock,
  MapPin
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Simulating the WhyChooseUs component
const WhyChooseUs = () => {
  const features = [
    {
      icon: <BookOpen className="h-12 w-12 text-orange-600" />,
      title: "Industry-Relevant Curriculum",
      description: "Our courses are designed in collaboration with industry leaders to ensure students learn skills that are in demand."
    },
    {
      icon: <Code className="h-12 w-12 text-red-500" />,
      title: "Hands-on Learning",
      description: "Practical experience is at the core of our teaching methodology with real-world projects and challenges."
    },
    {
      icon: <Laptop className="h-12 w-12 text-orange-600" />,
      title: "Modern Facilities",
      description: "State-of-the-art labs, high-end equipment, and comfortable learning spaces to foster innovation."
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-red-500" />,
      title: "Expert Faculty",
      description: "Learn from industry professionals and academics with extensive experience in their respective fields."
    }
  ];

  return (
    <section className="py-16 bg-[#fceedb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            Experience education that transforms your career trajectory
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };
  
  // Counter animation for stats
  const [countValues, setCountValues] = useState({ partnerships: 0, alumni: 0, countries: 0 });
  const targetValues = { partnerships: 500, alumni: 10000, countries: 25 };
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountValues(prev => ({
        partnerships: prev.partnerships < targetValues.partnerships ? prev.partnerships + 5 : targetValues.partnerships,
        alumni: prev.alumni < targetValues.alumni ? prev.alumni + 100 : targetValues.alumni,
        countries: prev.countries < targetValues.countries ? prev.countries + 1 : targetValues.countries
      }));
    }, 30);
    
    return () => clearInterval(intervalId);
  }, []);

  // Testimonials data
  const testimonials = [
    {
      quote: "The hands-on learning approach and industry connections at Oz Learning Institute completely transformed my career prospects.",
      name: "Sarah Johnson",
      position: "Software Engineer at TechCorp",
      image: "/api/placeholder/100/100"
    },
    {
      quote: "The faculty members are true industry experts. Their guidance helped me develop not just technical skills but also professional aptitude.",
      name: "Michael Chen",
      position: "Data Scientist at DataSphere",
      image: "/api/placeholder/100/100"
    },
    {
      quote: "From day one, the institute provided me with opportunities to work on real-world projects that now form an impressive portfolio.",
      name: "Emma Rodriguez",
      position: "UX Designer at CreativeEdge",
      image: "/api/placeholder/100/100"
    }
  ];

  return (
    <>
    <div className="bg-[#fceedb]">
      {/* Hero Section */}
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative pt-14 md:pt-40 pb-20 px-5 md:px-20 lg:px-40 bg-[#fceedb] bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent"
      >
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="w-full md:w-2/3 pr-0 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl font-extrabold text-center md:text-left tracking-tight sm:text-5xl lg:text-6xl">
              Oz Learning Institute
            </h1>
            <p className="mt-6  text-center md:text-left text-base md:text-lg text-gray-700 max-w-3xl mx-auto md:mx-0">
              Transforming Potential into Technological Excellence. We're not just an educational institution; we're a launchpad for future tech leaders, innovators, and change-makers.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <Link to="/explore-course">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-orange-200 text-orange-800 font-bold rounded-lg shadow-md hover:bg-orange-50 transition-colors"
              >
                Explore Programs
              </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent border-2 border-orange-200 bg-orange-200 text-orange-800  font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Virtual Tour
              </motion.button>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <motion.img
              // whileHover={{ scale: 1.05, rotate: 2 }}
              src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg" 
              alt="Institute Building"
              className="rounded-xl shadow-2xl w-full max-w-sm" />
          </div>
        </div>

        {/* Floating stats banner */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-11/12 max-w-5xl"
        >
          {/* <div className="bg-white rounded-xl shadow-xl grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 md:p-6">
            <div className="text-center p-2 md:p-4">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-600">{countValues.partnerships}+</h3>
              <p className="text-gray-600">Industry Partners</p>
            </div>
            <div className="text-center p-2 md:p-4 border-t sm:border-t-0 sm:border-l sm:border-r border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-red-500">{countValues.alumni.toLocaleString()}+</h3>
              <p className="text-gray-600">Successful Alumni</p>
            </div>
            <div className="text-center p-2 md:p-4 border-t sm:border-t-0 border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-600">{countValues.countries}+</h3>
              <p className="text-gray-600">Countries Represented</p>
            </div>
          </div> */}
        </motion.div>
      </motion.div>

      {/* Spacing for floating banner */}
      <div className="h-20 md:h-24"></div>

      {/* About Our Institute Section */}
      <div className='mb-[-56]'>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto md:px-16 px-6 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <Building className="h-12 w-12 text-orange-600 mb-4" />
          <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-6">
            About Our Institute
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Founded in 2023, Oz Learning Institute has been at the forefront of technological education. We pride ourselves on bridging the gap between academic learning and industry requirements.
          </p>
          {/* <p className="text-lg text-gray-700 mb-6">
            Our state-of-the-art campus spans 10 acres, equipped with cutting-edge laboratories, advanced computing facilities, and collaborative learning spaces designed to foster innovation and creativity.
          </p> */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-orange-600 mr-2" />
              <span className="text-gray-700">ISO 9001 Certified</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-gray-700">93% Placement Rate</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-orange-600 mr-2" />
              <span className="text-gray-700">24/7 Learning Access</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-gray-700">Prime Location</span>
            </div>
          </div>
        </div>
        <motion.img
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg" 
          alt="Institute Campus"
          className="rounded-xl shadow-lg w-full h-full object-cover" />
      </motion.section>
      </div>
      {/* Why Choose Us Section (Enhanced) */}
      <WhyChooseUs />

      {/* Mission and Vision */}
      <div className="bg-white overflow-hidden py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Guiding principles that shape our educational approach and impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#fceedb] shadow-md p-8 rounded-xl border-t-4 border-orange-500"
            >
              <Target className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-6">
                To empower students with comprehensive technological education, industry-relevant skills, and innovative thinking. We aim to create tech professionals who are not just job-ready, but future-ready.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Provide world-class technological education that meets international standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Foster innovation, critical thinking, and problem-solving abilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Bridge the gap between academia and industry through collaborative partnerships</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 text-orange-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Make quality technological education accessible to diverse communities</span>
                </li>
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#fceedb] shadow-md p-8 rounded-xl border-t-4 border-red-500"
            >
              <Brain className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 mb-6">
                To be a globally recognized leader in technological education, producing innovative tech professionals who drive digital transformation across industries worldwide.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 text-red-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Establish global technological leadership and recognition in specialized domains</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 text-red-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Foster continuous learning, adaptation, and technological evolution</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 text-red-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Prepare next-generation tech innovators equipped to solve complex global challenges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 text-red-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Create an inclusive ecosystem that nurtures diverse talents and perspectives</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <span>Provide world-class technological education that meets international standards</span>
    <li className="flex items-start">
        <CheckCircle className="mr-2 text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
        <span>Foster innovation, critical thinking, and problem-solving abilities</span>
      </li><li className="flex items-start">
        <CheckCircle className="mr-2 text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
        <span>Bridge the gap between academia and industry through collaborative partnerships</span>
      </li><li className="flex items-start">
        <CheckCircle className="mr-2 text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
        <span>Make quality technological education accessible to diverse communities</span>
      </li> */}
      </div>
              

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              
            >
              {/* <>
              <Brain className="h-12 w-12 text-purple-600 mb-4" /><h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3><p className="text-gray-600 mb-6">
                    To be a globally recognized leader in technological education, producing innovative tech professionals who drive digital transformation across industries worldwide.
                  </p><ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 text-purple-500 h-5 w-5 mt-1 flex-shrink-0" />
                      <span>Establish global technological leadership and recognition in specialized domains</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 text-purple-500 h-5 w-5 mt-1 flex-shrink-0" />
                      <span>Foster continuous learning, adaptation, and technological evolution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 text-purple-500 h-5 w-5 mt-1 flex-shrink-0" />
                      <span>Prepare next-generation tech innovators equipped to solve complex global challenges</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 text-purple-500 h-5 w-5 mt-1 flex-shrink-0" />
                      <span>Create an inclusive ecosystem that nurtures diverse talents and perspectives</span>
                    </li>
                  </ul></> */}
            </motion.div>

      {/* Key Achievements - Animated */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        <>
        {/* <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent sm:text-4xl">
              Our Key Achievements
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Milestones that define our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white shadow-lg rounded-xl p-6 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <Award className="mx-auto h-16 w-16 text-yellow-500 mb-4" />
                <h3 className="text-3xl font-bold text-gray-900">
                  {countValues.partnerships}+
                </h3>
                <p className="text-gray-600">
                  Industry Partnerships
                </p>
                <p className="mt-3 text-sm text-gray-500">
                  Collaborating with leading tech companies to provide real-world experience
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white shadow-lg rounded-xl p-6 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <Users className="mx-auto h-16 w-16 text-blue-500 mb-4" />
                <h3 className="text-3xl font-bold text-gray-900">
                  {countValues.alumni.toLocaleString()}+
                </h3>
                <p className="text-gray-600">
                  Alumni Network
                </p>
                <p className="mt-3 text-sm text-gray-500">
                  Building a global community of tech professionals making an impact
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white shadow-lg rounded-xl p-6 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                <Globe className="mx-auto h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-3xl font-bold text-gray-900">
                  {countValues.countries}+
                </h3>
                <p className="text-gray-600">
                  Countries Represented
                </p>
                <p className="mt-3 text-sm text-gray-500">
                  Creating a diverse environment that enriches the learning experience
                </p>
              </motion.div>
            </div> */}
            </>
      </motion.section>

      {/* Testimonials Section (New) */}
      {/* <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our alumni about how Oz Learning Institute transformed their careers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              Read More Success Stories
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </div>
        </div>
      </section> */}

      {/* Call to Action (New) */}
      <div className="mb-32 bg-[#fceedb] rounded-xl p-8 lg:p-20  text-center text-amber-600 shadow-lg border border-red-200">
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
      </>
  );

};
export default AboutPage;