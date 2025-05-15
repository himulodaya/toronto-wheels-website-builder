
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600">
            Apply for your driver's license today or contact us with any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-black/90 text-white p-8 rounded-xl">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Driver and instructor" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            
            <h3 className="text-2xl font-bold mb-6">Apply for new driver's license</h3>
            
            <p className="text-white/80 mb-6">
              Ready to start your journey to becoming a licensed driver? Our team of certified instructors is here to guide you every step of the way.
            </p>
            
            <Button className="w-full bg-driving-orange hover:bg-driving-orange/90 text-white">
              Get Started
            </Button>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <div className="bg-driving-orange/10 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-driving-orange" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">(416) 555-0123</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-driving-orange/10 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-driving-orange" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">info@torontodrive.com</p>
                </div>
              </div>
              
              <div className="flex items-start sm:col-span-2">
                <div className="bg-driving-orange/10 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-driving-orange" />
                </div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">123 Yonge Street, Toronto, ON M4W 2Y8</p>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="How can we help you?" rows={4} required />
              </div>
              
              <Button type="submit" className="w-full bg-driving-orange hover:bg-driving-orange/90 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
