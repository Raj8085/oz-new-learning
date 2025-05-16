// // import { motion } from 'framer-motion';
// // import { 
// //   Code, 
// //   Network, 
// //   Database, 
// //   Shield, 
// //   Laptop, 
// //   CloudLightning, 
// //   Brain, 
// //   Server 
// // } from 'lucide-react';

// // const ServicesPage = () => {
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

// //   const services = [
// //     {
// //       icon: Code,
// //       title: "Software Development Training",
// //       description: "Comprehensive programs covering full-stack development, modern frameworks, and industry-standard programming languages.",
// //       color: "text-blue-600"
// //     },
// //     {
// //       icon: Network,
// //       title: "Network Administration",
// //       description: "Advanced courses in network design, security, and management with hands-on laboratory experience.",
// //       color: "text-green-600"
// //     },
// //     {
// //       icon: Database,
// //       title: "Data Science & Analytics",
// //       description: "In-depth training in data analysis, machine learning, and big data technologies.",
// //       color: "text-purple-600"
// //     },
// //     {
// //       icon: Shield,
// //       title: "Cybersecurity Programs",
// //       description: "Specialized courses in ethical hacking, network security, and information protection strategies.",
// //       color: "text-red-600"
// //     },
// //     {
// //       icon: CloudLightning,
// //       title: "Cloud Computing",
// //       description: "Comprehensive cloud technology training including AWS, Azure, and Google Cloud platforms.",
// //       color: "text-indigo-600"
// //     },
// //     {
// //       icon: Brain,
// //       title: "Artificial Intelligence & ML",
// //       description: "Cutting-edge courses in AI development, neural networks, and intelligent system design.",
// //       color: "text-pink-600"
// //     }
// //   ];

// //   return (
// //     <div className="bg-gray-50">
// //       {/* Hero Section */}
// //       <motion.div 
// //         initial="initial"
// //         animate="in"
// //         exit="out"
// //         variants={pageVariants}
// //         transition={pageTransition}
// //         className="relative pt-14 md:pt-48 pb-20 px-5 md:px-20 lg:px-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
// //       >
// //         <div className="text-center">
// //           <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
// //             Our Professional Services
// //           </h1>
// //           <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-blue-100">
// //             Empowering Technology Professionals Through Comprehensive and Innovative Training Programs
// //           </p>
// //         </div>
// //       </motion.div>

// //       {/* Services Grid */}
// //       <motion.section 
// //         initial={{ opacity: 0, y: 50 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.6 }}
// //         className=" py-16 px-5 md:px-20 lg:px-40"
// //       >
// //         <div className="grid md:grid-cols-3 gap-8">
// //           {services.map((service, index) => (
// //             <div 
// //               key={index} 
// //               className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
// //             >
// //               <service.icon className={`mx-auto h-16 w-16 ${service.color} mb-4`} />
// //               <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
// //                 {service.title}
// //               </h3>
// //               <p className="text-gray-600 text-center">
// //                 {service.description}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </motion.section>

// //       {/* Professional Training Section */}
// //       <div className="bg-white">
// //         <div className=" py-16 px-5 md:px-20 lg:px-40 grid md:grid-cols-2 gap-12 items-center">
// //           <motion.div 
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <Server className="h-12 w-12  mb-4" />
// //             <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-6">
// //               Professional Training Programs
// //             </h2>
// //             <p className="text-lg text-gray-600 mb-4">
// //               Our comprehensive training programs are designed to bridge the gap between academic learning and real-world industry requirements. We offer specialized courses that prepare students for the most demanding technological challenges.
// //             </p>
// //             <ul className="space-y-3 text-gray-600">
// //               <li className="flex items-center">
// //                 <Laptop className="mr-3 text-blue-500" />
// //                 Hands-on practical training
// //               </li>
// //               <li className="flex items-center">
// //                 <Network className="mr-3 text-green-500" />
// //                 Industry-certified instructors
// //               </li>
// //               <li className="flex items-center">
// //                 <Shield className="mr-3 text-red-500" />
// //                 Career support and placement assistance
// //               </li>
// //             </ul>
// //           </motion.div>
// //           <motion.div 
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <img 
// //               src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg" 
// //               alt="Professional Training" 
// //               className="rounded-xl shadow-lg"
// //             />
// //           </motion.div>
// //         </div>
// //       </div>

