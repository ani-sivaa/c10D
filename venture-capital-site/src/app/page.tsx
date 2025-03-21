import Hero from '@/components/sections/Hero';
import ProgramSection from '@/components/sections/ProgramSection';
import ImpactFundSection from '@/components/sections/ImpactFundSection';
import ManagingPartnersSection from '@/components/sections/ManagingPartnersSection';
import ContactForm from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <Hero />
      
      {/* Program Section */}
      <ProgramSection />
      
      {/* Impact Fund Section */}
      <ImpactFundSection />
      

      
      {/* Managing Partners Section */}
      <ManagingPartnersSection />
      
      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}