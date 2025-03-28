import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Network, 
  Database, 
  Shield, 
  Laptop, 
  CloudLightning, 
  Brain, 
  Server 
} from 'lucide-react';

const ServicesPage = () => {
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

  const services = [
    {
      icon: Code,
      title: "Software Development Training",
      description: "Comprehensive programs covering full-stack development, modern frameworks, and industry-standard programming languages.",
      color: "text-blue-600"
    },
    {
      icon: Network,
      title: "Network Administration",
      description: "Advanced courses in network design, security, and management with hands-on laboratory experience.",
      color: "text-green-600"
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "In-depth training in data analysis, machine learning, and big data technologies.",
      color: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity Programs",
      description: "Specialized courses in ethical hacking, network security, and information protection strategies.",
      color: "text-red-600"
    },
    {
      icon: CloudLightning,
      title: "Cloud Computing",
      description: "Comprehensive cloud technology training including AWS, Azure, and Google Cloud platforms.",
      color: "text-indigo-600"
    },
    {
      icon: Brain,
      title: "Artificial Intelligence & ML",
      description: "Cutting-edge courses in AI development, neural networks, and intelligent system design.",
      color: "text-pink-600"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative pt-14 md:pt-48 pb-20 px-5 md:px-20 lg:px-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      >
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Our Professional Services
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-blue-100">
            Empowering Technology Professionals Through Comprehensive and Innovative Training Programs
          </p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className=" py-16 px-5 md:px-20 lg:px-40"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <service.icon className={`mx-auto h-16 w-16 ${service.color} mb-4`} />
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Professional Training Section */}
      <div className="bg-white">
        <div className=" py-16 px-5 md:px-20 lg:px-40 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Server className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              Professional Training Programs
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Our comprehensive training programs are designed to bridge the gap between academic learning and real-world industry requirements. We offer specialized courses that prepare students for the most demanding technological challenges.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <Laptop className="mr-3 text-blue-500" />
                Hands-on practical training
              </li>
              <li className="flex items-center">
                <Network className="mr-3 text-green-500" />
                Industry-certified instructors
              </li>
              <li className="flex items-center">
                <Shield className="mr-3 text-red-500" />
                Career support and placement assistance
              </li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg" 
              alt="Professional Training" 
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Certification Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-50 py-16"
      >
        <div className=" px-5 md:px-20 lg:px-40 text-center">
          <h2 className=" text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            Industry-Recognized Certifications
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-12">
            Our programs are aligned with the latest industry standards, ensuring you receive certifications that are valued by top technology companies worldwide.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {['Microsoft', 'Cisco', 'AWS', 'CompTIA'].map((cert, index) => (
              <div 
                key={index} 
                className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center"
              >
                <span className="text-xl font-bold text-gray-800">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;