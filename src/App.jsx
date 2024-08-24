import BackToTopButton from './components/BackToTopButton';
import Header from "./components/Header";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import FeaturedInstructors from "./components/FeaturedInstructors";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import "./App.css";

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <Header />
        <main className="flex-grow">
          <Banner />
          <CourseList />
          {/* New components */}
          <Testimonials />
          <FeaturedInstructors />
          <Newsletter />
          <Faq />
          {/* Back to Top button */}
          <BackToTopButton />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
