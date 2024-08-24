import reactLogo from "../assets/react.svg";
import { useDarkMode } from '../contexts/DarkModeContext';

function Banner() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-700' : 'bg-gradient-to-br from-blue-100 to-indigo-200'} py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className={`text-4xl md:text-5xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'} leading-tight mb-4`}>
              Master React with
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}> Hands-on Learning</span>
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Dive into interactive tutorials, real-world projects, and expert-led courses to elevate your React skills.
            </p>
            <div className="flex space-x-4">
              <a href="https://epay-gw.sslcommerz.com/9e85e81e628b39f3fe7b69dd1ab54ffb999030c5" className={`${darkMode ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white px-6 py-3 rounded-md font-semibold transition duration-300`}>
               Donate for People
              </a>
              <a href="#" className={`${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-blue-600 hover:bg-gray-100'} px-6 py-3 rounded-md font-semibold transition duration-300 border ${darkMode ? 'border-gray-600' : 'border-blue-600'}`}>
                View Courses
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className={`absolute inset-0 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'} opacity-10 rounded-full blur-2xl`}></div>
              <img 
                src={reactLogo}
                alt="React Logo" 
                className="w-64 h-64 md:w-80 md:h-80 animate-float"
              />
              <div className="absolute top-0 -left-4 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-24 h-24 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-24 h-24 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Banner;