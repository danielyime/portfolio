import React from 'react';
import { HashLink } from 'react-router-hash-link';
import TypingHeader from './components/TypingHeader';
import { roles, competencies } from './data/experience';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <HashLink to="#welcome-section" className="text-2xl font-bold text-white hover:animate-wiggle animate-infinite bg-gradient-to-r from-orange-400 to-pink-600 rounded-xl p-2">DY</HashLink>
          <div className="flex gap-4 sm:gap-8">
            <HashLink smooth to="#experience" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline font-bold">Experience</HashLink>
            <HashLink smooth to="#about" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline font-bold">About</HashLink>
            <HashLink smooth to="#contact" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline font-bold">Contact</HashLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="welcome-section" className="min-h-screen flex flex-col justify-center items-center px-4 relative animate-fade-down animate-duration-[2000ms]">
        <div className="max-w-3xl text-center space-y-6">
          <TypingHeader />
          <h2 className="text-3xl text-gray-700 font-light">
            Product Manager. Experience Designer.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm a product manager with 5+ years shipping B2B and B2C products across K-12
            and higher-education technology. I like the ambiguous problems — new products,
            integrations, migrations — and turning them into sequenced, evidence-backed plans.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            I also build this site myself as a way to keep my technical skills sharp.
          </p>
          <HashLink smooth to="#experience" className="inline-block">
            <div className="inline-block shadow hover:shadow-lg bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-lg transition-colors">
              See my experience
            </div>
          </HashLink>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 opacity-0 intersect-once intersect:animate-fade animate-duration-[3000ms]">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Experience</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Product roles across edtech, plus the support and research work that taught me
            to listen to users first.
          </p>

          <div className="flex flex-col gap-6">
            {roles.map((role) => (
              <HashLink
                to={`/experience#${role.id}`}
                key={role.id}
                className="group block rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border-l-4 border-orange-400"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                    {role.company}
                  </h3>
                  <span className="text-sm font-medium text-gray-500 whitespace-nowrap">
                    {role.dates}
                  </span>
                </div>
                <p className="text-base font-medium text-gray-700 mt-1">{role.title}</p>
                <p className="text-sm text-gray-500 italic">{role.context}</p>
                <p className="text-gray-600 mt-4">{role.summary}</p>
              </HashLink>
            ))}
          </div>

          <HashLink to="/experience#top" className="block text-center mt-12">
            <div className="inline-block shadow hover:shadow-lg bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-lg transition-colors">
              View Full Experience
            </div>
          </HashLink>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center opacity-0 intersect-once intersect:animate-fade animate-duration-[3000ms]">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">About Me</h2>
          <p className="text-xl text-gray-600">
            Most of my work lives in the messy middle: a vague mandate, a lot of unknowns,
            and a team that needs a clear next step. I get there through continuous
            discovery — talking to users every week, pairing what they say with what the
            data shows, and being honest about what the evidence does and doesn't support.
          </p>
          <p className="text-xl text-gray-600 mt-6">
            I care about leaving things better than I found them: reusable templates,
            onboarding docs, and research practices that outlast whichever project I'm on.
          </p>
          <p className="text-lg text-gray-500 mt-6">
            Outside of work, I'm usually being supervised by my two cats, Teddy and Momo.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {competencies.map((skill) => (
              <span
                key={skill}
                className="text-sm font-medium text-gray-700 bg-gray-100 rounded-full px-4 py-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-orange-400 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">My Links</h2>
          <div className="flex justify-center gap-8">
            <HashLink
              to="https://www.linkedin.com/in/danieljyi/"
              target="_blank"
              className="text-white hover:text-gray-200 transition-colors text-3xl"
              aria-label="View LinkedIn Profile"
            >
              <i className="fab fa-linkedin"></i>
            </HashLink>
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
