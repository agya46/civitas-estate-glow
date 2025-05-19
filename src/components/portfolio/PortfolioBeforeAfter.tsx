
import React from 'react';

interface PortfolioBeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

export const PortfolioBeforeAfter: React.FC<PortfolioBeforeAfterProps> = ({ beforeImage, afterImage }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Before & After</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
          <h4 className="text-lg font-medium mb-2">Before</h4>
          <img 
            src={beforeImage} 
            alt="Before" 
            className="w-full h-80 object-cover rounded-md shadow-md" 
          />
        </div>
        <div>
          <h4 className="text-lg font-medium mb-2">After</h4>
          <img 
            src={afterImage} 
            alt="After" 
            className="w-full h-80 object-cover rounded-md shadow-md" 
          />
        </div>
      </div>
    </div>
  );
};
