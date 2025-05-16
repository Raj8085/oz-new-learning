import WhyChooseITCareer from '@/component/home-component/ChooseIT'
import ServicesPage from '@/component/service-component/Services'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const Service = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <ServicesPage/>
        <WhyChooseITCareer />
        <Footer />
    </div>
  )
}

export default Service



// import { useState, useEffect, useRef } from "react"
// import {
//   Code,
//   Database,
//   Globe,
//   Cpu,
//   LineChart,
//   Shield,
//   Smartphone,
//   Cloud,
//   Layers,
//   Users,
//   ChevronRight,
//   Star,
//   TrendingUp,
//   Clock,
//   CheckCircle,
//   ArrowRight,
// } from "lucide-react"

// export default function Service() {
//   const [activeService, setActiveService] = useState(null)
//   // const [animatedElements, setAnimatedElements] = useState([])
//   const servicesRef = useRef(null)

//   // Animation on scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-in")
//           }
//         })
//       },
//       { threshold: 0.1 },
//     )

//     document.querySelectorAll(".animate-on-scroll").forEach((el) => {
//       observer.observe(el)
//     })

//     return () => {
//       document.querySelectorAll(".animate-on-scroll").forEach((el) => {
//         observer.unobserve(el)
//       })
//     }
//   }, [])

//   const services = [
//     {
//       id: 1,
//       title: "Web Development",
//       icon: <Globe className="h-6 w-6" />,
//       description:
//         "Master modern web technologies and frameworks to build responsive, dynamic websites and web applications.",
//       features: ["HTML5, CSS3 & JavaScript", "React, Angular & Vue.js", "Node.js & Express", "Responsive Design"],
//       popular: true,
//       duration: "16 weeks",
//       students: "1,200+",
//       color: "from-orange-600 to-red-500",
//     },
//     {
//       id: 2,
//       title: "Data Science",
//       icon: <LineChart className="h-6 w-6" />,
//       description:
//         "Learn to analyze complex data sets, build predictive models, and extract valuable insights using cutting-edge tools.",
//       features: ["Python & R Programming", "Statistical Analysis", "Machine Learning", "Data Visualization"],
//       popular: false,
//       duration: "20 weeks",
//       students: "950+",
//       color: "from-orange-500 to-red-600",
//     },
//     {
//       id: 3,
//       title: "Artificial Intelligence",
//       icon: <Cpu className="h-6 w-6" />,
//       description:
//         "Dive into the world of AI and learn to build intelligent systems that can perceive, learn, and solve complex problems.",
//       features: ["Neural Networks", "Computer Vision", "Natural Language Processing", "Reinforcement Learning"],
//       popular: true,
//       duration: "24 weeks",
//       students: "800+",
//       color: "from-red-500 to-orange-600",
//     },
//     {
//       id: 4,
//       title: "Mobile App Development",
//       icon: <Smartphone className="h-6 w-6" />,
//       description:
//         "Create powerful, user-friendly mobile applications for iOS and Android platforms using modern frameworks.",
//       features: ["React Native", "Flutter & Dart", "iOS Development", "Android Development"],
//       popular: false,
//       duration: "18 weeks",
//       students: "1,050+",
//       color: "from-orange-600 to-red-500",
//     },
//     {
//       id: 5,
//       title: "Cloud Computing",
//       icon: <Cloud className="h-6 w-6" />,
//       description:
//         "Master cloud platforms and learn to design, deploy, and manage scalable, reliable cloud-based applications.",
//       features: ["AWS & Azure", "Cloud Architecture", "Serverless Computing", "DevOps & CI/CD"],
//       popular: false,
//       duration: "16 weeks",
//       students: "750+",
//       color: "from-orange-500 to-red-600",
//     },
//     {
//       id: 6,
//       title: "Cybersecurity",
//       icon: <Shield className="h-6 w-6" />,
//       description:
//         "Learn to protect systems, networks, and data from digital attacks and implement robust security measures.",
//       features: ["Network Security", "Ethical Hacking", "Security Auditing", "Incident Response"],
//       popular: true,
//       duration: "20 weeks",
//       students: "680+",
//       color: "from-red-500 to-orange-600",
//     },
//     {
//       id: 7,
//       title: "Database Management",
//       icon: <Database className="h-6 w-6" />,
//       description:
//         "Master the art of designing, implementing, and managing databases to store and retrieve data efficiently.",
//       features: ["SQL & NoSQL", "Database Design", "Data Modeling", "Performance Optimization"],
//       popular: false,
//       duration: "14 weeks",
//       students: "920+",
//       color: "from-orange-600 to-red-500",
//     },
//     {
//       id: 8,
//       title: "Full-Stack Development",
//       icon: <Layers className="h-6 w-6" />,
//       description:
//         "Become a versatile developer capable of handling both client-side and server-side aspects of web applications.",
//       features: ["Frontend & Backend", "API Development", "Database Integration", "Deployment & Scaling"],
//       popular: true,
//       duration: "24 weeks",
//       students: "1,400+",
//       color: "from-orange-500 to-red-600",
//     },
//   ]

