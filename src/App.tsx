import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Users, Clock, Mail, Phone, ArrowRight, Star, Zap, Code, Smartphone, ChevronUp, Building, User, Globe,Coffee } from 'lucide-react';

// ---------------- HOME PAGE ----------------
const HomePage = ({ navigateTo }) => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-600 via-blue-700 to-orange-800">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white border-opacity-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Widevitech Event</h1>
          <div className="bg-black bg-opacity-60 rounded-2xl p-6 mb-8">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Cliquez sur le bouton ci-dessous pour réserver<br />
              votre place avant le <span className="font-bold text-orange-400">25/09/2025</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigateTo('programme')}
              className="bg-orange-600 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
            >
              📅 Programme
            </button>
            <button
              onClick={() => navigateTo('formulaire')}
              className="bg-orange-600 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
            >
              📝 Réserver
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pourquoi Widevitech Event ?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L'événement technologique de référence qui rassemble les professionnels de l'innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
            <p className="text-gray-700">Découvrez les dernières tendances technologiques et les solutions d'avenir</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Networking</h3>
            <p className="text-gray-700">Rencontrez des experts, entrepreneurs et leaders technologiques</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <Code className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Formation</h3>
            <p className="text-gray-700">Participez à des sessions pratiques et des conférences inspirantes</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// ---------------- PROGRAMME PAGE ----------------

const ProgrammePage = ({ navigateTo }) => (
  <div className="min-h-screen pt-20">
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <div className="bg-gradient-to-r from-orange-100 to-blue-100 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Programme Détaillé</h2>
            <p className="text-gray-600 mb-6">
              Découvrez le programme complet de notre événement technologique exceptionnel
            </p>

            <div className="space-y-8">
              {/* 8h30 - Accueil */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    8h30 - 9h00 : ACCUEIL ET PETIT DEJEUNER
                  </h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Arrivée des participants</li>
                    <li>Enregistrement et remise des badges</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">9h30 - 10h30 : WORKSHOP  (ZEBRA ASSET INTELLIGENCE SOLUTIONS)</h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    10h30 - 11h00 : QUESTIONS-REPONSES
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    11h00 - 11h45 : CAS D’ÉTUDE ET APPLICATIONS PRATIQUES
                  </h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Témoignages Clients (CENTAURES LOGISTICS,  AGL, OLAM etc)</li>
                    <li>
                      Démonstrations direct des produits et solutions ZEBRA
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Coffee className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    11h45 - 12h00 : QUESTIONS-REPONSES
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    12h00 - 12h15 : CLÔTURE
                  </h3>
                </div>
              </div>

              {/* 12h00 - Networking */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800"> 12h15 - 13h00 : DÉJEUNER-BUFFET</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigateTo("formulaire")}
              className="bg-orange-600 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              📝 Réserver ma place
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);




// ---------------- FORMULAIRE PAGE ----------------
const FormulairePage = () => {
  const [formData, setFormData] = useState({
    company: "",
    job: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: ""
  });

  useEffect(() => {
    // Charger le script EmailJS
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init("QKj0QWu6yXI_4ZvWu"); // ⚡ Ta clé publique EmailJS
      }
    };
    document.body.appendChild(script);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.emailjs) {
      window.emailjs
        .sendForm("service_84hiijr", "template_wb6ar1f", "#contact-form")
        .then(() => {
          alert("✅ Email envoyé avec succès !");
          setFormData({
            company: "",
            job: "",
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            country: ""
          });
        })
        .catch((err) =>
          alert("❌ Erreur lors de l'envoi : " + JSON.stringify(err))
        );
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-orange-600 to-blue-600 p-8 text-white text-center">
            <h1 className="text-3xl font-bold mb-2">📝 Inscrivez-vous</h1>
            <p className="text-orange-100">
              Réservez votre place pour cet événement exceptionnel
            </p>
          </div>

          <div className="p-8">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                placeholder="Entreprise"
              />
              <input
                type="text"
                name="job"
                value={formData.job}
                onChange={handleInputChange}
                placeholder="Poste"
              />
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                required
                placeholder="Prénom"
              />
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                placeholder="Nom"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Email"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Téléphone"
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                <option value="">-- Pays --</option>
                             <option value="Côte d’Ivoire">Côte d’Ivoire</option>
              <option value="Sénégal">Sénégal</option>
              <option value="Cameroun">Cameroun</option>
              <option value="Bénin">Bénin</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Ghana">Ghana</option>
              <option value="Gabon">Gabon</option>
              <option value="Congo-Brazzaville">Congo-Brazzaville</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Tchad">Tchad</option>

              </select>

              <div className="md:col-span-2 text-center pt-6">
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-blue-600 text-white px-12 py-4 rounded-full"
                >
                  ✅ Envoyer l'inscription
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


// ---------------- MAIN APP ----------------
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const navigateTo = (page) => { setCurrentPage(page); setIsMenuOpen(false); };

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => navigateTo('home')}
                className="flex-shrink-0 flex items-center cursor-pointer"
              >
                <Code className="h-8 w-8 text-orange-600 mr-2" />
                <span className="font-bold text-xl text-orange-600">Widevitech Event</span>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => navigateTo('home')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    currentPage === 'home' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  Accueil
                </button>
                <button
                  onClick={() => navigateTo('programme')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    currentPage === 'programme' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  Programme
                </button>
                <button
                  onClick={() => navigateTo('formulaire')}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Réserver
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600"
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
                onClick={() => navigateTo('home')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => navigateTo('programme')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Programme
              </button>
              <button
                onClick={() => navigateTo('formulaire')}
                className="block mx-3 my-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
              >
                Réserver
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main>
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
        {currentPage === 'programme' && <ProgrammePage navigateTo={navigateTo} />}
        {currentPage === 'formulaire' && <FormulairePage />}
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 bg-orange-600 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          title="Aller en haut"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-orange-500 mr-2" />
                <span className="font-bold text-xl">Widevitech Event</span>
              </div>
              <p className="text-gray-400 mb-4">L'événement technologique de référence</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Accueil</button></li>
                <li><button onClick={() => navigateTo('programme')} className="hover:text-white transition-colors">Programme</button></li>
                <li><button onClick={() => navigateTo('formulaire')} className="hover:text-white transition-colors">Réserver</button></li>
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
                  <span className="text-gray-400">+225 0707902930 /+225 0703040506</span>

                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Widevitech Event. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
