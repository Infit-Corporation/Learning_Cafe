import { useState } from 'react';
import reactLogo from "../assets/react.svg";
import { useDarkMode } from '../contexts/DarkModeContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={reactLogo} alt="React Logo" className="h-8 w-8 mr-2 animate-spin-slow" />
            <h1 className="text-xl sm:text-2xl font-bold">
              React Learning <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Cafe</span>
            </h1>
          </div>

          {/* Navigation links for desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition duration-300`}>Blog</a>
            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition duration-300`}>Code</a>
            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition duration-300`}>About</a>
            <a href="#" className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} font-medium transition duration-300`}>Login</a>
            <a href="#" className={`${darkMode ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-md transition duration-300`}>Sign Up</a>
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-600">
              {darkMode ? '🌞' : '🌙'}
            </button>
          </nav>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleDarkMode} className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-600">
              {darkMode ? '🌞' : '🌙'}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} focus:outline-none`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-60' : 'max-h-0'}`}>
          <nav className="py-4 space-y-2">
            <a href="#" className={`block ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition duration-300`}>Blog</a>
            <a href="#" className={`block ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition duration-300`}>Code</a>
            <a href="#" className={`block ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition duration-300`}>About</a>
            <a href="#" className={`block ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} font-medium transition duration-300`}>Login</a>
            <a href="#" className={`block ${darkMode ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-md transition duration-300 text-center`}>Sign Up</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

// Add this CSS to your global styles or a separate CSS file
const styles = `
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
`;

// Inject the styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);