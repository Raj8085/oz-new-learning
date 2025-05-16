// // // import { useState } from 'react';
// // // import { motion } from 'framer-motion';
// // // import { 
// // //   Mail, 
// // //   Phone, 
// // //   MapPin, 
// // //   Send,
// // // } from 'lucide-react';
// // // import { Input } from "@/components/ui/input";
// // // import { Textarea } from "@/components/ui/textarea";
// // // import { Button } from "@/components/ui/button";

// // // const Contact = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     phone: '',
// // //     message: ''
// // //   });

// // //   const [errors, setErrors] = useState({});
// // //   const [isSubmitting, setIsSubmitting] = useState(false);

// // //   const validateForm = () => {
// // //     const newErrors = {};

// // //     if (!formData.name.trim()) {
// // //       newErrors.name = "Name is required";
// // //     } else if (formData.name.trim().length < 2) {
// // //       newErrors.name = "Name must be at least 2 characters";
// // //     }

// // //     if (!formData.email.trim()) {
// // //       newErrors.email = "Email is required";
// // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // //       newErrors.email = "Email is invalid";
// // //     }

// // //     if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
// // //       newErrors.phone = "Phone number must be 10 digits";
// // //     }

// // //     if (!formData.message.trim()) {
// // //       newErrors.message = "Message is required";
// // //     } else if (formData.message.trim().length < 10) {
// // //       newErrors.message = "Message must be at least 10 characters";
// // //     }