//   return (
//     <div className="bg-[#fceedb] py-16 sm:py-24" ref={servicesRef}>
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-16 animate-on-scroll">
//           <div className="inline-block bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
//             Our Expertise
//           </div>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
//             Cutting-Edge IT{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
//               Services & Courses
//             </span>
//           </h2>
//           <p className="text-gray-700 max-w-3xl mx-auto text-lg">
//             Discover our comprehensive range of technology courses designed to equip you with the skills needed for
//             today's digital world.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative animate-on-scroll`}
//               style={{ "--animate-delay": `${index * 0.1}s` }}
//               onMouseEnter={() => setActiveService(service.id)}
//               onMouseLeave={() => setActiveService(null)}
//             >
//               {service.popular && (
//                 <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 flex items-center gap-1">
//                   <Star className="h-3 w-3 fill-current" /> Popular
//                 </div>
//               )}
//               <div className="p-6 pb-4">
//                 <div
//                   className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-5 transform group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
//               </div>

//               <div className="px-6 pb-6">
//                 <div className="mb-4">
//                   <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
//                     <Clock className="h-4 w-4 text-orange-500" />
//                     <span>{service.duration}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-gray-500">
//                     <Users className="h-4 w-4 text-orange-500" />
//                     <span>{service.students} students</span>
//                   </div>
//                 </div>

//                 <div
//                   className={`overflow-hidden transition-all duration-300 ${activeService === service.id ? "max-h-40" : "max-h-0"}`}
//                 >
//                   <div className="mb-4">
//                     <h4 className="font-semibold text-sm mb-2 text-gray-700">What you'll learn:</h4>
//                     <ul className="space-y-1">
//                       {service.features.map((feature, idx) => (
//                         <li key={idx} className="flex items-start gap-2 text-sm">
//                           <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 <button className="w-full bg-gradient-to-r from-orange-600 to-red-500 hover:from-red-500 hover:to-orange-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
//                   Explore Course
//                   <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>

//               <div className="h-1.5 w-full bg-gradient-to-r from-orange-600 to-red-500"></div>
//             </div>
//           ))}
//         </div>

//         {/* Featured Service */}
//         <div
//           className="bg-white rounded-2xl shadow-xl overflow-hidden animate-on-scroll"
//           style={{ "--animate-delay": "0.4s" }}
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             <div className="p-8 sm:p-12">
//               <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
//                 Featured Program
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-bold mb-4">Full-Stack Web Development Bootcamp</h3>
//               <p className="text-gray-600 mb-6">
//                 Our most comprehensive program that takes you from beginner to job-ready developer. Learn front-end and
//                 back-end technologies, databases, and deployment in this immersive bootcamp.
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
//                 <div className="bg-orange-50 p-4 rounded-xl">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-red-500 flex items-center justify-center text-white">
//                       <Clock className="h-5 w-5" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold">24 Weeks</h4>
//                       <p className="text-sm text-gray-500">Full-time program</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-orange-50 p-4 rounded-xl">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-red-500 flex items-center justify-center text-white">
//                       <TrendingUp className="h-5 w-5" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold">92% Success</h4>
//                       <p className="text-sm text-gray-500">Job placement rate</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-3 mb-8">
//                 <h4 className="font-bold text-lg">What You'll Learn:</h4>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                   {[
//                     "HTML, CSS & JavaScript",
//                     "React & Redux",
//                     "Node.js & Express",
//                     "MongoDB & SQL",
//                     "RESTful APIs",
//                     "Authentication & Security",
//                     "Deployment & DevOps",
//                     "Portfolio Development",
//                   ].map((item, idx) => (
//                     <div key={idx} className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
//                       <span>{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <button className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-red-500 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 group">
//                 Enroll Now <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>

//             <div className="relative lg:h-auto">
              
//               <img
//                 src="public/ChatGPT Image May 15, 2025, 06_06_14 PM.png"
//                 alt="Full-Stack Development"
//                 className="w-full h-full "
//               />
            
//             </div>
//           </div>
//         </div>

//         {/* Service Categories */}
//         <div
//           className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll"
//           style={{ "--animate-delay": "0.5s" }}
//         >
//           <div className="bg-gradient-to-r from-orange-600 to-red-500 rounded-2xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
//                 <Code className="h-6 w-6" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold mb-2">Programming & Development</h3>
//                 <p className="text-white/80 mb-4">
//                   Master coding languages and frameworks to build powerful applications.
//                 </p>
//                 <button className="flex items-center gap-1 text-sm font-medium bg-white/20 hover:bg-white/30 transition-colors rounded-full px-4 py-1.5">
//                   View Courses <ChevronRight className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
//                 <LineChart className="h-6 w-6" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold mb-2">Data & Analytics</h3>
//                 <p className="text-white/80 mb-4">
//                   Learn to analyze data and extract valuable insights for business decisions.
//                 </p>
//                 <button className="flex items-center gap-1 text-sm font-medium bg-white/20 hover:bg-white/30 transition-colors rounded-full px-4 py-1.5">
//                   View Courses <ChevronRight className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
//                 <Shield className="h-6 w-6" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold mb-2">Security & Infrastructure</h3>
//                 <p className="text-white/80 mb-4">
//                   Protect systems and build robust infrastructure for modern applications.
//                 </p>
//                 <button className="flex items-center gap-1 text-sm font-medium bg-white/20 hover:bg-white/30 transition-colors rounded-full px-4 py-1.5">
//                   View Courses <ChevronRight className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 text-center animate-on-scroll" style={{ "--animate-delay": "0.6s" }}>
//           <h3 className="text-2xl sm:text-3xl font-bold mb-6">Ready to advance your tech career?</h3>
//           <p className="text-gray-700 max-w-2xl mx-auto mb-8">
//             Join thousands of students who have transformed their careers through our industry-leading IT courses.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <button className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-red-500 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
//               Browse All Courses
//             </button>
//             <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 rounded-full transition-all duration-300">
//               Request Information
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         .animate-on-scroll {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//           transition-delay: var(--animate-delay, 0s);
//         }
        
//         .animate-on-scroll.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }
        
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   )
// }


