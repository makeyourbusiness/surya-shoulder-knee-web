
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold text-medical-700">
                Dr. Surya's <span className="text-medical-500">Shoulder & Knee Clinic</span>
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-medium text-gray-600 hover:text-medical-600 transition-colors">
              Home
            </a>
            <a href="#about" className="font-medium text-gray-600 hover:text-medical-600 transition-colors">
              About
            </a>
            <a href="#services" className="font-medium text-gray-600 hover:text-medical-600 transition-colors">
              Services
            </a>
            <a href="#testimonials" className="font-medium text-gray-600 hover:text-medical-600 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="font-medium text-gray-600 hover:text-medical-600 transition-colors">
              Contact
            </a>
            <Button className="bg-medical-600 hover:bg-medical-700">Book Appointment</Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3">
            <a 
              href="#home" 
              className="block py-2 font-medium text-gray-600 hover:text-medical-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block py-2 font-medium text-gray-600 hover:text-medical-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="block py-2 font-medium text-gray-600 hover:text-medical-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="block py-2 font-medium text-gray-600 hover:text-medical-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block py-2 font-medium text-gray-600 hover:text-medical-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="w-full bg-medical-600 hover:bg-medical-700">Book Appointment</Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
