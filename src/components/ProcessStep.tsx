
import React from 'react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  icon,
  delay = 0,
}) => {
  return (
    <div 
      className="flex flex-col items-center text-center animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-driving-orange-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="bg-driving-orange text-white text-sm font-semibold py-1 px-3 rounded-full mb-3">
        Step {step}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ProcessStep;
