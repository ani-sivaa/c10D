"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ImpactFundPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 py-6 px-8 bg-black bg-opacity-80 backdrop-blur-sm">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-12">
            <Link href="/" className="text-blue-400 font-light text-lg hover:text-cyan-400 transition-colors">
              C10D
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logos/duke-logo.svg"
              alt="Duke University"
              width={40}
              height={40}
              className="opacity-80"
            />
            <span className="text-gray-400">x</span>
            <Image
              src="/images/logos/unc-logo.svg"
              alt="UNC Chapel Hill"
              width={40}
              height={40}
              className="opacity-80"
            />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-8 py-16">
        <div className="max-w-5xl">
          <div className="mb-2 text-gray-400">The C10D</div>
          <h1 className="text-4xl md:text-6xl text-blue-400 font-light italic mb-8">
            Impact Fund
          </h1>

          <p className="text-lg mb-10 max-w-3xl text-gray-200">
            A cross-campus fund for Duke & UNC's sharpest investors. No fluff—just real
            opportunities to scout, invest, and lead.
          </p>

          <ul className="space-y-4 mb-12 max-w-3xl text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">•</span>
              <span>Select student partners run specific industry sectors</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">•</span>
              <span>Coinvestment opportunities with top student & alum-backed startups</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">•</span>
              <span>Pick your focus—from fintech to deep tech</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">•</span>
              <span>Advisory board of top VCs & startup founders from the RTP, Bay Area & beyond</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">•</span>
              <span>Backed by Duke & UNC's venture communities</span>
            </li>
          </ul>

          <div className="flex space-x-4">
            <Link
              href="/#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded transition-colors"
            >
              Apply as a Partner
            </Link>
            <Link
              href="/"
              className="inline-block border border-blue-400 text-blue-400 hover:bg-blue-400/10 font-medium py-3 px-8 rounded transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    
    </div>
  );
};

export default ImpactFundPage;