
import ServiceCard from "./ServiceCard";

const services = [
  {
    name: "Surgeries Around Knee & Shoulder",
    description:
      "Expert surgical intervention for complex knee and shoulder issues. Utilizes the latest minimally invasive methods for quicker recovery and optimum outcomes.",
    imageUrl:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Knee & Shoulder Arthroscopy (Key hole Surgery)",
    description:
      "Precision arthroscopic procedures for joint problems. Key-hole approach allows minimal scars, less pain, and fast rehabilitation.",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Sports Injuries: A.C.L Surgeries",
    description:
      "Comprehensive care for anterior cruciate ligament injuries. We use advanced techniques to restore full mobility for athletes and active individuals.",
    imageUrl:
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Sports Injuries: P.C.L Surgeries",
    description:
      "Personalized treatment and surgical expertise in posterior cruciate ligament injuries to maximize athletic recovery.",
    imageUrl:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Accident Cases (Trauma)",
    description:
      "Immediate and skilled management of bone and joint trauma, ensuring rapid diagnosis, stabilization, and targeted surgical care.",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Joint Preservation Surgeries: Meniscus Repair",
    description:
      "Preserve your joint health and movement with minimally invasive meniscus repairs. Early intervention can prevent long-term damage.",
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Shoulder Dislocation & Muscle Tears (Rotator Cuff Tears)",
    description:
      "Specialized treatment for shoulder dislocations and rotator cuff tears, using advanced surgical and rehabilitation protocols for complete recovery.",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Stemcells / P.R.P Therapy",
    description:
      "Cutting-edge regenerative therapies such as stem cell and Platelet-Rich Plasma (PRP) to accelerate healing of joints and tissues.",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Cartilage Problems",
    description:
      "Diagnosis and restoration of cartilage injuries through modern medical innovations, for improved joint function and pain relief.",
    imageUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
  }
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
        <div className="max-w-4xl mx-auto grid gap-8 md:gap-10 md:grid-cols-2">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              description={service.description}
              imageUrl={service.imageUrl}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
