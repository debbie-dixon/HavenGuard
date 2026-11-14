import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Personal Care & Hygiene",
    location: "Port Harcourt",
    details: "",
  });

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    const whatsappNumber = "2347032446315";
    const message = `Hello HavenGuard Home Care,\n\nI would like to request care services:\n• *Client Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Service Required:* ${formData.service}\n• *Location:* ${formData.location}\n• *Details:* ${formData.details || "N/A"}`;
    const query = new URLSearchParams({ text: message });

    window.open(
      `https://wa.me/${whatsappNumber}?${query.toString()}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-stone-50 border-t border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-emerald-800 text-xs font-black uppercase tracking-widest mb-2">
                Get In Touch
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950">
                Request Care or Consultation
              </h2>
              <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                Available for Home Care & Private Support in Port Harcourt. Fill
                out the form to dispatch your request directly via WhatsApp.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-white rounded-xl border border-stone-200 flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-lg flex items-center justify-center font-bold text-lg">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-xs text-stone-600 font-medium">
                    Phone / WhatsApp
                  </p>
                  <p className="text-sm font-bold text-emerald-950">
                    +234 703 244 6315
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-lg flex items-center justify-center font-bold text-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-stone-600 font-medium">
                    Email Address
                  </p>
                  <p className="text-sm font-bold text-emerald-950">
                    nehemiahparadigm6315@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-stone-200 p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-emerald-950 mb-6">
              Service Request Form
            </h3>

            <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Mrs. Grace Okoro"
                    className="w-full bg-white border border-stone-300 rounded-lg px-4 py-3 text-sm text-stone-900 placeholder:text-stone-500 focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="e.g. +234 801 234 5678"
                    className="w-full bg-white border border-stone-300 rounded-lg px-4 py-3 text-sm text-stone-900 placeholder:text-stone-500 focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Service Required *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full bg-white border border-stone-300 rounded-lg px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
                >
                  <option value="Personal Care & Hygiene">
                    Personal Care & Hygiene
                  </option>
                  <option value="Safe Mobility & Physical Transfers">
                    Safe Mobility & Physical Transfers
                  </option>
                  <option value="Medication Reminders & Health Monitoring">
                    Medication Reminders & Health Monitoring
                  </option>
                  <option value="Nutritious & Therapeutic Meal Preparation">
                    Nutritious & Therapeutic Meal Preparation
                  </option>
                  <option value="Companionship & Emotional Support">
                    Companionship & Emotional Support
                  </option>
                  <option value="Light Housekeeping & Infection Control">
                    Light Housekeeping & Infection Control
                  </option>
                  <option value="General Care Consultation">
                    General Care Consultation
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Location in Port Harcourt
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="e.g. GRA Phase 2, Port Harcourt"
                  className="w-full bg-white border border-stone-300 rounded-lg px-4 py-3 text-sm text-stone-900 placeholder:text-stone-500 focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Patient Details / Care Notes
                </label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                  placeholder="Describe care needs, schedule requirements, or specific conditions..."
                  className="w-full bg-white border border-stone-300 rounded-lg px-4 py-3 text-sm text-stone-900 placeholder:text-stone-500 focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold py-4 border border-emerald-800 transition-colors duration-200 flex items-center justify-center gap-2 text-base"
              >
                <span>Send Request via WhatsApp</span> <FaWhatsapp />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
