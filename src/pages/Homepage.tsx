import { ArrowRight, Zap, Users, Code } from "lucide-react";

interface HomePageProps {
  navigateTo: (page: string) => void;
}

export default function HomePage({ navigateTo }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-600 via-blue-700 to-orange-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
              Widevitech Event 2025
            </h1>
            <div className="bg-black/60 rounded-2xl p-6 mb-8">
              <p className="text-lg md:text-xl text-white leading-relaxed">
                Réservez votre place avant le{" "}
                <span className="font-bold text-orange-400">29/09/2025</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigateTo("programme")}
                className="bg-orange-600 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📅 Voir le programme
              </button>
              <button
                onClick={() => navigateTo("formulaire")}
                className="bg-orange-600 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                📝 Réserver
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Widevitech Event ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L&apos;événement qui rassemble les passionnés et experts de
              l&apos;innovation technologique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-700">
                Découvrez les tendances technologiques et les solutions
                d&apos;avenir.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Networking</h3>
              <p className="text-gray-700">
                Rencontrez des experts, entrepreneurs et leaders
                technologiques.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Formation</h3>
              <p className="text-gray-700">
                Participez à des ateliers pratiques et des conférences
                inspirantes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}