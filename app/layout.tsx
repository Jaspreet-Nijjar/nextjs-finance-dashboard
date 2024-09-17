import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export const metadata: Metadata = {
  title: {
    template: '%s - Finance Dashboard',
    default: 'Home | Finance Dashboard',
  },
  description: 'Your personal finance dashboard',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
