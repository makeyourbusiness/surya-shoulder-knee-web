
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Knee Replacement Patient",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial: "Dr. Surya gave me a new lease on life with my knee replacement. His expertise and compassionate care made a difficult journey much easier. I'm back to my daily walks without pain!"
  },
  {
    name: "Priya Patel",
    role: "Shoulder Injury Patient",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    testimonial: "After a serious shoulder injury that other doctors said would limit my mobility forever, Dr. Surya performed arthroscopic surgery that restored almost all of my range of motion. I'm forever grateful."
  },
  {
    name: "Vikram Singh",
    role: "Sports Injury Patient",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    testimonial: "As an amateur cricket player, I thought my playing days were over after tearing my ACL. Dr. Surya's reconstruction surgery and rehabilitation plan got me back on the field within 8 months."
  },
  {
    name: "Ananya Desai",
    role: "Rotator Cuff Repair Patient",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    testimonial: "The care I received from Dr. Surya for my rotator cuff injury was exceptional. His detailed explanations of my condition and treatment options helped ease my anxiety throughout the process."
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-medical-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Patient Testimonials
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from our patients about their experiences at Dr. Surya's Shoulder & Knee Clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-medical-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full border-2 border-medical-200"
                  />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
                    <p className="text-medical-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-3 -left-2 text-5xl text-medical-200">"</div>
                  <p className="relative z-10 text-gray-700 italic pl-4">
                    {testimonial.testimonial}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
