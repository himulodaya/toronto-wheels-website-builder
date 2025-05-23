
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatar?: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  avatar,
  rating,
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-md">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-lg italic text-white mb-4">"{quote}"</blockquote>
      <div className="flex items-center">
        {avatar ? (
          <img 
            src={avatar} 
            alt={name} 
            className="h-10 w-10 rounded-full mr-3 object-cover" 
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-driving-orange flex items-center justify-center text-white mr-3">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-white/70">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
