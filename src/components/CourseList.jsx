import { useDarkMode } from '../contexts/DarkModeContext';

const courses = [
  { id: 1, title: 'React Fundamentals', level: 'Beginner', duration: '4 weeks', students: 1234, rating: 4.8, topics: ['Components', 'JSX', 'Props', 'State'] },
  { id: 2, title: 'Advanced React Patterns', level: 'Intermediate', duration: '6 weeks', students: 876, rating: 4.9, topics: ['HOCs', 'Render Props', 'Hooks', 'Context'] },
  { id: 3, title: 'React with TypeScript', level: 'Intermediate', duration: '5 weeks', students: 654, rating: 4.7, topics: ['Types', 'Interfaces', 'Generics', 'Type Inference'] },
  { id: 4, title: 'React Native for Mobile', level: 'Advanced', duration: '8 weeks', students: 432, rating: 4.6, topics: ['Mobile UI', 'Native APIs', 'Navigation', 'Expo'] },
];

function CourseList() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8 text-center`}>
          Our Featured Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className={`rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className={`h-3 ${getLevelColor(course.level)}`}></div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {course.title}
                </h3>
                <div className="flex items-center mb-4">
                  <LevelIcon />
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} ml-1 mr-2`}>
                    {course.level}
                  </span>
                  <ClockIcon />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} ml-1`}>
                    {course.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <StarIcon />
                    <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} ml-1`}>
                      {course.rating}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <UserIcon />
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} ml-1`}>
                      {course.students.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Topics covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, index) => (
                      <span key={index} className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <button className={`w-full mt-4 px-4 py-2 rounded-md font-semibold text-white transition duration-300 ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'}`}>
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getLevelColor(level) {
  switch (level.toLowerCase()) {
    case 'beginner':
      return 'bg-green-500';
    case 'intermediate':
      return 'bg-yellow-500';
    case 'advanced':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
}

function LevelIcon() {
  return (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

export default CourseList;