
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    title: "Shoulder Treatments",
    description: "Comprehensive care for a range of shoulder conditions including rotator cuff injuries, shoulder instability, and arthritis.",
    treatments: [
      "Rotator Cuff Repair",
      "Shoulder Arthroscopy",
      "Shoulder Replacement",
      "Frozen Shoulder Treatment",
      "Sports Injury Management"
    ]
  },
  {
    title: "Knee Treatments",
    description: "Expert diagnosis and treatment for various knee conditions affecting mobility and quality of life.",
    treatments: [
      "ACL Reconstruction",
      "Knee Arthroscopy",
      "Total Knee Replacement",
      "Meniscus Repair",
      "Cartilage Restoration"
    ]
  },
  {
    title: "Advanced Procedures",
    description: "Cutting-edge orthopedic techniques and minimally invasive procedures for optimal outcomes.",
    treatments: [
      "Computer-Assisted Surgery",
      "Stem Cell Therapy",
      "PRP Injections",
      "Arthroscopic Procedures",
      "Joint Preservation Techniques"
    ]
  },
  {
    title: "Rehabilitation Services",
    description: "Comprehensive rehabilitation programs customized to your specific recovery needs.",
    treatments: [
      "Post-Surgical Rehabilitation",
      "Physical Therapy",
      "Sports Rehabilitation",
      "Gait Analysis",
      "Strength Training Programs"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dr. Surya's Shoulder & Knee Clinic offers comprehensive orthopedic care using 
            the latest diagnostic and treatment techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-medical-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-medical-700">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.treatments.map((treatment, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-medical-500"></div>
                      <span>{treatment}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
