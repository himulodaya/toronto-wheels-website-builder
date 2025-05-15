
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BookingSection from '@/components/BookingSection';
import CourseCard from '@/components/CourseCard';
import ProcessStep from '@/components/ProcessStep';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Car, BookOpen, AlertTriangle, Landmark, BadgeHelp } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Added Booking Section right after the hero section */}
        <BookingSection />
        
        {/* Features section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need <br className="hidden sm:block" />in one place</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start">
                <div className="bg-driving-orange/10 p-4 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-driving-orange">
                    <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">28 years experienced</h3>
                  <p className="text-gray-600">Thousands of students taught in Ontario to become confident and safe drivers.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-driving-orange/10 p-4 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-driving-orange">
                    <path d="M12 2 L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4.9</h3>
                  <p className="text-gray-600">Average rating from over 1,500 student reviews.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Courses section */}
        <section id="courses" className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Multiple courses</h2>
              <p className="text-gray-600">
                Comprehensive driver education for all experience levels
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <CourseCard
                title="Car Driving"
                description="Perfect for beginners learning to drive for the first time with our patient instructors."
                icon={<Car size={32} className="text-white" />}
                color="bg-driving-blue"
                delay={100}
              />
              <CourseCard
                title="Highway Code"
                description="Master the rules of the road with comprehensive classroom and online training."
                icon={<BookOpen size={32} className="text-white" />}
                color="bg-driving-yellow"
                delay={200}
              />
              <CourseCard
                title="Traffic Science"
                description="Learn about traffic patterns, road signs, and defensive driving techniques."
                icon={<AlertTriangle size={32} className="text-white" />}
                color="bg-driving-red"
                delay={300}
              />
              <CourseCard
                title="Emergency Aid"
                description="Essential first aid training and emergency response for responsible drivers."
                icon={<Landmark size={32} className="text-white" />}
                color="bg-driving-green"
                delay={400}
              />
            </div>
          </div>
        </section>
        
        {/* Process section */}
        <section id="process" className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Driver's license process</h2>
              <p className="text-gray-600">
                Your step-by-step guide to getting your Ontario driver's license
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              <ProcessStep
                step={1}
                title="Book your classes"
                description="Register for our ministry-approved beginner driver education program."
                icon={<Calendar />}
                delay={100}
              />
              <ProcessStep
                step={2}
                title="Complete driving test"
                description="Take G1 written knowledge test at a DriveTest Centre."
                icon={<FileText />}
                delay={200}
              />
              <ProcessStep
                step={3}
                title="Practice driving"
                description="Complete your in-car lessons with our certified instructors."
                icon={<Car />}
                delay={300}
              />
              <ProcessStep
                step={4}
                title="Schedule G2 road test"
                description="Book your G2 road test after minimum 12 months."
                icon={<Calendar />}
                delay={400}
              />
              <ProcessStep
                step={5}
                title="Pass G2 road test"
                description="Complete and pass your G2 road test at a DriveTest Centre."
                icon={<CheckSquare />}
                delay={500}
              />
              <ProcessStep
                step={6}
                title="Get full license"
                description="Take your full G license test after 12 months with G2."
                icon={<Award />}
                delay={600}
              />
            </div>
          </div>
        </section>
        
        {/* Pricing section */}
        <section id="pricing" className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">License pricing option</h2>
              <p className="text-gray-600">
                Choose the package that fits your needs and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PricingCard
                title="Two Wheeler"
                price={90}
                originalPrice={130}
                description="Basic plan for scooter/motorcycle training with theory tests."
                features={[
                  "10 hours classroom lessons",
                  "5 hours in-vehicle training",
                  "Online practice tests",
                  "Road test preparation",
                  "Certificate upon completion"
                ]}
                delay={100}
              />
              <PricingCard
                title="Four-wheel vehicle"
                price={120}
                originalPrice={150}
                description="Complete car driving course with both theory and practical training."
                features={[
                  "20 hours classroom lessons",
                  "10 hours in-vehicle training",
                  "Online practice tests",
                  "Road test preparation",
                  "Certificate upon completion",
                  "Free retest if failed"
                ]}
                popular={true}
                delay={200}
              />
              <PricingCard
                title="Big vehicle"
                price={150}
                originalPrice={180}
                description="Commercial license training for buses, trucks and heavy vehicles."
                features={[
                  "30 hours classroom lessons",
                  "15 hours in-vehicle training",
                  "Specialized vehicle handling",
                  "Online practice tests",
                  "Road test preparation",
                  "Certificate upon completion",
                  "Free retest if failed"
                ]}
                delay={300}
              />
            </div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section id="about" className="section-padding bg-gray-900 text-white">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We care about our applicant</h2>
              <p className="text-gray-300">
                Don't just take our word for it — hear what our students have to say
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                quote="Explained in great detail and the facilities provided are very comfortable."
                name="Priya Sharma"
                title="G2 License Graduate"
                rating={5}
              />
              <TestimonialCard
                quote="The instructors are patient and knowledgeable. Helped me overcome my driving anxiety."
                name="Michael Chen"
                title="New Driver"
                rating={5}
              />
              <TestimonialCard
                quote="Passed my test on the first attempt thanks to their thorough preparation techniques."
                name="Sarah Johnson"
                title="Full G License Holder"
                rating={4}
              />
            </div>
          </div>
        </section>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

// Icons for process steps
function Calendar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-driving-orange">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function FileText() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-driving-orange">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function CheckSquare() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-driving-orange">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

function Award() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-driving-orange">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}

export default Index;
