import React from 'react';
import { Link } from 'react-router-dom';


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
        <Link to="/">
            <p className="text-gray-600 hover:text-gray-900 transition-colors hover:underline font-bold"><i className="fas fa-arrow-left mr-2"></i>Go Back</p>
        </Link>
        </div>
      </nav> 

      {/* Main Content */}
      <main className="px-4">
        <div className="max-w-4xl mx-auto pt-16">
          <h1 className="text-4xl font-bold text-white mb-6">My Projects</h1>


          {/* Intro Section */}
          <section className="bg-gradient-to-br from-orange-400 to-pink-600 rounded-xl mb-24 p-8 text-white shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">About my work</h2>
            <p className="text-white mb-4">
              I started my career at a small tech startup working in customer support. I became close with the product team, 
              highlighting pain-points and advocating for our users. Eventually, I got the opportunity to start sitting in on Product meetings and really 
            </p>
            <p className="text-white">
              I started my career at a small tech startup working in customer support. I became close with the product team, 
              highlighting pain-points and advocating for our users. 
            </p>
          </section>

          {/* Content Section */}
          <div className="space-y-24">
            <section className="bg-white rounded-xl mb-8 p-8 text-black shadow-lg" id="project1">
                <h2 className="text-2xl font-semibold mb-4">Project 1</h2>
                <p className="text-gray-600 mb-4">
                I started my career at a small tech startup working in customer support. I became close with the product team, 
                highlighting pain-points and advocating for our users. Eventually, I got the opportunity to start sitting in on Product meetings and really 
                </p>
                <p className="text-gray-600">
                I started my career at a small tech startup working in customer support. I became close with the product team, 
                highlighting pain-points and advocating for our users. 
                </p>
            </section>

            <section className="bg-white rounded-xl mb-8 p-8 text-black shadow-lg" id="project2">
                <h2 className="text-2xl font-semibold mb-4">Project 2</h2>
                <p className="text-gray-600 mb-4">
                I started my career at a small tech startup working in customer support. I became close with the product team, 
                highlighting pain-points and advocating for our users. Eventually, I got the opportunity to start sitting in on Product meetings and really 
                </p>
                <p className="text-gray-600">
                I started my career at a small tech startup working in customer support. I became close with the product team, 
                highlighting pain-points and advocating for our users. 
                </p>
            </section>

            <section className="bg-white rounded-xl mb-8 p-8 text-black shadow-lg" id="project3">
                <h2 className="text-2xl font-semibold mb-4">Project 3</h2>
                <p className="text-gray-600 mb-4">
                I started my career at a small tech startup working in customer support. I became close with the product team, 
                highlighting pain-points and advocating for our users. Eventually, I got the opportunity to start sitting in on Product meetings and really 
                </p>
                <p className="text-gray-600">
                I started my career at a small tech startup working in customer support. I became close with the product team, 
                highlighting pain-points and advocating for our users. 
                </p>
            </section>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Projects;