"use client";

import CategoryCard from '@/components/ui/CategoryCard';
import FinanceBackground from '@/components/ui/FinanceBackground';

const categories = [
  {
    id: 1,
    title: 'Energy',
    description: 'Fuel innovation by investing in sustainable energy solutions, clean technology, and infrastructure advancements to power a greener future.',
  },
  {
    id: 2,
    title: 'Technology',
    description: 'Drive innovation by investing in cutting-edge technology solutions, transformative digital platforms, and disruptive startups to shape the future of connectivity and intelligence.',
  },
  {
    id: 3,
    title: 'Fintech',
    description: 'Empower financial evolution by investing in innovative fintech solutions, digital banking platforms, and payment technologies that redefine the future of finance.',
  },
];

const InvestmentCategories = () => {
  return (
    <section className="py-16 bg-black relative">
      {/* Finance background with low opacity */}
      <FinanceBackground className="opacity-20" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {categories.map((category) => (
            <CategoryCard 
              key={category.id}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {categories.map((category) => (
            <CategoryCard 
              key={`repeat-${category.id}`}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
        
        <div className="text-center text-gray-500 text-sm">
          <p>and more...</p>
        </div>
      </div>
    </section>
  );
};


export default InvestmentCategories;