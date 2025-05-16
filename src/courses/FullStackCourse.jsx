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
  Layers,
  Globe,
  Layout,
  Cpu,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function FullStackCoursePage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Full Stack Development</h1>
              <p className="text-xl mb-6">
                Master both frontend and backend technologies to build complete, scalable web applications from start to
                finish
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">MERN</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">MEAN</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Java</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">React</span>
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
                  <Layers size={120} strokeWidth={1} />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Layout size={36} strokeWidth={1} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                  <Server size={36} strokeWidth={1} />
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
            <p className="text-gray-700">24 weeks (6 months)</p>
            <p className="text-gray-700">8 hours per week</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <BookOpen className="text-blue-600 mr-3" size={24} />
              <h3 className="text-lg font-bold">Prerequisites</h3>
            </div>
            <p className="text-gray-700">Basic programming knowledge</p>
            <p className="text-gray-700">HTML/CSS fundamentals</p>
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
                Our Full Stack Development course is designed to transform beginners into job-ready developers capable
                of building complete web applications. You'll learn both frontend and backend technologies, enabling you
                to create modern, responsive, and scalable applications from scratch.
              </p>

              <h3 className="text-xl font-bold mb-3">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Layout size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Frontend Development</h4>
                    <p className="text-gray-700">
                      Create responsive UIs with HTML, CSS, JavaScript, and modern frameworks
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Server size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Backend Development</h4>
                    <p className="text-gray-700">
                      Build robust server-side applications with multiple technology stacks
                    </p>
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
                    <Globe size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">API Development</h4>
                    <p className="text-gray-700">Design and build RESTful and GraphQL APIs for seamless integration</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">Course Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lightbulb size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-bold">Multiple Stacks</h4>
                  </div>
                  <p className="text-gray-700">Learn MERN, MEAN, Python, and Java full stack development</p>
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
                  <p className="text-gray-700">Create professional full-stack projects for your portfolio</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "curriculum" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Curriculum</h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 1: Frontend Fundamentals</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 1-2: HTML, CSS & JavaScript</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Modern HTML5 semantics and structure</li>
                      <li>CSS3, Flexbox, and Grid layouts</li>
                      <li>JavaScript ES6+ features</li>
                      <li>DOM manipulation and events</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 3-4: Frontend Frameworks</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>React.js fundamentals and hooks</li>
                      <li>Angular basics and components</li>
                      <li>State management</li>
                      <li>Responsive design principles</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 2: MERN Stack Development</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 5-6: Node.js & Express</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Node.js runtime and architecture</li>
                      <li>Express.js framework</li>
                      <li>RESTful API development</li>
                      <li>Middleware and routing</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 7-8: MongoDB & Full Stack Integration</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>MongoDB and document databases</li>
                      <li>Mongoose ODM</li>
                      <li>CRUD operations</li>
                      <li>Connecting React frontend to Express backend</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 3: MEAN Stack Development</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 9-10: Angular Deep Dive</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Angular architecture and modules</li>
                      <li>Services and dependency injection</li>
                      <li>Angular routing and navigation</li>
                      <li>Forms and validation</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 11-12: MEAN Stack Integration</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Connecting Angular with Node.js backend</li>
                      <li>Authentication with JWT</li>
                      <li>State management with NgRx</li>
                      <li>Building a complete MEAN application</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 4: Python Full Stack Development</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 13-14: Python & Django</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Python programming fundamentals</li>
                      <li>Django framework architecture</li>
                      <li>Models, views, and templates</li>
                      <li>Django REST framework</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 15-16: Python Full Stack Integration</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Connecting React/Angular with Django</li>
                      <li>PostgreSQL database integration</li>
                      <li>Authentication and permissions</li>
                      <li>Deployment of Python full stack applications</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 5: Java Full Stack Development</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 17-18: Java & Spring Boot</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Java programming fundamentals</li>
                      <li>Spring Boot framework</li>
                      <li>RESTful services with Spring</li>
                      <li>JPA and Hibernate</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 19-20: Java Full Stack Integration</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Connecting React/Angular with Spring Boot</li>
                      <li>MySQL database integration</li>
                      <li>Spring Security</li>
                      <li>Deployment of Java full stack applications</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Module 6: Advanced Topics & Capstone Project</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 21-22: Advanced Topics</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Cloud deployment (AWS, Azure, Heroku)</li>
                      <li>Containerization with Docker</li>
                      <li>CI/CD pipelines</li>
                      <li>Testing strategies for full stack applications</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 23-24: Capstone Project & Career Preparation</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Full stack capstone project development</li>
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
                  <h3 className="text-xl font-bold mb-3">E-commerce Platform (MERN Stack)</h3>
                  <p className="text-gray-700 mb-4">
                    Build a complete e-commerce platform with product catalog, user accounts, shopping cart, payment
                    processing, and admin dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">React</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Node.js</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Express</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">MongoDB</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Social Media Application (MEAN Stack)</h3>
                  <p className="text-gray-700 mb-4">
                    Create a social networking platform with user profiles, posts, comments, likes, and real-time
                    notifications using Angular and Socket.io.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Angular</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Node.js</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Express</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">MongoDB</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Task Management System (Python Stack)</h3>
                  <p className="text-gray-700 mb-4">
                    Develop a project management tool with task tracking, team collaboration, file sharing, and
                    reporting features using Django and React.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">React</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Python</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Django</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">PostgreSQL</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Blogging Platform (Java Stack)</h3>
                  <p className="text-gray-700 mb-4">
                    Build a content management system with article publishing, user management, comments, and analytics
                    using Spring Boot and Angular.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Angular</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Java</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Spring Boot</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">MySQL</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Real-time Chat Application</h3>
                  <p className="text-gray-700 mb-4">
                    Create a real-time messaging platform with private chats, group conversations, file sharing, and
                    notifications using WebSockets.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">React</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Socket.io</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Express</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">MongoDB</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Capstone Project</h3>
                  <p className="text-gray-700 mb-4">
                    Design and develop a complex full stack application of your choice using any of the technology
                    stacks covered in the course.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Your Choice</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Cloud Deployment</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">CI/CD</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Testing</span>
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
                    <img
                      src="/placeholder.svg?height=150&width=150"
                      alt="Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                  <p className="text-blue-600 mb-2">Full Stack Lead Instructor</p>
                  <p className="text-gray-700 mb-4">
                    15+ years of experience in web development. Previously worked at Google and Microsoft as a Senior
                    Full Stack Engineer.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">MERN</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">MEAN</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=150&width=150"
                      alt="Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Jennifer Kim</h3>
                  <p className="text-blue-600 mb-2">Frontend Specialist</p>
                  <p className="text-gray-700 mb-4">
                    10 years of experience specializing in frontend development and UI/UX design for enterprise
                    applications.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">React</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Angular</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=150&width=150"
                      alt="Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Raj Patel</h3>
                  <p className="text-blue-600 mb-2">Backend & API Specialist</p>
                  <p className="text-gray-700 mb-4">
                    Expert in backend development with 8 years of experience in fintech and healthcare sectors.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Node.js</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Python</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=150&width=150"
                      alt="Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Sarah Johnson</h3>
                  <p className="text-blue-600 mb-2">Python Full Stack Expert</p>
                  <p className="text-gray-700 mb-4">
                    12 years of experience in Python development with expertise in Django and data science applications.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Python</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Django</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=150&width=150"
                      alt="Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">David Chen</h3>
                  <p className="text-blue-600 mb-2">Java Full Stack Expert</p>
                  <p className="text-gray-700 mb-4">
                    14 years of experience in Java enterprise development with expertise in Spring Boot and
                    microservices.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Java</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Spring</span>
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
                    <h4 className="font-bold text-lg mb-2">Full Stack Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $95,000 - $140,000</p>
                    <p className="text-gray-700">
                      Build and maintain both frontend and backend components of web applications.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">MERN/MEAN Stack Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $100,000 - $145,000</p>
                    <p className="text-gray-700">Specialize in JavaScript-based full stack development.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Python Full Stack Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $105,000 - $150,000</p>
                    <p className="text-gray-700">
                      Develop applications using Python on the backend and modern frontend frameworks.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Java Full Stack Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $110,000 - $155,000</p>
                    <p className="text-gray-700">
                      Build enterprise applications with Java backend and modern frontend technologies.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Frontend Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $90,000 - $130,000</p>
                    <p className="text-gray-700">Focus on creating responsive, interactive user interfaces.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Backend Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $95,000 - $135,000</p>
                    <p className="text-gray-700">Specialize in server-side logic, databases, and APIs.</p>
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
                      Full stack developers are among the most in-demand tech professionals. According to recent
                      surveys, there's a <span className="font-bold">35% growth</span> in full stack development job
                      postings year over year.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Lightbulb size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Companies value full stack developers for their versatility and ability to work across the entire
                      application stack, making them valuable assets in startups and established companies alike.
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
                      Get professional help crafting a tech resume that highlights your full stack skills.
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
                  <img src="/placeholder.svg?height=50&width=50" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Jason Miller</h4>
                  <p className="text-gray-600 text-sm">Full Stack Developer at Airbnb</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The full stack course was comprehensive and practical. I learned multiple technology stacks and secured
                a job offer within 2 months of completing the course."
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
                  <img src="/placeholder.svg?height=50&width=50" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Sophia Chen</h4>
                  <p className="text-gray-600 text-sm">MERN Stack Developer at Shopify</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Learning multiple stacks was challenging but incredibly rewarding. The instructors made complex
                concepts easy to understand, and the projects helped me build a strong portfolio."
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
                  <img src="/placeholder.svg?height=50&width=50" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Marcus Johnson</h4>
                  <p className="text-gray-600 text-sm">Python Full Stack Developer at Spotify</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The Python full stack section was exceptional. I built a portfolio that impressed recruiters and landed
                multiple job offers. The career support was invaluable during my job search."
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
                "Some basic programming knowledge is helpful, but not required. We'll start with fundamentals before diving into more advanced concepts.",
            },
            {
              question: "Which stack should I focus on if I'm a beginner?",
              answer:
                "We recommend starting with the MERN stack as it's entirely JavaScript-based, making it easier to learn as a beginner. However, the course is designed to give you exposure to all stacks so you can decide which one you prefer.",
            },
            {
              question: "Are the classes live or pre-recorded?",
              answer:
                "We offer a hybrid model. Core content is available as pre-recorded videos, but we also have live coding sessions, workshops, and Q&A sessions each week.",
            },
            {
              question: "How much time should I commit each week?",
              answer:
                "We recommend dedicating at least 20-25 hours per week to get the most out of the course. This includes attending sessions, completing assignments, and working on projects.",
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Full Stack Development Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our next cohort and transform your career with in-demand full stack development skills across multiple
            technology stacks.
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
                <Layout size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">React</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Layout size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Angular</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Server size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Node.js</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Database size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">MongoDB</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Cpu size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Python</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Cpu size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Java</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Globe size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Django</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Globe size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Spring Boot</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Database size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">SQL</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Code size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Express</h3>
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