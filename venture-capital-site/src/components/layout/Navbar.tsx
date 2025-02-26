import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-blue-400 font-light">
          <span className="text-lg">C10D</span>
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link href="/about" className="text-white text-sm hover:text-gray-300 transition">
            About
          </Link>
          <Link href="/contact" className="text-white text-sm hover:text-gray-300 transition">
            Contact
          </Link>
          <Link href="/overview" className="text-white text-sm hover:text-gray-300 transition">
            Overview
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;