import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Newsletter = () => {
  const { darkMode } = useDarkMode();

  return (
    <section className={`py-12 ${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-center mb-8">Stay updated with our latest courses and offers!</p>
        <form className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-grow px-4 py-2 rounded-l-lg focus:outline-none ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
              }`}
            />
            <button
              type="submit"
              className={`px-6 py-2 rounded-r-lg transition-colors ${
                darkMode
                  ? 'bg-yellow-600 text-blue-100 hover:bg-yellow-500'
                  : 'bg-yellow-500 text-blue-900 hover:bg-yellow-400'
              }`}
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;