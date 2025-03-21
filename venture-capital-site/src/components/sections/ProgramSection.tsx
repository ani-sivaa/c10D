import Image from 'next/image';
import Link from 'next/link';

const ProgramSection = () => {
  return (
    <section id="program" className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Image */}
          <div className="relative h-96 sm:h-[400px] lg:h-full min-h-[320px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/networking-event.jpg"
              alt="VC networking event"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Right side - Program Info */}
          <div className="flex flex-col justify-center space-y-12 p-4 sm:p-6">
            <div className="transform hover:scale-105 transition duration-300">
              <div className="text-blue-400 font-bold mb-3 text-xl tracking-wider">01 |</div>
              <Link href="/competition" className="group">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                  DUKE x UNC Venture Capital Competition
                </h2>
                <p className="text-gray-300 text-lg font-medium">
                  Powered by C10D & Kenan Flagler&apos;s Undergraduate VC Club
                </p>
              </Link>
            </div>
            
            <div className="transform hover:scale-105 transition duration-300">
              <div className="text-blue-400 font-bold mb-3 text-xl tracking-wider">02 |</div>
              <Link href="/impact-fund" className="group">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                  C10D Impact Venture Fund
                </h2>
                <p className="text-gray-300 text-lg font-medium">
                  Join C10D as an inaugural partner or associate and manage the premier impact VC fund in the RTP
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;