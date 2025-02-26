import Hero from '@/components/sections/Hero';
import ProgramSection from '@/components/sections/ProgramSection';
import ImpactFundSection from '@/components/sections/ImpactFundSection';
import InvestmentCategories from '@/components/sections/InvestmentCategories';
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
      
      {/* Investment Categories */}
      <InvestmentCategories />
      
      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}