// //       {/* Certification Section */}
// //       {/* <motion.section 
// //         initial={{ opacity: 0, y: 50 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.6 }}
// //         className="bg-gray-50 py-16"
// //       >
// //         <div className=" px-5 md:px-20 lg:px-40 text-center">
// //           <h2 className=" text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
// //             Industry-Recognized Certifications
// //           </h2>
// //           <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-12">
// //             Our programs are aligned with the latest industry standards, ensuring you receive certifications that are valued by top technology companies worldwide.
// //           </p>
// //           <div className="grid md:grid-cols-4 gap-6">
// //             {['Microsoft', 'Cisco', 'AWS', 'CompTIA'].map((cert, index) => (
// //               <div 
// //                 key={index} 
// //                 className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center"
// //               >
// //                 <span className="text-xl font-bold text-gray-800">{cert}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </motion.section> */}
// //     </div>
// //   );
// // };

// // export default ServicesPage;


// import { useState } from 'react';
// import { 
//   Code, 
//   Network, 
//   Database, 
//   Shield, 
//   Laptop, 
//   CloudLightning, 
//   Brain, 
//   Server,
//   CheckCircle,
//   Users,
//   Award,
//   Briefcase
// } from 'lucide-react';

// const ServicesPage = () => {
//   const [activeService, setActiveService] = useState(null);
  
//   const services = [
//     {
//       icon: Code,
//       title: "Software Development Training",
//       description: "Comprehensive programs covering full-stack development, modern frameworks, and industry-standard programming languages.",
//       color: "text-orange-600",
//       details: "Master languages like JavaScript, Python, Java, and frameworks like React, Node.js, and Angular. Our hands-on approach ensures you build real-world applications while learning."
//     },
//     {
//       icon: Network,
//       title: "Network Administration",
//       description: "Advanced courses in network design, security, and management with hands-on laboratory experience.",
//       color: "text-amber-700",
//       details: "Learn to design, implement and manage enterprise networks. Get hands-on experience with routers, switches, and network security devices in our state-of-the-art lab."
//     },
//     {
//       icon: Database,
//       title: "Data Science & Analytics",
//       description: "In-depth training in data analysis, machine learning, and big data technologies.",
//       color: "text-red-600",
//       details: "From data cleaning to advanced predictive modeling, our courses cover SQL, Python, R, TensorFlow, and visualization tools like Tableau and Power BI."
//     },
//     {
//       icon: Shield,
//       title: "Cybersecurity Programs",
//       description: "Specialized courses in ethical hacking, network security, and information protection strategies.",
//       color: "text-purple-700",
//       details: "Become a security expert with training in vulnerability assessment, penetration testing, security audits, and compliance frameworks including ISO 27001 and NIST."
//     },
//     {
//       icon: CloudLightning,
//       title: "Cloud Computing",
//       description: "Comprehensive cloud technology training including AWS, Azure, and Google Cloud platforms.",
//       color: "text-blue-700",
//       details: "Master cloud architecture, deployment models, and management tools. Get certified in leading platforms and learn to design scalable, cost-effective cloud solutions."
//     },
//     {
//       icon: Brain,
//       title: "Artificial Intelligence & ML",
//       description: "Cutting-edge courses in AI development, neural networks, and intelligent system design.",
//       color: "text-teal-700",
//       details: "Dive into neural networks, deep learning, natural language processing, and computer vision. Build AI models that solve real business problems."
//     }
//   ];

//   const benefits = [
//     {
//       icon: Laptop,
//       title: "Hands-on Labs",
//       description: "All courses feature extensive practical sessions in our modern computer labs"
//     },
//     {
//       icon: Award,
//       title: "Industry Certifications",
//       description: "Programs aligned with globally recognized certification paths"
//     },
//     {
//       icon: Users,
//       title: "Expert Instructors",
//       description: "Learn from professionals with years of industry experience"
//     },
//     {
//       icon: Briefcase,
//       title: "Career Support",
//       description: "Resume workshops, interview preparation, and job placement assistance"
//     }
//   ];

//   return (
//     <div className="bg-[#fceedb]">
//       {/* Hero Section */}
//       <div className="relative pt-14 md:pt-32 pb-16 px-5 md:px-16 lg:px-24 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-b-3xl">
//         <div className="text-center">
//           <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
//             Tech Excellence Training Programs
//           </h1>
//           <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-amber-50">
//             Empowering Tomorrow's Technology Leaders Through Comprehensive, Industry-Focused Training
//           </p>
//           <button className="mt-8 bg-white text-orange-600 font-semibold px-8 py-3 rounded-full hover:bg-orange-50 transition-all shadow-lg">
//             Explore Programs
//           </button>
//         </div>
//       </div>

