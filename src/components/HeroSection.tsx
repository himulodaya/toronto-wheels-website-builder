import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden h-screen">
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0 md:bg-left" 
        style={{ backgroundImage: "url('/lovable-uploads/cf772956-32de-4808-a75e-a31d685ca498.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center h-full">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Drive safe,<br />
            <span className="text-driving-orange">Drive smart</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Become a skilled, confident driver with Toronto's most trusted driving school
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button className="bg-driving-orange text-white text-lg px-8 py-6">
              Get Started
            </Button>
            <Button variant="outline" className="bg-white text-driving-orange border-driving-orange text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
