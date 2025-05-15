
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">Toronto<span className="text-driving-orange">Drive</span></span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-base font-medium text-gray-700 hover:text-driving-orange transition-colors">
              Home
            </a>
            <a href="#courses" className="text-base font-medium text-gray-700 hover:text-driving-orange transition-colors">
              Courses
            </a>
            <a href="#process" className="text-base font-medium text-gray-700 hover:text-driving-orange transition-colors">
              Process
            </a>
            <a href="#pricing" className="text-base font-medium text-gray-700 hover:text-driving-orange transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-base font-medium text-gray-700 hover:text-driving-orange transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-base font-medium text-gray-700 hover:text-driving-orange transition-colors">
              Contact
            </a>
          </nav>
          
          {/* Call-to-action Button */}
          <div className="hidden md:flex">
            <Button className="bg-driving-orange hover:bg-driving-orange/90 text-white">
              Book a Lesson
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-driving-orange focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-driving-orange hover:bg-gray-50">
              Home
            </a>
            <a href="#courses" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-driving-orange hover:bg-gray-50">
              Courses
            </a>
            <a href="#process" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-driving-orange hover:bg-gray-50">
              Process
            </a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-driving-orange hover:bg-gray-50">
              Pricing
            </a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-driving-orange hover:bg-gray-50">
              About Us
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-driving-orange hover:bg-gray-50">
              Contact
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-driving-orange hover:bg-driving-orange/90 text-white">
                Book a Lesson
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
