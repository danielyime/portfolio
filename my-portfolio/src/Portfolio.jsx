import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Portfolio = () => {
  const projects = [
    { title: "Project 1", image: "/imgs/P1010732.jpg", id: "project1" },
    { title: "Project 2", image: "/imgs/P1010732.jpg", id: "project2" },
    { title: "Project 3", image: "/imgs/P1010732.jpg", id: "project3" }
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <HashLink to="#welcome-section" className="text-2xl font-bold text-white hover:animate-wiggle animate-infinite bg-gradient-to-r from-orange-400 to-pink-600 rounded-xl p-2">DY</HashLink>
          <div className="flex gap-8">
            <HashLink smooth to="#projects" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline font-bold">Projects</HashLink>
            <HashLink smooth to="#about" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline font-bold">About</HashLink>
            <HashLink smooth to="#contact" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline font-bold">Contact</HashLink>
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
            experiment and apply these skills while showcasing my professional experience in product.
          </p>
          
        </div>
        <div className="w-full flex justify-center items-center absolute bottom-10">
          <HashLink 
            to="#projects" 
            className="bg-orange-500 hover:bg-orange-600 text-white 
                      rounded-full px-6 py-3 shadow-lg hover:shadow-xl 
                      transition-all duration-300 animate-bounce"
          >
            Continue
          </HashLink>
        </div>
        
        {/* <HashLink 
          to="#projects"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 
            bg-orange-500 hover:bg-orange-600 text-white 
            rounded-full p-3 shadow-lg hover:shadow-xl 
            transition-all duration-300 group"
          aria-label="Scroll to Projects"
        >
          <ChevronDownIcon 
            className="w-8 h-8 animate-bounce group-hover:animate-none" 
            strokeWidth={3}
          />
        </HashLink> */}

      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 opacity-0 intersect-once intersect:animate-fade animate-duration-[3000ms]">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <HashLink
              to={`/projects#${project.id}`} 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={project.image} 
                  alt={`Preview of ${project.title}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </HashLink>
            ))}
          </div>
          <HashLink to="/Projects#top" className="px-4 py-4 mx-auto block text-center mt-8 ">
          <HashLink to="/Projects#top" className="px-4 py-4 mx-auto block text-center mt-8 ">
            <div className="inline-block shadow hover:shadow-lg bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-lg transition-colors transiton-shadows">
              View All
            </div>
          </HashLink>
          </HashLink>
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
            <HashLink 
              to="https://www.linkedin.com/in/danielyidyw/" 
              target="_blank"
              className="text-white hover:text-gray-200 transition-colors text-3xl"
              aria-label="View LinkedIn Profile"
            >
              <i className="fab fa-linkedin"></i>
            </HashLink>
            <a 
              hreff="mailto:mail@danielyi.me"
              className="text-white hover:text-gray-200 transition-colors text-3xl"
              aria-label="Send Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <HashLink 
              to="https://www.freecodecamp.org/fcc695deeec-2aa5-4c34-a06f-94702746b2a0"
              target="_blank"
              className="text-white hover:text-gray-200 transition-colors text-3xl"
              aria-label="View Freecodecamp profile"
            >
              <i className="fab fa-free-code-camp"></i>
            </HashLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;