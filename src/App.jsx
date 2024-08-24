import Header from "./components/Header";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
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
          <Faq />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;