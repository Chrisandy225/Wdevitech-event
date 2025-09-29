import { useState, useEffect } from "react";

interface FormData {
  company: string;
  job: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  country: string;
}

export default function FormulairePage() {
  const [formData, setFormData] = useState<FormData>({
    company: "",
    job: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
  });

  const [emailjsLoaded, setEmailjsLoaded] = useState(false);
  const [success, setSuccess] = useState(false);

  // Charger EmailJS
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init("W4aUiEcsoZ_tBDrt9"); // ⚠️ Remplace par ta clé publique
        setEmailjsLoaded(true);
      }
    };
    document.body.appendChild(script);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailjsLoaded && window.emailjs) {
      window.emailjs
        .sendForm(
          "service_jbie6y8", // ⚠️ Ton service ID
          "template_rxmjsul", // ⚠️ Ton template ID
          "#contact-form",
          "W4aUiEcsoZ_tBDrt9" // ⚠️ Ta clé publique
        )
        .then(() => {
          setSuccess(true);
          setFormData({
            company: "",
            job: "",
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            country: "",
          });
        })
        .catch((err) =>
          alert("❌ Erreur lors de l'envoi : " + JSON.stringify(err))
        );
    } else {
      alert("EmailJS non chargé !");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Confirmation Modal */}
      {success && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              ✅ Inscription envoyée
            </h2>
            <p className="text-gray-700 mb-6">
              Merci pour votre inscription. Un email de confirmation vous a été
              envoyé.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="bg-orange-600 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-all"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Formulaire */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            📝 Inscrivez-vous
          </h2>
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="Entreprise*"
              className="border p-3 rounded"
            />
            <input
              type="text"
              name="job"
              value={formData.job}
              onChange={handleChange}
              placeholder="Poste"
              className="border p-3 rounded"
            />
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              placeholder="Prénom*"
              className="border p-3 rounded"
            />
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Nom"
              className="border p-3 rounded"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email*"
              className="border p-3 rounded"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Téléphone*"
              className="border p-3 rounded"
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="border p-3 rounded md:col-span-2"
            >
              <option value="">-- Sélectionnez un pays --</option>
              {[
                "Côte d’Ivoire",
                "Sénégal",
                "Cameroun",
                "Bénin",
                "Burkina Faso",
                "Ghana",
                "Gabon",
                "Congo-Brazzaville",
                "Djibouti",
                "Madagascar",
                "Tchad",
              ].map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-blue-600 text-white px-12 py-4 rounded-full font-semibold transition-all duration-300"
              >
                ✅ Envoyer l&apos;inscription
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
// Formulairepage emailj egale à christwaounwa.13@gmail.com