import { Users, Star, Code, Smartphone, Coffee, Zap, Clock } from "lucide-react";

interface ProgrammePageProps {
  navigateTo: (page: string) => void;
}

export default function ProgrammePage({ navigateTo }: ProgrammePageProps) {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <div className="bg-gradient-to-r from-orange-100 to-blue-100 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Programme Détaillé
              </h2>
              <p className="text-gray-600 mb-6">
                Découvrez le programme complet de notre événement technologique
                exceptionnel
              </p>

              <div className="space-y-8">
                {[
                  {
                    time: "8h30 - 9h00",
                    title: "ACCUEIL ET PETIT DÉJEUNER",
                    icon: <Users className="h-6 w-6 text-white" />,
                    color: "bg-orange-600",
                    details: ["Arrivée des participants", "Enregistrement & badges"],
                  },
                  {
                    time: "9h30 - 10h30",
                    title: "WORKSHOP (ZEBRA ASSET INTELLIGENCE SOLUTIONS)",
                    icon: <Star className="h-6 w-6 text-white" />,
                    color: "bg-blue-600",
                  },
                  {
                    time: "10h30 - 11h00",
                    title: "QUESTIONS - RÉPONSES",
                    icon: <Code className="h-6 w-6 text-white" />,
                    color: "bg-purple-600",
                  },
                  {
                    time: "11h00 - 11h45",
                    title: "CAS D’ÉTUDE ET APPLICATIONS PRATIQUES",
                    icon: <Smartphone className="h-6 w-6 text-white" />,
                    color: "bg-green-600",
                    details: [
                      "Témoignages clients (CENTAURES LOGISTICS, AGL, OLAM...)",
                      "Démonstrations en direct des produits & solutions ZEBRA",
                    ],
                  },
                  {
                    time: "11h45 - 12h00",
                    title: "QUESTIONS - RÉPONSES",
                    icon: <Coffee className="h-6 w-6 text-white" />,
                    color: "bg-yellow-500",
                  },
                  {
                    time: "12h00 - 12h15",
                    title: "CLÔTURE",
                    icon: <Zap className="h-6 w-6 text-white" />,
                    color: "bg-red-600",
                  },
                  {
                    time: "12h15 - 13h00",
                    title: "DÉJEUNER - BUFFET",
                    icon: <Clock className="h-6 w-6 text-white" />,
                    color: "bg-orange-600",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        {item.time} : {item.title}
                      </h3>
                      {item.details && (
                        <ul className="list-disc list-inside text-gray-600">
                          {item.details.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
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
}
