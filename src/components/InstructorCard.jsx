import React from 'react';
import PropTypes from 'prop-types'; // Add this import

const InstructorCard = ({ instructor, darkMode }) => {
  return (
    <div className={`flex flex-col items-center p-8 rounded-xl ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-700' : 'bg-gradient-to-br from-white to-gray-100'} shadow-2xl transform transition-transform duration-300 hover:scale-105`}>
      <div className="relative mb-6">
        <div className="w-36 h-36 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-lg">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="w-full h-full rounded-full object-cover"
            loading="lazy"
          />
        </div>
        {instructor.specialty && (
         <div className="absolute bottom-0 right-0 transform translate-x-2 translate-y-2 bg-blue-100 text-blue-800 text-xs py-1 px-3 rounded-full border border-blue-300 shadow-md">
         {instructor.specialty}
       </div>
        )}
      </div>
      <h3 className={`text-3xl font-bold mb-2 tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {instructor.name}
      </h3>
      <p className={`text-center text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
        {instructor.description}
      </p>
      <button
        className={`mt-auto px-8 py-3 rounded-full font-semibold text-sm tracking-wider shadow-lg transform transition-transform duration-300 ${darkMode ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' : 'bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800'} text-white`}
        aria-label={`View courses by ${instructor.name}`}
      >
        View Courses
      </button>
    </div>
  );
};

InstructorCard.propTypes = { // Add prop types validation
  instructor: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    specialty: PropTypes.string, // Add specialty validation
  }).isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default InstructorCard;