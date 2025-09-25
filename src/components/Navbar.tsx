import { useState } from "react";
import { Menu, X, Code } from "lucide-react";

interface NavbarProps {
  currentPage: string;
  navigateTo: (page: string) => void;
}

export default function Navbar({ currentPage, navigateTo }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => navigateTo("home")}
            className="flex items-center cursor-pointer"
          >
            <Code className="h-8 w-8 text-orange-600 mr-2" />
            <span className="font-bold text-xl text-orange-600">
              Widevitech Event
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => navigateTo("home")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === "home"
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Accueil
              </button>
              <button
                onClick={() => navigateTo("programme")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === "programme"
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Programme
              </button>
              <button
                onClick={() => navigateTo("information")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === "information"
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Informations
              </button>
              <button
                onClick={() => navigateTo("formulaire")}
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Réserver
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-600 focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => { navigateTo("home"); setIsMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => { navigateTo("programme"); setIsMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              Programme
            </button>
            <button
              onClick={() => { navigateTo("information"); setIsMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              Informations
            </button>
            <button
              onClick={() => { navigateTo("formulaire"); setIsMenuOpen(false); }}
              className="block mx-3 my-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
            >
              Réserver
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
