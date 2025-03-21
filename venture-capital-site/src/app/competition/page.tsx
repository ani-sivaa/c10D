"use client";

import Image from 'next/image';
import Link from 'next/link';

const CompetitionPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section */}
      <main className="container mx-auto px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="text-blue-400 hover:text-cyan-400 transition-colors mb-8 inline-block">
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-6xl text-blue-400 font-light mb-6">
            DUKE × UNC
            <span className="block mt-2">Venture Capital Competition</span>
          </h1>

          <p className="text-xl mb-12 max-w-3xl text-gray-200">
            For those who want in on VC, not just talk about it. A challenge where the best minds from both schools go head-to-head. We want new ideas to be shared.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-900/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <h2 className="text-2xl text-blue-400 mb-6">Competition Highlights</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Compete with top Duke & UNC students</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Judged by elite alumni VCs & startup founders</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Winners join the C10D Fund & community</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Bragging rights + real-world deal flow investment opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 flex flex-col justify-center">
              <h2 className="text-2xl text-blue-400 mb-6">Ready to Compete?</h2>
              <p className="text-gray-300 mb-8">
                Join the premier venture capital competition in the Research Triangle. Show your skills, network with industry leaders, and potentially kickstart your VC career.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 w-full md:w-auto text-center"
              >
                Apply to Compete
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-8">
            <Image
              src="/images/logos/duke-logo.svg"
              alt="Duke University"
              width={80}
              height={80}
              className="opacity-80"
            />
            <span className="text-4xl text-gray-400">×</span>
            <Image
              src="/images/logos/unc-logo.svg"
              alt="UNC Chapel Hill"
              width={80}
              height={80}
              className="opacity-80"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompetitionPage;