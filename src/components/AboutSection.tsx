
import { Button } from "./ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dr. Surya
              <span className="block text-medical-600 mt-2">Orthopedic Specialist</span>
            </h2>
            
            <p className="text-gray-700 mb-6">
              With over 15 years of specialized experience in orthopedic surgery, Dr. Surya has dedicated his career to 
              improving the lives of patients suffering from shoulder and knee ailments. His expertise includes 
              both surgical and non-surgical treatments for a wide range of conditions.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-medical-500 mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">Fellowship trained</span> in Sports Medicine and Joint Reconstruction
                </p>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-medical-500 mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">Board Certified</span> in Orthopedic Surgery
                </p>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-medical-500 mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">Member</span> of the Indian Orthopedic Association
                </p>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-medical-500 mt-2 mr-3"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">Published researcher</span> with multiple publications in reputed medical journals
                </p>
              </div>
            </div>
            
            <Button className="bg-medical-600 hover:bg-medical-700">Learn More About Dr. Surya</Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-medical-100 shadow-xl max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Dr. Surya" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-medical-50 border border-medical-100 rounded-lg p-4 shadow-lg">
              <p className="text-medical-700 font-semibold">15+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
