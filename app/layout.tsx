import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Rubik } from 'next/font/google';
import './globals.css';
import Footer from './components/common/Footer';
import Sidebar from './components/common/Sidebar';

export const metadata: Metadata = {
  title: {
    template: '%s - Finance Dashboard',
    default: 'Home | Finance Dashboard',
  },
  description: 'Your personal finance dashboard',
};

const inter = Inter({ subsets: ['latin'] });

const rubik = Rubik({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen bg-bodyBG ${rubik.className}`}>
        <Sidebar />
        <div className="flex-grow p-6">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
