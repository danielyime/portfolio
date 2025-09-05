import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 ">
        <div className="max-w-6xl mx-auto px-4 py-4 flex-auto justify-between items-center">
        {/* <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            <i className="fas fa-arrow-left mr-2"></i>
            Back Home
        </a> */}
        <HashLink to="/#projects">
            <p className="text-gray-600 hover:text-gray-900 transition-colors hover:underline font-bold"><i className="fas fa-arrow-left mr-2"></i>Go Back</p>
        </HashLink>
        </div>
      </nav> 

      {/* Main Content */}
        <div className="max-w-4xl mx-auto pt-16 flex flex-col gap-24">
          {/* Intro Section */}
          <section id="introduction" className="bg-gradient-to-br from-orange-400 to-pink-600 rounded-xl p-8 text-white shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">About my work</h2>
            <p className="text-white mb-4">
              I'm always looking for ways to improve the user experience, think empathetically, and implement accessible solutions throughout all my work. 
            </p>
          </section>

          {/* Content Section */}
            <section className="bg-white rounded-xl p-8 text-black shadow-lg" id="project1">
                <h2 className="text-2xl font-semibold mb-4 " >Project 1</h2>
                <p className="text-gray-600 mb-4">
                WIP
                </p>
            </section>

            <section className="bg-white rounded-xl p-8 text-black shadow-lg" id="project2">
                <h2 className="text-2xl font-semibold mb-4">Project 2</h2>
                <p className="text-gray-600 mb-4">
                WIP
                </p>
            </section>

            <section className="bg-white rounded-xl p-8 text-black shadow-lg" id="project3">
                <h2 className="text-2xl font-semibold mb-4">Project 3</h2>
                <p className="text-gray-600 mb-4">
                WIP
                </p>
            </section>
        </div>
      </div>
  );
};

export default Projects;