// // //     setErrors(newErrors);
// // //     return Object.keys(newErrors).length === 0;
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData(prev => ({
// // //       ...prev,
// // //       [name]: value
// // //     }));
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
    
// // //     if (validateForm()) {
// // //       setIsSubmitting(true);
      
// // //       // Simulate form submission
// // //       setTimeout(() => {
// // //         console.log(formData);
// // //         // Reset form
// // //         setFormData({
// // //           name: '',
// // //           email: '',
// // //           phone: '',
// // //           message: ''
// // //         });
// // //         setErrors({});
// // //         setIsSubmitting(false);
// // //         alert('Message sent successfully!');
// // //       }, 2000);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
// // //        <motion.div 
// // //         initial="initial"
// // //         animate="in"
// // //         exit="out"
// // //         // variants={pageVariants}
// // //         // transition={pageTransition}
// // //         className="relative pt-14 md:pt-40 pb-20 px-5 md:px-20 lg:px-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
// // //       >
// // //         <div className="text-center">
// // //           <h1 className=" text-3xl md:text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
// // //             Contact Us
// // //           </h1>
// // //           <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-blue-100">
// // //             We're Here to Help You Reach Your Tech Potential
// // //           </p>
// // //         </div>
// // //       </motion.div>

// // //       <div className="px-5 md:px-20 lg:px-40 py-16 grid md:grid-cols-2 gap-12">
// // //         {/* Contact Information */}
// // //         <motion.div 
// // //           initial={{ opacity: 0, x: -50 }}
// // //           whileInView={{ opacity: 1, x: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.6 }}
// // //           className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100"
// // //         >
// // //           <h2 className="text-2xl font-bold text-indigo-600 mb-6">Contact Details</h2>
          
// // //           <div className="space-y-6">
// // //             <div className="flex items-center space-x-4 p-4 bg-indigo-50 rounded-xl">
// // //               <Mail className="text-indigo-600 h-8 w-8" />
// // //               <div>
// // //                 <p className="text-sm text-gray-500">Email</p>
// // //                 <p className="font-semibold text-indigo-800">info@ozlearning.com</p>
// // //               </div>
// // //             </div>
            
// // //             <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
// // //               <Phone className="text-green-600 h-8 w-8" />
// // //               <div>
// // //                 <p className="text-sm text-gray-500">Phone</p>
// // //                 <p className="font-semibold text-green-800">9171453224</p>
// // //               </div>
// // //             </div>
            
// // //             <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
// // //               <MapPin className="text-orange-600 h-8 w-8" />
// // //               <div>
// // //                 <p className="text-sm text-gray-500">Address</p>
// // //                 <p className="font-semibold text-orange-800">
// // //                   PU4,vijay nagar,indore
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </motion.div>

// // //         {/* Contact Form */}
// // //         <motion.div 
// // //           initial={{ opacity: 0, x: 50 }}
// // //           whileInView={{ opacity: 1, x: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.6 }}
// // //           className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100"
// // //         >
// // //           <h2 className="text-2xl font-bold text-indigo-600 mb-6">Send a Message</h2>
          
// // //           <form onSubmit={handleSubmit} className="space-y-6">
// // //             <div className="relative">
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 Full Name
// // //               </label>
// // //               <div className="relative">
// // //                 <Input 
// // //                   type="text"
// // //                   name="name"
// // //                   value={formData.name}
// // //                   onChange={handleChange}
// // //                   placeholder="Your Full Name"
// // //                   className={`w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
// // //                 />
// // //               </div>
// // //               {errors.name && (
// // //                 <p className="text-red-500 text-sm mt-1">{errors.name}</p>
// // //               )}
// // //             </div>

// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 Email Address
// // //               </label>
// // //               <div className="relative">
// // //                 <Input 
// // //                   type="email"
// // //                   name="email"
// // //                   value={formData.email}
// // //                   onChange={handleChange}
// // //                   placeholder="Your Email Address"
// // //                   className={`w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
// // //                 />
// // //               </div>
// // //               {errors.email && (
// // //                 <p className="text-red-500 text-sm mt-1">{errors.email}</p>
// // //               )}
// // //             </div>

// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 Phone Number (Optional)
// // //               </label>
// // //               <div className="relative">
// // //                 <Input 
// // //                   type="tel"
// // //                   name="phone"
// // //                   value={formData.phone}
// // //                   onChange={handleChange}
// // //                   placeholder="Your Phone Number"
// // //                   className={`w-full ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
// // //                 />
// // //               </div>
// // //               {errors.phone && (
// // //                 <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
// // //               )}
// // //             </div>

// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 Your Message
// // //               </label>
// // //               <div className="relative">
// // //                 <Textarea 
// // //                   name="message"
// // //                   value={formData.message}
// // //                   onChange={handleChange}
// // //                   placeholder="Write your message here"
// // //                   className={`w-full min-h-[120px] ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
// // //                 />
// // //               </div>
// // //               {errors.message && (
// // //                 <p className="text-red-500 text-sm mt-1">{errors.message}</p>
// // //               )}
// // //             </div>

// // //             <Button 
// // //               type="submit" 
// // //               disabled={isSubmitting}
// // //               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
// // //             >
// // //               {isSubmitting ? 'Sending...' : 'Send Message'}
// // //               <Send className="ml-2 h-4 w-4" />
// // //             </Button>
// // //           </form>
// // //         </motion.div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Contact;

// // import { useState, useEffect } from 'react';
// // import { motion } from 'framer-motion';
// // import { 
// //   Mail, 
// //   Phone, 
// //   MapPin, 
// //   Send,
// //   CheckCircle,
// //   Info,
// //   Clock
// // } from 'lucide-react';
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import { Button } from "@/components/ui/button";

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     message: ''
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [isSubmitted, setIsSubmitted] = useState(false);
// //   const [recentlyContacted, setRecentlyContacted] = useState(false);
// //   const [timeRemaining, setTimeRemaining] = useState(0);

// //   // Check if user has recently submitted a message
// //   useEffect(() => {
// //     const contactHistory = localStorage.getItem('contactHistory');
// //     if (contactHistory) {
// //       try {
// //         const history = JSON.parse(contactHistory);
        
// //         // Calculate if 24 hours have passed since last submission
// //         const lastContactTime = new Date(history.lastContactDate).getTime();
// //         const currentTime = new Date().getTime();
// //         const hoursSinceLastContact = (currentTime - lastContactTime) / (1000 * 60 * 60);
        
// //         if (hoursSinceLastContact < 24) {
// //           setRecentlyContacted(true);
          
// //           // Calculate remaining time in hours
// //           const remainingHours = Math.ceil(24 - hoursSinceLastContact);
// //           setTimeRemaining(remainingHours);
// //         }
// //       } catch (error) {
// //         console.error('Error parsing contact history:', error);
// //       }
// //     }
// //   }, []);

// //   // Load saved form data for convenience if user returns
// //   useEffect(() => {
// //     // Only load saved data if user hasn't contacted recently
// //     if (!recentlyContacted) {
// //       const savedFormData = localStorage.getItem('contactFormData');
// //       if (savedFormData) {
// //         try {
// //           setFormData(JSON.parse(savedFormData));
// //         } catch (error) {
// //           console.error('Error parsing stored form data:', error);
// //         }
// //       }
// //     }
// //   }, [recentlyContacted]);

// //   const validateForm = () => {
// //     const newErrors = {};

// //     if (!formData.name.trim()) {
// //       newErrors.name = "Name is required";
// //     } else if (formData.name.trim().length < 2) {
// //       newErrors.name = "Name must be at least 2 characters";
// //     }

// //     if (!formData.email.trim()) {
// //       newErrors.email = "Email is required";
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       newErrors.email = "Email is invalid";
// //     }

// //     if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
// //       newErrors.phone = "Phone number must be 10 digits";
// //     }

// //     if (!formData.message.trim()) {
// //       newErrors.message = "Message is required";
// //     } else if (formData.message.trim().length < 10) {
// //       newErrors.message = "Message must be at least 10 characters";
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
    
// //     // Clear error when field is edited
// //     if (errors[name]) {
// //       setErrors(prev => ({
// //         ...prev,
// //         [name]: ''
// //       }));
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     if (validateForm()) {
// //       setIsSubmitting(true);
      
// //       // Create contact record with timestamp
// //       const contactData = {
// //         ...formData,
// //         contactDate: new Date().toISOString()
// //       };
      
// //       // Save to localStorage
// //       localStorage.setItem('contactFormData', JSON.stringify(contactData));
      
// //       // Update contact history
// //       localStorage.setItem('contactHistory', JSON.stringify({
// //         email: formData.email,
// //         lastContactDate: new Date().toISOString()
// //       }));
      
// //       // Simulate form submission with delay
// //       setTimeout(() => {
// //         console.log('Message submitted:', contactData);
        
// //         // Reset form
// //         setFormData({
// //           name: '',
// //           email: '',
// //           phone: '',
// //           message: ''
// //         });
        
// //         setErrors({});
// //         setIsSubmitting(false);
// //         setIsSubmitted(true);
// //         setRecentlyContacted(true);
// //         setTimeRemaining(24);
        
// //         // Hide success message after 5 seconds
// //         setTimeout(() => {
// //           setIsSubmitted(false);
// //         }, 5000);
// //       }, 2000);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
// //        <motion.div 
// //         initial="initial"
// //         animate="in"
// //         exit="out"
// //         className="relative pt-14 md:pt-40 pb-20 px-5 md:px-20 lg:px-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
// //       >
// //         <div className="text-center">
// //           <h1 className=" text-3xl md:text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
// //             Contact Us
// //           </h1>
// //           <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-blue-100">
// //             We're Here to Help You Reach Your Tech Potential
// //           </p>
// //         </div>
// //       </motion.div>

// //       <div className="px-5 md:px-20 lg:px-40 py-16 grid md:grid-cols-2 gap-12">
// //         {/* Contact Information */}
// //         <motion.div 
// //           initial={{ opacity: 0, x: -50 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100"
// //         >
// //           <h2 className="text-2xl font-bold text-indigo-600 mb-6">Contact Details</h2>
          
// //           <div className="space-y-6">
// //             <div className="flex items-center space-x-4 p-4 bg-indigo-50 rounded-xl">
// //               <Mail className="text-indigo-600 h-8 w-8" />
// //               <div>
// //                 <p className="text-sm text-gray-500">Email</p>
// //                 <p className="font-semibold text-indigo-800">info@ozlearning.com</p>
// //               </div>
// //             </div>
            
// //             <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
// //               <Phone className="text-green-600 h-8 w-8" />
// //               <div>
// //                 <p className="text-sm text-gray-500">Phone</p>
// //                 <p className="font-semibold text-green-800">9171453224</p>
// //               </div>
// //             </div>
            
// //             <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
// //               <MapPin className="text-orange-600 h-8 w-8" />
// //               <div>
// //                 <p className="text-sm text-gray-500">Address</p>
// //                 <p className="font-semibold text-orange-800">
// //                   PU4, Vijay Nagar, Indore
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </motion.div>

// //         {/* Contact Form */}
// //         <motion.div 
// //           initial={{ opacity: 0, x: 50 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100"
// //         >
// //           <h2 className="text-2xl font-bold text-indigo-600 mb-6">Send a Message</h2>
          
// //           {isSubmitted && (
// //             <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-xl flex items-center">
// //               <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
// //               <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
// //             </div>
// //           )}
          
// //           {recentlyContacted && !isSubmitted && (
// //             <div className="mb-6 p-4 bg-blue-100 text-blue-800 rounded-xl flex items-center">
// //               <Info className="h-5 w-5 mr-2 flex-shrink-0" />
// //               <div>
// //                 <span>You've already contacted us recently.</span>
// //                 {timeRemaining > 0 && (
// //                   <div className="flex items-center mt-1 text-sm">
// //                     <Clock className="h-4 w-4 mr-1" />
// //                     <span>Please wait approximately {timeRemaining} hour{timeRemaining !== 1 ? 's' : ''} before sending another message.</span>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           )}
          
// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             <div className="relative">
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Full Name
// //               </label>
// //               <div className="relative">
// //                 <Input 
// //                   type="text"
// //                   name="name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   placeholder="Your Full Name"
// //                   className={`w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
// //                   disabled={recentlyContacted && !isSubmitted}
// //                 />
// //               </div>
// //               {errors.name && (
// //                 <p className="text-red-500 text-sm mt-1">{errors.name}</p>
// //               )}
// //             </div>

// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Email Address
// //               </label>
// //               <div className="relative">
// //                 <Input 
// //                   type="email"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   placeholder="Your Email Address"
// //                   className={`w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
// //                   disabled={recentlyContacted && !isSubmitted}
// //                 />
// //               </div>
// //               {errors.email && (
// //                 <p className="text-red-500 text-sm mt-1">{errors.email}</p>
// //               )}
// //             </div>

// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Phone Number (Optional)
// //               </label>
// //               <div className="relative">
// //                 <Input 
// //                   type="tel"
// //                   name="phone"
// //                   value={formData.phone}
// //                   onChange={handleChange}
// //                   placeholder="Your Phone Number"
// //                   className={`w-full ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
// //                   disabled={recentlyContacted && !isSubmitted}
// //                 />
// //               </div>
// //               {errors.phone && (
// //                 <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
// //               )}
// //             </div>

// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Your Message
// //               </label>
// //               <div className="relative">
// //                 <Textarea 
// //                   name="message"
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                   placeholder="Write your message here"
// //                   className={`w-full min-h-[120px] ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
// //                   disabled={recentlyContacted && !isSubmitted}
// //                 />
// //               </div>
// //               {errors.message && (
// //                 <p className="text-red-500 text-sm mt-1">{errors.message}</p>
// //               )}
// //             </div>

// //             <Button 
// //               type="submit" 
// //               disabled={isSubmitting || (recentlyContacted && !isSubmitted)}
// //               className={`w-full transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center ${
// //                 recentlyContacted && !isSubmitted
// //                   ? 'bg-gray-300 hover:bg-gray-300 text-gray-600 hover:scale-100'
// //                   : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:shadow-lg'
// //               }`}
// //             >
// //               {isSubmitting ? 'Sending...' : recentlyContacted && !isSubmitted ? 'Already Contacted' : 'Send Message'}
// //               {!recentlyContacted && !isSubmitting && <Send className="ml-2 h-4 w-4" />}
// //             </Button>
// //           </form>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Contact;


// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (formData.name.trim().length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }

//     if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
//       newErrors.phone = "Phone number must be 10 digits";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = "Message must be at least 10 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   if (validateForm()) {
//   //     setIsSubmitting(true);

//   //     const contactData = {
//   //       ...formData,
//   //       contactDate: new Date().toLocaleString(),
//   //     };

//   //     // Generate and download Excel file
//   //     const worksheet = XLSX.utils.json_to_sheet([contactData]);
//   //     const workbook = XLSX.utils.book_new();
//   //     XLSX.utils.book_append_sheet(workbook, worksheet, 'ContactData');
//   //     const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
//   //     const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
//   //     const url = URL.createObjectURL(blob);
//   //     const link = document.createElement('a');
//   //     link.href = url;
//   //     link.download = `contact_${formData.name}.xlsx`;
//   //     link.click();

//   //     // Reset form after delay
//   //     setTimeout(() => {
//   //       setFormData({
//   //         name: '',
//   //         email: '',
//   //         phone: '',
//   //         message: ''
//   //       });
//   //       setErrors({});
//   //       setIsSubmitting(false);
//   //       setIsSubmitted(true);

//   //       setTimeout(() => setIsSubmitted(false), 5000);
//   //     }, 1000);
//   //   }
//   // };



//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!validateForm()) return;
  
//     setIsSubmitting(true);
  
//     try {
//       const response = await fetch("https://sheetdb.io/api/v1/ghge1os0krzno", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ data: formData }) // Note: SheetDB expects a `data` object
//       });
  
//       if (response.ok) {
//         setFormData({ name: '', email: '', phone: '', message: '' });
//         setIsSubmitted(true);
//         alert("Message sent successfully!");
//       } else {
//         throw new Error("Failed to submit message.");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       alert("Something went wrong. Please try again.");
//     }
  
//     setIsSubmitting(false);
//   };
  



//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
//       <motion.div 
//         initial="initial"
//         animate="in"
//         exit="out"
//         className="relative pt-14 md:pt-40 pb-20 px-5 md:px-20 lg:px-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
//       >
//         <div className="text-center">
//           <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
//             Contact Us
//           </h1>
//           <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-blue-100">
//             We're Here to Help You Reach Your Tech Potential
//           </p>
//         </div>
//       </motion.div>

//       <div className="px-5 md:px-20 lg:px-40 py-16 grid md:grid-cols-2 gap-12">
//         {/* Contact Info */}
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100"
//         >
//           <h2 className="text-2xl font-bold text-indigo-600 mb-6">Contact Details</h2>
//           <div className="space-y-6">
//             <div className="flex items-center space-x-4 p-4 bg-indigo-50 rounded-xl">
//               <Mail className="text-indigo-600 h-8 w-8" />
//               <div>
//                 <p className="text-sm text-gray-500">Email</p>
//                 <p className="font-semibold text-indigo-800">info@ozlearning.com</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
//               <Phone className="text-green-600 h-8 w-8" />
//               <div>
//                 <p className="text-sm text-gray-500">Phone</p>
//                 <p className="font-semibold text-green-800">9171453224</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
//               <MapPin className="text-orange-600 h-8 w-8" />
//               <div>
//                 <p className="text-sm text-gray-500">Address</p>
//                 <p className="font-semibold text-orange-800">PU4, Vijay Nagar, Indore</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Contact Form */}
//         <motion.div 
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100"
//         >
//           <h2 className="text-2xl font-bold text-indigo-600 mb-6">Send a Message</h2>

//           {isSubmitted && (
//             <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-xl flex items-center">
//               <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
//               <span>Your message was exported successfully!</span>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your Full Name"
//                 className={`w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//               />
//               {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//               <Input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Your Email Address"
//                 className={`w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//               />
//               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number (Optional)</label>
//               <Input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Your Phone Number"
//                 className={`w-full ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//               />
//               {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
//               <Textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Write your message here"
//                 className={`w-full ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
//                 rows={5}
//               />
//               {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
//             </div>

//             <Button
//               type="submit"
//               className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg w-full flex items-center justify-center"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Exporting...' : (
//                 <>
//                   <Send className="mr-2 h-4 w-4" />
//                   Send Message
//                 </>
//               )}
//             </Button>  
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar, Users } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://sheetdb.io/api/v1/ghge1os0krzno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: formData })
      });
  
      if (response.ok) {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitted(true);
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Failed to submit message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fceedb' }}>
      {/* Header Section */}
      <div 
        className="relative pt-16 md:pt-20 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 text-center"
        style={{ 
          background: 'linear-gradient(135deg, #f8a100 0%, #f15a24 100%)',
          borderBottomLeftRadius: '30% 5%',
          borderBottomRightRadius: '30% 5%'
        }}
      >
        <div className="max-w-3xl mx-auto text-white">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="mt-2 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Have questions about our courses? Ready to start your IT journey? We're here to help!
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Mail className="w-8 h-8 text-amber-500" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Contact Info */}
          <div className="md:w-2/5">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-amber-100 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-3">
                  <Users className="w-4 h-4" />
                </div>
                We'd Love To Hear From You
              </h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-amber-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-amber-700">info@ozlearning.com</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-amber-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-amber-700">9171453224</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-6pm</p>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-amber-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Location</p>
                    <p className="text-amber-700">PU4, Vijay Nagar, Indore</p>
                    <p className="text-sm text-gray-500 mt-1">Visit us for a campus tour</p>
                  </div>
                </div>
                
                {/* Office Hours */}
                <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-amber-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Office Hours</p>
                    <p className="text-amber-700">Monday to Saturday</p>
                    <p className="text-sm text-gray-500 mt-1">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Contact Form */}
          <div className="md:w-3/5">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-amber-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
              
              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center animate-fadeIn">
                  <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full bg-amber-50/50 border ${errors.name ? 'border-red-400 focus:ring-red-400' : 'border-amber-200 focus:ring-amber-400'} rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-amber-500`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`w-full bg-amber-50/50 border ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-amber-200 focus:ring-amber-400'} rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-amber-500`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-gray-400">(Optional)</span>
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={`w-full bg-amber-50/50 border ${errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-amber-200 focus:ring-amber-400'} rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-amber-500`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className={`w-full bg-amber-50/50 border ${errors.message ? 'border-red-400 focus:ring-red-400' : 'border-amber-200 focus:ring-amber-400'} rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-amber-500`}
                    rows={5}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                {/* Submit Button */}
                <Button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-xl text-white font-medium text-base shadow-md transition-all duration-300 ${
                    isSubmitting ? 'bg-amber-400' : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700'
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </div>
                  )}
                </Button>
                
                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map or Additional Info Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-6 overflow-hidden border border-amber-100">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-800">Visit Our Campus</h3>
            <p className="text-gray-600 mt-2">Schedule a visit to explore our facilities and meet our instructors</p>
          </div>
          
          {/* Embed Google Map (placeholder) */}
          <div className="w-full h-64 md:h-80 bg-amber-100 rounded-xl flex items-center justify-center">
            {/* <div className="text-center">
              <MapPin className="w-10 h-10 text-amber-500 mx-auto mb-2" />
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.517858577004!2d75.89266947508322!3d22.746155229368433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302a476a0845d%3A0x8a8e5596bc15586e!2sScheme%2054%20PU4%2C%20Indore%2C%20Madhya%20Pradesh%20452011!5e0!3m2!1sen!2sin!4v1747398853172!5m2!1sen!2sin" width="600" height="450"  style={{ border: 0 }}  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
             <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden bg-amber-100">
        <MapPin className="w-10 h-10 text-amber-500 absolute top-3 left-3 z-10 bg-white rounded-full p-1 shadow-md" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.517858577004!2d75.89266947508322!3d22.746155229368433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302a476a0845d%3A0x8a8e5596bc15586e!2sScheme%2054%20PU4%2C%20Indore%2C%20Madhya%20Pradesh%20452011!5e0!3m2!1sen!2sin!4v1747398853172!5m2!1sen!2sin"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;