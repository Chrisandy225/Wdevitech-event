import { useState, useEffect } from "react";

interface FormData {
  company: string;
  job: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  country: string;
  device?: string;
  quantity?: number;
  concern?: string;
}

export default function InformationPage() {
  const [formData, setFormData] = useState<FormData>({
    company: "",
    job: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    device: "",
    quantity: undefined,
    concern: ""
  });

  const [emailjsLoaded, setEmailjsLoaded] = useState(false);
  const [success, setSuccess] = useState(false);

  // Charger EmailJS
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init("10fZc4jtl5v5YyIxx"); // ⚠️ Remplace par ta clé PUBLIC KEY
        setEmailjsLoaded(true);
      }
    };
    document.body.appendChild(script);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const models = [
    { model: "L10ax", endDate: "4 Aug 2025", replacement: "ET60W / ET65W", link:"https://www.widevitech.com/gamme-et5x/" },
    { model: "EC50 / EC55", endDate: "30 Jun 2025", replacement: "TC22 / TC27 / EM45", link:"https://www.widevitech.com/wlmt0-t22b6abc2-a6/" },
    { model: "TC72 / TC77", endDate: "31 Oct 2025", replacement: "TC73 / TC78", link: "#" },
    { model: "TC52x-HC / TC52ax-HC", endDate: "31 Oct 2025", replacement: "HC50", link: "#" },
    { model: "TC52x / TC52ax", endDate: "31 Oct 2025", replacement: "TC53 / TC53e", link:"https://www.widevitech.com/tc5301-0t1e4b1000-a6/" },
    { model: "TC57x", endDate: "31 Oct 2025", replacement: "TC58 / TC58e", link:"https://www.widevitech.com/tc5301-0t1e4b1000-a6/" }
  ];

  const handleDeviceClick = (replacement: string, link: string) => {
    setFormData((prev) => ({ ...prev, device: replacement, quantity: 1 }));
    const formSection = document.getElementById("contact-form");
    if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
    if(link !== "#") window.open(link, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(emailjsLoaded && window.emailjs) {
      window.emailjs.sendForm(
        "service_nqpl5bh",   // ⚠️ Ton service ID
        "template_sk3kpyq", // ⚠️ Ton template ID
        "#contact-form",
        "10fZc4jtl5v5YyIxx" // ⚠️ Ta clé PUBLIC KEY
      ).then(() => {
        setSuccess(true);
        setFormData({
          company: "",
          job: "",
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          country: "",
          device: "",
          quantity: undefined,
          concern: ""
        });
      }).catch((err) => alert("❌ Erreur lors de l'envoi : " + JSON.stringify(err)));
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
            <h2 className="text-2xl font-bold text-green-600 mb-4">✅ Message envoyé</h2>
            <p className="text-gray-700 mb-6">
              Merci pour votre demande. Nous vous recontacterons rapidement.
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

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-orange-600 via-blue-700 to-orange-800 text-white px-4 text-center">
        <div className="flex gap-4 items-center mb-6">
          <img src="/logos/widevitech-logo.png" alt="Widevitech" className="h-16"/>
          <span className="text-3xl font-bold">&</span>
          <img src="/logos/zebra-logo.png" alt="Zebra" className="h-16"/>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Arrêt de commercialisation !
        </h1>
        <p className="text-lg md:text-xl max-w-3xl">
          Basculez sur les derniers modèles Zebra<br/>
          Zebra L10ax, EC5*, TC72/77, TC52x/ax(-HC) et TC57x ne seront bientôt plus commercialisés.<br/>
          Découvrez vos options de mise à niveau dès aujourd'hui.
        </p>
      </section>

      {/* Tableau des modèles */}
      <section className="px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Modèles bientôt retirés</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left border-b">Modèle en fin de vente</th>
                <th className="px-6 py-3 text-left border-b">Date d’arrêt de commercialisation</th>
                <th className="px-6 py-3 text-left border-b">Remplacement</th>
              </tr>
            </thead>
            <tbody>
              {models.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 border-b">{row.model}</td>
                  <td className="px-6 py-4 border-b">{row.endDate}</td>
                  <td className="px-6 py-4 border-b">
                    <button
                      onClick={() => handleDeviceClick(row.replacement, row.link)}
                      className="text-blue-600 font-medium underline hover:text-orange-600 transition-colors"
                    >
                      {row.replacement}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Formulaire */}
      <section className="px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Contactez-nous pour la mise à niveau</h2>
        <form id="contact-form" onSubmit={handleSubmit} className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-lg">
          <input type="text" name="company" value={formData.company} onChange={handleChange} required placeholder="Nom de l'entreprise*" className="border p-3 rounded"/>
          <input type="text" name="job" value={formData.job} onChange={handleChange} placeholder="Intitulé du poste" className="border p-3 rounded"/>
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required placeholder="Prénom*" className="border p-3 rounded"/>
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Nom" className="border p-3 rounded"/>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Adresse email*" className="border p-3 rounded"/>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Numéro de téléphone*" className="border p-3 rounded"/>
          <select name="country" value={formData.country} onChange={handleChange} required className="border p-3 rounded">
            <option value="">-- Pays --</option>
            <option value="Côte d’Ivoire">Côte d’Ivoire</option>
            <option value="Sénégal">Sénégal</option>
            <option value="Cameroun">Cameroun</option>
            <option value="Bénin">Bénin</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Ghana">Ghana</option>
          </select>
          <select name="device" value={formData.device} onChange={handleChange} required className="border p-3 rounded md:col-span-2">
            <option value="">-- Appareil sélectionné --</option>
            {models.map((m, i) => (
              <option key={i} value={m.replacement}>{m.replacement}</option>
            ))}
          </select>
          <input type="number" name="quantity" value={formData.quantity || ""} onChange={handleChange} min={1} placeholder="Nombre de pièces requis" className="border p-3 rounded md:col-span-2"/>
          <textarea name="concern" value={formData.concern} onChange={handleChange} placeholder="Votre préoccupation" className="border p-3 rounded md:col-span-2"/>
          <div className="md:col-span-2 text-center">
            <button type="submit" className="bg-orange-600 hover:bg-blue-600 text-white px-12 py-4 rounded-full transition-all duration-300">
              ✅ Envoyer
            </button>
          </div>
        </form>
      </section>

    </div>
  );
}
// informationpage emailj egale à cayyoan7@gmail.com