// import { useState, useEffect, useRef } from "react"
// import {
//   Code,
//   Database,
//   Globe,
//   Cpu,
//   LineChart,
//   Shield,
//   Smartphone,
//   Cloud,
//   Layers,
//   Users,
//   ChevronRight,
//   Star,
//   TrendingUp,
//   Clock,
//   CheckCircle,
//   ArrowRight,
//   MousePointer,
//   Gift
// } from "lucide-react"
// import { Link } from "react-router-dom"
// import Footer from "@/components/layout/Footer"

// export default function Service() {
//   const [activeService, setActiveService] = useState(null)
//   const [isLoaded, setIsLoaded] = useState(false)
//   const servicesRef = useRef(null)
//   const [animatedElements, setAnimatedElements] = useState([])
//   const [visibleSection, setVisibleSection] = useState('services')

//   // Animation on scroll with better performance
//   useEffect(() => {
//     setIsLoaded(true)
    
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.15
//     }
    
//     const handleIntersect = (entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           // Check if it's a section identifier
//           if (entry.target.dataset.section) {
//             setVisibleSection(entry.target.dataset.section)
//           }
          
//           // Add to animated elements for animation
//           setAnimatedElements(prev => [...prev, entry.target.dataset.id])
//           // Unobserve after animation
//           observer.unobserve(entry.target)
//         }
//       })
//     }
    
//     const observer = new IntersectionObserver(handleIntersect, observerOptions)
    
//     document.querySelectorAll('.animate-on-scroll').forEach(el => {
//       observer.observe(el)
//     })
    
//     document.querySelectorAll('[data-section]').forEach(el => {
//       observer.observe(el)
//     })
    
//     return () => {
//       observer.disconnect()
//     }
//   }, [])

//   const services = [
//     {
//       id: 1,
//       title: "Web Development",
//       icon: <Globe className="h-6 w-6" />,
//       description:
//         "Master modern web technologies and frameworks to build responsive, dynamic websites and web applications.",
//       features: ["HTML5, CSS3 & JavaScript", "React, Angular & Vue.js", "Node.js & Express", "Responsive Design"],
//       popular: true,
//       duration: "16 weeks",
//       students: "1,200+",
//       color: "from-orange-600 to-red-500",
//     },
//     {
//       id: 2,
//       title: "Data Science",
//       icon: <LineChart className="h-6 w-6" />,
//       description:
//         "Learn to analyze complex data sets, build predictive models, and extract valuable insights using cutting-edge tools.",
//       features: ["Python & R Programming", "Statistical Analysis", "Machine Learning", "Data Visualization"],
//       popular: false,
//       duration: "20 weeks",
//       students: "950+",
//       color: "from-orange-500 to-red-600",
//     },
//     {
//       id: 3,
//       title: "Artificial Intelligence",
//       icon: <Cpu className="h-6 w-6" />,
//       description:
//         "Dive into the world of AI and learn to build intelligent systems that can perceive, learn, and solve complex problems.",
//       features: ["Neural Networks", "Computer Vision", "Natural Language Processing", "Reinforcement Learning"],
//       popular: true,
//       duration: "24 weeks",
//       students: "800+",
//       color: "from-red-500 to-orange-600",
//     },
//     {
//       id: 4,
//       title: "Mobile App Development",
//       icon: <Smartphone className="h-6 w-6" />,
//       description:
//         "Create powerful, user-friendly mobile applications for iOS and Android platforms using modern frameworks.",
//       features: ["React Native", "Flutter & Dart", "iOS Development", "Android Development"],
//       popular: false,
//       duration: "18 weeks",
//       students: "1,050+",
//       color: "from-orange-600 to-red-500",
//     },
//     {
//       id: 5,
//       title: "Cloud Computing",
//       icon: <Cloud className="h-6 w-6" />,
//       description:
//         "Master cloud platforms and learn to design, deploy, and manage scalable, reliable cloud-based applications.",
//       features: ["AWS & Azure", "Cloud Architecture", "Serverless Computing", "DevOps & CI/CD"],
//       popular: false,
//       duration: "16 weeks",
//       students: "750+",
//       color: "from-orange-500 to-red-600",
//     },
//     {
//       id: 6,
//       title: "Cybersecurity",
//       icon: <Shield className="h-6 w-6" />,
//       description:
//         "Learn to protect systems, networks, and data from digital attacks and implement robust security measures.",
//       features: ["Network Security", "Ethical Hacking", "Security Auditing", "Incident Response"],
//       popular: true,
//       duration: "20 weeks",
//       students: "680+",
//       color: "from-red-500 to-orange-600",
//     },
//     {
//       id: 7,
//       title: "Database Management",
//       icon: <Database className="h-6 w-6" />,
//       description:
//         "Master the art of designing, implementing, and managing databases to store and retrieve data efficiently.",
//       features: ["SQL & NoSQL", "Database Design", "Data Modeling", "Performance Optimization"],
//       popular: false,
//       duration: "14 weeks",
//       students: "920+",
//       color: "from-orange-600 to-red-500",
//     },
//     {
//       id: 8,
//       title: "Full-Stack Development",
//       icon: <Layers className="h-6 w-6" />,
//       description:
//         "Become a versatile developer capable of handling both client-side and server-side aspects of web applications.",
//       features: ["Frontend & Backend", "API Development", "Database Integration", "Deployment & Scaling"],
//       popular: true,
//       duration: "24 weeks",
//       students: "1,400+",
//       color: "from-orange-500 to-red-600",
//     },
//   ]

