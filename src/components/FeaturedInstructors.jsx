import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import InstructorCard from './InstructorCard'; // Assuming InstructorCard is in the same folder
import imranParthib from '../assets/instructors/imranParthib.png';
import rakibulAnas from '../assets/instructors/rakibulAnas.webp';
import towhidulIslam from '../assets/instructors/towhidulIslam.jpg';
import alImran from '../assets/instructors/alImran.jpg';

const FeaturedInstructors = () => {
  const { darkMode } = useDarkMode();

  const instructors = [
    {
      name: 'Imran Parthib',
      image: imranParthib,
      description: 'Imran Parthib is a software engineer with years of experience in the industry. He has a passion for teaching and helping others learn.',
      specialty: 'Web Development'
    },
    {
      name: 'Rakibul Islam Anas',
      image: rakibulAnas,
      description: 'Rakibul Islam Anas is a software engineer with years of experience in the industry. He has a passion for teaching and helping others learn.',
      specialty: 'Full-Stack WebDev'
    },
    {
      name: 'Towhidul Islam',
      image: towhidulIslam,
      description: 'Towhidul Islam is a software engineer with years of experience in the industry. He has a passion for teaching and helping others learn.',
      specialty: 'Data Science'
    },
    {
      name: 'Al Imran',
      image: alImran,
      description: 'Al Imran is a software engineer with years of experience in the industry. He has a passion for teaching and helping others learn.',
      specialty: 'Machine Learning'
    },
  ];

  return (
    <section className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} py-16`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 relative">
  <span
    className={`bg-clip-text text-transparent bg-gradient-to-r ${
      darkMode ? 'from-blue-400 to-purple-500' : 'from-blue-600 to-purple-700'
    }`}
  >
    Featured Instructors  ✨ 
  </span>
  <span
    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full transition-all duration-500 ${
      darkMode
        ? 'bg-gradient-to-r from-blue-400 to-purple-500'
        : 'bg-gradient-to-r from-blue-600 to-purple-700'
    } animate-pulse`}
  ></span>
  <span
    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl"
    aria-hidden="true"
  >
  </span>
 
</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <InstructorCard key={index} instructor={instructor} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInstructors;
