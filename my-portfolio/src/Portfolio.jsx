import React from 'react';
import { Link } from 'react-router-dom';


const Portfolio = () => {
  const projects = [
    { title: "Project 1", image: "/api/placeholder/400/300", id: "project1" },
    { title: "Project 2", image: "/api/placeholder/400/300", id: "project2" },
    { title: "Project 3", image: "/api/placeholder/400/300", id: "project3" }
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#welcome-section" className="text-2xl font-bold text-white hover:animate-wiggle animate-infinite bg-gradient-to-r from-orange-400 to-pink-600 rounded-xl p-2">DY</a>
          <div className="flex gap-8">
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline font-bold">Projects</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline font-bold">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline font-bold">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="welcome-section" className="min-h-screen flex flex-col justify-center items-center px-4 relative animate-fade-down animate-duration-[2000ms]">
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent ">
            Daniel Yi
          </h1>
          <h2 className="text-3xl text-gray-700 font-light">
            Product Manager. Experience Designer.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hi! I've been learning HTML/CSS/JS to strengthen my technical knowledge. I'm using this site to
            experiment and apply what I have been learning.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 opacity-0 intersect-once intersect:animate-fade animate-duration-[3000ms]">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
              to={`/projects#${project.id}`} 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/Projects" className="px-4 py-4 mx-auto block text-center mt-8 ">
            <div className="inline-block shadow hover:shadow-lg bg-orange-500 text-white font-bold px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors transiton-shadows">
              View All
            </div>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">About Me</h2>
          <p className="text-xl text-gray-600">
            Well I have two cats, Teddy and Momo. This is a placeholder for now.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-orange-400 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Let's Connect</h2>
          <div className="flex justify-center gap-8">
            <a 
              href="https://www.linkedin.com/in/danielyidyw/" 
              target="_blank"
              className="text-white hover:text-gray-200 transition-colors text-3xl"
              aria-label="View LinkedIn Profile"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="mailto:mail@danielyi.me"
              className="text-white hover:text-gray-200 transition-colors text-3xl"
              aria-label="Send Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a 
              href="https://www.freecodecamp.org/fcc695deeec-2aa5-4c34-a06f-94702746b2a0"
              target="_blank"
              className="text-white hover:text-gray-200 transition-colors text-3xl"
              aria-label="View Freecodecamp profile"
            >
              <i className="fab fa-free-code-camp"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;