//   const stats = [
//     { number: '12+', label: 'Years Experience', icon: <Clock className="h-5 w-5" /> },
//     { number: '25K+', label: 'Students Trained', icon: <Users className="h-5 w-5" /> },
//     { number: '98%', label: 'Satisfaction Rate', icon: <Star className="h-5 w-5" /> },
//     { number: '150+', label: 'Expert Instructors', icon: <Gift className="h-5 w-5" /> }
//   ]

//   return (
//     <>
//     <div 
//       className={`bg-gradient-to-b from-[#fceedb] to-[#fff5e9] py-16 sm:py-24 overflow-hidden transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
//       ref={servicesRef}
//     >
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div 
//           className={`text-center mb-16 animate-on-scroll transition-all duration-700 transform ${
//             animatedElements.includes('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//           data-id="header"
//         >
//           <div className="inline-block bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
//             Our Expertise
//           </div>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 relative">
//             Cutting-Edge IT{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500 relative">
//               Services & Courses
//               <div className="absolute h-1 bg-gradient-to-r from-orange-600 to-red-500 bottom-0 left-0 right-0 transform origin-left scale-x-100 transition-transform duration-500"></div>
//             </span>
//           </h2>
//           <p className="text-gray-700 max-w-3xl mx-auto text-lg">
//             Discover our comprehensive range of technology courses designed to equip you with the skills needed for
//             today's digital world.
//           </p>
//         </div>

//         {/* Quick Stats */}
//         <div 
//           className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-on-scroll"
//           data-id="stats"
//           data-section="stats"
//         >
//           {stats.map((stat, index) => (
//             <div 
//               key={index} 
//               className={`bg-white rounded-2xl p-6 shadow-lg border border-orange-100 transform transition-all duration-500 hover:shadow-xl hover:scale-105 ${
//                 animatedElements.includes('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//               }`}
//               style={{ transitionDelay: `${index * 0.1}s` }}
//             >
//               <div className="flex flex-col items-center text-center">
//                 <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white mb-3 shadow-md">
//                   {stat.icon}
//                 </div>
//                 <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">{stat.number}</h3>
//                 <p className="text-gray-600">{stat.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Services Grid */}
//         <div 
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
//           data-section="services"
//         >
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group relative animate-on-scroll border border-transparent hover:border-orange-200 ${
//                 animatedElements.includes(`service-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
//               }`}
//               style={{ transitionDelay: `${index * 0.075}s` }}
//               data-id={`service-${index}`}
//               onMouseEnter={() => setActiveService(service.id)}
//               onMouseLeave={() => setActiveService(null)}
//             >
//               {service.popular && (
//                 <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 flex items-center gap-1 shadow-md">
//                   <Star className="h-3 w-3 fill-current" /> Popular
//                 </div>
//               )}
//               <div className="p-6 pb-4">
//                 <div
//                   className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-5 transform group-hover:scale-110 transition-transform duration-500 shadow-md`}
//                 >
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
//               </div>

//               <div className="px-6 pb-6">
//                 <div className="mb-4">
//                   <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
//                     <Clock className="h-4 w-4 text-orange-500" />
//                     <span>{service.duration}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-gray-500">
//                     <Users className="h-4 w-4 text-orange-500" />
//                     <span>{service.students} students</span>
//                   </div>
//                 </div>

//                 <div
//                   className={`overflow-hidden transition-all duration-500 ${
//                     activeService === service.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
//                   }`}
//                 >
//                   <div className="mb-4">
//                     <h4 className="font-semibold text-sm mb-2 text-gray-700">What you'll learn:</h4>
//                     <ul className="space-y-1">
//                       {service.features.map((feature, idx) => (
//                         <li key={idx} className="flex items-start gap-2 text-sm">
//                           <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 <button className="w-full bg-gradient-to-r from-orange-600 to-red-500 hover:from-red-500 hover:to-orange-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-md hover:shadow-lg">
//                   Explore Course
//                   <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>

//               <div className="h-1.5 w-full bg-gradient-to-r from-orange-600 to-red-500"></div>
//             </div>
//           ))}
//         </div>

//         {/* Featured Service */}
//         <div
//           className={`bg-white rounded-2xl shadow-xl overflow-hidden animate-on-scroll border border-orange-100 transition-all duration-700 transform ${
//             animatedElements.includes('featured') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//           data-id="featured"
//           data-section="featured"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             <div className="p-8 sm:p-12">
//               <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-6 shadow-sm">
//                 Featured Program
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-bold mb-4">Full-Stack Web Development Bootcamp</h3>
//               <p className="text-gray-600 mb-6">
//                 Our most comprehensive program that takes you from beginner to job-ready developer. Learn front-end and
//                 back-end technologies, databases, and deployment in this immersive bootcamp.
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
//                 <div className="bg-orange-50 p-4 rounded-xl hover:shadow-md transition-shadow duration-300">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-red-500 flex items-center justify-center text-white shadow-sm">
//                       <Clock className="h-5 w-5" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold">24 Weeks</h4>
//                       <p className="text-sm text-gray-500">Full-time program</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-orange-50 p-4 rounded-xl hover:shadow-md transition-shadow duration-300">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-red-500 flex items-center justify-center text-white shadow-sm">
//                       <TrendingUp className="h-5 w-5" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold">92% Success</h4>
//                       <p className="text-sm text-gray-500">Job placement rate</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-3 mb-8">
//                 <h4 className="font-bold text-lg">What You'll Learn:</h4>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                   {[
//                     "HTML, CSS & JavaScript",
//                     "React & Redux",
//                     "Node.js & Express",
//                     "MongoDB & SQL",
//                     "RESTful APIs",
//                     "Authentication & Security",
//                     "Deployment & DevOps",
//                     "Portfolio Development",
//                   ].map((item, idx) => (
//                     <div key={idx} className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
//                       <span>{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <button className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-red-500 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 group shadow-md hover:shadow-lg">
//                 Enroll Now <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>

//             {/* <div className="relative h-64 lg:h-auto">
//               <div className="absolute inset-0z-10"></div>
//               <img
//                 src="/ChatGPT Image May 15, 2025, 05_51_12 PM.png"
//                 alt="Full-Stack Development"
//                 className="w-full h-full object-cover"
//               />
//             </div> */}
//           </div>
//         </div>

//         {/* Interactive Feature */}
//         <div 
//           className={`mt-16 bg-white rounded-2xl shadow-xl p-8 overflow-hidden animate-on-scroll border border-orange-100 transition-all duration-700 transform ${
//             animatedElements.includes('interactive') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//           data-id="interactive"
//           data-section="interactive"
//         >
//           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//             <div className="w-full md:w-1/2">
//               <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-sm">
//                 Interactive Learning
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-bold mb-4">Learn By Doing, Not Just Watching</h3>
//               <p className="text-gray-600 mb-6">
//                 Our courses emphasize hands-on practical experience with real-world projects. You'll build a professional portfolio while learning the most in-demand skills in the tech industry.
//               </p>
              
//               <div className="space-y-4 mb-6">
//                 <div className="flex items-start gap-3">
//                   <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <CheckCircle className="h-5 w-5 text-green-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Project-Based Learning</h4>
//                     <p className="text-gray-600 text-sm">Build real applications that solve real problems</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-3">
//                   <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <CheckCircle className="h-5 w-5 text-green-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Industry Mentors</h4>
//                     <p className="text-gray-600 text-sm">Get guidance from professionals working at top tech companies</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-3">
//                   <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <CheckCircle className="h-5 w-5 text-green-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Career Support</h4>
//                     <p className="text-gray-600 text-sm">Resume reviews, interview prep, and job placement assistance</p>
//                   </div>
//                 </div>
//               </div>
              
//               <button className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-red-500 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 group shadow-md hover:shadow-lg">
//                 Discover Our Approach <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
            
//             <div className="w-full md:w-1/2 relative">
//               <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-orange-100 to-red-100 p-6">
//                 <div className="flex items-center justify-center h-full">
//                   <div className="text-center">
//                     <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-600 to-red-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
//                       <MousePointer className="h-6 w-6" />
//                     </div>
//                     <h4 className="text-xl font-bold mb-2">Interactive Demo</h4>
//                     <p className="text-gray-600 mb-4">Experience our learning platform firsthand</p>
//                     <button className="bg-white text-orange-600 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 font-medium">
//                       Try Demo
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Service Categories */}
//         <div
//           className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll transition-all duration-700 transform ${
//             animatedElements.includes('categories') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//           data-id="categories"
//           data-section="categories"
//         >
//         </div>

