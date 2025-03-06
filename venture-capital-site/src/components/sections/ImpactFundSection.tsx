"use client";

import Link from 'next/link';

const ImpactFundSection = () => {
  return (
    <section 
      id="impact-fund" 
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Simplified background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full bg-indigo-600 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-blue-400 leading-tight">The C10D</h2>
          
          <p className="text-4xl md:text-5xl italic font-light mb-8 text-blue-400">Impact Venture Fund</p>
          
          <div className="bg-black/30 p-6 rounded-lg border border-blue-500/20 max-w-3xl mx-auto">
            <p className="text-gray-200 leading-relaxed">
              A cross-campus fund for Duke & UNC's sharpest investors. No fluff—just real opportunities to scout, invest, and lead.
            </p>
          </div>
        </div>

        {/* Investment Categories Grid - Simplified */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {categories.map((category) => (
            <div 
              key={category.name}
              className="category-card"
            >
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 
                           shadow-lg hover:shadow-blue-500/20
                           transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-blue-400 mb-6">
                    {category.icon}
                  </div>
                  
                  <h3 className="text-blue-400 text-xl font-light tracking-wider">
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 mb-4 text-center">
          <Link 
            href="/impact-fund" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Learn More About the Fund
          </Link>
        </div>

        <div className="text-center mt-4">
          <span className="text-blue-400 text-lg">
            and more...
          </span>
        </div>
      </div>
    </section>
  );
};

// Simplified categories data
const categories = [
  {
    name: "Energy",
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  },
  {
    name: "Technology",
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    )
  },
  {
    name: "Fintech",
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 9v-2" />
        <path d="M12 17v-2" />
        <path d="M9 12h-2" />
        <path d="M17 12h-2" />
      </svg>
    )
  },
  {
    name: "Financial Services",
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 18.5c-1.4 1-3.1 1.5-5 1.5-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8c0 .6-.1 1.2-.2 1.7" />
        <path d="M12 16v-4" />
        <path d="M8 12h8" />
      </svg>
    )
  },
  {
    name: "Healthcare",
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 21h6m-6-4h6m-6-4h6M9 5h6" />
        <path d="M5 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0m8 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
      </svg>
    )
  },
  {
    name: "Real Estate",
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    )
  }
];

export default ImpactFundSection;