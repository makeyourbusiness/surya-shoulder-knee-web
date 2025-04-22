
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-medical-50 to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3871&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional Orthopedic Care for Your Shoulder & Knee
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Dr. Surya specializes in advanced treatments for shoulder and knee conditions, 
            providing personalized orthopedic care with state-of-the-art technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-medical-600 hover:bg-medical-700 text-white">
              Book Appointment
            </Button>
            <Button variant="outline" size="lg" className="border-medical-500 text-medical-600 hover:bg-medical-50">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
