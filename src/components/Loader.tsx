
import { LoaderCircle } from "lucide-react";

const Loader = () => (
  <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-medical-50 to-medical-100 flex flex-col items-center justify-center gap-6">
    <div className="animate-spin-slow text-medical-600">
      <LoaderCircle size={64} strokeWidth={2.25} />
    </div>
    <h2 className="text-xl md:text-2xl font-semibold text-medical-700 animate-fade-in-down">
      Welcome to Dr. Surya&apos;s Clinic
    </h2>
    <div className="text-medical-500 text-center max-w-xs animate-fade-in">
      Specialized Orthopaedic Care for Knee, Shoulder, and Sports Injuries
    </div>
  </div>
);

export default Loader;
