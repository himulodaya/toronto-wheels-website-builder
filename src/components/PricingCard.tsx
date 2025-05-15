
import React from 'react';
import { Button } from '@/components/ui/button';

interface PricingCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  popular?: boolean;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  originalPrice,
  description,
  features,
  popular = false,
  delay = 0,
}) => {
  return (
    <div 
      className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 animate-fade-in ${
        popular ? 'border-driving-orange shadow-lg scale-105 z-10' : 'border-gray-200 shadow hover:shadow-md'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {popular && (
        <div className="bg-driving-orange text-white text-center py-2 font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="mb-6">
          <div className="flex items-end">
            <span className="text-4xl font-bold">${price}</span>
            {originalPrice && (
              <span className="text-gray-500 line-through ml-2">${originalPrice}</span>
            )}
          </div>
        </div>
        <ul className="mb-8 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-6 w-6 text-driving-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="ml-3 text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className={`w-full ${popular ? 'bg-driving-orange hover:bg-driving-orange/90' : 'bg-gray-800 hover:bg-gray-900'} text-white`}>
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
