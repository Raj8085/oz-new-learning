import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Award, 
  Users, 
  BookOpen, 
  Globe, 
  Building, 
  CheckCircle, 
  Brain 
} from 'lucide-react';
import WhyChooseUs from '../home-component/WhyChooseUs';

const AboutPage = () => {
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

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative pt-14 md:pt-40 pb-20 px-5 md:px-20 lg:px-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 pr-8">
            <h1 className="text-4xl font-extrabold text-center md:text-start tracking-tight sm:text-5xl lg:text-6xl">
              Tech Innovators Institute
            </h1>
            <p className="mt-6 text-lg md:text-xl text-center md:text-start text-blue-100 max-w-3xl">
              Transforming Potential into Technological Excellence. We're not just an educational institution; we're a launchpad for future tech leaders, innovators, and change-makers.
            </p>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <img 
              src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg" 
              alt="Institute Building" 
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </motion.div>


      {/* About Our Institute Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <Building className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            About Our Institute
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-4">
            Founded in 2010, Tech Innovators Institute has been at the forefront of technological education. We pride ourselves on bridging the gap between academic learning and industry requirements.
          </p>
          <p className="text-lg text-gray-600">
            Our state-of-the-art campus spans 10 acres, equipped with cutting-edge laboratories, advanced computing facilities, and collaborative learning spaces designed to foster innovation and creativity.
          </p>
        </div>
        <img 
          src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg" 
          alt="Institute Campus" 
          className="rounded-xl shadow-lg"
        />
      </motion.section>

      <WhyChooseUs />
      {/* Mission and Vision */}
      <div className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 shadow-md p-8 rounded-xl"
          >
            <Target className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To empower students with comprehensive technological education, industry-relevant skills, and innovative thinking. We aim to create tech professionals who are not just job-ready, but future-ready.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-green-500 h-5 w-5" />
                Provide world-class technological education
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-green-500 h-5 w-5" />
                Foster innovation and critical thinking
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-green-500 h-5 w-5" />
                Bridge academia and industry
              </li>
            </ul>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 shadow-md p-8 rounded-xl"
          >
            <Brain className="h-12 w-12  text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be a globally recognized leader in technological education, producing innovative tech professionals who drive digital transformation across industries worldwide.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-purple-500 h-5 w-5" />
                Global technological leadership
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-purple-500 h-5 w-5" />
                Continuous learning and adaptation
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-purple-500 h-5 w-5" />
                Preparing future tech innovators
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Key Achievements */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Key Achievements
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Milestones that define our commitment to excellence
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <Award className="mx-auto h-16 w-16 text-yellow-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">
              500+
            </h3>
            <p className="text-gray-600">
              Industry Partnerships
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <Users className="mx-auto h-16 w-16 text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">
              10,000+
            </h3>
            <p className="text-gray-600">
              Alumni Network
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <Globe className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">
              25+
            </h3>
            <p className="text-gray-600">
              Countries Represented
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;