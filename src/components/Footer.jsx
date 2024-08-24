import { useDarkMode } from '../contexts/DarkModeContext';
import reactLogo from "../assets/react.svg";

function Footer() {
  const { darkMode } = useDarkMode();

  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={reactLogo} alt="React Logo" className="h-8 w-8 mr-2 animate-spin-slow" />
              <h2 className="text-xl font-bold">React Learning Cafe</h2>
            </div>
            <p className="text-sm">Empowering developers to master React through interactive learning experiences.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition duration-300`}>Home</a></li>
              <li><a href="#" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition duration-300`}>Courses</a></li>
              <li><a href="#" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition duration-300`}>Blog</a></li>
              <li><a href="#" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition duration-300`}>About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition duration-300`}>Twitter</a></li>
              <li><a href="#" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition duration-300`}>LinkedIn</a></li>
              <li><a href="#" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition duration-300`}>GitHub</a></li>
              <li><a href="#" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition duration-300`}>Discord</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest courses and React tips.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-grow px-4 py-2 rounded-l-md focus:outline-none ${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                }`}
              />
              <button
                type="submit"
                className={`px-4 py-2 rounded-r-md ${
                  darkMode
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white transition duration-300`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2023 React Learning Cafe. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className={`text-sm hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition duration-300`}>Privacy Policy</a>
            <a href="#" className={`text-sm hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition duration-300`}>Terms of Service</a>
            <a href="#" className={`text-sm hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition duration-300`}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
