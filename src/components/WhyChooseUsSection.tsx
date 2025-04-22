
import { Card, CardContent } from "./ui/card";

const features = [
  {
    title: "Specialized Expertise",
    description: "Dr. Surya is a fellowship-trained orthopedic surgeon specializing exclusively in shoulder and knee conditions."
  },
  {
    title: "Personalized Care",
    description: "We develop customized treatment plans tailored to each patient's unique needs and lifestyle goals."
  },
  {
    title: "Advanced Technology",
    description: "Our clinic is equipped with state-of-the-art diagnostic and treatment technology for optimal outcomes."
  },
  {
    title: "Comprehensive Approach",
    description: "We offer both surgical and non-surgical treatments to provide the most appropriate care for each condition."
  },
  {
    title: "Patient Education",
    description: "We believe in empowering our patients with knowledge about their conditions and treatment options."
  },
  {
    title: "Compassionate Care",
    description: "Our entire team is committed to providing supportive, empathetic care throughout your treatment journey."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-medical-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Dr. Surya's Clinic
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We are committed to providing exceptional orthopedic care with a focus on your comfort and recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-medical-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-medical-100 h-12 w-12 rounded-full flex items-center justify-center mb-4 text-medical-600">
                  <span className="font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
