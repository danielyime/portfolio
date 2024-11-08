import React from 'react';
import { Link } from 'react-router-dom';


const Projects = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex-auto justify-between items-center">
        {/* <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            <i className="fas fa-arrow-left mr-2"></i>
            Back Home
        </a> */}
        <Link to="/">
            <span className=""></span> <p className="text-gray-600 hover:text-gray-900 transition-colors hover:underline font-bold"><i className="fas fa-arrow-left mr-2"></i>Go Back</p>
        </Link>
        </div>
      </nav> 

      {/* Main Content */}
      <main className="pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">My Projects</h1>


          {/* Intro Section */}
          <section className="bg-gradient-to-br from-orange-400 to-pink-600 rounded-xl mb-8 p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">About my work</h2>
            <p className="text-white/90">
              My experience lies most in Product Management, helping build and ship features in EdTech and HRTech spaces.
            </p>
          </section>

          {/* Content Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Section Heading</h2>
            <p className="text-gray-600 mb-4">
              Your content goes here. This follows the same design system as your portfolio
              page, using consistent colors, spacing, and typography.
            </p>
          </section>

          
        </div>
      </main>
    </div>
  );
};

export default Projects;