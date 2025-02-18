import type { Metadata } from 'next';
import { Hanken_Grotesk, Nunito_Sans, Mulish } from 'next/font/google';
import { AnalyticScripts } from '@/lib/analyticScripts';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cursor from '@/components/custom-cursor';

import './globals.css';

const hankenGrotesk = Hanken_Grotesk({
  variable: '--font-hanken-grotesk',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-mulish',
});

export const metadata: Metadata = {
  title: 'ARcast',
  description: 'ARcast Official Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
       <head>
        <AnalyticScripts/>
      </head>
      <body
        className={`${hankenGrotesk.variable} ${nunitoSans.variable}  ${mulish.variable} antialiased cursor-none`}
      >
        <Cursor/>
        <ToastContainer position="top-right" autoClose={3000} />
        {children}
      </body>
    </html>
  );
}
