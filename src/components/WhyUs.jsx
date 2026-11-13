import { FaHospital, FaCertificate, FaHandsHelping, FaCar } from "react-icons/fa";
const QUALIFICATIONS = [
  {
    title: "UK Caredemy 15 Standards Care Certified",
    desc: "Trained and verified according to international UK health and social care standards.",
    icon: <FaCertificate />,
  },
  {
    title: "First Aid, CPR & Emergency Response Trained",
    desc: "Equipped to handle urgent medical triage, emergency stabilization, and rapid response.",
    icon: <FaHospital />,
  },
  {
    title: "Experienced in Geriatric & Home Care",
    desc: "Years of hands-on expertise supporting elderly patients and individuals recovering at home.",
    icon: <FaHandsHelping />,
  },
  {
    title: "Clean Driving Record",
    desc: "Reliable transportation support for medical appointments, errands, and therapy visits.",
    icon: <FaCar />,
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-20 bg-emerald-50 border-t border-emerald-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950">
            Why Choose HavenGuard?
          </h2>
          <p className="text-stone-600 text-sm">
            Certified expertise, trusted background, and compassionate
            dedication you can rely on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUALIFICATIONS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-emerald-100 p-6 space-y-4"
            >
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-emerald-950">
                {item.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
