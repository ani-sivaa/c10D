import Image from 'next/image';

const ProgramSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Image */}
          <div className="relative h-80 md:h-full min-h-[320px]">
            <Image
              src="/images/networking-event.jpg"
              alt="VC networking event"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Right side - Program Info */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <div className="text-blue-300 font-bold mb-2 text-lg">01 |</div>
              <h2 className="text-xl md:text-3xl text-white font-bold mb-3">DUKE x UNC Venture Capital Competition</h2>
              <p className="text-gray-200 text-base">
                Powered by C10D & Kenan Flagler&apos;s Undergraduate VC Club
              </p>
            </div>
            
            <div>
              <div className="text-blue-300 font-bold mb-2 text-lg">02 |</div>
              <h2 className="text-xl md:text-3xl text-white font-bold mb-3">C10D Impact Venture Fund</h2>
              <p className="text-gray-200 text-base">
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