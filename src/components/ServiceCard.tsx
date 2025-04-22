
import React, { useRef, useEffect, useState } from "react";

interface ServiceCardProps {
  name: string;
  description: string;
  imageUrl: string;
  idx: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, imageUrl, idx }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new window.IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden
        transform transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
        animate-fade-in
      `}
      style={{
        animationDelay: `${idx * 80}ms`
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full md:w-1/3 h-52 object-cover aspect-video"
        loading="lazy"
      />
      <div className="flex-1 p-6 flex flex-col gap-2 justify-center">
        <h3 className="text-lg md:text-xl font-semibold text-medical-700 mb-1">{name}</h3>
        <p className="text-gray-700 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
