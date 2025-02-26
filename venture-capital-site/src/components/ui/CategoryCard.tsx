import React from 'react';

interface CategoryCardProps {
  title: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-900 p-6 h-full border border-gray-800">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-normal">{title}</h3>
        <div className="w-6 h-6 flex items-center justify-center">
          {/* Lightning icon - replace with actual SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <p className="text-gray-500 text-xs">{description}</p>
    </div>
  );
};

export default CategoryCard;