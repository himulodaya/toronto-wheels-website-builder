
import React from 'react';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  icon,
  color,
  delay = 0,
}) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`p-6 flex flex-col h-full`}>
        <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-5`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Button variant="outline" className="border-driving-orange text-driving-orange hover:bg-driving-orange/10">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
