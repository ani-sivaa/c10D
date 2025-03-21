import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'C10D - The Future of Venture Capital @ Duke & UNC',
  description: 'C10D is a premier venture capital program bridging Duke and UNC, offering hands-on investment experience through our Impact Fund and VC Competition.',
  keywords: 'venture capital, Duke, UNC, impact fund, student investors, startup investment',
  openGraph: {
    title: 'C10D - The Future of Venture Capital @ Duke & UNC',
    description: 'Join the premier venture capital program bridging Duke and UNC.',
    images: ['/images/team-photo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'C10D - The Future of Venture Capital @ Duke & UNC',
    description: 'Join the premier venture capital program bridging Duke and UNC.',
    images: ['/images/team-photo.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} bg-black text-white font-light flex flex-col min-h-screen antialiased`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}