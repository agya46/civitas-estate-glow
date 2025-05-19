
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface FeaturesListProps {
  features: string[];
  title?: string;
}

export const FeaturesList: React.FC<FeaturesListProps> = ({ features, title = "Key Features" }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="text-civitas-primary mr-3 mt-1 flex-shrink-0" size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
