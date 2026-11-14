import talkingImage from "../assets/talking.jpg";
import talkingInBedImage from "../assets/arrangingBed.jpg";
import mobilityAssistanceImage from "../assets/pexels-kampus-7551686.jpg";
import transportationImage from "../assets/sweeping.jpg";
import healthMonitoringImage from "../assets/health.jpg";
import mealAssistanceImage from "../assets/eating.jpg";

const SERVICES_LIST = [
  {
    id: "personal-care",
    title: "Personal Care & Hygiene",
    desc: "Bathing, grooming, dressing, and respectful toileting support tailored to client comfort.",
    image: talkingInBedImage,
    bullets: [
      "Assisted Bathing & Showering",
      "Grooming & Oral Hygiene",
      "Dressing & Mobility Assistance",
    ],
  },
  {
    id: "safe-mobility",
    title: "Safe Mobility & Physical Transfers",
    desc: "Professional transfer support from bed to wheelchair, preventing falls and ensuring safe ambulation.",
    image: mobilityAssistanceImage,
    bullets: [
      "Bed Transfers & Repositioning",
      "Walking & Ambulation Support",
      "Fall Prevention Care",
    ],
  },
  {
    id: "medication",
    title: "Medication Reminders & Health Monitoring",
    desc: "Timely prescription tracking, vital signs recording, and sugar level monitoring.",
    image: healthMonitoringImage,
    bullets: [
      "Exact Schedule Medication Prompts",
      "Blood Pressure & Vital Checks",
      "Blood Sugar Monitoring",
    ],
  },
  {
    id: "meals",
    title: "Nutritious & Therapeutic Meal Preparation",
    desc: "Cooking wholesome, diet-compliant meals and feeding assistance suited to health requirements.",
    image: mealAssistanceImage,
    bullets: [
      "Custom Dietary Meal Prep",
      "Hydration Management",
      "Patient Feeding Support",
    ],
  },
  {
    id: "companionship",
    title: "Companionship & Emotional Support",
    desc: "Meaningful engagement, conversation, reading, and mental stimulation to combat isolation.",
    image: talkingImage,
    bullets: [
      "Engaging Conversation & Reading",
      "Recreational Activities",
      "Emotional Encouragement",
    ],
  },
  {
    id: "housekeeping",
    title: "Light Housekeeping & Infection Control",
    desc: "Maintaining a clean, sanitized, and orderly living space to ensure patient safety and hygiene.",
    image: transportationImage,
    bullets: [
      "Sanitizing Living Spaces",
      "Bed Linen Changes",
      "Dusting & Tidy Maintenance",
    ],
  },
];

export default function Services({ scrollToSection }) {
  return (
    <section
      id="services"
      className="py-20 bg-stone-50 border-t border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950">
            Services Offered
          </h2>
          <p className="text-stone-600 text-base">
            Professional homecare support structured around individual patient
            needs, dignity, and recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-stone-200 p-6 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-950/5 transition-all duration-300 flex hover:translate-y-1 flex-col justify-between"
            >
              <div className="space-y-4">
                <img
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-44 w-full rounded-xl border border-emerald-100 object-cover"
                />

                <h3 className="text-xl font-bold text-emerald-950 leading-snug">
                  {service.title}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                <ul className="pt-2 space-y-2 border-t border-stone-200">
                  {service.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-stone-600 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-emerald-50 hover:bg-emerald-800 hover:text-white text-emerald-900 border border-emerald-200 hover:border-emerald-800 py-2.5 rounded-xl text-xs font-bold transition-all duration-200"
                >
                  Book This Service ➔
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
