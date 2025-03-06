import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Load Inter with lighter font weights
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'The Future of Venture Capital @ Duke & UNC',
  description: 'C10D Impact Venture Fund and Duke x UNC Venture Capital Competition',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-black text-white font-light flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}