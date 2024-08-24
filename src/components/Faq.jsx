import { useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';

const faqs = [
  {
    question: "What is React Learning Cafe?",
    answer: "React Learning Cafe is an online platform dedicated to teaching React.js through interactive courses, tutorials, and resources for developers of all skill levels.",
    icon: "☕"
  },
  {
    question: "How do I enroll in a course?",
    answer: "To enroll in a course, simply browse our course catalog, select the course you're interested in, and click the 'Enroll Now' button. You'll be guided through the registration and payment process.",
    icon: "📚"
  },
  {
    question: "Are the courses self-paced?",
    answer: "Yes, all our courses are self-paced. You can start and complete them at your own convenience, allowing you to balance your learning with other commitments.",
    icon: "⏱️"
  },
  {
    question: "Do you offer certificates upon course completion?",
    answer: "Yes, we provide certificates of completion for all our courses. These can be downloaded and shared on your professional profiles or with potential employers.",
    icon: "🎓"
  },
  {
    question: "Is there a refund policy?",
    answer: "We offer a 30-day money-back guarantee for all our courses. If you're not satisfied with the course content, you can request a full refund within 30 days of purchase.",
    icon: "💰"
  }
];

function Faq() {
  const { darkMode } = useDarkMode();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-extrabold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 ${
                darkMode ? 'bg-blue-900' : 'bg-blue-100'
              } ${openIndex === index ? 'shadow-lg' : 'shadow'}`}
            >
              <button
                className="w-full text-left p-6 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{faq.icon}</span>
                  <h3 className={`flex-grow font-semibold text-lg ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    } ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className={`p-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;