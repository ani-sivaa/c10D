import Image from 'next/image';

const ProgramSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Image */}
          <div className="relative h-80 md:h-full min-h-[320px]">
            {/* This will be replaced with the actual networking event image */}
            <div className="w-full h-full bg-gray-900 flex items-center justify-center">
              <span className="text-gray-700">Networking Event Image</span>
            </div>
          </div>
          
          {/* Right side - Program Info */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <div className="text-gray-500 font-light mb-2 text-lg">01 |</div>
              <h2 className="text-xl md:text-2xl text-blue-400 font-light mb-2">DUKE x UNC Venture Capital Competition</h2>
              <p className="text-gray-400 text-sm">
                Powered by C10D & Kenan Flagler's Undergraduate VC Club
              </p>
            </div>
            
            <div>
              <div className="text-gray-500 font-light mb-2 text-lg">02 |</div>
              <h2 className="text-xl md:text-2xl text-blue-400 font-light mb-2">C10D Impact Venture Fund</h2>
              <p className="text-gray-400 text-sm">
                Join C10D as an inaugural partner or associate and manage the premier impact VC fund in the RTP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;