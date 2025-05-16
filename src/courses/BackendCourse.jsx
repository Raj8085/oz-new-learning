import { useState } from "react"
import {
  Code,
  Lightbulb,
  Users,
  Award,
  Calendar,
  BookOpen,
  Database,
  ChevronDown,
  Server,
  Cloud,
  Lock,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function BackendCoursePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Backend Development</h1>
              <p className="text-xl mb-6">
                Master the art of building robust, scalable server-side applications that power modern web services
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Express</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">SQL</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">API Design</span>
              </div>
              <div className="flex gap-4">
              <Link to="/contact">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-lg transition-all">
                  Enroll Now
                </button>
                </Link>
                <Link to="/contact">
                <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-bold transition-all">
                  Download Syllabus
                </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-800 rounded-full flex items-center justify-center">
                  <Server size={120} strokeWidth={1} />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Database size={36} strokeWidth={1} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                  <Cloud size={36} strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Info Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Calendar className="text-blue-600 mr-3" size={24} />
              <h3 className="text-lg font-bold">Duration</h3>
            </div>
            <p className="text-gray-700">16 weeks (4 months)</p>
            <p className="text-gray-700">5 hours per week</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <BookOpen className="text-blue-600 mr-3" size={24} />
              <h3 className="text-lg font-bold">Prerequisites</h3>
            </div>
            <p className="text-gray-700">Basic programming knowledge</p>
            <p className="text-gray-700">Familiarity with JavaScript</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Award className="text-blue-600 mr-3" size={24} />
              <h3 className="text-lg font-bold">Certification</h3>
            </div>
            <p className="text-gray-700">Industry-recognized certificate</p>
            <p className="text-gray-700">Project portfolio</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex overflow-x-auto space-x-4 pb-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 font-medium rounded-lg whitespace-nowrap ${
              activeTab === "overview" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("curriculum")}
            className={`px-4 py-2 font-medium rounded-lg whitespace-nowrap ${
              activeTab === "curriculum" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            Curriculum
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 font-medium rounded-lg whitespace-nowrap ${
              activeTab === "projects" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            Projects
          </button>
          {/* <button
            onClick={() => setActiveTab("instructors")}
            className={`px-4 py-2 font-medium rounded-lg whitespace-nowrap ${
              activeTab === "instructors" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            Instructors
          </button> */}
          <button
            onClick={() => setActiveTab("careers")}
            className={`px-4 py-2 font-medium rounded-lg whitespace-nowrap ${
              activeTab === "careers" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            Career Paths
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white p-6 rounded-xl shadow-md mt-4">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
              <p className="text-gray-700 mb-6">
                Our Backend Development course is designed to transform beginners into job-ready backend developers.
                You'll learn to build robust, scalable server-side applications that power modern web services using the
                latest technologies and best practices in the industry.
              </p>

              <h3 className="text-xl font-bold mb-3">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Server size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Server-side Programming</h4>
                    <p className="text-gray-700">Build robust applications with Node.js and Express</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Database size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Database Management</h4>
                    <p className="text-gray-700">Work with SQL and NoSQL databases to store and retrieve data</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Code size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">API Development</h4>
                    <p className="text-gray-700">Design and build RESTful and GraphQL APIs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Lock size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Authentication & Security</h4>
                    <p className="text-gray-700">Implement secure user authentication and data protection</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">Course Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lightbulb size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-bold">Hands-on Learning</h4>
                  </div>
                  <p className="text-gray-700">70% practical exercises and real-world projects</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-bold">Live Sessions</h4>
                  </div>
                  <p className="text-gray-700">Interactive classes with industry experts</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Award size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-bold">Portfolio Building</h4>
                  </div>
                  <p className="text-gray-700">Create professional projects for your portfolio</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "curriculum" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Curriculum</h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 1: Backend Development Fundamentals</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 1-2: Node.js Foundations</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>JavaScript for server-side development</li>
                      <li>Node.js runtime and architecture</li>
                      <li>Asynchronous programming patterns</li>
                      <li>NPM and package management</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 3-4: Express.js & Web Servers</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Building web servers with Express</li>
                      <li>Routing and middleware</li>
                      <li>Request/response handling</li>
                      <li>Template engines</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 2: Databases & Data Management</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 5-6: SQL Databases</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Relational database concepts</li>
                      <li>SQL query language</li>
                      <li>PostgreSQL implementation</li>
                      <li>Database design and normalization</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 7-8: NoSQL Databases</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>MongoDB and document databases</li>
                      <li>Schema design for NoSQL</li>
                      <li>CRUD operations</li>
                      <li>Mongoose ODM</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 3: API Development</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 9-10: RESTful API Design</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>REST principles and architecture</li>
                      <li>API endpoints and resources</li>
                      <li>Status codes and error handling</li>
                      <li>API documentation with Swagger</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 11-12: Authentication & Security</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>User authentication strategies</li>
                      <li>JWT implementation</li>
                      <li>OAuth and third-party authentication</li>
                      <li>Security best practices</li>
                      <li>Data validation and sanitization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Module 4: Advanced Backend Concepts</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 13-14: Deployment & DevOps</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Cloud deployment (AWS, Heroku)</li>
                      <li>Containerization with Docker</li>
                      <li>CI/CD pipelines</li>
                      <li>Environment configuration</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 15-16: Final Project & Career Preparation</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Capstone project development</li>
                      <li>Code reviews and best practices</li>
                      <li>Portfolio building</li>
                      <li>Technical interview preparation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Projects You'll Build</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">RESTful API Service</h3>
                  <p className="text-gray-700 mb-4">
                    Build a complete RESTful API with Express.js. Implement CRUD operations, authentication, validation,
                    and comprehensive documentation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Node.js</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Express</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">MongoDB</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">E-commerce Backend</h3>
                  <p className="text-gray-700 mb-4">
                    Develop the server-side components of an e-commerce platform with product catalog, user accounts,
                    shopping cart, and order processing functionality.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Node.js</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">PostgreSQL</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Sequelize</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Real-time Chat Application</h3>
                  <p className="text-gray-700 mb-4">
                    Create a backend for a real-time chat application with private messaging, group chats, and
                    notifications using WebSockets.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Socket.io</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Express</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">MongoDB</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Content Management System API</h3>
                  <p className="text-gray-700 mb-4">
                    Build a headless CMS API that allows content creation, management, and delivery with role-based
                    access control.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Node.js</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">JWT</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">MongoDB</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Authentication Microservice</h3>
                  <p className="text-gray-700 mb-4">
                    Develop a standalone authentication service with multiple strategies, password reset, email
                    verification, and OAuth integration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Express</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Passport.js</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Redis</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Capstone Project</h3>
                  <p className="text-gray-700 mb-4">
                    Design and develop a complex backend application of your choice that incorporates all the skills
                    learned throughout the course.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Full Stack</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Cloud Deployment</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">CI/CD</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "instructors" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Meet Your Instructors</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img src="/api/placeholder/150/150" alt="Instructor" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                  <p className="text-blue-600 mb-2">Senior Backend Engineer</p>
                  <p className="text-gray-700 mb-4">
                    12+ years of experience in server-side development. Previously worked at Amazon and Netflix.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Node.js</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Microservices</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img src="/api/placeholder/150/150" alt="Instructor" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Jennifer Kim</h3>
                  <p className="text-blue-600 mb-2">Database Architect</p>
                  <p className="text-gray-700 mb-4">
                    10 years of experience specializing in database design and optimization for large-scale
                    applications.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">PostgreSQL</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">MongoDB</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img src="/api/placeholder/150/150" alt="Instructor" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Raj Patel</h3>
                  <p className="text-blue-600 mb-2">API & Security Specialist</p>
                  <p className="text-gray-700 mb-4">
                    Expert in API design and security with 8 years of experience in fintech and healthcare sectors.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">REST APIs</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">OAuth</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "careers" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Career Opportunities</h2>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Job Roles After Completion</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Backend Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $85,000 - $120,000</p>
                    <p className="text-gray-700">
                      Build and maintain server-side logic for web applications and services.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">API Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $90,000 - $125,000</p>
                    <p className="text-gray-700">Design and implement APIs that connect systems and services.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Node.js Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $95,000 - $135,000</p>
                    <p className="text-gray-700">Specialize in building applications with the Node.js runtime.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Industry Demand</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Lightbulb size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Backend developers are in high demand across all industries. According to recent surveys, there's
                      a <span className="font-bold">27% growth</span> in backend development job postings year over
                      year.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Lightbulb size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">
                      As businesses continue to digitize operations and move to cloud-based solutions, the need for
                      skilled backend developers who can build secure, scalable systems continues to grow rapidly.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Career Support</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Users size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Resume Building</h4>
                    <p className="text-gray-700">
                      Get professional help crafting a tech resume that stands out to recruiters.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Users size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Mock Interviews</h4>
                    <p className="text-gray-700">Practice technical interviews with industry professionals.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Users size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Job Placement Assistance</h4>
                    <p className="text-gray-700">
                      Access to our network of hiring partners and job placement services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Testimonials Section */}
      {/* <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img src="/api/placeholder/50/50" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Jason Miller</h4>
                  <p className="text-gray-600 text-sm">Backend Engineer at Stripe</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The backend course was exactly what I needed to transition into tech. The projects were challenging but
                practical, and I secured a job offer within 2 months of completing the course."
              </p>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img src="/api/placeholder/50/50" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Sophia Chen</h4>
                  <p className="text-gray-600 text-sm">API Developer at Twilio</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "I had basic programming knowledge when I started. The instructors made complex backend concepts easy to
                understand, and the curriculum was structured perfectly. I now work as an API developer!"
              </p>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img src="/api/placeholder/50/50" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Marcus Johnson</h4>
                  <p className="text-gray-600 text-sm">Backend Developer at Shopify</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The database and API sections of the course were exceptional. I built a portfolio that impressed
                recruiters and landed multiple job offers. The career support was invaluable during my job search."
              </p>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          {[
            {
              question: "Do I need prior coding experience?",
              answer:
                "Some basic programming knowledge is helpful, but not required. We'll start with JavaScript fundamentals before diving into backend concepts.",
            },
            {
              question: "What equipment do I need for this course?",
              answer:
                "You'll need a computer (Windows, Mac, or Linux) with internet access. A minimum of 8GB RAM is recommended for a smooth development experience.",
            },
            {
              question: "Are the classes live or pre-recorded?",
              answer:
                "We offer a hybrid model. Core content is available as pre-recorded videos, but we also have live coding sessions, workshops, and Q&A sessions each week.",
            },
            {
              question: "How much time should I commit each week?",
              answer:
                "We recommend dedicating at least 15-20 hours per week to get the most out of the course. This includes attending sessions, completing assignments, and working on projects.",
            },
            {
              question: "Will I get a certificate after completion?",
              answer:
                "Yes, you'll receive an industry-recognized certificate upon successful completion of the course and all required projects.",
            },
            {
              question: "What kind of job support is provided?",
              answer:
                "We offer resume reviews, LinkedIn profile optimization, portfolio feedback, mock interviews, and connections to our hiring partners in the tech industry.",
            },
          ].map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-left">{faq.question}</span>
                <ChevronDown size={20} className={`transition-transform ${activeFaq === index ? "rotate-180" : ""}`} />
              </button>

              {activeFaq === index && (
                <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Backend Development Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our next cohort and transform your career with in-demand backend development skills.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all">
              Enroll Now
            </button>
            </Link>
            <Link to="/contact">
            <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Download Course Brochure
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Have Questions? Contact Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Calendar size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold">Next Batch Starts</h4>
                  <p className="text-gray-700">June 1, 2025</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Users size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold">Limited Seats</h4>
                  <p className="text-gray-700">Only 30 students per batch</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Award size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold">Early Bird Discount</h4>
                  <p className="text-gray-700">20% off until May 15, 2025</p>
                </div>
              </div>
            </div>

            <div>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="query">
                    Your Query
                  </label>
                  <textarea
                    id="query"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help you?"
                    rows="3"
                  ></textarea>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies You&apos;ll Master</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Server size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Node.js</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Code size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Express</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Database size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">MongoDB</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Database size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">SQL</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Lock size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Authentication</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Cloud size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Cloud Deployment</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
