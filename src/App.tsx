import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/Homepage";
import ProgrammePage from "./pages/ProgrammePage";
import FormulairePage from "./pages/FormulairePage";
import InformationPage from "./pages/InformationPage";
function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page: string) => setCurrentPage(page);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />

      <main>
        {currentPage === "home" && <HomePage navigateTo={navigateTo} />}
        {currentPage === "programme" && <ProgrammePage navigateTo={navigateTo} />}
        {currentPage === "formulaire" && <FormulairePage />}
        {currentPage=== "information" && <InformationPage />}
      </main>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 bg-orange-600 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          title="Aller en haut"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}

      <Footer navigateTo={navigateTo} />
    </div>
  );
}

export default App;
