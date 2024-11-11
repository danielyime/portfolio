import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Budget() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar - matching your portfolio style */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <HashLink to="/" className="text-2xl font-bold text-white hover:animate-wiggle animate-infinite bg-gradient-to-r from-orange-400 to-pink-600 rounded-xl p-2">
            DY
          </HashLink>
          <HashLink to="/" className="text-gray-600 hover:text-gray-900 transition-colors hover:underline font-bold">
            <i className="fas fa-arrow-left mr-2"></i>Back Home
          </HashLink>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent mb-4">
              Personal Budget Tracker
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Track your expenses, set budgets, and reach your financial goals
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Balance Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-400 to-pink-600 p-1">
                <div className="bg-white p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Current Balance</h2>
                  <p className="text-3xl font-bold text-gray-900">$0.00</p>
                  <p className="text-sm text-gray-500 mt-2">Updated just now</p>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-400 to-pink-600 p-1">
                <div className="bg-white p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
                  <div className="space-y-4">
                    <p className="text-gray-500">No transactions yet</p>
                    <button className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                      Add Transaction +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Budget Overview */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-400 to-pink-600 p-1">
                <div className="bg-white p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Budget Overview</h2>
                  <div className="space-y-4">
                    <p className="text-gray-500">No budget set</p>
                    <button className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                      Set Budget +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">More Features Coming Soon!</h2>
            <p className="text-gray-600">
              We're working on adding expense tracking, budget categories, and financial insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budget;