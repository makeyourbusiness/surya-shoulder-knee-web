
import { Calendar } from "lucide-react";
import { Button } from "./ui/button";

const AppointmentButton = () => {
  return (
    <div className="fixed bottom-20 right-8 z-40 md:hidden">
      <Button 
        className="bg-medical-600 hover:bg-medical-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <Calendar size={18} />
        <span>Book Now</span>
      </Button>
    </div>
  );
};

export default AppointmentButton;
