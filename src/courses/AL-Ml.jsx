import { useState } from "react"
import {
  Lightbulb,
  Users,
  Award,
  Calendar,
  BookOpen,
  Layers,
  Monitor,
  ChevronDown,
  Brain,
  Bot,
  Network,
  LineChart,
  Cpu,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function AIMLCoursePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center md:mt-20">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Machine Learning & AI</h1>
              <p className="text-xl mb-6">
                Master the art of building intelligent systems with cutting-edge AI and ML technologies that are
                reshaping industries worldwide
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Deep Learning</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Neural Networks</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Computer Vision</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">NLP</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Reinforcement Learning</span>
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
                  <Brain size={120} strokeWidth={1} />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Network size={36} strokeWidth={1} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                  <Bot size={36} strokeWidth={1} />
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
            <p className="text-gray-700">20 weeks (5 months)</p>
            <p className="text-gray-700">8 hours per week</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <BookOpen className="text-blue-600 mr-3" size={24} />
              <h3 className="text-lg font-bold">Prerequisites</h3>
            </div>
            <p className="text-gray-700">Basic Python programming</p>
            <p className="text-gray-700">Fundamentals of statistics and linear algebra</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Award className="text-blue-600 mr-3" size={24} />
              <h3 className="text-lg font-bold">Certification</h3>
            </div>
            <p className="text-gray-700">Industry-recognized AI/ML certificate</p>
            <p className="text-gray-700">AI project portfolio</p>
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
                Our Machine Learning & AI course is designed to transform practitioners into AI specialists capable of
                building intelligent systems. You'll learn to develop neural networks, implement computer vision
                solutions, create natural language processing applications, and deploy production-ready AI models that
                solve real-world problems.
              </p>

              <h3 className="text-xl font-bold mb-3">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Brain size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Deep Learning Fundamentals</h4>
                    <p className="text-gray-700">Neural networks, backpropagation, and optimization algorithms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Monitor size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Computer Vision</h4>
                    <p className="text-gray-700">Image classification, object detection, and segmentation with CNNs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Bot size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Natural Language Processing</h4>
                    <p className="text-gray-700">Text analysis, sentiment analysis, and transformer models</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Cpu size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">MLOps & Deployment</h4>
                    <p className="text-gray-700">Model serving, monitoring, and scaling AI systems</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">Course Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lightbulb size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-bold">Hands-on Projects</h4>
                  </div>
                  <p className="text-gray-700">80% practical implementation with real-world datasets</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-bold">AI Research Workshops</h4>
                  </div>
                  <p className="text-gray-700">Explore cutting-edge AI research papers and implementations</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Award size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-bold">AI Model Portfolio</h4>
                  </div>
                  <p className="text-gray-700">Build a portfolio of deployed AI models and applications</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "curriculum" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Curriculum</h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 1: Machine Learning Foundations</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 1-2: ML Fundamentals</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Supervised vs. unsupervised learning</li>
                      <li>Linear and logistic regression</li>
                      <li>Decision trees and random forests</li>
                      <li>Model evaluation and validation techniques</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 3-4: Feature Engineering & Selection</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Data preprocessing and normalization</li>
                      <li>Feature extraction and transformation</li>
                      <li>Dimensionality reduction (PCA, t-SNE)</li>
                      <li>Feature importance and selection methods</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 2: Deep Learning & Neural Networks</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 5-7: Neural Network Fundamentals</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Perceptrons and multilayer networks</li>
                      <li>Activation functions and backpropagation</li>
                      <li>Gradient descent and optimization algorithms</li>
                      <li>Building neural networks with PyTorch and TensorFlow</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 8-10: Advanced Neural Architectures</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Convolutional Neural Networks (CNNs)</li>
                      <li>Recurrent Neural Networks (RNNs) and LSTMs</li>
                      <li>Generative Adversarial Networks (GANs)</li>
                      <li>Transfer learning and fine-tuning</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 3: Computer Vision & NLP</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 11-13: Computer Vision Applications</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Image classification and object detection</li>
                      <li>Semantic segmentation</li>
                      <li>Face recognition and analysis</li>
                      <li>Vision transformers and YOLO architectures</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 14-16: Natural Language Processing</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Text preprocessing and word embeddings</li>
                      <li>Sentiment analysis and text classification</li>
                      <li>Transformer models (BERT, GPT)</li>
                      <li>Building conversational AI and chatbots</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Module 4: Advanced AI & Deployment</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 17-18: Reinforcement Learning</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Markov decision processes</li>
                      <li>Q-learning and policy gradients</li>
                      <li>Deep reinforcement learning</li>
                      <li>Multi-agent systems</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 19-20: MLOps & Production AI</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Model deployment and serving</li>
                      <li>Monitoring and maintaining AI systems</li>
                      <li>Scaling AI applications</li>
                      <li>Capstone project implementation</li>
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
                  <h3 className="text-xl font-bold mb-3">Intelligent Image Classifier</h3>
                  <p className="text-gray-700 mb-4">
                    Build a deep learning model that can classify images across multiple categories with high accuracy,
                    using transfer learning and fine-tuning techniques.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">CNN</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Transfer Learning</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">PyTorch</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Sentiment Analysis Engine</h3>
                  <p className="text-gray-700 mb-4">
                    Create an NLP system that analyzes sentiment in text data from social media, reviews, or customer
                    feedback with high accuracy using transformer models.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">BERT</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Transformers</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Hugging Face</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Object Detection System</h3>
                  <p className="text-gray-700 mb-4">
                    Develop a real-time object detection system that can identify and track multiple objects in video
                    streams using state-of-the-art architectures.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">YOLO</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Computer Vision</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">OpenCV</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Generative AI Art Creator</h3>
                  <p className="text-gray-700 mb-4">
                    Build a generative model that can create original artwork, music, or text based on learned patterns
                    from existing creative works.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">GANs</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Diffusion Models</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Stable Diffusion</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Intelligent Chatbot</h3>
                  <p className="text-gray-700 mb-4">
                    Create a conversational AI system that can understand natural language queries and provide helpful,
                    contextually relevant responses.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">LLMs</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">RAG</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">LangChain</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Capstone AI Project</h3>
                  <p className="text-gray-700 mb-4">
                    Design and develop a complex AI application of your choice that solves a real-world problem and
                    incorporates multiple AI techniques learned throughout the course.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">MLOps</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Full Stack AI</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Cloud Deployment</span>
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
                  <h3 className="text-xl font-bold">Dr. Emily Zhang</h3>
                  <p className="text-blue-600 mb-2">AI Research Scientist</p>
                  <p className="text-gray-700 mb-4">
                    Ph.D. in Machine Learning with 8+ years of experience. Previously led AI research teams at Google
                    Brain and DeepMind.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Deep Learning</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Computer Vision</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img src="/api/placeholder/150/150" alt="Instructor" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Alex Ramirez</h3>
                  <p className="text-blue-600 mb-2">NLP Specialist</p>
                  <p className="text-gray-700 mb-4">
                    10 years of experience in natural language processing and large language models. Former lead at
                    OpenAI.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">NLP</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Transformers</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img src="/api/placeholder/150/150" alt="Instructor" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Dr. Marcus Johnson</h3>
                  <p className="text-blue-600 mb-2">MLOps Engineer</p>
                  <p className="text-gray-700 mb-4">
                    Expert in deploying and scaling AI systems in production with 9 years of experience at AWS and
                    Netflix.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">MLOps</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Cloud AI</span>
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
                    <h4 className="font-bold text-lg mb-2">Machine Learning Engineer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $120,000 - $180,000</p>
                    <p className="text-gray-700">
                      Design and implement machine learning models and systems for production environments.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">AI Research Scientist</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $130,000 - $200,000</p>
                    <p className="text-gray-700">
                      Conduct cutting-edge research to advance the field of artificial intelligence.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Computer Vision Engineer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $125,000 - $190,000</p>
                    <p className="text-gray-700">
                      Develop systems that can analyze and interpret visual information from the world.
                    </p>
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
                      AI and ML specialists are among the most sought-after professionals globally. According to recent
                      industry reports, there's a <span className="font-bold">71% growth</span> in AI job postings over
                      the past two years, with demand far exceeding the supply of qualified professionals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Lightbulb size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Every industry from healthcare and finance to retail and manufacturing is investing heavily in AI
                      capabilities, creating diverse opportunities for AI specialists across sectors and geographies.
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
                    <h4 className="font-bold">AI Portfolio Development</h4>
                    <p className="text-gray-700">
                      Build a professional portfolio of AI projects that demonstrate your capabilities to employers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Users size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Technical Interview Preparation</h4>
                    <p className="text-gray-700">Practice AI-specific technical interviews with industry veterans.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Users size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">AI Industry Networking</h4>
                    <p className="text-gray-700">
                      Connect with our network of AI companies and hiring partners actively seeking talent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          {[
            {
              question: "Do I need a background in AI or machine learning?",
              answer:
                "No prior AI experience is required, but basic Python programming skills and understanding of fundamental mathematics (statistics and linear algebra) will help you succeed in the course.",
            },
            {
              question: "What hardware requirements are needed for this course?",
              answer:
                "You'll need a computer with at least 16GB RAM and a dedicated GPU (NVIDIA preferred) for deep learning tasks. Alternatively, we provide cloud-based GPU resources for students without suitable hardware.",
            },
            {
              question: "How is the course structured between theory and practice?",
              answer:
                "The course follows an 80/20 approach with 80% hands-on practical implementation and 20% theoretical foundations. You'll be building real AI models from the first week.",
            },
            {
              question: "Will I be able to build my own AI applications after this course?",
              answer:
                "By the end of the course, you'll have the skills to conceptualize, design, implement, and deploy AI applications across various domains including computer vision, NLP, and generative AI.",
            },
            {
              question: "How does this course stay current with rapidly evolving AI technologies?",
              answer:
                "Our curriculum is continuously updated to reflect the latest advancements in AI. We incorporate new research papers, techniques, and tools as they emerge in the field.",
            },
            {
              question: "What kind of support is provided during and after the course?",
              answer:
                "During the course, you'll have access to instructor office hours, peer discussion forums, and teaching assistants. After completion, you'll join our alumni network with continued access to career services and community resources.",
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
          <h2 className="text-3xl font-bold mb-4">Ready to Master AI & Machine Learning?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our next cohort and transform your career with cutting-edge AI skills that are reshaping industries
            worldwide.
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

      {/* Tech Stack Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">AI Technologies You'll Master</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Brain size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">TensorFlow</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Layers size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">PyTorch</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Bot size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Transformers</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Monitor size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Computer Vision</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <LineChart size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Scikit-learn</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Cpu size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">MLOps Tools</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




// import { useState, useEffect } from "react"
// import {
//   Lightbulb,
//   Users,
//   Award,
//   Calendar,
//   BookOpen,
//   Layers,
//   Monitor,
//   ChevronDown,
//   Brain,
//   Bot,
//   Network,
//   LineChart,
//   Cpu,
//   CheckCircle,
//   Star,
//   Clock,
//   ArrowRight,
//   Play,
//   Zap,
//   Code,
//   BarChart,
//   MessageSquare,
//   ChevronRight,
//   Sparkles,
//   Rocket,
//   GraduationCap,
//   Globe,
//   Briefcase,
//   PieChart,
// } from "lucide-react"
// import { Link } from "react-router-dom"

// export default function AIMLCoursePage() {
//   const [activeTab, setActiveTab] = useState("overview")
//   const [activeFaq, setActiveFaq] = useState(null)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [activeTestimonial, setActiveTestimonial] = useState(0)

//   const toggleFaq = (index) => {
//     setActiveFaq(activeFaq === index ? null : index)
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   // Testimonial auto-rotation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Data Scientist at Google",
//       image: "/placeholder.svg?height=100&width=100",
//       text: "This course transformed my career. The hands-on projects and expert guidance helped me land my dream job at Google. The curriculum is cutting-edge and practical.",
//     },
//     {
//       name: "Michael Chen",
//       role: "AI Engineer at Microsoft",
//       image: "/placeholder.svg?height=100&width=100",
//       text: "The depth of knowledge I gained was incredible. From basic ML concepts to advanced deep learning, everything was explained clearly with real-world applications.",
//     },
//     {
//       name: "Priya Patel",
//       role: "ML Team Lead at Amazon",
//       image: "/placeholder.svg?height=100&width=100",
//       text: "As someone with a software background, this course provided the perfect bridge into AI. The instructors are world-class and the community support is amazing.",
//     },
//   ]

//   return (
//     <div className="bg-[#fceedb] min-h-screen">
//       {/* Sticky Navigation */}
//       {/* <div
//         className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
//       >
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <Brain className="text-orange-600 h-8 w-8" />
//             <span className="font-bold text-xl">AI Masters</span>
//           </div>
//           <div className="hidden md:flex items-center gap-6">
//             <a href="#overview" className="font-medium hover:text-orange-600 transition-colors">
//               Overview
//             </a>
//             <a href="#curriculum" className="font-medium hover:text-orange-600 transition-colors">
//               Curriculum
//             </a>
//             <a href="#projects" className="font-medium hover:text-orange-600 transition-colors">
//               Projects
//             </a>
//             <a href="#instructors" className="font-medium hover:text-orange-600 transition-colors">
//               Instructors
//             </a>
//             <a href="#testimonials" className="font-medium hover:text-orange-600 transition-colors">
//               Testimonials
//             </a>
//           </div>
//           <Link to="/contact">
//             <button className="bg-gradient-to-r from-orange-600 to-red-500 text-white font-bold px-6 py-2 rounded-full hover:shadow-lg transition-all">
//               Enroll Now
//             </button>
//           </Link>
//         </div>
//       </div> */}

//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-orange-600 to-red-500 text-white relative overflow-hidden h-[50rem]">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
//         </div>
//         <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-12 md:mb-0">
//               <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-6">

//                 <span className="flex items-center gap-2">
//                   <Star className="h-4 w-4 text-yellow-300" /> Top-rated AI & ML Program
//                 </span> 

//               </div>
//               <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//                 Master the Future with <span className="text-yellow-300">AI & Machine Learning</span>
//               </h1>
//               <p className="text-xl mb-8 text-white/90 max-w-xl">
//                 Transform your career with cutting-edge skills in artificial intelligence and machine learning that are
//                 reshaping industries worldwide.
//               </p>
//               <div className="flex flex-wrap gap-4 mb-10">
//                 <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
//                   Deep Learning
//                 </span>
//                 <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
//                   Neural Networks
//                 </span>
//                 <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
//                   Computer Vision
//                 </span>
//                 <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">NLP</span>
//                 <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
//                   Reinforcement Learning
//                 </span>
//               </div>
//               <div className="flex flex-wrap gap-4">
//                 <Link to="/contact">
//                   <button className="bg-white text-orange-600 hover:bg-yellow-300 hover:text-orange-700 font-bold px-8 py-4 rounded-full transition-all shadow-lg flex items-center gap-2">
//                     Start Your Journey <ArrowRight className="h-5 w-5" />
//                   </button>
//                 </Link>
//                 <Link to="/contact">
//                   <button className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
//                     <Play className="h-5 w-5" /> Watch Demo
//                   </button>
//                 </Link>
//               </div>
//             </div>
//             <div className="md:w-1/2 flex justify-center">
//               <div className="relative">
//                 <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl relative z-10">
//                   <Brain size={150} strokeWidth={1} className="text-white" />
//                 </div>
//                 <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
//                   <Network size={48} strokeWidth={1} className="text-orange-700" />
//                 </div>
//                 <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-300 rounded-full flex items-center justify-center shadow-lg">
//                   <Bot size={48} strokeWidth={1} className="text-orange-700" />
//                 </div>
//                 <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-24 h-24 bg-red-400 rounded-full flex items-center justify-center shadow-lg">
//                   <Cpu size={36} strokeWidth={1} className="text-white" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
//             <path
//               fill="#fceedb"
//               fillOpacity="1"
//               d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             ></path>
//           </svg>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="container mx-auto px-4 py-12 -mt-4 relative z-20">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="bg-white p-8 rounded-2xl shadow-xl">
//             <div className="flex items-center mb-4">
//               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
//                 <Calendar className="text-orange-600" size={24} />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold">20 Weeks</h3>
//                 <p className="text-gray-600">Program Duration</p>
//               </div>
//             </div>
//             <p className="text-gray-700">Intensive training with 8 hours per week commitment</p>
//           </div>
//           <div className="bg-white p-8 rounded-2xl shadow-xl">
//             <div className="flex items-center mb-4">
//               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
//                 <BookOpen className="text-orange-600" size={24} />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold">6+ Projects</h3>
//                 <p className="text-gray-600">Hands-on Learning</p>
//               </div>
//             </div>
//             <p className="text-gray-700">Build a professional portfolio of real-world AI applications</p>
//           </div>
//           <div className="bg-white p-8 rounded-2xl shadow-xl">
//             <div className="flex items-center mb-4">
//               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
//                 <Users className="text-orange-600" size={24} />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold">1:15 Ratio</h3>
//                 <p className="text-gray-600">Instructor to Student</p>
//               </div>
//             </div>
//             <p className="text-gray-700">Personalized guidance and mentorship throughout the program</p>
//           </div>
//           <div className="bg-white p-8 rounded-2xl shadow-xl">
//             <div className="flex items-center mb-4">
//               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
//                 <Award className="text-orange-600" size={24} />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold">94% Success</h3>
//                 <p className="text-gray-600">Job Placement</p>
//               </div>
//             </div>
//             <p className="text-gray-700">Our graduates work at top tech companies worldwide</p>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us Section */}
//       <div className="container mx-auto px-4 py-16" id="overview">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our AI & ML Program?</h2>
//           <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//             Our comprehensive program is designed to transform beginners into industry-ready AI professionals through
//             practical, hands-on learning.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
//             <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-2xl flex items-center justify-center mb-6">
//               <Code className="text-white" size={32} />
//             </div>
//             <h3 className="text-xl font-bold mb-4">Industry-Relevant Curriculum</h3>
//             <p className="text-gray-700 mb-4">
//               Our curriculum is designed by AI experts from leading tech companies and is continuously updated with the
//               latest advancements.
//             </p>
//             <ul className="space-y-2">
//               {["Latest AI frameworks", "Cutting-edge techniques", "Real-world applications"].map((item, index) => (
//                 <li key={index} className="flex items-center gap-2">
//                   <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
//             <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-2xl flex items-center justify-center mb-6">
//               <Layers className="text-white" size={32} />
//             </div>
//             <h3 className="text-xl font-bold mb-4">Project-Based Learning</h3>
//             <p className="text-gray-700 mb-4">
//               Build a professional portfolio with 6+ hands-on projects that demonstrate your ability to solve real AI
//               challenges.
//             </p>
//             <ul className="space-y-2">
//               {["Computer vision systems", "NLP applications", "Generative AI models", "Deployed ML solutions"].map(
//                 (item, index) => (
//                   <li key={index} className="flex items-center gap-2">
//                     <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
//                     <span>{item}</span>
//                   </li>
//                 ),
//               )}
//             </ul>
//           </div>

//           <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
//             <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-2xl flex items-center justify-center mb-6">
//               <Rocket className="text-white" size={32} />
//             </div>
//             <h3 className="text-xl font-bold mb-4">Career Acceleration</h3>
//             <p className="text-gray-700 mb-4">
//               Comprehensive career support including interview preparation, resume building, and connections to our
//               hiring partners.
//             </p>
//             <ul className="space-y-2">
//               {["1-on-1 career coaching", "AI interview preparation", "Hiring partner network", "Alumni community"].map(
//                 (item, index) => (
//                   <li key={index} className="flex items-center gap-2">
//                     <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
//                     <span>{item}</span>
//                   </li>
//                 ),
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="container mx-auto px-4 py-16" id="curriculum">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           <div className="flex overflow-x-auto space-x-1 p-2 bg-gray-50 border-b">
//             <button
//               onClick={() => setActiveTab("overview")}
//               className={`px-6 py-3 font-medium rounded-lg whitespace-nowrap transition-all ${
//                 activeTab === "overview"
//                   ? "bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-md"
//                   : "bg-white text-gray-700 hover:bg-orange-50"
//               }`}
//             >
//               Overview
//             </button>
//             <button
//               onClick={() => setActiveTab("curriculum")}
//               className={`px-6 py-3 font-medium rounded-lg whitespace-nowrap transition-all ${
//                 activeTab === "curriculum"
//                   ? "bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-md"
//                   : "bg-white text-gray-700 hover:bg-orange-50"
//               }`}
//             >
//               Curriculum
//             </button>
//             <button
//               onClick={() => setActiveTab("projects")}
//               className={`px-6 py-3 font-medium rounded-lg whitespace-nowrap transition-all ${
//                 activeTab === "projects"
//                   ? "bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-md"
//                   : "bg-white text-gray-700 hover:bg-orange-50"
//               }`}
//             >
//               Projects
//             </button>
//             <button
//               onClick={() => setActiveTab("instructors")}
//               className={`px-6 py-3 font-medium rounded-lg whitespace-nowrap transition-all ${
//                 activeTab === "instructors"
//                   ? "bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-md"
//                   : "bg-white text-gray-700 hover:bg-orange-50"
//               }`}
//             >
//               Instructors
//             </button>
//             <button
//               onClick={() => setActiveTab("careers")}
//               className={`px-6 py-3 font-medium rounded-lg whitespace-nowrap transition-all ${
//                 activeTab === "careers"
//                   ? "bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-md"
//                   : "bg-white text-gray-700 hover:bg-orange-50"
//               }`}
//             >
//               Career Paths
//             </button>
//           </div>

//           {/* Tab Content */}
//           <div className="p-8">
//             {activeTab === "overview" && (
//               <div>
//                 <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
//                 <p className="text-gray-700 mb-8 text-lg">
//                   Our Machine Learning & AI course is designed to transform practitioners into AI specialists capable of
//                   building intelligent systems. You'll learn to develop neural networks, implement computer vision
//                   solutions, create natural language processing applications, and deploy production-ready AI models that
//                   solve real-world problems.
//                 </p>

//                 <h3 className="text-2xl font-bold mb-6">What You'll Learn</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//                   <div className="flex items-start bg-orange-50 p-6 rounded-xl">
//                     <div className="bg-gradient-to-r from-orange-600 to-red-500 p-3 rounded-xl mr-4 text-white">
//                       <Brain size={24} />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-xl mb-2">Deep Learning Fundamentals</h4>
//                       <p className="text-gray-700">Neural networks, backpropagation, and optimization algorithms</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start bg-orange-50 p-6 rounded-xl">
//                     <div className="bg-gradient-to-r from-orange-600 to-red-500 p-3 rounded-xl mr-4 text-white">
//                       <Monitor size={24} />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-xl mb-2">Computer Vision</h4>
//                       <p className="text-gray-700">
//                         Image classification, object detection, and segmentation with CNNs
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start bg-orange-50 p-6 rounded-xl">
//                     <div className="bg-gradient-to-r from-orange-600 to-red-500 p-3 rounded-xl mr-4 text-white">
//                       <Bot size={24} />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-xl mb-2">Natural Language Processing</h4>
//                       <p className="text-gray-700">Text analysis, sentiment analysis, and transformer models</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start bg-orange-50 p-6 rounded-xl">
//                     <div className="bg-gradient-to-r from-orange-600 to-red-500 p-3 rounded-xl mr-4 text-white">
//                       <Cpu size={24} />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-xl mb-2">MLOps & Deployment</h4>
//                       <p className="text-gray-700">Model serving, monitoring, and scaling AI systems</p>
//                     </div>
//                   </div>
//                 </div>

//                 <h3 className="text-2xl font-bold mb-6">Course Highlights</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                   <div className="bg-gradient-to-r from-orange-600 to-red-500 p-6 rounded-xl text-white">
//                     <div className="flex items-center mb-4">
//                       <Lightbulb size={24} className="mr-3" />
//                       <h4 className="font-bold text-xl">Hands-on Projects</h4>
//                     </div>
//                     <p className="text-white/90">80% practical implementation with real-world datasets</p>
//                   </div>
//                   <div className="bg-gradient-to-r from-orange-600 to-red-500 p-6 rounded-xl text-white">
//                     <div className="flex items-center mb-4">
//                       <Users size={24} className="mr-3" />
//                       <h4 className="font-bold text-xl">AI Research Workshops</h4>
//                     </div>
//                     <p className="text-white/90">Explore cutting-edge AI research papers and implementations</p>
//                   </div>
//                   <div className="bg-gradient-to-r from-orange-600 to-red-500 p-6 rounded-xl text-white">
//                     <div className="flex items-center mb-4">
//                       <Award size={24} className="mr-3" />
//                       <h4 className="font-bold text-xl">AI Model Portfolio</h4>
//                     </div>
//                     <p className="text-white/90">Build a portfolio of deployed AI models and applications</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "curriculum" && (
//               <div>
//                 <h2 className="text-3xl font-bold mb-8">Curriculum</h2>

//                 <div className="relative">
//                   <div className="absolute left-8 top-0 bottom-0 w-1 bg-orange-200 rounded-full"></div>

//                   <div className="mb-12 relative">
//                     <div className="absolute left-6 -translate-x-1/2 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-600 to-red-500 border-4 border-white z-10"></div>
//                     <div className="ml-16">
//                       <h3 className="text-2xl font-bold mb-6">Module 1: Machine Learning Foundations</h3>
//                       <div className="space-y-4">
//                         <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
//                           <h4 className="font-bold text-xl mb-3">Week 1-2: ML Fundamentals</h4>
//                           <ul className="space-y-2">
//                             {[
//                               "Supervised vs. unsupervised learning",
//                               "Linear and logistic regression",
//                               "Decision trees and random forests",
//                               "Model evaluation and validation techniques",
//                             ].map((item, index) => (
//                               <li key={index} className="flex items-center gap-2">
//                                 <CheckCircle className="text-orange-600 h-5 w-5 flex-shrink-0" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
//                           <h4 className="font-bold text-xl mb-3">Week 3-4: Feature Engineering & Selection</h4>
//                           <ul className="space-y-2">
//                             {[
//                               "Data preprocessing and normalization",
//                               "Feature extraction and transformation",
//                               "Dimensionality reduction (PCA, t-SNE)",
//                               "Feature importance and selection methods",
//                             ].map((item, index) => (
//                               <li key={index} className="flex items-center gap-2">
//                                 <CheckCircle className="text-orange-600 h-5 w-5 flex-shrink-0" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mb-12 relative">
//                     <div className="absolute left-6 -translate-x-1/2 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-600 to-red-500 border-4 border-white z-10"></div>
//                     <div className="ml-16">
//                       <h3 className="text-2xl font-bold mb-6">Module 2: Deep Learning & Neural Networks</h3>
//                       <div className="space-y-4">
//                         <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
//                           <h4 className="font-bold text-xl mb-3">Week 5-7: Neural Network Fundamentals</h4>
//                           <ul className="space-y-2">
//                             {[
//                               "Perceptrons and multilayer networks",
//                               "Activation functions and backpropagation",
//                               "Gradient descent and optimization algorithms",
//                               "Building neural networks with PyTorch and TensorFlow",
//                             ].map((item, index) => (
//                               <li key={index} className="flex items-center gap-2">
//                                 <CheckCircle className="text-orange-600 h-5 w-5 flex-shrink-0" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
//                           <h4 className="font-bold text-xl mb-3">Week 8-10: Advanced Neural Architectures</h4>
//                           <ul className="space-y-2">
//                             {[
//                               "Convolutional Neural Networks (CNNs)",
//                               "Recurrent Neural Networks (RNNs) and LSTMs",
//                               "Generative Adversarial Networks (GANs)",
//                               "Transfer learning and fine-tuning",
//                             ].map((item, index) => (
//                               <li key={index} className="flex items-center gap-2">
//                                 <CheckCircle className="text-orange-600 h-5 w-5 flex-shrink-0" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mb-12 relative">
//                     <div className="absolute left-6 -translate-x-1/2 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-600 to-red-500 border-4 border-white z-10"></div>
//                     <div className="ml-16">
//                       <h3 className="text-2xl font-bold mb-6">Module 3: Computer Vision & NLP</h3>
//                       <div className="space-y-4">
//                         <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
//                           <h4 className="font-bold text-xl mb-3">Week 11-13: Computer Vision Applications</h4>
//                           <ul className="space-y-2">
//                             {[
//                               "Image classification and object detection",
//                               "Semantic segmentation",
//                               "Face recognition and analysis",
//                               "Vision transformers and YOLO architectures",
//                             ].map((item, index) => (
//                               <li key={index} className="flex items-center gap-2">
//                                 <CheckCircle className="text-orange-600 h-5 w-5 flex-shrink-0" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
//                           <h4 className="font-bold text-xl mb-3">Week 14-16: Natural Language Processing</h4>
//                           <ul className="space-y-2">
//                             {[
//                               "Text preprocessing and word embeddings",
//                               "Sentiment analysis and text classification",
//                               "Transformer models (BERT, GPT)",
//                               "Building conversational AI and chatbots",
//                             ].map((item, index) => (
//                               <li key={index} className="flex items-center gap-2">
//                                 <CheckCircle className="text-orange-600 h-5 w-5 flex-shrink-0" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="relative">
//                     <div className="absolute left-6 -translate-x-1/2 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-600 to-red-500 border-4 border-white z-10"></div>
//                     <div className="ml-16">
//                       <h3 className="text-2xl font-bold mb-6">Module 4: Advanced AI & Deployment</h3>
//                       <div className="space-y-4">
//                         <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
//                           <h4 className="font-bold text-xl mb-3">Week 17-18: Reinforcement Learning</h4>
//                           <ul className="space-y-2">
//                             {[
//                               "Markov decision processes",
//                               "Q-learning and policy gradients",
//                               "Deep reinforcement learning",
//                               "Multi-agent systems",
//                             ].map((item, index) => (
//                               <li key={index} className="flex items-center gap-2">
//                                 <CheckCircle className="text-orange-600 h-5 w-5 flex-shrink-0" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
//                           <h4 className="font-bold text-xl mb-3">Week 19-20: MLOps & Production AI</h4>
//                           <ul className="space-y-2">
//                             {[
//                               "Model deployment and serving",
//                               "Monitoring and maintaining AI systems",
//                               "Scaling AI applications",
//                               "Capstone project implementation",
//                             ].map((item, index) => (
//                               <li key={index} className="flex items-center gap-2">
//                                 <CheckCircle className="text-orange-600 h-5 w-5 flex-shrink-0" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "projects" && (
//               <div id="projects">
//                 <h2 className="text-3xl font-bold mb-8">Projects You'll Build</h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   <div className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
//                     <div className="h-48 bg-gradient-to-r from-orange-600 to-red-500 relative overflow-hidden">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <Monitor size={80} className="text-white/80" />
//                       </div>
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                         <h3 className="text-xl font-bold text-white">Intelligent Image Classifier</h3>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <p className="text-gray-700 mb-4">
//                         Build a deep learning model that can classify images across multiple categories with high
//                         accuracy, using transfer learning and fine-tuning techniques.
//                       </p>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">CNN</span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Transfer Learning
//                         </span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">PyTorch</span>
//                       </div>
//                       <Link
//                         to="/projects"
//                         className="text-orange-600 font-medium flex items-center gap-1 group-hover:text-red-500 transition-colors"
//                       >
//                         Learn more <ChevronRight className="h-4 w-4" />
//                       </Link>
//                     </div>
//                   </div>

//                   <div className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
//                     <div className="h-48 bg-gradient-to-r from-orange-600 to-red-500 relative overflow-hidden">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <MessageSquare size={80} className="text-white/80" />
//                       </div>
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                         <h3 className="text-xl font-bold text-white">Sentiment Analysis Engine</h3>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <p className="text-gray-700 mb-4">
//                         Create an NLP system that analyzes sentiment in text data from social media, reviews, or
//                         customer feedback with high accuracy using transformer models.
//                       </p>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">BERT</span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Transformers
//                         </span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Hugging Face
//                         </span>
//                       </div>
//                       <Link
//                         to="/projects"
//                         className="text-orange-600 font-medium flex items-center gap-1 group-hover:text-red-500 transition-colors"
//                       >
//                         Learn more <ChevronRight className="h-4 w-4" />
//                       </Link>
//                     </div>
//                   </div>

//                   <div className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
//                     <div className="h-48 bg-gradient-to-r from-orange-600 to-red-500 relative overflow-hidden">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <Layers size={80} className="text-white/80" />
//                       </div>
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                         <h3 className="text-xl font-bold text-white">Object Detection System</h3>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <p className="text-gray-700 mb-4">
//                         Develop a real-time object detection system that can identify and track multiple objects in
//                         video streams using state-of-the-art architectures.
//                       </p>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">YOLO</span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Computer Vision
//                         </span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">OpenCV</span>
//                       </div>
//                       <Link
//                         to="/projects"
//                         className="text-orange-600 font-medium flex items-center gap-1 group-hover:text-red-500 transition-colors"
//                       >
//                         Learn more <ChevronRight className="h-4 w-4" />
//                       </Link>
//                     </div>
//                   </div>

//                   <div className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
//                     <div className="h-48 bg-gradient-to-r from-orange-600 to-red-500 relative overflow-hidden">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <Sparkles size={80} className="text-white/80" />
//                       </div>
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                         <h3 className="text-xl font-bold text-white">Generative AI Art Creator</h3>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <p className="text-gray-700 mb-4">
//                         Build a generative model that can create original artwork, music, or text based on learned
//                         patterns from existing creative works.
//                       </p>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">GANs</span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Diffusion Models
//                         </span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Stable Diffusion
//                         </span>
//                       </div>
//                       <Link
//                         to="/projects"
//                         className="text-orange-600 font-medium flex items-center gap-1 group-hover:text-red-500 transition-colors"
//                       >
//                         Learn more <ChevronRight className="h-4 w-4" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "instructors" && (
//               <div id="instructors">
//                 <h2 className="text-3xl font-bold mb-8">Meet Your Instructors</h2>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                   <div className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
//                     <div className="h-48 bg-gradient-to-r from-orange-600 to-red-500 relative">
//                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
//                         <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white">
//                           <img
//                             src="/placeholder.svg?height=100&width=100"
//                             alt="Dr. Emily Zhang"
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-6 pt-16 text-center">
//                       <h3 className="text-xl font-bold">Dr. Emily Zhang</h3>
//                       <p className="text-orange-600 mb-4">AI Research Scientist</p>
//                       <p className="text-gray-700 mb-4">
//                         Ph.D. in Machine Learning with 8+ years of experience. Previously led AI research teams at
//                         Google Brain and DeepMind.
//                       </p>
//                       <div className="flex justify-center gap-3">
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Deep Learning
//                         </span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Computer Vision
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
//                     <div className="h-48 bg-gradient-to-r from-orange-600 to-red-500 relative">
//                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
//                         <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white">
//                           <img
//                             src="/placeholder.svg?height=100&width=100"
//                             alt="Alex Ramirez"
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-6 pt-16 text-center">
//                       <h3 className="text-xl font-bold">Alex Ramirez</h3>
//                       <p className="text-orange-600 mb-4">NLP Specialist</p>
//                       <p className="text-gray-700 mb-4">
//                         10 years of experience in natural language processing and large language models. Former lead at
//                         OpenAI.
//                       </p>
//                       <div className="flex justify-center gap-3">
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">NLP</span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Transformers
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
//                     <div className="h-48 bg-gradient-to-r from-orange-600 to-red-500 relative">
//                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
//                         <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white">
//                           <img
//                             src="/placeholder.svg?height=100&width=100"
//                             alt="Dr. Marcus Johnson"
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-6 pt-16 text-center">
//                       <h3 className="text-xl font-bold">Dr. Marcus Johnson</h3>
//                       <p className="text-orange-600 mb-4">MLOps Engineer</p>
//                       <p className="text-gray-700 mb-4">
//                         Expert in deploying and scaling AI systems in production with 9 years of experience at AWS and
//                         Netflix.
//                       </p>
//                       <div className="flex justify-center gap-3">
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">MLOps</span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">Cloud AI</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "careers" && (
//               <div>
//                 <h2 className="text-3xl font-bold mb-8">Career Opportunities</h2>

//                 <div className="mb-10">
//                   <h3 className="text-2xl font-bold mb-6">Job Roles After Completion</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <div className="bg-white border border-orange-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
//                       <div className="flex items-center mb-4">
//                         <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-500 rounded-xl flex items-center justify-center text-white mr-4">
//                           <Code size={24} />
//                         </div>
//                         <div>
//                           <h4 className="font-bold text-xl">Machine Learning Engineer</h4>
//                           <p className="text-orange-600">$120,000 - $180,000</p>
//                         </div>
//                       </div>
//                       <p className="text-gray-700">
//                         Design and implement machine learning models and systems for production environments.
//                       </p>
//                     </div>

//                     <div className="bg-white border border-orange-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
//                       <div className="flex items-center mb-4">
//                         <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-500 rounded-xl flex items-center justify-center text-white mr-4">
//                           <Brain size={24} />
//                         </div>
//                         <div>
//                           <h4 className="font-bold text-xl">AI Research Scientist</h4>
//                           <p className="text-orange-600">$130,000 - $200,000</p>
//                         </div>
//                       </div>
//                       <p className="text-gray-700">
//                         Conduct cutting-edge research to advance the field of artificial intelligence.
//                       </p>
//                     </div>

//                     <div className="bg-white border border-orange-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
//                       <div className="flex items-center mb-4">
//                         <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-500 rounded-xl flex items-center justify-center text-white mr-4">
//                           <Monitor size={24} />
//                         </div>
//                         <div>
//                           <h4 className="font-bold text-xl">Computer Vision Engineer</h4>
//                           <p className="text-orange-600">$125,000 - $190,000</p>
//                         </div>
//                       </div>
//                       <p className="text-gray-700">
//                         Develop systems that can analyze and interpret visual information from the world.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-10">
//                   <h3 className="text-2xl font-bold mb-6">Industry Demand</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="bg-gradient-to-r from-orange-600 to-red-500 p-8 rounded-xl text-white">
//                       <div className="flex items-start mb-4">
//                         <BarChart size={40} className="mr-4" />
//                         <div>
//                           <h4 className="text-2xl font-bold mb-2">71% Growth</h4>
//                           <p className="text-white/90">
//                             AI and ML specialists are among the most sought-after professionals globally, with a 71%
//                             growth in job postings over the past two years.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-gradient-to-r from-orange-600 to-red-500 p-8 rounded-xl text-white">
//                       <div className="flex items-start mb-4">
//                         <Globe size={40} className="mr-4" />
//                         <div>
//                           <h4 className="text-2xl font-bold mb-2">Cross-Industry Demand</h4>
//                           <p className="text-white/90">
//                             Every industry from healthcare and finance to retail and manufacturing is investing heavily
//                             in AI capabilities.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <h3 className="text-2xl font-bold mb-6">Career Support</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="bg-white border border-orange-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
//                     <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
//                       <Briefcase className="text-orange-600" size={32} />
//                     </div>
//                     <h4 className="font-bold text-xl mb-2">AI Portfolio Development</h4>
//                     <p className="text-gray-700">
//                       Build a professional portfolio of AI projects that demonstrate your capabilities to employers.
//                     </p>
//                   </div>

//                   <div className="bg-white border border-orange-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
//                     <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
//                       <GraduationCap className="text-orange-600" size={32} />
//                     </div>
//                     <h4 className="font-bold text-xl mb-2">Technical Interview Preparation</h4>
//                     <p className="text-gray-700">Practice AI-specific technical interviews with industry veterans.</p>
//                   </div>

//                   <div className="bg-white border border-orange-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
//                     <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
//                       <Users className="text-orange-600" size={32} />
//                     </div>
//                     <h4 className="font-bold text-xl mb-2">AI Industry Networking</h4>
//                     <p className="text-gray-700">
//                       Connect with our network of AI companies and hiring partners actively seeking talent.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <div className="bg-gradient-to-r from-orange-600 to-red-500 py-20" id="testimonials">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Students Say</h2>
//             <p className="text-xl text-white/80 max-w-3xl mx-auto">
//               Hear from our graduates who have transformed their careers with our AI & ML program.
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
//                 <div className="flex flex-col md:flex-row gap-8 items-center">
//                   <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-orange-100">
//                     <img
//                       src={testimonials[activeTestimonial].image || "/placeholder.svg"}
//                       alt={testimonials[activeTestimonial].name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <div className="flex mb-4">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className="text-yellow-400 h-6 w-6 fill-current" />
//                       ))}
//                     </div>
//                     <p className="text-gray-700 text-lg mb-6 italic">"{testimonials[activeTestimonial].text}"</p>
//                     <div>
//                       <h4 className="font-bold text-xl">{testimonials[activeTestimonial].name}</h4>
//                       <p className="text-orange-600">{testimonials[activeTestimonial].role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-center mt-8 gap-2">
//                 {testimonials.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveTestimonial(index)}
//                     className={`w-3 h-3 rounded-full transition-all ${
//                       activeTestimonial === index ? "bg-white w-8" : "bg-white/50"
//                     }`}
//                     aria-label={`View testimonial ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Program Stats Section */}
//       <div className="py-20 bg-[#fceedb]">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Impact</h2>
//             <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//               Our AI & ML program has helped hundreds of students transform their careers and make an impact in the
//               field.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
//                 <Users size={32} />
//               </div>
//               <h3 className="text-4xl font-bold mb-2 text-orange-600">1,200+</h3>
//               <p className="text-gray-700 font-medium">Graduates</p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
//                 <Briefcase size={32} />
//               </div>
//               <h3 className="text-4xl font-bold mb-2 text-orange-600">94%</h3>
//               <p className="text-gray-700 font-medium">Job Placement Rate</p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
//                 <PieChart size={32} />
//               </div>
//               <h3 className="text-4xl font-bold mb-2 text-orange-600">$145K</h3>
//               <p className="text-gray-700 font-medium">Average Starting Salary</p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
//                 <Globe size={32} />
//               </div>
//               <h3 className="text-4xl font-bold mb-2 text-orange-600">40+</h3>
//               <p className="text-gray-700 font-medium">Hiring Partners</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="container mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>

//         <div className="max-w-3xl mx-auto">
//           {[
//             {
//               question: "Do I need a background in AI or machine learning?",
//               answer:
//                 "No prior AI experience is required, but basic Python programming skills and understanding of fundamental mathematics (statistics and linear algebra) will help you succeed in the course.",
//             },
//             {
//               question: "What hardware requirements are needed for this course?",
//               answer:
//                 "You'll need a computer with at least 16GB RAM and a dedicated GPU (NVIDIA preferred) for deep learning tasks. Alternatively, we provide cloud-based GPU resources for students without suitable hardware.",
//             },
//             {
//               question: "How is the course structured between theory and practice?",
//               answer:
//                 "The course follows an 80/20 approach with 80% hands-on practical implementation and 20% theoretical foundations. You'll be building real AI models from the first week.",
//             },
//             {
//               question: "Will I be able to build my own AI applications after this course?",
//               answer:
//                 "By the end of the course, you'll have the skills to conceptualize, design, implement, and deploy AI applications across various domains including computer vision, NLP, and generative AI.",
//             },
//             {
//               question: "How does this course stay current with rapidly evolving AI technologies?",
//               answer:
//                 "Our curriculum is continuously updated to reflect the latest advancements in AI. We incorporate new research papers, techniques, and tools as they emerge in the field.",
//             },
//             {
//               question: "What kind of support is provided during and after the course?",
//               answer:
//                 "During the course, you'll have access to instructor office hours, peer discussion forums, and teaching assistants. After completion, you'll join our alumni network with continued access to career services and community resources.",
//             },
//           ].map((faq, index) => (
//             <div key={index} className="mb-6">
//               <button
//                 className="flex justify-between items-center w-full p-6 bg-white rounded-xl shadow-md hover:shadow-lg focus:outline-none transition-all"
//                 onClick={() => toggleFaq(index)}
//               >
//                 <span className="font-bold text-xl text-left">{faq.question}</span>
//                 <div
//                   className={`w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center transition-transform duration-300 ${activeFaq === index ? "rotate-180" : ""}`}
//                 >
//                   <ChevronDown size={20} className="text-orange-600" />
//                 </div>
//               </button>

//               {activeFaq === index && (
//                 <div className="mt-2 p-6 bg-orange-50 rounded-xl border border-orange-100">
//                   <p className="text-gray-700 text-lg">{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-orange-600 to-red-500 text-white py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Master AI & Machine Learning?</h2>
//           <p className="text-xl mb-10 max-w-3xl mx-auto">
//             Join our next cohort and transform your career with cutting-edge AI skills that are reshaping industries
//             worldwide.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-6">
//             <Link to="/contact">
//               <button className="bg-white hover:bg-yellow-300 text-orange-600 font-bold px-10 py-5 rounded-full text-lg transition-all shadow-lg flex items-center gap-2">
//                 <Zap className="h-5 w-5" /> Enroll Now
//               </button>
//             </Link>
//             <Link to="/contact">
//               <button className="border-2 border-white hover:bg-white/10 px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center gap-2">
//                 <BookOpen className="h-5 w-5" /> Download Course Brochure
//               </button>
//             </Link>
//           </div>

//           <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
//             <div className="flex items-center gap-3">
//               <Clock className="h-6 w-6" />
//               <span className="text-lg">Next Cohort: June 15, 2025</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <Users className="h-6 w-6" />
//               <span className="text-lg">Limited to 30 Students</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <Award className="h-6 w-6" />
//               <span className="text-lg">Scholarships Available</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tech Stack Section */}
//       <div className="bg-[#fceedb] py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">AI Technologies You'll Master</h2>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
//             {[
//               { icon: <Brain size={48} />, name: "TensorFlow" },
//               { icon: <Layers size={48} />, name: "PyTorch" },
//               { icon: <Bot size={48} />, name: "Transformers" },
//               { icon: <Monitor size={48} />, name: "Computer Vision" },
//               { icon: <LineChart size={48} />, name: "Scikit-learn" },
//               { icon: <Cpu size={48} />, name: "MLOps Tools" },
//             ].map((tech, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center group"
//               >
//                 <div className="h-20 w-20 flex items-center justify-center mb-6 text-orange-600 group-hover:text-red-500 transition-colors">
//                   {tech.icon}
//                 </div>
//                 <h3 className="font-bold text-xl text-center">{tech.name}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                 <Brain className="text-orange-500 h-8 w-8" />
//                 <span className="font-bold text-xl">AI Masters</span>
//               </div>
//               <p className="text-gray-400 mb-6">
//                 Transforming careers through cutting-edge AI education and practical, hands-on learning.
//               </p>
//               <div className="flex gap-4">
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
//                 >
//                   <span className="sr-only">Twitter</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
//                 >
//                   <span className="sr-only">LinkedIn</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                     <rect x="2" y="9" width="4" height="12"></rect>
//                     <circle cx="4" cy="4" r="2"></circle>
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
//                 >
//                   <span className="sr-only">YouTube</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
//                     <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg mb-6">Quick Links</h3>
//               <ul className="space-y-4">
//                 <li>
//                   <a href="#overview" className="text-gray-400 hover:text-orange-500 transition-colors">
//                     Overview
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#curriculum" className="text-gray-400 hover:text-orange-500 transition-colors">
//                     Curriculum
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#projects" className="text-gray-400 hover:text-orange-500 transition-colors">
//                     Projects
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#instructors" className="text-gray-400 hover:text-orange-500 transition-colors">
//                     Instructors
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#testimonials" className="text-gray-400 hover:text-orange-500 transition-colors">
//                     Testimonials
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg mb-6">Resources</h3>
//               <ul className="space-y-4">
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
//                     Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
//                     AI Research
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
//                     Free Tutorials
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
//                     AI Career Guide
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
//                     Community
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg mb-6">Contact Us</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-center gap-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="text-orange-500"
//                   >
//                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//                   </svg>
//                   <span className="text-gray-400">(123) 456-7890</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="text-orange-500"
//                   >
//                     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
//                     <polyline points="22,6 12,13 2,6"></polyline>
//                   </svg>
//                   <span className="text-gray-400">info@aimasters.edu</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="text-orange-500"
//                   >
//                     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                     <circle cx="12" cy="10" r="3"></circle>
//                   </svg>
//                   <span className="text-gray-400">123 AI Campus, Tech City, CA 94103</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
//             <p>© 2025 AI Masters. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }




// import { useState, useEffect, useRef } from "react"
// import {
//   Lightbulb,
//   Users,
//   Award,
//   Calendar,
//   BookOpen,
//   Layers,
//   Monitor,
//   ChevronDown,
//   Brain,
//   Bot,
//   Network,
//   LineChart,
//   Cpu,
//   CheckCircle,
//   Star,
//   Clock,
//   ArrowRight,
//   Play,
//   Zap,
//   Code,
//   BarChart,
//   MessageSquare,
//   ChevronRight,
//   Sparkles,
//   Rocket,
//   GraduationCap,
//   Globe,
//   Briefcase,
//   PieChart,
//   Menu,
//   X,
// } from "lucide-react"
// import { Link } from "react-router-dom"

// export default function AIMLCoursePage() {
//   const [activeTab, setActiveTab] = useState("overview")
//   const [activeFaq, setActiveFaq] = useState(null)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [activeTestimonial, setActiveTestimonial] = useState(0)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const testimonialsRef = useRef(null)

//   const toggleFaq = (index) => {
//     setActiveFaq(activeFaq === index ? null : index)
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   // Testimonial auto-rotation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   // Intersection Observer for animations
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

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id)
//     if (element) {
//       const headerOffset = 80
//       const elementPosition = element.getBoundingClientRect().top
//       const offsetPosition = elementPosition + window.pageYOffset - headerOffset

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       })
//     }
//     setMobileMenuOpen(false)
//   }

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Data Scientist at Google",
//       image: "/placeholder.svg?height=100&width=100",
//       text: "This course transformed my career. The hands-on projects and expert guidance helped me land my dream job at Google. The curriculum is cutting-edge and practical.",
//     },
//     {
//       name: "Michael Chen",
//       role: "AI Engineer at Microsoft",
//       image: "/placeholder.svg?height=100&width=100",
//       text: "The depth of knowledge I gained was incredible. From basic ML concepts to advanced deep learning, everything was explained clearly with real-world applications.",
//     },
//     {
//       name: "Priya Patel",
//       role: "ML Team Lead at Amazon",
//       image: "/placeholder.svg?height=100&width=100",
//       text: "As someone with a software background, this course provided the perfect bridge into AI. The instructors are world-class and the community support is amazing.",
//     },
//   ]

//   return (
//     <div className="bg-[#fceedb] min-h-screen overflow-x-hidden">
      

//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-orange-600 to-red-500 text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
//         </div>
//         <div className="container mx-auto px-4 py-16 sm:py-20 md:py-28 lg:py-32 relative z-10">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-12 md:mb-0 animate-on-scroll" style={{ "--animate-delay": "0.1s" }}>
//               <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-6">
//                 <span className="flex items-center gap-2">
//                   <Star className="h-4 w-4 text-yellow-300" /> Top-rated AI & ML Program
//                 </span>
//               </div>
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//                 Master the Future with <span className="text-yellow-300">AI & Machine Learning</span>
//               </h1>
//               <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-xl">
//                 Transform your career with cutting-edge skills in artificial intelligence and machine learning that are
//                 reshaping industries worldwide.
//               </p>
//               <div className="flex flex-wrap gap-3 mb-8">
//                 <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
//                   Deep Learning
//                 </span>
//                 <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
//                   Neural Networks
//                 </span>
//                 <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
//                   Computer Vision
//                 </span>
//                 <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">NLP</span>
//                 <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
//                   Reinforcement Learning
//                 </span>
//               </div>
//               <div className="flex flex-wrap gap-4">
//                 <Link to="/contact">
//                   <button className="bg-white text-orange-600 hover:bg-yellow-300 hover:text-orange-700 font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all shadow-lg flex items-center gap-2">
//                     Start Your Journey <ArrowRight className="h-5 w-5" />
//                   </button>
//                 </Link>
//                 <Link to="/contact">
//                   <button className="border-2 border-white hover:bg-white/10 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold transition-all flex items-center gap-2">
//                     <Play className="h-5 w-5" /> Watch Demo
//                   </button>
//                 </Link>
//               </div>
//             </div>
//             <div className="md:w-1/2 flex justify-center animate-on-scroll" style={{ "--animate-delay": "0.3s" }}>
//               <div className="relative">
//                 <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl relative z-10">
//                   <Brain size={120} strokeWidth={1} className="text-white sm:scale-125 md:scale-150" />
//                 </div>
//                 <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
//                   <Network size={36} strokeWidth={1} className="text-orange-700 sm:scale-110 lg:scale-125" />
//                 </div>
//                 <div className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-orange-300 rounded-full flex items-center justify-center shadow-lg">
//                   <Bot size={36} strokeWidth={1} className="text-orange-700 sm:scale-110 lg:scale-125" />
//                 </div>
//                 <div className="absolute top-1/2 -right-8 sm:-right-12 transform -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-red-400 rounded-full flex items-center justify-center shadow-lg">
//                   <Cpu size={30} strokeWidth={1} className="text-white sm:scale-110" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
//             <path
//               fill="#fceedb"
//               fillOpacity="1"
//               d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             ></path>
//           </svg>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="container mx-auto px-4 py-8 mt-10 sm:mt-10 relative z-20">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
//           <div
//             className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 animate-on-scroll"
//             style={{ "--animate-delay": "0.1s" }}
//           >
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
//                 <Calendar className="text-orange-600" size={20} />
//               </div>
//               <div>
//                 <h3 className="text-xl sm:text-2xl font-bold">20 Weeks</h3>
//                 <p className="text-gray-600 text-sm sm:text-base">Program Duration</p>
//               </div>
//             </div>
//             <p className="text-gray-700 text-sm sm:text-base">Intensive training with 8 hours per week commitment</p>
//           </div>
//           <div
//             className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 animate-on-scroll"
//             style={{ "--animate-delay": "0.2s" }}
//           >
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
//                 <BookOpen className="text-orange-600" size={20} />
//               </div>
//               <div>
//                 <h3 className="text-xl sm:text-2xl font-bold">6+ Projects</h3>
//                 <p className="text-gray-600 text-sm sm:text-base">Hands-on Learning</p>
//               </div>
//             </div>
//             <p className="text-gray-700 text-sm sm:text-base">
//               Build a professional portfolio of real-world AI applications
//             </p>
//           </div>
//           <div
//             className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 animate-on-scroll"
//             style={{ "--animate-delay": "0.3s" }}
//           >
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
//                 <Users className="text-orange-600" size={20} />
//               </div>
//               <div>
//                 <h3 className="text-xl sm:text-2xl font-bold">1:15 Ratio</h3>
//                 <p className="text-gray-600 text-sm sm:text-base">Instructor to Student</p>
//               </div>
//             </div>
//             <p className="text-gray-700 text-sm sm:text-base">
//               Personalized guidance and mentorship throughout the program
//             </p>
//           </div>
//           <div
//             className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 animate-on-scroll"
//             style={{ "--animate-delay": "0.4s" }}
//           >
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
//                 <Award className="text-orange-600" size={20} />
//               </div>
//               <div>
//                 <h3 className="text-xl sm:text-2xl font-bold">94% Success</h3>
//                 <p className="text-gray-600 text-sm sm:text-base">Job Placement</p>
//               </div>
//             </div>
//             <p className="text-gray-700 text-sm sm:text-base">Our graduates work at top tech companies worldwide</p>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us Section */}
//       <div className="container mx-auto px-4 py-16" id="overview">
//         <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Our AI & ML Program?</h2>
//           <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
//             Our comprehensive program is designed to transform beginners into industry-ready AI professionals through
//             practical, hands-on learning.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
//           <div
//             className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 animate-on-scroll"
//             style={{ "--animate-delay": "0.1s" }}
//           >
//             <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-2xl flex items-center justify-center mb-6">
//               <Code className="text-white" size={28} />
//             </div>
//             <h3 className="text-xl font-bold mb-4">Industry-Relevant Curriculum</h3>
//             <p className="text-gray-700 mb-4">
//               Our curriculum is designed by AI experts from leading tech companies and is continuously updated with the
//               latest advancements.
//             </p>
//             <ul className="space-y-2">
//               {["Latest AI frameworks", "Cutting-edge techniques", "Real-world applications"].map((item, index) => (
//                 <li key={index} className="flex items-center gap-2">
//                   <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div
//             className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 animate-on-scroll"
//             style={{ "--animate-delay": "0.2s" }}
//           >
//             <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-2xl flex items-center justify-center mb-6">
//               <Layers className="text-white" size={28} />
//             </div>
//             <h3 className="text-xl font-bold mb-4">Project-Based Learning</h3>
//             <p className="text-gray-700 mb-4">
//               Build a professional portfolio with 6+ hands-on projects that demonstrate your ability to solve real AI
//               challenges.
//             </p>
//             <ul className="space-y-2">
//               {["Computer vision systems", "NLP applications", "Generative AI models", "Deployed ML solutions"].map(
//                 (item, index) => (
//                   <li key={index} className="flex items-center gap-2">
//                     <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
//                     <span>{item}</span>
//                   </li>
//                 ),
//               )}
//             </ul>
//           </div>

//           <div
//             className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 animate-on-scroll"
//             style={{ "--animate-delay": "0.3s" }}
//           >
//             <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-2xl flex items-center justify-center mb-6">
//               <Rocket className="text-white" size={28} />
//             </div>
//             <h3 className="text-xl font-bold mb-4">Career Acceleration</h3>
//             <p className="text-gray-700 mb-4">
//               Comprehensive career support including interview preparation, resume building, and connections to our
//               hiring partners.
//             </p>
//             <ul className="space-y-2">
//               {["1-on-1 career coaching", "AI interview preparation", "Hiring partner network", "Alumni community"].map(
//                 (item, index) => (
//                   <li key={index} className="flex items-center gap-2">
//                     <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
//                     <span>{item}</span>
//                   </li>
//                 ),
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="container mx-auto px-4 py-16" id="curriculum">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-on-scroll">
//           <div className="overflow-x-auto scrollbar-hide">
//             <div className="flex p-2 bg-gray-50 border-b min-w-max">
//               <button
//                 onClick={() => setActiveTab("overview")}
//                 className={`px-4 py-3 sm:px-6 font-medium rounded-lg whitespace-nowrap transition-all ${
//                   activeTab === "overview"
//                     ? "bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-md"
//                     : "bg-white text-gray-700 hover:bg-orange-50"
//                 }`}
//               >
//                 Overview
//               </button>
//               <button
//                 onClick={() => setActiveTab("curriculum")}
//                 className={`px-4 py-3 sm:px-6 font-medium rounded-lg whitespace-nowrap transition-all ${
//                   activeTab === "curriculum"
//                     ? "bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-md"
//                     : "bg-white text-gray-700 hover:bg-orange-50"
//                 }`}
//               >
//                 Curriculum
//               </button>
//               <button
//                 onClick={() => setActiveTab("projects")}
//                 className={`px-4 py-3 sm:px-6 font-medium rounded-lg whitespace-nowrap transition-all ${
//                   activeTab === "projects"
//                     ? "bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-md"
//                     : "bg-white text-gray-700 hover:bg-orange-50"
//                 }`}
//               >
//                 Projects
//               </button>
//               <button
//                 onClick={() => setActiveTab("instructors")}
//                 className={`px-4 py-3 sm:px-6 font-medium rounded-lg whitespace-nowrap transition-all ${
//                   activeTab === "instructors"
//                     ? "bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-md"
//                     : "bg-white text-gray-700 hover:bg-orange-50"
//                 }`}
//               >
//                 Instructors
//               </button>
//               <button
//                 onClick={() => setActiveTab("careers")}
//                 className={`px-4 py-3 sm:px-6 font-medium rounded-lg whitespace-nowrap transition-all ${
//                   activeTab === "careers"
//                     ? "bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-md"
//                     : "bg-white text-gray-700 hover:bg-orange-50"
//                 }`}
//               >
//                 Career Paths
//               </button>
//             </div>
//           </div>

//           {/* Tab Content */}
//           <div className="p-4 sm:p-6 md:p-8">
//             {activeTab === "overview" && (
//               <div>
//                 <h2 className="text-2xl sm:text-3xl font-bold mb-6">Course Overview</h2>
//                 <p className="text-gray-700 mb-8 text-base sm:text-lg">
//                   Our Machine Learning & AI course is designed to transform practitioners into AI specialists capable of
//                   building intelligent systems. You'll learn to develop neural networks, implement computer vision
//                   solutions, create natural language processing applications, and deploy production-ready AI models that
//                   solve real-world problems.
//                 </p>

//                 <h3 className="text-xl sm:text-2xl font-bold mb-6">What You'll Learn</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
//                   <div className="flex flex-col sm:flex-row items-start bg-orange-50 p-4 sm:p-6 rounded-xl">
//                     <div className="bg-gradient-to-r from-orange-600 to-red-500 p-3 rounded-xl mb-4 sm:mb-0 sm:mr-4 text-white">
//                       <Brain size={24} />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-lg sm:text-xl mb-2">Deep Learning Fundamentals</h4>
//                       <p className="text-gray-700">Neural networks, backpropagation, and optimization algorithms</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col sm:flex-row items-start bg-orange-50 p-4 sm:p-6 rounded-xl">
//                     <div className="bg-gradient-to-r from-orange-600 to-red-500 p-3 rounded-xl mb-4 sm:mb-0 sm:mr-4 text-white">
//                       <Monitor size={24} />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-lg sm:text-xl mb-2">Computer Vision</h4>
//                       <p className="text-gray-700">
//                         Image classification, object detection, and segmentation with CNNs
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col sm:flex-row items-start bg-orange-50 p-4 sm:p-6 rounded-xl">
//                     <div className="bg-gradient-to-r from-orange-600 to-red-500 p-3 rounded-xl mb-4 sm:mb-0 sm:mr-4 text-white">
//                       <Bot size={24} />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-lg sm:text-xl mb-2">Natural Language Processing</h4>
//                       <p className="text-gray-700">Text analysis, sentiment analysis, and transformer models</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col sm:flex-row items-start bg-orange-50 p-4 sm:p-6 rounded-xl">
//                     <div className="bg-gradient-to-r from-orange-600 to-red-500 p-3 rounded-xl mb-4 sm:mb-0 sm:mr-4 text-white">
//                       <Cpu size={24} />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-lg sm:text-xl mb-2">MLOps & Deployment</h4>
//                       <p className="text-gray-700">Model serving, monitoring, and scaling AI systems</p>
//                     </div>
//                   </div>
//                 </div>

//                 <h3 className="text-xl sm:text-2xl font-bold mb-6">Course Highlights</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
//                   <div className="bg-gradient-to-r from-orange-600 to-red-500 p-4 sm:p-6 rounded-xl text-white transform transition-all duration-300 hover:scale-105">
//                     <div className="flex items-center mb-4">
//                       <Lightbulb size={24} className="mr-3" />
//                       <h4 className="font-bold text-lg sm:text-xl">Hands-on Projects</h4>
//                     </div>
//                     <p className="text-white/90">80% practical implementation with real-world datasets</p>
//                   </div>
//                   <div className="bg-gradient-to-r from-orange-600 to-red-500 p-4 sm:p-6 rounded-xl text-white transform transition-all duration-300 hover:scale-105">
//                     <div className="flex items-center mb-4">
//                       <Users size={24} className="mr-3" />
//                       <h4 className="font-bold text-lg sm:text-xl">AI Research Workshops</h4>
//                     </div>
//                     <p className="text-white/90">Explore cutting-edge AI research papers and implementations</p>
//                   </div>
//                   <div className="bg-gradient-to-r from-orange-600 to-red-500 p-4 sm:p-6 rounded-xl text-white transform transition-all duration-300 hover:scale-105">
//                     <div className="flex items-center mb-4">
//                       <Award size={24} className="mr-3" />
//                       <h4 className="font-bold text-lg sm:text-xl">AI Model Portfolio</h4>
//                     </div>
//                     <p className="text-white/90">Build a portfolio of deployed AI models and applications</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "curriculum" && (
//               <div>
//                 <h2 className="text-2xl sm:text-3xl font-bold mb-8">Curriculum</h2>

//                 <div className="relative">
//                   <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-orange-200 rounded-full"></div>

//                   <div className="mb-12 relative">
//                     <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-600 to-red-500 border-4 border-white z-10"></div>
//                     <div className="ml-10 sm:ml-16">
//                       <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
//                         Module 1: Machine Learning Foundations
//                       </h3>
//                       <div className="space-y-4">
//                         <div className="bg-orange-50 p-4 sm:p-6 rounded-xl border border-orange-100">
//                           <h4 className="font-bold text-lg sm:text-xl mb-3">Week 1-2: ML Fundamentals</h4>
//                           <ul className="space-y-2">
//                             {[
//                               "Supervised vs. unsupervised learning",
//                               "Linear and logistic regression",
//                               "Decision trees and random forests",
//                               "Model evaluation and validation techniques",
//                             ].map((item, index) => (
//                               <li key={index} className="flex items-start gap-2">
//                                 <CheckCircle className="text-orange-600 h-5 w-5 flex-shrink-0 mt-0.5" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div className="bg-orange-50 p-4 sm:p-6 rounded-xl border border-orange-100">
//                           <h4 className="font-bold text-lg sm:text-xl mb-3">
//                             Week 3-4: Feature Engineering & Selection
//                           </h4>
//                           <ul className="space-y-2">
//                             {[
//                               "Data preprocessing and normalization",
//                               "Feature extraction and transformation",
//                               "Dimensionality reduction (PCA, t-SNE)",
//                               "Feature importance and selection methods",
//                             ].map((item, index) => (
//                               <li key={index} className="flex items-start gap-2">
//                                 <CheckCircle className="text-orange-600 h-5 w-5 flex-shrink-0 mt-0.5" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mb-12 relative">
//                     <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-600 to-red-500 border-4 border-white z-10"></div>
//                     <div className="ml-10 sm:ml-16">
//                       <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
//                         Module 2: Deep Learning & Neural Networks
//                       </h3>
//                       <div className="space-y-4">
//                         <div className="bg-orange-50 p-4 sm:p-6 rounded-xl border border-orange-100">
//                           <h4 className="font-bold text-lg sm:text-xl mb-3">Week 5-7: Neural Network Fundamentals</h4>
//                           <ul className="space-y-2">
//                             {[
//                               "Perceptrons and multilayer networks",
//                               "Activation functions and backpropagation",
//                               "Gradient descent and optimization algorithms",
//                               "Building neural networks with PyTorch and TensorFlow",
//                             ].map((item, index) => (
//                               <li key={index} className="flex items-start gap-2">
//                                 <CheckCircle className="text-orange-600 h-5 w-5 flex-shrink-0 mt-0.5" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div className="bg-orange-50 p-4 sm:p-6 rounded-xl border border-orange-100">
//                           <h4 className="font-bold text-lg sm:text-xl mb-3">
//                             Week 8-10: Advanced Neural Architectures
//                           </h4>
//                           <ul className="space-y-2">
//                             {[
//                               "Convolutional Neural Networks (CNNs)",
//                               "Recurrent Neural Networks (RNNs) and LSTMs",
//                               "Generative Adversarial Networks (GANs)",
//                               "Transfer learning and fine-tuning",
//                             ].map((item, index) => (
//                               <li key={index} className="flex items-start gap-2">
//                                 <CheckCircle className="text-orange-600 h-5 w-5 flex-shrink-0 mt-0.5" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mb-12 relative">
//                     <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-600 to-red-500 border-4 border-white z-10"></div>
//                     <div className="ml-10 sm:ml-16">
//                       <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Module 3: Computer Vision & NLP</h3>
//                       <div className="space-y-4">
//                         <div className="bg-orange-50 p-4 sm:p-6 rounded-xl border border-orange-100">
//                           <h4 className="font-bold text-lg sm:text-xl mb-3">
//                             Week 11-13: Computer Vision Applications
//                           </h4>
//                           <ul className="space-y-2">
//                             {[
//                               "Image classification and object detection",
//                               "Semantic segmentation",
//                               "Face recognition and analysis",
//                               "Vision transformers and YOLO architectures",
//                             ].map((item, index) => (
//                               <li key={index} className="flex items-start gap-2">
//                                 <CheckCircle className="text-orange-600 h-5 w-5 flex-shrink-0 mt-0.5" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div className="bg-orange-50 p-4 sm:p-6 rounded-xl border border-orange-100">
//                           <h4 className="font-bold text-lg sm:text-xl mb-3">Week 14-16: Natural Language Processing</h4>
//                           <ul className="space-y-2">
//                             {[
//                               "Text preprocessing and word embeddings",
//                               "Sentiment analysis and text classification",
//                               "Transformer models (BERT, GPT)",
//                               "Building conversational AI and chatbots",
//                             ].map((item, index) => (
//                               <li key={index} className="flex items-start gap-2">
//                                 <CheckCircle className="text-orange-600 h-5 w-5 flex-shrink-0 mt-0.5" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="relative">
//                     <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-600 to-red-500 border-4 border-white z-10"></div>
//                     <div className="ml-10 sm:ml-16">
//                       <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Module 4: Advanced AI & Deployment</h3>
//                       <div className="space-y-4">
//                         <div className="bg-orange-50 p-4 sm:p-6 rounded-xl border border-orange-100">
//                           <h4 className="font-bold text-lg sm:text-xl mb-3">Week 17-18: Reinforcement Learning</h4>
//                           <ul className="space-y-2">
//                             {[
//                               "Markov decision processes",
//                               "Q-learning and policy gradients",
//                               "Deep reinforcement learning",
//                               "Multi-agent systems",
//                             ].map((item, index) => (
//                               <li key={index} className="flex items-start gap-2">
//                                 <CheckCircle className="text-orange-600 h-5 w-5 flex-shrink-0 mt-0.5" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div className="bg-orange-50 p-4 sm:p-6 rounded-xl border border-orange-100">
//                           <h4 className="font-bold text-lg sm:text-xl mb-3">Week 19-20: MLOps & Production AI</h4>
//                           <ul className="space-y-2">
//                             {[
//                               "Model deployment and serving",
//                               "Monitoring and maintaining AI systems",
//                               "Scaling AI applications",
//                               "Capstone project implementation",
//                             ].map((item, index) => (
//                               <li key={index} className="flex items-start gap-2">
//                                 <CheckCircle className="text-orange-600 h-5 w-5 flex-shrink-0 mt-0.5" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "projects" && (
//               <div id="projects">
//                 <h2 className="text-2xl sm:text-3xl font-bold mb-8">Projects You'll Build</h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//                   <div className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group transform hover:-translate-y-2 duration-300">
//                     <div className="h-40 sm:h-48 bg-gradient-to-r from-orange-600 to-red-500 relative overflow-hidden">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <Monitor
//                           size={60}
//                           className="text-white/80 group-hover:scale-110 transition-transform duration-300"
//                         />
//                       </div>
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                         <h3 className="text-lg sm:text-xl font-bold text-white">Intelligent Image Classifier</h3>
//                       </div>
//                     </div>
//                     <div className="p-4 sm:p-6">
//                       <p className="text-gray-700 mb-4">
//                         Build a deep learning model that can classify images across multiple categories with high
//                         accuracy, using transfer learning and fine-tuning techniques.
//                       </p>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">CNN</span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Transfer Learning
//                         </span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">PyTorch</span>
//                       </div>
//                       <Link
//                         to="/projects"
//                         className="text-orange-600 font-medium flex items-center gap-1 group-hover:text-red-500 transition-colors"
//                       >
//                         Learn more <ChevronRight className="h-4 w-4" />
//                       </Link>
//                     </div>
//                   </div>

//                   <div className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group transform hover:-translate-y-2 duration-300">
//                     <div className="h-40 sm:h-48 bg-gradient-to-r from-orange-600 to-red-500 relative overflow-hidden">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <MessageSquare
//                           size={60}
//                           className="text-white/80 group-hover:scale-110 transition-transform duration-300"
//                         />
//                       </div>
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                         <h3 className="text-lg sm:text-xl font-bold text-white">Sentiment Analysis Engine</h3>
//                       </div>
//                     </div>
//                     <div className="p-4 sm:p-6">
//                       <p className="text-gray-700 mb-4">
//                         Create an NLP system that analyzes sentiment in text data from social media, reviews, or
//                         customer feedback with high accuracy using transformer models.
//                       </p>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">BERT</span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Transformers
//                         </span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Hugging Face
//                         </span>
//                       </div>
//                       <Link
//                         to="/projects"
//                         className="text-orange-600 font-medium flex items-center gap-1 group-hover:text-red-500 transition-colors"
//                       >
//                         Learn more <ChevronRight className="h-4 w-4" />
//                       </Link>
//                     </div>
//                   </div>

//                   <div className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group transform hover:-translate-y-2 duration-300">
//                     <div className="h-40 sm:h-48 bg-gradient-to-r from-orange-600 to-red-500 relative overflow-hidden">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <Layers
//                           size={60}
//                           className="text-white/80 group-hover:scale-110 transition-transform duration-300"
//                         />
//                       </div>
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                         <h3 className="text-lg sm:text-xl font-bold text-white">Object Detection System</h3>
//                       </div>
//                     </div>
//                     <div className="p-4 sm:p-6">
//                       <p className="text-gray-700 mb-4">
//                         Develop a real-time object detection system that can identify and track multiple objects in
//                         video streams using state-of-the-art architectures.
//                       </p>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">YOLO</span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Computer Vision
//                         </span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">OpenCV</span>
//                       </div>
//                       <Link
//                         to="/projects"
//                         className="text-orange-600 font-medium flex items-center gap-1 group-hover:text-red-500 transition-colors"
//                       >
//                         Learn more <ChevronRight className="h-4 w-4" />
//                       </Link>
//                     </div>
//                   </div>

//                   <div className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group transform hover:-translate-y-2 duration-300">
//                     <div className="h-40 sm:h-48 bg-gradient-to-r from-orange-600 to-red-500 relative overflow-hidden">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <Sparkles
//                           size={60}
//                           className="text-white/80 group-hover:scale-110 transition-transform duration-300"
//                         />
//                       </div>
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                         <h3 className="text-lg sm:text-xl font-bold text-white">Generative AI Art Creator</h3>
//                       </div>
//                     </div>
//                     <div className="p-4 sm:p-6">
//                       <p className="text-gray-700 mb-4">
//                         Build a generative model that can create original artwork, music, or text based on learned
//                         patterns from existing creative works.
//                       </p>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">GANs</span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Diffusion Models
//                         </span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Stable Diffusion
//                         </span>
//                       </div>
//                       <Link
//                         to="/projects"
//                         className="text-orange-600 font-medium flex items-center gap-1 group-hover:text-red-500 transition-colors"
//                       >
//                         Learn more <ChevronRight className="h-4 w-4" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "instructors" && (
//               <div id="instructors">
//                 <h2 className="text-2xl sm:text-3xl font-bold mb-8">Meet Your Instructors</h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//                   <div className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300">
//                     <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-r from-orange-600 to-red-500 relative">
//                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
//                         <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white overflow-hidden bg-white">
//                           <img
//                             src="/placeholder.svg?height=100&width=100"
//                             alt="Dr. Emily Zhang"
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-4 sm:p-6 pt-12 sm:pt-16 text-center">
//                       <h3 className="text-xl font-bold">Dr. Emily Zhang</h3>
//                       <p className="text-orange-600 mb-4">AI Research Scientist</p>
//                       <p className="text-gray-700 mb-4">
//                         Ph.D. in Machine Learning with 8+ years of experience. Previously led AI research teams at
//                         Google Brain and DeepMind.
//                       </p>
//                       <div className="flex justify-center gap-3 flex-wrap">
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Deep Learning
//                         </span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Computer Vision
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300">
//                     <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-r from-orange-600 to-red-500 relative">
//                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
//                         <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white overflow-hidden bg-white">
//                           <img
//                             src="/placeholder.svg?height=100&width=100"
//                             alt="Alex Ramirez"
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-4 sm:p-6 pt-12 sm:pt-16 text-center">
//                       <h3 className="text-xl font-bold">Alex Ramirez</h3>
//                       <p className="text-orange-600 mb-4">NLP Specialist</p>
//                       <p className="text-gray-700 mb-4">
//                         10 years of experience in natural language processing and large language models. Former lead at
//                         OpenAI.
//                       </p>
//                       <div className="flex justify-center gap-3 flex-wrap">
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">NLP</span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                           Transformers
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300">
//                     <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-r from-orange-600 to-red-500 relative">
//                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
//                         <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white overflow-hidden bg-white">
//                           <img
//                             src="/placeholder.svg?height=100&width=100"
//                             alt="Dr. Marcus Johnson"
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-4 sm:p-6 pt-12 sm:pt-16 text-center">
//                       <h3 className="text-xl font-bold">Dr. Marcus Johnson</h3>
//                       <p className="text-orange-600 mb-4">MLOps Engineer</p>
//                       <p className="text-gray-700 mb-4">
//                         Expert in deploying and scaling AI systems in production with 9 years of experience at AWS and
//                         Netflix.
//                       </p>
//                       <div className="flex justify-center gap-3 flex-wrap">
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">MLOps</span>
//                         <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">Cloud AI</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "careers" && (
//               <div>
//                 <h2 className="text-2xl sm:text-3xl font-bold mb-8">Career Opportunities</h2>

//                 <div className="mb-10">
//                   <h3 className="text-xl sm:text-2xl font-bold mb-6">Job Roles After Completion</h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//                     <div className="bg-white border border-orange-100 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300">
//                       <div className="flex items-center mb-4">
//                         <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-600 to-red-500 rounded-xl flex items-center justify-center text-white mr-4">
//                           <Code size={20} />
//                         </div>
//                         <div>
//                           <h4 className="font-bold text-lg sm:text-xl">Machine Learning Engineer</h4>
//                           <p className="text-orange-600">$120,000 - $180,000</p>
//                         </div>
//                       </div>
//                       <p className="text-gray-700">
//                         Design and implement machine learning models and systems for production environments.
//                       </p>
//                     </div>

//                     <div className="bg-white border border-orange-100 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300">
//                       <div className="flex items-center mb-4">
//                         <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-600 to-red-500 rounded-xl flex items-center justify-center text-white mr-4">
//                           <Brain size={20} />
//                         </div>
//                         <div>
//                           <h4 className="font-bold text-lg sm:text-xl">AI Research Scientist</h4>
//                           <p className="text-orange-600">$130,000 - $200,000</p>
//                         </div>
//                       </div>
//                       <p className="text-gray-700">
//                         Conduct cutting-edge research to advance the field of artificial intelligence.
//                       </p>
//                     </div>

//                     <div className="bg-white border border-orange-100 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300">
//                       <div className="flex items-center mb-4">
//                         <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-600 to-red-500 rounded-xl flex items-center justify-center text-white mr-4">
//                           <Monitor size={20} />
//                         </div>
//                         <div>
//                           <h4 className="font-bold text-lg sm:text-xl">Computer Vision Engineer</h4>
//                           <p className="text-orange-600">$125,000 - $190,000</p>
//                         </div>
//                       </div>
//                       <p className="text-gray-700">
//                         Develop systems that can analyze and interpret visual information from the world.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-10">
//                   <h3 className="text-xl sm:text-2xl font-bold mb-6">Industry Demand</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//                     <div className="bg-gradient-to-r from-orange-600 to-red-500 p-6 sm:p-8 rounded-xl text-white transform transition-all duration-300 hover:scale-105">
//                       <div className="flex items-start mb-4">
//                         <BarChart size={36} className="mr-4 flex-shrink-0" />
//                         <div>
//                           <h4 className="text-xl sm:text-2xl font-bold mb-2">71% Growth</h4>
//                           <p className="text-white/90">
//                             AI and ML specialists are among the most sought-after professionals globally, with a 71%
//                             growth in job postings over the past two years.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="bg-gradient-to-r from-orange-600 to-red-500 p-6 sm:p-8 rounded-xl text-white transform transition-all duration-300 hover:scale-105">
//                       <div className="flex items-start mb-4">
//                         <Globe size={36} className="mr-4 flex-shrink-0" />
//                         <div>
//                           <h4 className="text-xl sm:text-2xl font-bold mb-2">Cross-Industry Demand</h4>
//                           <p className="text-white/90">
//                             Every industry from healthcare and finance to retail and manufacturing is investing heavily
//                             in AI capabilities.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <h3 className="text-xl sm:text-2xl font-bold mb-6">Career Support</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//                   <div className="bg-white border border-orange-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300">
//                     <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
//                       <Briefcase className="text-orange-600" size={28} />
//                     </div>
//                     <h4 className="font-bold text-lg sm:text-xl mb-2">AI Portfolio Development</h4>
//                     <p className="text-gray-700">
//                       Build a professional portfolio of AI projects that demonstrate your capabilities to employers.
//                     </p>
//                   </div>

//                   <div className="bg-white border border-orange-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300">
//                     <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
//                       <GraduationCap className="text-orange-600" size={28} />
//                     </div>
//                     <h4 className="font-bold text-lg sm:text-xl mb-2">Technical Interview Preparation</h4>
//                     <p className="text-gray-700">Practice AI-specific technical interviews with industry veterans.</p>
//                   </div>

//                   <div className="bg-white border border-orange-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300">
//                     <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
//                       <Users className="text-orange-600" size={28} />
//                     </div>
//                     <h4 className="font-bold text-lg sm:text-xl mb-2">AI Industry Networking</h4>
//                     <p className="text-gray-700">
//                       Connect with our network of AI companies and hiring partners actively seeking talent.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <div
//         className="bg-gradient-to-r from-orange-600 to-red-500 py-16 sm:py-20"
//         id="testimonials"
//         ref={testimonialsRef}
//       >
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">What Our Students Say</h2>
//             <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
//               Hear from our graduates who have transformed their careers with our AI & ML program.
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               <div
//                 className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 animate-on-scroll"
//                 style={{ "--animate-delay": "0.2s" }}
//               >
//                 <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
//                   <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-orange-100">
//                     <img
//                       src={testimonials[activeTestimonial].image || "/placeholder.svg"}
//                       alt={testimonials[activeTestimonial].name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <div className="flex mb-4">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className="text-yellow-400 h-5 w-5 sm:h-6 sm:w-6 fill-current" />
//                       ))}
//                     </div>
//                     <p className="text-gray-700 text-base sm:text-lg mb-6 italic">
//                       "{testimonials[activeTestimonial].text}"
//                     </p>
//                     <div>
//                       <h4 className="font-bold text-lg sm:text-xl">{testimonials[activeTestimonial].name}</h4>
//                       <p className="text-orange-600">{testimonials[activeTestimonial].role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-center mt-6 sm:mt-8 gap-2">
//                 {testimonials.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveTestimonial(index)}
//                     className={`w-3 h-3 rounded-full transition-all ${
//                       activeTestimonial === index ? "bg-white w-8" : "bg-white/50"
//                     }`}
//                     aria-label={`View testimonial ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Program Stats Section */}
//       <div className="py-16 sm:py-20 bg-[#fceedb]">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4">Program Impact</h2>
//             <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
//               Our AI & ML program has helped hundreds of students transform their careers and make an impact in the
//               field.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
//             <div
//               className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 animate-on-scroll"
//               style={{ "--animate-delay": "0.1s" }}
//             >
//               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
//                 <Users size={24} sm:size={32} />
//               </div>
//               <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-orange-600">1,200+</h3>
//               <p className="text-gray-700 font-medium">Graduates</p>
//             </div>
//             <div
//               className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 animate-on-scroll"
//               style={{ "--animate-delay": "0.2s" }}
//             >
//               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
//                 <Briefcase size={24} sm:size={32} />
//               </div>
//               <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-orange-600">94%</h3>
//               <p className="text-gray-700 font-medium">Job Placement Rate</p>
//             </div>
//             <div
//               className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 animate-on-scroll"
//               style={{ "--animate-delay": "0.3s" }}
//             >
//               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
//                 <PieChart size={24} sm:size={32} />
//               </div>
//               <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-orange-600">$145K</h3>
//               <p className="text-gray-700 font-medium">Average Starting Salary</p>
//             </div>
//             <div
//               className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 animate-on-scroll"
//               style={{ "--animate-delay": "0.4s" }}
//             >
//               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
//                 <Globe size={24} sm:size={32} />
//               </div>
//               <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-orange-600">40+</h3>
//               <p className="text-gray-700 font-medium">Hiring Partners</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="container mx-auto px-4 py-16 sm:py-20">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 animate-on-scroll">
//           Frequently Asked Questions
//         </h2>

//         <div className="max-w-3xl mx-auto">
//           {[
//             {
//               question: "Do I need a background in AI or machine learning?",
//               answer:
//                 "No prior AI experience is required, but basic Python programming skills and understanding of fundamental mathematics (statistics and linear algebra) will help you succeed in the course.",
//             },
//             {
//               question: "What hardware requirements are needed for this course?",
//               answer:
//                 "You'll need a computer with at least 16GB RAM and a dedicated GPU (NVIDIA preferred) for deep learning tasks. Alternatively, we provide cloud-based GPU resources for students without suitable hardware.",
//             },
//             {
//               question: "How is the course structured between theory and practice?",
//               answer:
//                 "The course follows an 80/20 approach with 80% hands-on practical implementation and 20% theoretical foundations. You'll be building real AI models from the first week.",
//             },
//             {
//               question: "Will I be able to build my own AI applications after this course?",
//               answer:
//                 "By the end of the course, you'll have the skills to conceptualize, design, implement, and deploy AI applications across various domains including computer vision, NLP, and generative AI.",
//             },
//             {
//               question: "How does this course stay current with rapidly evolving AI technologies?",
//               answer:
//                 "Our curriculum is continuously updated to reflect the latest advancements in AI. We incorporate new research papers, techniques, and tools as they emerge in the field.",
//             },
//             {
//               question: "What kind of support is provided during and after the course?",
//               answer:
//                 "During the course, you'll have access to instructor office hours, peer discussion forums, and teaching assistants. After completion, you'll join our alumni network with continued access to career services and community resources.",
//             },
//           ].map((faq, index) => (
//             <div
//               key={index}
//               className="mb-4 sm:mb-6 animate-on-scroll"
//               style={{ "--animate-delay": `${0.1 * index}s` }}
//             >
//               <button
//                 className="flex justify-between items-center w-full p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg focus:outline-none transition-all"
//                 onClick={() => toggleFaq(index)}
//               >
//                 <span className="font-bold text-lg sm:text-xl text-left">{faq.question}</span>
//                 <div
//                   className={`w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center transition-transform duration-300 ${activeFaq === index ? "rotate-180" : ""}`}
//                 >
//                   <ChevronDown size={20} className="text-orange-600" />
//                 </div>
//               </button>

//               <div
//                 className={`mt-2 overflow-hidden transition-all duration-300 ${
//                   activeFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <div className="p-4 sm:p-6 bg-orange-50 rounded-xl border border-orange-100">
//                   <p className="text-gray-700 text-base sm:text-lg">{faq.answer}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-orange-600 to-red-500 text-white py-16 sm:py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">
//             Ready to Master AI & Machine Learning?
//           </h2>
//           <p
//             className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto animate-on-scroll"
//             style={{ "--animate-delay": "0.1s" }}
//           >
//             Join our next cohort and transform your career with cutting-edge AI skills that are reshaping industries
//             worldwide.
//           </p>

//           <div
//             className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 animate-on-scroll"
//             style={{ "--animate-delay": "0.2s" }}
//           >
//             <Link to="/contact">
//               <button className="w-full sm:w-auto bg-white hover:bg-yellow-300 text-orange-600 font-bold px-8 py-4 sm:px-10 sm:py-5 rounded-full text-lg transition-all shadow-lg flex items-center justify-center gap-2">
//                 <Zap className="h-5 w-5" /> Enroll Now
//               </button>
//             </Link>
//             <Link to="/contact">
//               <button className="w-full sm:w-auto border-2 border-white hover:bg-white/10 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
//                 <BookOpen className="h-5 w-5" /> Download Course Brochure
//               </button>
//             </Link>
//           </div>

//           <div
//             className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 animate-on-scroll"
//             style={{ "--animate-delay": "0.3s" }}
//           >
//             <div className="flex items-center gap-3">
//               <Clock className="h-6 w-6" />
//               <span className="text-lg">Next Cohort: June 15, 2025</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <Users className="h-6 w-6" />
//               <span className="text-lg">Limited to 30 Students</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <Award className="h-6 w-6" />
//               <span className="text-lg">Scholarships Available</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tech Stack Section */}
//       <div className="bg-[#fceedb] py-16 sm:py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 animate-on-scroll">
//             AI Technologies You'll Master
//           </h2>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
//             {[
//               { icon: <Brain size={36} />, name: "TensorFlow" },
//               { icon: <Layers size={36} />, name: "PyTorch" },
//               { icon: <Bot size={36} />, name: "Transformers" },
//               { icon: <Monitor size={36} />, name: "Computer Vision" },
//               { icon: <LineChart size={36} />, name: "Scikit-learn" },
//               { icon: <Cpu size={36} />, name: "MLOps Tools" },
//             ].map((tech, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center group transform hover:-translate-y-2 duration-300 animate-on-scroll"
//                 style={{ "--animate-delay": `${0.1 * index}s` }}
//               >
//                 <div className="h-16 w-16 flex items-center justify-center mb-4 text-orange-600 group-hover:text-red-500 transition-colors">
//                   {tech.icon}
//                 </div>
//                 <h3 className="font-bold text-center">{tech.name}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12 sm:py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                 <Brain className="text-orange-500 h-8 w-8" />
//                 <span className="font-bold text-xl">AI Masters</span>
//               </div>
//               <p className="text-gray-400 mb-6">
//                 Transforming careers through cutting-edge AI education and practical, hands-on learning.
//               </p>
//               <div className="flex gap-4">
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
//                 >
//                   <span className="sr-only">Twitter</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
//                 >
//                   <span className="sr-only">LinkedIn</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                     <rect x="2" y="9" width="4" height="12"></rect>
//                     <circle cx="4" cy="4" r="2"></circle>
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
//                 >
//                   <span className="sr-only">YouTube</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
//                     <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg mb-4 sm:mb-6">Quick Links</h3>
//               <ul className="space-y-3">
//                 <li>
//                   <button
//                     onClick={() => scrollToSection("overview")}
//                     className="text-gray-400 hover:text-orange-500 transition-colors"
//                   >
//                     Overview
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => scrollToSection("curriculum")}
//                     className="text-gray-400 hover:text-orange-500 transition-colors"
//                   >
//                     Curriculum
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => scrollToSection("projects")}
//                     className="text-gray-400 hover:text-orange-500 transition-colors"
//                   >
//                     Projects
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => scrollToSection("instructors")}
//                     className="text-gray-400 hover:text-orange-500 transition-colors"
//                   >
//                     Instructors
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => scrollToSection("testimonials")}
//                     className="text-gray-400 hover:text-orange-500 transition-colors"
//                   >
//                     Testimonials
//                   </button>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg mb-4 sm:mb-6">Resources</h3>
//               <ul className="space-y-3">
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
//                     Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
//                     AI Research
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
//                     Free Tutorials
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
//                     AI Career Guide
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
//                     Community
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg mb-4 sm:mb-6">Contact Us</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-center gap-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="text-orange-500"
//                   >
//                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//                   </svg>
//                   <span className="text-gray-400">(123) 456-7890</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="text-orange-500"
//                   >
//                     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
//                     <polyline points="22,6 12,13 2,6"></polyline>
//                   </svg>
//                   <span className="text-gray-400">info@aimasters.edu</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="text-orange-500"
//                   >
//                     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                     <circle cx="12" cy="10" r="3"></circle>
//                   </svg>
//                   <span className="text-gray-400">123 AI Campus, Tech City, CA 94103</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-500">
//             <p>© 2025 AI Masters. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>

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
        
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
        
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   )
// }