//       {/* Services Intro */}
//       <div className="max-w-4xl mx-auto text-center pt-16 px-6">
//         <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-800">Our Specialized Training Services</h2>
//         <p className="text-amber-900">
//           Choose from our wide range of professional IT training programs designed to equip you with the skills most in-demand by today's technology industry.
//         </p>
//       </div>

//       {/* Services Grid */}
//       <section className="py-10 px-5 md:px-16 lg:px-24">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div 
//               key={index} 
//               className="bg-white rounded-xl p-6 transform transition duration-300 hover:scale-105 shadow-md hover:shadow-xl cursor-pointer"
//               onClick={() => setActiveService(activeService === index ? null : index)}
//             >
//               <div className="flex items-center mb-4">
//                 <div className={`p-3 rounded-lg ${service.color.replace('text-', 'bg-').replace('-700', '-100').replace('-600', '-100')}`}>
//                   <service.icon className={`h-8 w-8 ${service.color}`} />
//                 </div>
//                 <h3 className="text-xl font-bold text-amber-900 ml-4">
//                   {service.title}
//                 </h3>
//               </div>
//               <p className="text-amber-800 mb-3">
//                 {service.description}
//               </p>
              
//               {activeService === index && (
//                 <div className="mt-4 pt-4 border-t border-amber-100 text-amber-700 text-sm">
//                   {service.details}
//                   <button className="mt-3 text-orange-600 flex items-center font-medium">
//                     Learn more 
//                     <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
//                 </div>
//               )}
              
//               {activeService !== index && (
//                 <button className="mt-2 text-orange-600 flex items-center font-medium">
//                   See details
//                   <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-16 px-5 md:px-16 lg:px-24 bg-gradient-to-b from-[#fceedb] to-amber-100">
//         <div className="flex flex-col md:flex-row gap-12 items-center">
//           <div className="md:w-1/2">
//             <div className="p-3 inline-block rounded-lg bg-orange-100 mb-4">
//               <Server className="h-8 w-8 text-orange-600" />
//             </div>
//             <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6">
//               Why Choose Our Training Programs?
//             </h2>
//             <p className="text-lg text-amber-800 mb-6">
//               Our comprehensive IT training programs are carefully designed to bridge the gap between academic learning and real-world industry requirements. With a focus on practical skills and hands-on experience, we prepare students for success in today's competitive tech landscape.
//             </p>
            
//             <div className="grid sm:grid-cols-2 gap-4 mt-8">
//               {benefits.map((benefit, index) => (
//                 <div key={index} className="flex items-start">
//                   <div className="p-2 rounded-lg bg-orange-100">
//                     <benefit.icon className="h-6 w-6 text-orange-600" />
//                   </div>
//                   <div className="ml-3">
//                     <h4 className="font-semibold text-amber-900">{benefit.title}</h4>
//                     <p className="text-sm text-amber-700">{benefit.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className="md:w-1/2">
//             <div className="bg-white p-5 rounded-2xl shadow-lg">
//               <img 
//                 src="/api/placeholder/600/400" 
//                 alt="Professional Training" 
//                 className="rounded-xl"
//               />
              
//               <div className="mt-6 p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
//                 <h3 className="text-xl font-bold text-amber-900 mb-4">Student Success Rate</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <div className="flex justify-between mb-1">
//                       <span className="text-sm font-medium text-amber-800">Job Placement</span>
//                       <span className="text-sm font-medium text-amber-800">92%</span>
//                     </div>
//                     <div className="w-full bg-amber-200 rounded-full h-2">
//                       <div className="bg-orange-500 h-2 rounded-full" style={{ width: '92%' }}></div>
//                     </div>
//                   </div>
                  
