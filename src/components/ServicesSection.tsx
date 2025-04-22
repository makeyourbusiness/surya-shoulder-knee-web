
const services = [
  "Surgeries Around Knee & Shoulder",
  "Knee & Shoulder Arthroscopy (Key hole Surgery )",
  "Sports Injuries : A.C.L Surgeries",
  "Sports Injuries : P.C.L Surgeries",
  "Accident cases (trauma)",
  "Joint Preservation Surgeries : Meniscus Repair",
  "Shoulder Dislocation & Muscle Tears (Rotator Cuff Tears)",
  "Stemcells / P.R.P Therapy",
  "Cartilage Problems"
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services Offered</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive orthopaedic care specialising in Knee, Shoulder & Sports injuries.
          </p>
        </div>
        <ul className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl px-6 py-8 space-y-4">
          {services.map((service, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-1 block h-3 w-3 bg-medical-500 rounded-full" />
              <span className="text-gray-800 text-base">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
