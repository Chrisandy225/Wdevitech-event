import { ArrowRight, Zap, Users, Code } from "lucide-react";
import { motion } from "framer-motion";

interface HomePageProps {
  navigateTo: (page: string) => void;
}

export default function HomePage({ navigateTo }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-600 via-blue-700 to-orange-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-14 border border-white/20 shadow-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
              Widevitech Event 2025
            </h1>
            <div className="bg-black/60 rounded-2xl p-6 mb-8 shadow-md">
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                À Bientôt pour de nouveaux événements{" "}
                {/* <span className="font-bold text-orange-400">29/09/2025</span> */}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateTo("programme")}
                className="bg-orange-600 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
              >
                📅 Voir le programme
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateTo("formulaire")}
                className="bg-gradient-to-r from-orange-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                📝 Réserver
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Pourquoi Widevitech Event ?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              L&apos;événement qui rassemble les passionnés et experts de
              l&apos;innovation technologique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Innovation",
                desc: "Découvrez les tendances technologiques et les solutions d'avenir.",
                color: "from-orange-500 to-orange-700",
                bg: "from-orange-50 to-orange-100",
                icon: <Zap className="h-8 w-8 text-white" />,
              },
              {
                title: "Networking",
                desc: "Rencontrez des experts, entrepreneurs et leaders technologiques.",
                color: "from-blue-500 to-blue-700",
                bg: "from-blue-50 to-blue-100",
                icon: <Users className="h-8 w-8 text-white" />,
              },
              {
                title: "Formation",
                desc: "Participez à des ateliers pratiques et des conférences inspirantes.",
                color: "from-purple-500 to-purple-700",
                bg: "from-purple-50 to-purple-100",
                icon: <Code className="h-8 w-8 text-white" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${item.bg} p-8 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
;
