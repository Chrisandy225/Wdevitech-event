import { useState, useEffect } from "react";

export default function FormulairePage() {
  const [formData, setFormData] = useState({
    company: "",
    job: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init("QKj0QWu6yXI_4ZvWu");
      }
    };
    document.body.appendChild(script);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (window.emailjs) {
      window.emailjs
        .sendForm("service_84hiijr", "template_wb6ar1f", "#contact-form")
        .then(() => {
          alert("✅ Inscription envoyée !");
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
        .catch((err: any) => alert("❌ Erreur : " + JSON.stringify(err)));
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-orange-600 to-blue-600 p-8 text-white text-center">
            <h1 className="text-3xl font-bold mb-2">📝 Inscrivez-vous</h1>
            <p className="text-orange-100">Réservez votre place dès maintenant</p>
          </div>

          <div className="p-8">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input type="text" name="company" value={formData.company} onChange={handleInputChange} required placeholder="Entreprise" className="border rounded-lg p-3 w-full" />
              <input type="text" name="job" value={formData.job} onChange={handleInputChange} placeholder="Poste" className="border rounded-lg p-3 w-full" />
              <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} required placeholder="Prénom" className="border rounded-lg p-3 w-full" />
              <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} placeholder="Nom" className="border rounded-lg p-3 w-full" />
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email" className="border rounded-lg p-3 w-full" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="Téléphone" className="border rounded-lg p-3 w-full" />

              <select name="country" value={formData.country} onChange={handleInputChange} required className="border rounded-lg p-3 w-full">
                <option value="">-- Sélectionnez un pays --</option>
                {["Côte d’Ivoire", "Sénégal", "Cameroun", "Bénin", "Burkina Faso", "Ghana", "Gabon", "Congo-Brazzaville", "Djibouti", "Madagascar", "Tchad"].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <div className="md:col-span-2 text-center pt-6">
                <button type="submit" className="bg-orange-600 hover:bg-blue-600 text-white px-12 py-4 rounded-full font-semibold transition-all duration-300">
                  ✅ Envoyer l&apos;inscription
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
