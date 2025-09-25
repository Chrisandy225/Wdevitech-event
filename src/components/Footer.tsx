import { Code, Mail, Phone } from "lucide-react";

interface FooterProps {
  navigateTo: (page: string) => void;
}

export default function Footer({ navigateTo }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 text-orange-500 mr-2" />
              <span className="font-bold text-xl">Widevitech Event</span>
            </div>
            <p className="text-gray-400 mb-4">
              L'événement technologique de référence
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => navigateTo("home")}
                  className="hover:text-white transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("programme")}
                  className="hover:text-white transition-colors"
                >
                  Programme
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("formulaire")}
                  className="hover:text-white transition-colors"
                >
                  Réserver
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("information")}
                  className="hover:text-white transition-colors"
                >
                  Information
                </button>
              </li>


            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-orange-500" />
                <span className="text-gray-400">wsb@widevitech.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-orange-500" />
                <span className="text-gray-400">
                  +225 0707902930 / +225 0703040506
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Widevitech Event. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
