import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import PropTypes from 'prop-types'; // Add this import

const Testimonials = () => {
  const { darkMode } = useDarkMode();

  return (
    <section className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialItem
            text="I was able to learn so much from this course and apply it directly to my job. The instructors were knowledgeable and supportive throughout the entire process."
            name="John Doe"
            position="Software Engineer"
            darkMode={darkMode}
          />
          <TestimonialItem
            text="The course was well-structured and easy to follow. I appreciated the hands-on exercises and the feedback from the instructors."
            name="Jane Smith"
            position="Marketing Manager"
            darkMode={darkMode}
          />
          <TestimonialItem
            text="I was impressed by the quality of the course materials and the expertise of the instructors. I feel more confident in my skills now."
            name="Bob Johnson"
            position="Data Scientist"
            darkMode={darkMode}
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialItem = ({ text, name, position, darkMode }) => (
  <div className={`testimonial p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
    <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{text}</p>
    <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{name}</h3>
    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{position}</span>
  </div>
);

// Add prop types validation
TestimonialItem.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Testimonials;