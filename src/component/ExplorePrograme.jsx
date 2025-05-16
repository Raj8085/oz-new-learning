
import { useState } from 'react';
import { 
  Code, 
  Network, 
  Database, 
  Shield, 
  CloudLightning, 
  Brain, 
  GraduationCap,
  Clock,
  Calendar,
  Award,
  DollarSign,
  CheckCircle,
  X
} from 'lucide-react';

const ExplorePrograms = ({ isOpen, onClose }) => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  
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
          duration: "16 weeks",
          schedule: "Weekday evenings & weekend options",
          level: "Intermediate",
          prerequisites: "Basic programming knowledge",
          certification: "Full-Stack Developer Certification",
          price: "$2,499",
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
          price: "$2,799",
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
          price: "$2,999",
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
          price: "$2,499",
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
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#fceedb] rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col relative">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Explore Our Training Programs</h2>
          <button 
            onClick={() => {
              onClose();
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
                            <li className="flex items-start">
                              <DollarSign className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="font-medium text-amber-900">Price:</span> {program.price}
                              </div>
                            </li>
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
                            <h5 className="font-semibold text-amber-900 mb-2">Upcoming Start Dates</h5>
                            <div className="flex flex-wrap gap-2">
                              {program.startDates.map((date, i) => (
                                <span key={i} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                                  {date}
                                </span>
                              ))}
                            </div>
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
  );
};

export default ExplorePrograms;