//         {/* CTA Section */}
//         <div 
//           className={`mt-16 text-center animate-on-scroll bg-white rounded-2xl shadow-lg p-10 border border-orange-100 transition-all duration-700 transform ${
//             animatedElements.includes('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//           data-id="cta"
//           data-section="cta"
//         >
//           <div className="inline-block bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
//             Take the Next Step
//           </div>
//           <h3 className="text-2xl sm:text-3xl font-bold mb-6">Ready to advance your tech career?</h3>
//           <p className="text-gray-700 max-w-2xl mx-auto mb-8">
//             Join thousands of students who have transformed their careers through our industry-leading IT courses.
//           </p>
//           <Link to="/fullstack">
//           <div className="flex flex-wrap justify-center gap-4">
//             <button className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-red-500 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105">
//               Browse All Courses
//             </button>
//             <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105">
//               Request Information
//             </button>
//           </div>
//           </Link>
//         </div>
//       </div>

//       {/* Custom CSS Animations */}
//       <style jsx>{`
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         @keyframes float {
//           0% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//           100% {
//             transform: translateY(0px);
//           }
//         }

//         .float {
//           animation: float 5s ease-in-out infinite;
//         }

//         .aspect-w-16 {
//           position: relative;
//           padding-bottom: 56.25%;
//         }
        
//         .aspect-w-16 > * {
//           position: absolute;
//           height: 100%;
//           width: 100%;
//           top: 0;
//           right: 0;
//           bottom: 0;
//           left: 0;
//         }
        
//         @keyframes shimmer {
//           0% {
//             background-position: -1000px 0;
//           }
//           100% {
//             background-position: 1000px 0;
//           }
//         `}
        
//       </style>
//     </div>
//     <Footer/>
//     </>
//   )
// }



// import { useState, useRef, useEffect } from "react"
// import {
//   Database,
//   Globe,
//   Cpu,
//   LineChart,
//   Shield,
//   Smartphone,
//   Cloud,
//   Layers,
//   Users,
//   Star,
//   TrendingUp,
//   Clock,
//   CheckCircle,
//   ArrowRight,
//   MousePointer,
//   Gift,
//   X,
// } from "lucide-react"
// import { motion } from "framer-motion"
// import { Link } from "react-router-dom"

// export default function ServiceSection() {
//   const [activeService, setActiveService] = useState(null)
//   const [selectedService, setSelectedService] = useState(null)
//   const modalRef = useRef<HTMLDivElement>(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   // Close modal when clicking outside
//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (modalRef.current && !modalRef.current.contains(e)) {
//         setIsModalOpen(false)
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [])