//                   <div>
//                     <div className="flex justify-between mb-1">
//                       <span className="text-sm font-medium text-amber-800">Certification Pass Rate</span>
//                       <span className="text-sm font-medium text-amber-800">88%</span>
//                     </div>
//                     <div className="w-full bg-amber-200 rounded-full h-2">
//                       <div className="bg-orange-500 h-2 rounded-full" style={{ width: '88%' }}></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Certification Partners */}
//       <section className="py-16 px-5 md:px-16 lg:px-24">
//         <div className="text-center">
//           <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">
//             Industry-Recognized Certifications
//           </h2>
//           <p className="max-w-3xl mx-auto text-lg text-amber-800 mb-12">
//             Our programs are aligned with the latest industry standards, ensuring you receive certifications that are valued by top technology companies worldwide.
//           </p>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {['Microsoft', 'Cisco', 'AWS', 'CompTIA'].map((cert, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white shadow-md rounded-xl p-6 flex items-center justify-center"
//               >
//                 <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">{cert}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Call to Action */}
//       <section className="py-16 px-5 md:px-16 lg:px-24 bg-gradient-to-r from-amber-500 to-orange-600 rounded-t-3xl">
//         <div className="text-center">
//           <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
//             Ready to Advance Your IT Career?
//           </h2>
//           <p className="max-w-3xl mx-auto text-lg text-amber-50 mb-8">
//             Join our community of tech professionals and start your journey toward expertise in the most in-demand technology skills.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full hover:bg-orange-50 transition-all shadow-lg">
//               Browse Courses
//             </button>
//             <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all">
//               Request Information
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServicesPage;


