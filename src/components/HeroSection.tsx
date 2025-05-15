
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Drive safe,<br />
                <span className="text-driving-orange">Driver smart</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Become a skilled, confident driver with Toronto's most trusted driving school
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-driving-orange hover:bg-driving-orange/90 text-white text-lg px-8 py-6">
                  Get Started
                </Button>
                <Button variant="outline" className="border-driving-orange text-driving-orange hover:bg-driving-orange/10 text-lg px-8 py-6">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-blue-100 rounded-2xl overflow-hidden shadow-lg h-64">
                <div className="p-6 h-full bg-driving-blue-light relative">
                  <div className="absolute bottom-0 right-0 w-3/4">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-driving-blue opacity-80">
                      <path fill="currentColor" d="M42.7,-73.2C55.9,-65.7,67.8,-56,75.1,-43.2C82.4,-30.5,85,-14.8,83.1,-0.7C81.1,13.4,74.5,26.8,65.7,37.8C56.9,48.8,45.9,57.5,33.7,64C21.4,70.5,8,74.9,-5.9,77C-19.8,79.2,-39.5,79.1,-50,70C-60.5,60.9,-61.8,42.9,-65.2,26.9C-68.7,10.8,-74.3,-3.2,-72.6,-16.8C-71,-30.4,-62.1,-43.5,-50.5,-51.5C-38.8,-59.5,-24.5,-62.3,-10.7,-67C3,-71.7,16,-81.2,29.7,-79.8C43.5,-78.5,60,-80.3,42.7,-73.2Z" transform="translate(100 100)" />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-800">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <path d="M12 18v-6"/>
                      <path d="m9 15 3 3 3-3"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-orange-100 rounded-2xl overflow-hidden shadow-lg h-64">
                <div className="p-6 h-full bg-driving-orange-light relative">
                  <div className="absolute bottom-0 right-0 w-3/4">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-driving-orange opacity-60">
                      <path fill="currentColor" d="M39.9,-67.9C51.1,-58.4,59.5,-46.7,67.3,-33.9C75.1,-21,82.3,-7,81.5,6.4C80.7,19.9,72,32.8,62.1,43C52.1,53.2,40.9,60.7,28.7,65.8C16.5,70.9,3.4,73.6,-9.7,73.9C-22.7,74.1,-35.7,71.9,-47,65.6C-58.3,59.3,-67.9,48.9,-74.3,36.5C-80.8,24.2,-84,9.8,-82.4,-3.8C-80.7,-17.5,-74.2,-30.3,-65.7,-42.1C-57.2,-53.8,-46.7,-64.4,-34.5,-73C-22.4,-81.7,-8.5,-88.5,3.6,-84.9C15.7,-81.3,28.7,-77.5,39.9,-67.9Z" transform="translate(100 100)" />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-700">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-green-100 rounded-2xl overflow-hidden shadow-lg h-64">
                <div className="p-6 h-full bg-driving-green bg-opacity-20 relative">
                  <div className="absolute bottom-0 right-0 w-3/4">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-driving-green opacity-70">
                      <path fill="currentColor" d="M47.7,-50.2C58,-34.1,60.4,-17,59.1,-0.8C57.9,15.5,53,31,42.8,44.4C32.7,57.9,17.3,69.2,0,69.3C-17.3,69.3,-34.6,57.9,-48.4,44.4C-62.1,30.9,-72.3,15.5,-74.8,-2.1C-77.3,-19.8,-72.2,-39.6,-59.4,-55.7C-46.6,-71.9,-26.1,-84.3,-4.6,-79.7C16.9,-75,37.4,-66.3,47.7,-50.2Z" transform="translate(100 100)" />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
                      <path d="M9 17H7A5 5 0 0 1 7 7h2"/>
                      <path d="M15 17h2a5 5 0 0 0 0-10h-2"/>
                      <line x1="8" x2="16" y1="12" y2="12"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-100 rounded-2xl overflow-hidden shadow-lg h-64">
                <div className="p-6 h-full bg-driving-yellow bg-opacity-30 relative">
                  <div className="absolute bottom-0 right-0 w-3/4">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-driving-yellow opacity-70">
                      <path fill="currentColor" d="M46,-50.4C59.2,-35.1,69.5,-17.5,71.1,1.3C72.7,20.1,65.5,40.3,52.2,54.4C38.9,68.6,19.5,76.7,1.2,75.6C-17.1,74.4,-34.3,63.9,-49.6,49.7C-64.9,35.4,-78.4,17.7,-80.7,-1.8C-83,-21.3,-74.1,-42.6,-58.8,-57.9C-43.5,-73.2,-21.8,-82.5,-1.9,-80.9C17.9,-79.2,35.8,-65.6,46,-50.4Z" transform="translate(100 100)" />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-700">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" x2="12" y1="8" y2="12"/>
                      <line x1="12" x2="12.01" y1="16" y2="16"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trusted by section */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 font-medium mb-6">Powered By</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            <div className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg width="100" height="24" viewBox="0 0 100 24" fill="currentColor" className="h-8 w-auto">
                <rect width="100" height="24" rx="4" fillOpacity="0.2" />
                <text x="50" y="16" fontFamily="Arial" fontSize="9" textAnchor="middle" fill="currentColor">Partner 1</text>
              </svg>
            </div>
            <div className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg width="100" height="24" viewBox="0 0 100 24" fill="currentColor" className="h-8 w-auto">
                <rect width="100" height="24" rx="4" fillOpacity="0.2" />
                <text x="50" y="16" fontFamily="Arial" fontSize="9" textAnchor="middle" fill="currentColor">Partner 2</text>
              </svg>
            </div>
            <div className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg width="100" height="24" viewBox="0 0 100 24" fill="currentColor" className="h-8 w-auto">
                <rect width="100" height="24" rx="4" fillOpacity="0.2" />
                <text x="50" y="16" fontFamily="Arial" fontSize="9" textAnchor="middle" fill="currentColor">Partner 3</text>
              </svg>
            </div>
            <div className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg width="100" height="24" viewBox="0 0 100 24" fill="currentColor" className="h-8 w-auto">
                <rect width="100" height="24" rx="4" fillOpacity="0.2" />
                <text x="50" y="16" fontFamily="Arial" fontSize="9" textAnchor="middle" fill="currentColor">Partner 4</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