//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "auto"
//     }
//     return () => {
//       document.body.style.overflow = "auto"
//     }
//   }, [isModalOpen])

//   const services = [
//     {
//       id: 1,
//       title: "Web Development",
//       icon: <Globe className="h-6 w-6" />,
//       description:
//         "Master modern web technologies and frameworks to build responsive, dynamic websites and web applications.",
//       features: ["HTML5, CSS3 & JavaScript", "React, Angular & Vue.js", "Node.js & Express", "Responsive Design"],
//       popular: true,
//       duration: "16 weeks",
//       students: "1,200+",
//       color: "from-orange-500 to-red-400",
//     },
//     {
//       id: 2,
//       title: "Data Science",
//       icon: <LineChart className="h-6 w-6" />,
//       description:
//         "Learn to analyze complex data sets, build predictive models, and extract valuable insights using cutting-edge tools.",
//       features: ["Python & R Programming", "Statistical Analysis", "Machine Learning", "Data Visualization"],
//       popular: false,
//       duration: "20 weeks",
//       students: "950+",
//       color: "from-amber-500 to-orange-400",
//     },
//     {
//       id: 3,
//       title: "Artificial Intelligence",
//       icon: <Cpu className="h-6 w-6" />,
//       description:
//         "Dive into the world of AI and learn to build intelligent systems that can perceive, learn, and solve complex problems.",
//       features: ["Neural Networks", "Computer Vision", "Natural Language Processing", "Reinforcement Learning"],
//       popular: true,
//       duration: "24 weeks",
//       students: "800+",
//       color: "from-red-500 to-orange-400",
//     },
//     {
//       id: 4,
//       title: "Mobile App Development",
//       icon: <Smartphone className="h-6 w-6" />,
//       description:
//         "Create powerful, user-friendly mobile applications for iOS and Android platforms using modern frameworks.",
//       features: ["React Native", "Flutter & Dart", "iOS Development", "Android Development"],
//       popular: false,
//       duration: "18 weeks",
//       students: "1,050+",
//       color: "from-orange-500 to-amber-400",
//     },
//     // {
//     //   id: 5,
//     //   title: "Cloud Computing",
//     //   icon: <Cloud className="h-6 w-6" />,
//     //   description:
//     //     "Master cloud platforms and learn to design, deploy, and manage scalable, reliable cloud-based applications.",
//     //   features: ["AWS & Azure", "Cloud Architecture", "Serverless Computing", "DevOps & CI/CD"],
//     //   popular: false,
//     //   duration: "16 weeks",
//     //   students: "750+",
//     //   color: "from-amber-500 to-orange-400",
//     // },
//     // {
//     //   id: 6,
//     //   title: "Cybersecurity",
//     //   icon: <Shield className="h-6 w-6" />,
//     //   description:
//     //     "Learn to protect systems, networks, and data from digital attacks and implement robust security measures.",
//     //   features: ["Network Security", "Ethical Hacking", "Security Auditing", "Incident Response"],
//     //   popular: true,
//     //   duration: "20 weeks",
//     //   students: "680+",
//     //   color: "from-red-500 to-orange-400",
//     // },
//     {
//       id: 5,
//       title: "Database Management",
//       icon: <Database className="h-6 w-6" />,
//       description:
//         "Master the art of designing, implementing, and managing databases to store and retrieve data efficiently.",
//       features: ["SQL & NoSQL", "Database Design", "Data Modeling", "Performance Optimization"],
//       popular: false,
//       duration: "14 weeks",
//       students: "920+",
//       color: "from-orange-500 to-amber-400",
//     },
//     {
//       id: 6,
//       title: "Full-Stack Development",
//       icon: <Layers className="h-6 w-6" />,
//       description:
//         "Become a versatile developer capable of handling both client-side and server-side aspects of web applications.",
//       features: ["Frontend & Backend", "API Development", "Database Integration", "Deployment & Scaling"],
//       popular: true,
//       duration: "24 weeks",
//       students: "1,400+",
//       color: "from-amber-500 to-orange-400",
//     },
//   ]

//   const stats = [
//     { number: "12+", label: "Years Experience", icon: <Clock className="h-5 w-5" /> },
//     { number: "25K+", label: "Students Trained", icon: <Users className="h-5 w-5" /> },
//     { number: "98%", label: "Satisfaction Rate", icon: <Star className="h-5 w-5" /> },
//     { number: "150+", label: "Expert Instructors", icon: <Gift className="h-5 w-5" /> },
//   ]

//   const getServiceById = (id) => {
//     return services.find((service) => service.id === id)
//   }

//   const openServiceModal = (id) => {
//     setSelectedService(id)
//     setIsModalOpen(true)
//   }

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   }

//   return (
//     <section className="bg-[#fceedb] py-16 md:py-24 overflow-hidden">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="inline-block bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-md">
//             Our Expertise
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
//             Cutting-Edge IT{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500 relative inline-block">
//               Services & Courses
//               <div className="absolute h-1 bg-gradient-to-r from-orange-600 to-red-500 bottom-0 left-0 right-0"></div>
//             </span>
//           </h2>
//           <p className="text-gray-700 max-w-3xl mx-auto text-lg">
//             Discover our comprehensive range of technology courses designed to equip you with the skills needed for
//             today's digital world.
//           </p>
//         </motion.div>

