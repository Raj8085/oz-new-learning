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
  FileCode,
  Cpu,
  GitBranch,
} from "lucide-react"
import { Link } from "react-router-dom"



export default function DSACourse() {
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
            <div className="md:w-1/2 mb-8 md:mb-0 md:mt-44">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Structures & Algorithms with C/C++</h1>
              <p className="text-xl mb-6">
                Master the foundations of computer science through efficient algorithms and data structures implementation in C and C++
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Arrays</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Linked Lists</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Trees</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Graphs</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Dynamic Programming</span>
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
                  <Code size={120} strokeWidth={1} />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center">
                  <FileCode size={36} strokeWidth={1} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                  <Cpu size={36} strokeWidth={1} />
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
            <p className="text-gray-700">12 weeks (3 months)</p>
            <p className="text-gray-700">8 hours per week</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <BookOpen className="text-blue-600 mr-3" size={24} />
              <h3 className="text-lg font-bold">Prerequisites</h3>
            </div>
            <p className="text-gray-700">Basic programming knowledge</p>
            <p className="text-gray-700">Familiarity with C/C++ syntax</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Award className="text-blue-600 mr-3" size={24} />
              <h3 className="text-lg font-bold">Certification</h3>
            </div>
            <p className="text-gray-700">Industry-recognized certification</p>
            <p className="text-gray-700">Verified coding portfolio</p>
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
          <button
            onClick={() => setActiveTab("instructors")}
            className={`px-4 py-2 font-medium rounded-lg whitespace-nowrap ${
              activeTab === "instructors" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            Instructors
          </button>
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
                Our comprehensive Data Structures and Algorithms with C/C++ course is designed to build a strong foundation in computer science fundamentals. You'll learn how to implement efficient data structures, design optimized algorithms, and solve complex computational problems using C and C++ languages.
              </p>

              <h3 className="text-xl font-bold mb-3">Why C/C++ for DSA?</h3>
              <p className="text-gray-700 mb-6">
                C and C++ are powerful languages that provide low-level memory access, high performance, and complete control over system resources. Learning DSA with C/C++ offers several distinct advantages:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Cpu size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Memory Management</h4>
                    <p className="text-gray-700">Direct control over memory allocation and deallocation for optimal resource usage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <FileCode size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Performance Optimization</h4>
                    <p className="text-gray-700">Ability to write highly efficient code with minimal overhead</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Code size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Industry Standard</h4>
                    <p className="text-gray-700">Widely used in competitive programming, interviews, and systems development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <GitBranch size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Foundation for Other Languages</h4>
                    <p className="text-gray-700">Transferable concepts that apply to virtually all programming languages</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">Course Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lightbulb size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-bold">Hands-on Practice</h4>
                  </div>
                  <p className="text-gray-700">100+ coding challenges and implementation exercises</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-bold">Code Reviews</h4>
                  </div>
                  <p className="text-gray-700">Weekly personalized feedback on your implementations</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Award size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-bold">Interview Preparation</h4>
                  </div>
                  <p className="text-gray-700">Mock technical interviews with industry experts</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "curriculum" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Curriculum</h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 1: C/C++ Fundamentals for DSA</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 1-2: C/C++ Refresher</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Memory management in C/C++ (stack vs heap)</li>
                      <li>Pointers and references</li>
                      <li>Dynamic memory allocation (new/delete, malloc/free)</li>
                      <li>STL containers and algorithms</li>
                      <li>Object-oriented programming in C++</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 3: Algorithm Analysis</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Time and space complexity analysis</li>
                      <li>Big O, Big Omega, and Big Theta notations</li>
                      <li>Amortized analysis</li>
                      <li>Performance benchmarking in C++</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 2: Linear Data Structures</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 4: Arrays and Strings</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Static and dynamic arrays</li>
                      <li>Multi-dimensional arrays</li>
                      <li>String manipulation algorithms</li>
                      <li>Pattern matching algorithms</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 5: Linked Lists</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Singly and doubly linked lists</li>
                      <li>Circular linked lists</li>
                      <li>Skip lists</li>
                      <li>Memory-efficient implementations</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 6: Stacks and Queues</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Stack implementations and applications</li>
                      <li>Queue variations (circular, priority, deque)</li>
                      <li>Expression evaluation and parsing</li>
                      <li>Custom memory allocators</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 3: Non-Linear Data Structures</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 7: Trees</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Binary trees and binary search trees</li>
                      <li>AVL trees and Red-Black trees</li>
                      <li>B-trees and B+ trees</li>
                      <li>Trie and suffix trees</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 8: Graphs</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Graph representations (adjacency list/matrix)</li>
                      <li>Graph traversals (DFS, BFS)</li>
                      <li>Shortest path algorithms (Dijkstra's, Bellman-Ford)</li>
                      <li>Minimum spanning trees (Prim's, Kruskal's)</li>
                      <li>Network flow algorithms</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 9: Hash Tables</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Hashing functions and collision resolution</li>
                      <li>Open addressing vs. chaining</li>
                      <li>Perfect hashing</li>
                      <li>Concurrent hash maps</li>
                      <li>Custom hash implementations in C++</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Module 4: Advanced Algorithms</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 10: Sorting and Searching</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Advanced sorting algorithms (quicksort, mergesort, heapsort)</li>
                      <li>Hybrid sorting algorithms</li>
                      <li>Binary search and its variations</li>
                      <li>External sorting for large datasets</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 11: Dynamic Programming</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Memoization and tabulation techniques</li>
                      <li>Classic DP problems (knapsack, LCS, etc.)</li>
                      <li>State compression techniques</li>
                      <li>Memory-efficient DP implementations</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 12: Advanced Topics and Interview Preparation</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Bit manipulation techniques</li>
                      <li>Greedy algorithms</li>
                      <li>Competitive programming strategies</li>
                      <li>Final project implementation</li>
                      <li>Mock interview practice</li>
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
                  <h3 className="text-xl font-bold mb-3">Custom STL-like Container Library</h3>
                  <p className="text-gray-700 mb-4">
                    Implement your own version of standard template library containers with optimized performance characteristics and memory management.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">C++</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Templates</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Memory Management</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Graph Algorithms Visualization</h3>
                  <p className="text-gray-700 mb-4">
                    Create a tool that visualizes various graph algorithms like pathfinding, spanning trees, and network flow with step-by-step animation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">C++</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Graph Theory</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">GUI</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Memory-Efficient Database Engine</h3>
                  <p className="text-gray-700 mb-4">
                    Build a simple in-memory database with efficient indexing structures, query processing, and transaction support using advanced data structures.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">C++</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">B+ Trees</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Indexing</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Compression Algorithm Implementation</h3>
                  <p className="text-gray-700 mb-4">
                    Implement various lossless compression algorithms (Huffman, LZ77, etc.) with comparisons of compression ratios and performance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">C</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Binary Operations</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Trees</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">High-Performance String Processor</h3>
                  <p className="text-gray-700 mb-4">
                    Develop a system that efficiently processes large text files using advanced string algorithms and optimized data structures.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">C++</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">String Algorithms</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">File Processing</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Competitive Programming Portfolio</h3>
                  <p className="text-gray-700 mb-4">
                    Create a comprehensive collection of optimized solutions to challenging algorithmic problems commonly found in programming competitions and interviews.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">C++</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Problem Solving</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Optimization</span>
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
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Instructor" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Dr. Robert Chen</h3>
                  <p className="text-blue-600 mb-2">Algorithm Specialist</p>
                  <p className="text-gray-700 mb-4">
                    Former Google engineer with 15+ years of experience in algorithm optimization and systems development.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">C++</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Algorithms</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Instructor" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Prof. Anita Kumar</h3>
                  <p className="text-blue-600 mb-2">Data Structures Expert</p>
                  <p className="text-gray-700 mb-4">
                    Computer Science professor with research focus on advanced data structures and memory-efficient algorithms.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">C</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Data Structures</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img src="https://images.pexels.com/photos/2283831/pexels-photo-2283831.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Instructor" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Mike Zhang</h3>
                  <p className="text-blue-600 mb-2">Competitive Programming Champion</p>
                  <p className="text-gray-700 mb-4">
                    Four-time ICPC world finalist and technical interviewer at major tech companies with expertise in problem-solving.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">C++</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Competitions</span>
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
                    <h4 className="font-bold text-lg mb-2">Software Engineer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $90,000 - $140,000</p>
                    <p className="text-gray-700">
                      Develop high-performance software systems with strong algorithm and data structure foundations.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Systems Programmer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $100,000 - $150,000</p>
                    <p className="text-gray-700">Create low-level software components that interact directly with hardware and operating systems.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Game Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $85,000 - $130,000</p>
                    <p className="text-gray-700">Build efficient game engines and systems requiring high performance and memory optimization.</p>
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
                      Proficiency in C/C++ with strong DSA knowledge remains in high demand across industries. These skills are <span className="font-bold">foundational requirements</span> for roles in systems programming, embedded systems, game development, and high-frequency trading.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Lightbulb size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Nearly all technical interviews at top tech companies assess DSA skills, making this knowledge essential for candidates aiming for positions at companies like Google, Facebook, Microsoft, and Amazon.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Career Benefits of DSA with C/C++</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Users size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Technical Interview Success</h4>
                    <p className="text-gray-700">
                      Excel in coding interviews that focus heavily on algorithm design and implementation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Users size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Performance Optimization Skills</h4>
                    <p className="text-gray-700">Become the go-to developer for solving complex performance bottlenecks.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Users size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Cross-Domain Versatility</h4>
                    <p className="text-gray-700">
                      Apply your skills across diverse domains from embedded systems to cloud infrastructure.
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
                  <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">David Park</h4>
                  <p className="text-gray-600 text-sm">Software Engineer at NVIDIA</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "This course was instrumental in helping me secure my dream job. The deep dive into algorithms and C++ optimization techniques gave me a competitive edge in technical interviews."
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
                  <img src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Systems Engineer at Intel</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The memory management techniques and optimization strategies I learned have been invaluable in my role developing performance-critical systems. Worth every minute invested!"
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
                  <img src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Alex Rivera</h4>
                  <p className="text-gray-600 text-sm">Game Engine Developer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "As a game developer, the advanced data structures section was particularly useful. I implemented a custom spatial partitioning system that significantly improved our game's performance."
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
              question: "Do I need prior C/C++ experience?",
              answer:
                "Basic familiarity with C/C++ syntax is recommended. The first module includes a refresher to bring everyone up to speed, but having some programming experience will be beneficial.",
            },
            {
              question: "How difficult is this course compared to other programming courses?",
              answer:
                "This course is more rigorous than typical web development courses as it focuses on computer science fundamentals and low-level implementation details. However, our step-by-step approach makes complex concepts accessible to dedicated learners.",
            },
            {
              question: "Will this help me in programming competitions?",
              answer:
                "Absolutely! The course covers classic algorithmic problems, optimization techniques, and problem-solving strategies specifically used in competitive programming. One of our instructors is a competitive programming champion.",
            },
            {
              question: "Is C++ better than modern languages for learning DSA?",
              answer:
                "C++ offers unique advantages for learning DSA, including direct memory management, high performance, and the ability to implement data structures from scratch. These fundamentals transfer well to other languages, giving you deeper understanding than if you only learned in higher-level languages.",
            },
            {
              question: "Can this course help me prepare for technical interviews?",
              answer:
                "Yes! Technical interviews at top companies heavily focus on DSA concepts. We include mock interviews and practice problems specifically designed to prepare you for the types of algorithmic challenges encountered in coding interviews.",
            },
            {
              question: "What development environment will we use?",
              answer:
                "We'll be using standard development tools including GCC/G++ compilers, Visual Studio Code, and debugging tools. Setup instructions are provided for Windows, macOS, and Linux to ensure all students can follow along regardless of operating system.",
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
          <h2 className="text-3xl font-bold mb-4">Ready to Master Data Structures & Algorithms with C/C++?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our intensive course and build the foundation for a successful career in software development.
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
                  <p className="text-gray-700">August 15, 2025</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Users size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold">Limited Seats</h4>
                  <p className="text-gray-700">Only 25 students per batch</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Award size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold">Early Bird Discount</h4>
                  <p className="text-gray-700">15% off until July 30, 2025</p>
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
          <h2 className="text-3xl font-bold text-center mb-12">Core Concepts You&apos;ll Master</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Code size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">C/C++</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Cpu size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Memory Management</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Database size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Data Structures</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <GitBranch size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Algorithms</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <FileCode size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Problem Solving</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Users size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Interview Prep</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}