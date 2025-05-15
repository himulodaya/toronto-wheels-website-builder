
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">Toronto<span className="text-driving-orange">Drive</span></span>
            </div>
            <p className="text-gray-400 mb-4">
              Premier driving instruction in Toronto, providing high-quality education for new and experienced drivers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-driving-orange transition-colors">Home</a>
              </li>
              <li>
                <a href="#courses" className="text-gray-400 hover:text-driving-orange transition-colors">Courses</a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-driving-orange transition-colors">License Process</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-driving-orange transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-driving-orange transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-driving-orange transition-colors">Car Driving Lessons</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-driving-orange transition-colors">Highway Training</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-driving-orange transition-colors">G2 Road Test Prep</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-driving-orange transition-colors">G Road Test Prep</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-driving-orange transition-colors">Winter Driving</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Yonge Street</p>
              <p className="mb-2">Toronto, ON M4W 2Y8</p>
              <p className="mb-2">Canada</p>
              <p className="mb-2">
                <a href="tel:+14165550123" className="hover:text-driving-orange transition-colors">
                  (416) 555-0123
                </a>
              </p>
              <p>
                <a href="mailto:info@torontodrive.com" className="hover:text-driving-orange transition-colors">
                  info@torontodrive.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TorontoDrive. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