//         {/* Quick Stats */}
//         <motion.div
//           className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
//               variants={item}
//             >
//               <div className="flex flex-col items-center text-center">
//                 <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white mb-3 shadow-md">
//                   {stat.icon}
//                 </div>
//                 <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">{stat.number}</h3>
//                 <p className="text-gray-600">{stat.label}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Services Grid */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           {services.map((service) => (
//             <motion.div
//               key={service.id}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative border border-transparent hover:border-orange-200"
//               variants={item}
//               onMouseEnter={() => setActiveService(service.id)}
//               onMouseLeave={() => setActiveService(null)}
//             >
//               {service.popular && (
//                 <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 flex items-center gap-1 shadow-md">
//                   <Star className="h-3 w-3 fill-current" /> Popular
//                 </div>
//               )}
//               <div className="p-6 pb-4">
//                 <div
//                   className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-5 transform group-hover:scale-110 transition-transform duration-300 shadow-md`}
//                 >
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
//               </div>

//               <div className="px-6 pb-6">
//                 <div className="mb-4">
//                   <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
//                     <Clock className="h-4 w-4 text-orange-500" />
//                     <span>{service.duration}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-gray-500">
//                     <Users className="h-4 w-4 text-orange-500" />
//                     <span>{service.students} students</span>
//                   </div>
//                 </div>

//                 <div
//                   className={`overflow-hidden transition-all duration-300 ${
//                     activeService === service.id ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   <div className="mb-4">
//                     <h4 className="font-semibold text-sm mb-2 text-gray-700">What you'll learn:</h4>
//                     <ul className="space-y-1">
//                       {service.features.map((feature, idx) => (
//                         <li key={idx} className="flex items-start gap-2 text-sm">
//                           <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => openServiceModal(service.id)}
//                   className="w-full bg-gradient-to-r from-orange-600 to-red-500 hover:from-red-500 hover:to-orange-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-md hover:shadow-lg"
//                 >
//                   Explore Course
//                   <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>

//               <div className="h-1.5 w-full bg-gradient-to-r from-orange-600 to-red-500"></div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Featured Service */}
//         <motion.div
//           className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100 mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             <div className="p-8 sm:p-12">
//               <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-6 shadow-sm">
//                 Featured Program
//               </span>
//               <h3 className="text-2xl sm:text-3xl font-bold mb-4">Full-Stack Web Development Bootcamp</h3>
//               <p className="text-gray-600 mb-6">
//                 Our most comprehensive program that takes you from beginner to job-ready developer. Learn front-end and
//                 back-end technologies, databases, and deployment in this immersive bootcamp.
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
//                 <div className="bg-orange-50 p-4 rounded-xl hover:shadow-md transition-shadow duration-300">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-red-500 flex items-center justify-center text-white shadow-sm">
//                       <Clock className="h-5 w-5" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold">24 Weeks</h4>
//                       <p className="text-sm text-gray-500">Full-time program</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-orange-50 p-4 rounded-xl hover:shadow-md transition-shadow duration-300">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-red-500 flex items-center justify-center text-white shadow-sm">
//                       <TrendingUp className="h-5 w-5" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold">92% Success</h4>
//                       <p className="text-sm text-gray-500">Job placement rate</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-3 mb-8">
//                 <h4 className="font-bold text-lg">What You'll Learn:</h4>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                   {[
//                     "HTML, CSS & JavaScript",
//                     "React & Redux",
//                     "Node.js & Express",
//                     "MongoDB & SQL",
//                     "RESTful APIs",
//                     "Authentication & Security",
//                     "Deployment & DevOps",
//                     "Portfolio Development",
//                   ].map((item, idx) => (
//                     <div key={idx} className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
//                       <span>{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <button className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-red-500 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 group shadow-md hover:shadow-lg">
//                 Enroll Now <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>

//             <div className="relative lg:h-auto hidden lg:block">
//               <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 z-10"></div>
//               <div className="h-full w-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center p-12">
//                 <div className="relative w-full max-w-md">
//                   <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-orange-100 animate-pulse"></div>
//                   <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-red-100 animate-pulse delay-700"></div>

//                   <div className="bg-white rounded-xl shadow-xl p-8 relative z-10">
//                     <div className="flex justify-between items-center mb-6">
//                       <div className="flex space-x-2">
//                         <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                         <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                         <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                       </div>
//                       <div className="h-4 w-24 bg-gray-200 rounded"></div>
//                     </div>

//                     <div className="space-y-3">
//                       <div className="h-4 w-full bg-gray-200 rounded"></div>
//                       <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
//                       <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
//                     </div>

//                     <div className="mt-6 p-3 bg-orange-50 rounded-lg">
//                       <div className="flex items-center gap-2">
//                         <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-600 to-red-500 flex-shrink-0"></div>
//                         <div className="space-y-2 w-full">
//                           <div className="h-3 w-24 bg-gray-200 rounded"></div>
//                           <div className="h-3 w-32 bg-gray-200 rounded"></div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mt-6 grid grid-cols-2 gap-2">
//                       <div className="h-8 bg-orange-100 rounded"></div>
//                       <div className="h-8 bg-red-100 rounded"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Interactive Learning Section */}
//         <motion.div
//           className="bg-white rounded-2xl shadow-xl p-8 overflow-hidden border border-orange-100 mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//             <div className="w-full md:w-1/2">
//               <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-sm">
//                 Interactive Learning
//               </span>
//               <h3 className="text-2xl sm:text-3xl font-bold mb-4">Learn By Doing, Not Just Watching</h3>
//               <p className="text-gray-600 mb-6">
//                 Our courses emphasize hands-on practical experience with real-world projects. You'll build a
//                 professional portfolio while learning the most in-demand skills in the tech industry.
//               </p>

