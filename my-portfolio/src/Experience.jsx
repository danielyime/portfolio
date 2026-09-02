import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { roles } from './data/experience';

const Experience = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <HashLink to="/#experience">
            <p className="text-gray-600 hover:text-gray-900 transition-colors hover:underline font-bold">
              <i className="fas fa-arrow-left mr-2"></i>Go Back
            </p>
          </HashLink>
        </div>
      </nav>

      {/* Main Content */}
      <div id="top" className="max-w-4xl mx-auto px-4 pt-28 pb-24 flex flex-col gap-16">
        {/* Intro Section */}
        <section id="introduction" className="bg-gradient-to-br from-orange-400 to-pink-600 rounded-xl p-8 text-white shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">About my work</h2>
          <p className="text-white">
            I'm always looking for ways to improve the user experience, think empathetically,
            and implement accessible solutions throughout all my work. What follows is a
            high-level look at the kinds of problems I've owned — the specifics stay with
            the teams I built them with.
          </p>
        </section>

        {/* Roles */}
        {roles.map((role) => (
          <section
            key={role.id}
            id={role.id}
            className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-orange-400 scroll-mt-24"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h2 className="text-2xl font-semibold text-gray-900">{role.company}</h2>
              <span className="text-sm font-medium text-gray-500 whitespace-nowrap">
                {role.dates}
              </span>
            </div>
            <p className="text-base font-medium text-gray-700 mt-1">{role.title}</p>
            <p className="text-sm text-gray-500 italic">{role.context}</p>
            <p className="text-gray-600 mt-4">{role.summary}</p>

            <ul className="mt-6 flex flex-col gap-3">
              {role.highlights.map((item, index) => (
                <li key={index} className="flex gap-3 text-gray-600">
                  <i className="fas fa-circle text-[6px] mt-2.5 text-orange-400" aria-hidden="true"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {role.priorRole && (
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">
                  Earlier: {role.priorRole.title}
                </h3>
                <p className="text-gray-600 mt-2">{role.priorRole.summary}</p>
              </div>
            )}
          </section>
        ))}

        <HashLink to="/#contact" className="block text-center">
          <div className="inline-block shadow hover:shadow-lg bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-lg transition-colors">
            Get in touch
          </div>
        </HashLink>
      </div>
    </div>
  );
};

export default Experience;