import { useState } from 'react';
import { 
  Code, 
  Network, 
  Database, 
  Shield, 
  Laptop, 
  CloudLightning, 
  Brain, 
  Server,
  CheckCircle,
  Users,
  Award,
  Briefcase,
  Clock,
  Calendar,
  GraduationCap,
  DollarSign,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);
  const [showProgramsModal, setShowProgramsModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  
  const services = [
    {
      icon: Code,
      title: "Software Development Training",
      description: "Comprehensive programs covering full-stack development, modern frameworks, and industry-standard programming languages.",
      color: "text-orange-600",
      details: "Master languages like JavaScript, Python, Java, and frameworks like React, Node.js, and Angular. Our hands-on approach ensures you build real-world applications while learning."
    },
    {
      icon: Network,
      title: "Network Administration",
      description: "Advanced courses in network design, security, and management with hands-on laboratory experience.",
      color: "text-amber-700",
      details: "Learn to design, implement and manage enterprise networks. Get hands-on experience with routers, switches, and network security devices in our state-of-the-art lab."
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "In-depth training in data analysis, machine learning, and big data technologies.",
      color: "text-red-600",
      details: "From data cleaning to advanced predictive modeling, our courses cover SQL, Python, R, TensorFlow, and visualization tools like Tableau and Power BI."
    },
    {
      icon: Shield,
      title: "Cybersecurity Programs",
      description: "Specialized courses in ethical hacking, network security, and information protection strategies.",
      color: "text-purple-700",
      details: "Become a security expert with training in vulnerability assessment, penetration testing, security audits, and compliance frameworks including ISO 27001 and NIST."
    },
    {
      icon: CloudLightning,
      title: "Cloud Computing",
      description: "Comprehensive cloud technology training including AWS, Azure, and Google Cloud platforms.",
      color: "text-blue-700",
      details: "Master cloud architecture, deployment models, and management tools. Get certified in leading platforms and learn to design scalable, cost-effective cloud solutions."
    },
    {
      icon: Brain,
      title: "Artificial Intelligence & ML",
      description: "Cutting-edge courses in AI development, neural networks, and intelligent system design.",
      color: "text-teal-700",
      details: "Dive into neural networks, deep learning, natural language processing, and computer vision. Build AI models that solve real business problems."
    }
  ];

  const benefits = [
    {
      icon: Laptop,
      title: "Hands-on Labs",
      description: "All courses feature extensive practical sessions in our modern computer labs"
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description: "Programs aligned with globally recognized certification paths"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from professionals with years of industry experience"
    },
    {
      icon: Briefcase,
      title: "Career Support",
      description: "Resume workshops, interview preparation, and job placement assistance"
    }
  ];

  return (
    <div className="bg-[#fceedb]">
      {/* Hero Section */}
      <div className="relative pt-14 md:pt-32 pb-16 px-5 md:px-16 lg:px-24 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-b-3xl">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Tech Excellence Training Programs
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-amber-50">
            Empowering Tomorrow's Technology Leaders Through Comprehensive, Industry-Focused Training
          </p>
          <button 
            className="mt-8 bg-white text-orange-600 font-semibold px-8 py-3 rounded-full hover:bg-orange-50 transition-all shadow-lg"
            onClick={() => setShowProgramsModal(true)}
          >
            Explore Programs
          </button>
        </div>
      </div>

      {/* Services Intro */}
      <div className="max-w-4xl mx-auto text-center pt-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-800">Our Specialized Training Services</h2>
        <p className="text-amber-900">
          Choose from our wide range of professional IT training programs designed to equip you with the skills most in-demand by today's technology industry.
        </p>
      </div>

      {/* Services Grid */}
      <section className="py-10 px-5 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 transform transition duration-300 hover:scale-105 shadow-md hover:shadow-xl cursor-pointer"
              onClick={() => setActiveService(activeService === index ? null : index)}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${service.color.replace('text-', 'bg-').replace('-700', '-100').replace('-600', '-100')}`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-amber-900 ml-4">
                  {service.title}
                </h3>
              </div>
              <p className="text-amber-800 mb-3">
                {service.description}
              </p>
              
              {activeService === index && (
                <div className="mt-4 pt-4 border-t border-amber-100 text-amber-700 text-sm">
                  {service.details}
                  <button className="mt-3 text-orange-600 flex items-center font-medium">
                    Learn more 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
              
              {activeService !== index && (
                <button className="mt-2 text-orange-600 flex items-center font-medium">
                  See details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-5 md:px-16 lg:px-24 bg-gradient-to-b from-[#fceedb] to-amber-100">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="p-3 inline-block rounded-lg bg-orange-100 mb-4">
              <Server className="h-8 w-8 text-orange-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6">
              Why Choose Our Training Programs?
            </h2>
            <p className="text-lg text-amber-800 mb-6">
              Our comprehensive IT training programs are carefully designed to bridge the gap between academic learning and real-world industry requirements. With a focus on practical skills and hands-on experience, we prepare students for success in today's competitive tech landscape.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-2 rounded-lg bg-orange-100">
                    <benefit.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-amber-900">{benefit.title}</h4>
                    <p className="text-sm text-amber-700">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white p-5 rounded-2xl shadow-lg">
              {/* <img 
                src="/api/placeholder/600/400" 
                alt="Professional Training" 
                className="rounded-xl"
              />
               */}
              <div className="mt-6 p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Student Success Rate</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-amber-800">Job Placement</span>
                      <span className="text-sm font-medium text-amber-800">92%</span>
                    </div>
                    <div className="w-full bg-amber-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-amber-800">Certification Pass Rate</span>
                      <span className="text-sm font-medium text-amber-800">88%</span>
                    </div>
                    <div className="w-full bg-amber-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Partners */}
      <section className="py-16 px-5 md:px-16 lg:px-24">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">
            Industry-Recognized Certifications
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-amber-800 mb-12">
            Our programs are aligned with the latest industry standards, ensuring you receive certifications that are valued by top technology companies worldwide.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Microsoft', 'Cisco', 'AWS', 'CompTIA'].map((cert, index) => (
              <div 
                key={index} 
                className="bg-white shadow-md rounded-xl p-6 flex items-center justify-center"
              >
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-5 md:px-16 lg:px-24 bg-gradient-to-r from-amber-500 to-orange-600 rounded-t-3xl">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Advance Your IT Career?
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-amber-50 mb-8">
            Join our community of tech professionals and start your journey toward expertise in the most in-demand technology skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full hover:bg-orange-50 transition-all shadow-lg"
              onClick={() => setShowProgramsModal(true)}
            >
              Browse Courses
            </button>
            <Link to="/contact">
            <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all">
              Request Information
            </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Program Explorer Modal */}
      {showProgramsModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#fceedb] rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col relative">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Explore Our Training Programs</h2>
              <button 
                onClick={() => {
                  setShowProgramsModal(false);
                  setSelectedProgram(null);
                }}
                className="text-white hover:text-amber-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row overflow-hidden h-full">
              {/* Categories Sidebar */}
              <div className="md:w-1/4 bg-amber-100 p-4 md:p-6 overflow-y-auto">
                <h3 className="font-bold text-amber-900 mb-4 text-lg">Program Categories</h3>
                <div className="space-y-2">
                  {programsData.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedProgram(category)}
                      className={`w-full text-left p-3 rounded-lg flex items-center transition-all ${selectedProgram && selectedProgram.id === category.id ? 'bg-amber-500 text-white' : 'hover:bg-amber-200 text-amber-800'}`}
                    >
                      <div className={`p-2 rounded-lg ${selectedProgram && selectedProgram.id === category.id ? 'bg-white/20' : category.bgColor}`}>
                        <category.icon className={`h-5 w-5 ${selectedProgram && selectedProgram.id === category.id ? 'text-white' : category.color}`} />
                      </div>
                      <span className="ml-3 font-medium">{category.category}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Main Content Area */}
              <div className="md:w-3/4 p-4 md:p-6 overflow-y-auto">
                {selectedProgram ? (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-lg ${selectedProgram.bgColor}`}>
                        <selectedProgram.icon className={`h-8 w-8 ${selectedProgram.color}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-900 ml-4">{selectedProgram.category} Programs</h3>
                    </div>
                    
                    <div className="space-y-6">
                      {selectedProgram.programs.map((program, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                          <div className={`p-6 border-b border-amber-100`}>
                            <h4 className="text-xl font-bold text-amber-900">{program.title}</h4>
                            <p className="text-amber-700 mt-2">{program.description}</p>
                          </div>
                          
                          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-semibold text-amber-900 mb-3">Course Details</h5>
                              <ul className="space-y-2">
                                <li className="flex items-start">
                                  <Clock className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <span className="font-medium text-amber-900">Duration:</span> {program.duration}
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <Calendar className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <span className="font-medium text-amber-900">Schedule:</span> {program.schedule}
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <GraduationCap className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <span className="font-medium text-amber-900">Level:</span> {program.level}
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <Award className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <span className="font-medium text-amber-900">Certification:</span> {program.certification}
                                  </div>
                                </li>
                                {/* <li className="flex items-start">
                                  <DollarSign className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <span className="font-medium text-amber-900">Price:</span> {program.price}
                                  </div>
                                </li> */}
                              </ul>
                            </div>
                            
                            <div>
                              <h5 className="font-semibold text-amber-900 mb-3">What You'll Learn</h5>
                              <ul className="space-y-1">
                                {program.topics.map((topic, i) => (
                                  <li key={i} className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-1" />
                                    <span className="text-amber-800">{topic}</span>
                                  </li>
                                ))}
                              </ul>
                              
                              <div className="mt-4 pt-4 border-t border-amber-100">
                                <h5 className="font-semibold text-amber-900 mb-2">Limited Seats Available</h5>
                                {/* <div className="flex flex-wrap gap-2">
                                  {program.startDates.map((date, i) => (
                                    <span key={i} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                                      {date}
                                    </span>
                                  ))}
                                </div> */}
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-amber-50 p-4 flex justify-between items-center">
                            <div className="text-sm text-amber-700">
                              <span className="font-medium">Prerequisites:</span> {program.prerequisites}
                            </div>
                            <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                              Enroll Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="bg-amber-100 p-6 rounded-full mb-6">
                      <GraduationCap className="h-12 w-12 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-amber-900 mb-3">Select a Program Category</h3>
                    <p className="text-amber-700 max-w-md">
                      Choose from our comprehensive range of IT training programs to advance your career in technology.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Programs data for the Explore Programs modal
const programsData = [
  {
    id: 1,
    category: "Software Development",
    icon: Code,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    programs: [
      {
        title: "Full-Stack JavaScript Development",
        description: "Master both front-end and back-end development with JavaScript, React, Node.js, and modern frameworks.",
        duration: "5-6 months",
        schedule: "Weekday evenings & weekend options",
        level: "Intermediate",
        prerequisites: "Basic programming knowledge",
        certification: "Full-Stack Developer Certification",
        // price: "$2,499",
        startDates: ["June 15, 2025", "September 10, 2025"],
        topics: [
          "JavaScript Fundamentals & ES6+",
          "React.js & Redux",
          "Node.js & Express",
          "MongoDB & SQL Databases",
          "RESTful API Development",
          "Authentication & Security",
          "Deployment & DevOps Basics"
        ]
      },
      {
        title: "Python Programming Specialist",
        description: "Comprehensive Python training covering automation, web development, and data processing applications.",
        duration: "12 weeks",
        schedule: "Flexible online or in-person options",
        level: "Beginner to Intermediate",
        prerequisites: "None",
        certification: "Python Developer Certification",
        price: "$1,899",
        startDates: ["July 5, 2025", "October 20, 2025"],
        topics: [
          "Python Syntax & Core Concepts",
          "Object-Oriented Programming",
          "Web Development with Django/Flask",
          "Data Processing with Pandas",
          "API Integration",
          "Automation Scripts",
          "Testing & Debugging"
        ]
      },
      {
        title: "Mobile App Development",
        description: "Learn to build cross-platform mobile applications using React Native for iOS and Android.",
        duration: "14 weeks",
        schedule: "Weekday evenings",
        level: "Intermediate",
        prerequisites: "JavaScript basics",
        certification: "Mobile App Developer Certification",
        price: "$2,299",
        startDates: ["August 12, 2025", "November 5, 2025"],
        topics: [
          "React Native Fundamentals",
          "Mobile UI/UX Design Principles",
          "State Management",
          "Native Device Features",
          "API Integration",
          "App Store Deployment",
          "Performance Optimization"
        ]
      }
    ]
  },
  {
    id: 2,
    category: "Network Administration",
    icon: Network,
    color: "text-amber-700",
    bgColor: "bg-amber-100",
    programs: [
      {
        title: "Cisco Network Associate",
        description: "Comprehensive networking course covering routing, switching, and network security fundamentals.",
        duration: "10 weeks",
        schedule: "Weekend classes",
        level: "Beginner to Intermediate",
        prerequisites: "Basic IT knowledge",
        certification: "Aligned with CCNA",
        price: "$1,799",
        startDates: ["June 20, 2025", "September 15, 2025"],
        topics: [
          "Network Fundamentals",
          "IP Addressing & Subnetting",
          "Routing Protocols",
          "VLANs & Trunking",
          "Network Security Basics",
          "Wireless Networking",
          "Network Troubleshooting"
        ]
      },
      {
        title: "Advanced Network Security",
        description: "Deep dive into enterprise network security, threat detection, and mitigation strategies.",
        duration: "12 weeks",
        schedule: "Weekday evenings",
        level: "Advanced",
        prerequisites: "Networking basics",
        certification: "Network Security Professional",
        price: "$2,499",
        startDates: ["July 10, 2025", "October 5, 2025"],
        topics: [
          "Firewall Configuration & Management",
          "Intrusion Detection Systems",
          "VPN Technologies",
          "Security Policies & Compliance",
          "Threat Analysis",
          "Incident Response",
          "Security Auditing"
        ]
      }
    ]
  },
  {
    id: 3,
    category: "Data Science & Analytics",
    icon: Database,
    color: "text-red-600",
    bgColor: "bg-red-100",
    programs: [
      {
        title: "Data Analysis with Python",
        description: "Learn to process, analyze, and visualize data using Python and popular libraries.",
        duration: "12 weeks",
        schedule: "Flexible online or in-person options",
        level: "Beginner to Intermediate",
        prerequisites: "Basic programming helpful but not required",
        certification: "Data Analysis Professional",
        price: "$1,999",
        startDates: ["June 8, 2025", "September 22, 2025"],
        topics: [
          "Python for Data Analysis",
          "NumPy & Pandas Fundamentals",
          "Data Cleaning & Preprocessing",
          "Exploratory Data Analysis",
          "Data Visualization with Matplotlib & Seaborn",
          "Statistical Analysis",
          "Dashboard Creation"
        ]
      },
      {
        title: "Machine Learning Foundations",
        description: "Introduction to machine learning algorithms, techniques, and practical applications.",
        duration: "14 weeks",
        schedule: "Weekday evenings & weekend options",
        level: "Intermediate",
        prerequisites: "Python basics",
        certification: "Machine Learning Associate",
        price: "$2,699",
        startDates: ["July 15, 2025", "October 10, 2025"],
        topics: [
          "Supervised vs. Unsupervised Learning",
          "Classification & Regression",
          "Decision Trees & Random Forests",
          "Neural Networks Basics",
          "Model Evaluation & Validation",
          "Feature Engineering",
          "Practical ML Projects"
        ]
      }
    ]
  },
  {
    id: 4,
    category: "Cybersecurity",
    icon: Shield,
    color: "text-purple-700",
    bgColor: "bg-purple-100",
    programs: [
      {
        title: "Ethical Hacking & Penetration Testing",
        description: "Learn ethical hacking methodologies, vulnerability assessment, and security testing.",
        duration: "12 weeks",
        schedule: "Weekend intensive",
        level: "Intermediate to Advanced",
        prerequisites: "Basic networking knowledge",
        certification: "Certified Ethical Hacker Prep",
        price: "$2,499",
        startDates: ["June 12, 2025", "September 5, 2025"],
        topics: [
          "Reconnaissance Techniques",
          "Scanning & Enumeration",
          "Vulnerability Assessment",
          "System Hacking Methods",
          "Web Application Security",
          "Social Engineering",
          "Report Writing & Documentation"
        ]
      },
      {
        title: "Security Operations Center (SOC) Analyst",
        description: "Develop skills needed to work in a security operations center monitoring and responding to threats.",
        duration: "10 weeks",
        schedule: "Weekday evenings",
        level: "Intermediate",
        prerequisites: "IT or networking background",
        certification: "SOC Analyst Certification",
        price: "$1,999",
        startDates: ["July 20, 2025", "October 15, 2025"],
        topics: [
          "Security Information & Event Management (SIEM)",
          "Log Analysis",
          "Alert Triage & Investigation",
          "Incident Response",
          "Threat Intelligence",
          "Security Monitoring",
          "Compliance Requirements"
        ]
      }
    ]
  },
  {
    id: 5,
    category: "Cloud Computing",
    icon: CloudLightning,
    color: "text-blue-700",
    bgColor: "bg-blue-100",
    programs: [
      {
        title: "AWS Solutions Architect",
        description: "Comprehensive training on designing and deploying scalable systems on Amazon Web Services.",
        duration: "10 weeks",
        schedule: "Weekday evenings & weekend options",
        level: "Intermediate",
        prerequisites: "Basic IT knowledge",
        certification: "AWS Solutions Architect Associate Prep",
        price: "$1,999",
        startDates: ["June 25, 2025", "September 18, 2025"],
        topics: [
          "AWS Core Services",
          "Virtual Private Cloud (VPC)",
          "EC2 & EBS",
          "S3 & Glacier Storage",
          "Database Services",
          "High Availability & Fault Tolerance",
          "Cost Optimization"
        ]
      },
      {
        title: "Multi-Cloud Specialist",
        description: "Learn to work across AWS, Azure, and Google Cloud platforms for versatile cloud expertise.",
        duration: "14 weeks",
        schedule: "Weekend classes",
        level: "Intermediate to Advanced",
        prerequisites: "Basic cloud knowledge",
        certification: "Multi-Cloud Professional",
        // price: "$2,799",
        startDates: ["July 8, 2025", "October 22, 2025"],
        topics: [
          "Cloud Service Models Comparison",
          "Cross-Platform Management",
          "Identity & Access Management",
          "Multi-Cloud Networking",
          "Containers & Kubernetes",
          "Cloud Security Best Practices",
          "Cost Management Across Platforms"
        ]
      }
    ]
  },
  {
    id: 6,
    category: "Artificial Intelligence",
    icon: Brain,
    color: "text-teal-700",
    bgColor: "bg-teal-100",
    programs: [
      {
        title: "Deep Learning Specialist",
        description: "Master neural networks, deep learning frameworks, and AI model development.",
        duration: "16 weeks",
        schedule: "Weekday evenings",
        level: "Advanced",
        prerequisites: "Python programming, basic statistics",
        certification: "Deep Learning Professional",
        // price: "$2,999",
        startDates: ["June 10, 2025", "September 25, 2025"],
        topics: [
          "Neural Network Architectures",
          "TensorFlow & PyTorch",
          "Convolutional Neural Networks",
          "Recurrent Neural Networks",
          "Generative Models",
          "Transfer Learning",
          "Model Deployment"
        ]
      },
      {
        title: "Natural Language Processing",
        description: "Learn to build AI systems that can understand, interpret, and generate human language.",
        duration: "12 weeks",
        schedule: "Weekend intensive",
        level: "Intermediate to Advanced",
        prerequisites: "Python programming",
        certification: "NLP Specialist",
        // price: "$2,499",
        startDates: ["July 22, 2025", "October 8, 2025"],
        topics: [
          "Text Processing & Tokenization",
          "Word Embeddings",
          "Sentiment Analysis",
          "Named Entity Recognition",
          "Language Models",
          "Transformer Architectures",
          "Chatbot Development"
        ]
      }
    ]
  }
];

export default ServicesPage;