//               <div className="space-y-4 mb-6">
//                 <motion.div
//                   className="flex items-start gap-3"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: 0.1 }}
//                 >
//                   <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <CheckCircle className="h-5 w-5 text-green-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Project-Based Learning</h4>
//                     <p className="text-gray-600 text-sm">Build real applications that solve real problems</p>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   className="flex items-start gap-3"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: 0.2 }}
//                 >
//                   <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <CheckCircle className="h-5 w-5 text-green-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Industry Mentors</h4>
//                     <p className="text-gray-600 text-sm">
//                       Get guidance from professionals working at top tech companies
//                     </p>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   className="flex items-start gap-3"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: 0.3 }}
//                 >
//                   <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <CheckCircle className="h-5 w-5 text-green-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Career Support</h4>
//                     <p className="text-gray-600 text-sm">
//                       Resume reviews, interview prep, and job placement assistance
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>

//               <button className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-red-500 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 group shadow-md hover:shadow-lg">
//                 Discover Our Approach{" "}
//                 <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>

//             <div className="w-full md:w-1/2 relative ">
//               <div className="aspect-video rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-orange-100 to-red-100 p-6">
//                 <div className="flex items-center justify-center h-full">
//                   <div className="text-center">
//                     <div className="w-12 h-12 mx-auto bg-gradient-to-r from-orange-600 to-red-500 rounded-full flex items-center justify-center text-white mt-8 shadow-lg">
//                       <MousePointer className="h-4 w-4" />
//                     </div>
//                     <h4 className="text-xl font-bold mb-2">Interactive Demo</h4>
//                     <p className="text-gray-600 mb-4">Experience our learning platform firsthand</p>
//                     <button className="bg-white text-orange-600 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 font-medium mb-20">
//                       Try Demo
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           className="text-center bg-white rounded-2xl shadow-lg p-10 border border-orange-100"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="inline-block bg-gradient-to-r from-orange-600 to-red-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-md">
//             Take the Next Step
//           </span>
//           <h3 className="text-2xl sm:text-3xl font-bold mb-6">Ready to advance your tech career?</h3>
//           <p className="text-gray-700 max-w-2xl mx-auto mb-8">
//             Join thousands of students who have transformed their careers through our industry-leading IT courses.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link
//               to="/courses"
//               className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-red-500 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
//             >
//               Browse All Courses
//             </Link>
//             <Link
//               to="/contact"
//               className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
//             >
//               Request Information
//             </Link>
//           </div>
//         </motion.div>
//       </div>

//       {/* Service Modal */}
//       {isModalOpen && selectedService && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//           <motion.div
//             ref={modalRef}
//             className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             transition={{ type: "spring", damping: 20, stiffness: 300 }}
//           >
//             <div className="relative">
//               <div className="absolute top-4 right-4 z-10">
//                 <button
//                   onClick={() => setIsModalOpen(false)}
//                   className="bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200"
//                 >
//                   <X className="h-5 w-5 text-gray-700" />
//                 </button>
//               </div>

//               <div
//                 className={`h-32 bg-gradient-to-r ${getServiceById(selectedService)?.color} flex items-center justify-center`}
//               >
//                 <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
//                   {getServiceById(selectedService)?.icon && (
//                     <div className="h-8 w-8 text-white">{getServiceById(selectedService)?.icon}</div>
//                   )}
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-2xl font-bold mb-2">{getServiceById(selectedService)?.title}</h3>
//                 <p className="text-gray-600 mb-6">{getServiceById(selectedService)?.description}</p>

//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   <div className="bg-orange-50 p-4 rounded-xl">
//                     <div className="flex items-center gap-2">
//                       <Clock className="h-5 w-5 text-orange-500" />
//                       <div>
//                         <h4 className="font-semibold">Duration</h4>
//                         <p className="text-sm text-gray-600">{getServiceById(selectedService)?.duration}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-orange-50 p-4 rounded-xl">
//                     <div className="flex items-center gap-2">
//                       <Users className="h-5 w-5 text-orange-500" />
//                       <div>
//                         <h4 className="font-semibold">Students</h4>
//                         <p className="text-sm text-gray-600">{getServiceById(selectedService)?.students} enrolled</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-6">
//                   <h4 className="font-bold text-lg mb-3">What You'll Learn:</h4>
//                   <ul className="space-y-2">
//                     {getServiceById(selectedService)?.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start gap-3">
//                         <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="bg-orange-50 p-4 rounded-xl mb-6">
//                   <h4 className="font-bold mb-2">Course Structure</h4>
//                   <ul className="space-y-3">
//                     <li className="flex items-center gap-2">
//                       <div className="w-6 h-6 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-xs">
//                         1
//                       </div>
//                       <span>Fundamentals & Core Concepts</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <div className="w-6 h-6 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-xs">
//                         2
//                       </div>
//                       <span>Practical Applications</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <div className="w-6 h-6 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-xs">
//                         3
//                       </div>
//                       <span>Advanced Techniques</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <div className="w-6 h-6 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-xs">
//                         4
//                       </div>
//                       <span>Capstone Project</span>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="flex gap-4">
//                   <button className="flex-1 bg-gradient-to-r from-orange-600 to-red-500 hover:from-red-500 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
//                     Enroll Now <ArrowRight className="h-5 w-5" />
//                   </button>
//                   <button className="flex-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold py-3 px-6 rounded-lg transition-all duration-300">
//                     Download Syllabus
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </section>
//   )
// }
