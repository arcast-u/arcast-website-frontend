import type { Metadata } from 'next';
import Script from 'next/script';
import { Hanken_Grotesk, Nunito_Sans, Mulish } from 'next/font/google';
import { AnalyticScripts } from '@/lib/analyticScripts';
import { LinkedInScripts } from '@/lib/linkedinscript';
// import { GoogleScripts } from '@/lib/googlescripts';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Cursor from '@/components/custom-cursor';

import './globals.css';
import { PostHogProvider } from './provider';

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
    <html lang='en' suppressHydrationWarning={true}>
      <head>
        <Script
          async
          strategy='afterInteractive'
          src='https://www.googletagmanager.com/gtag/js?id=AW-16991448779'
        ></Script>
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-16991448779');`,
          }}
        ></Script>

        <script
          src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
          defer
        ></script>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        />
        <AnalyticScripts />
        {/* <GoogleScripts/> */}
        <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16991448779"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16991448779');
          `,
        }}
      />
      </head>
      <body
        className={`${hankenGrotesk.variable} ${nunitoSans.variable}  ${mulish.variable} antialiased `}
      >
        {/* <Cursor /> */}
        <ToastContainer position='top-right' autoClose={3000} />
        <PostHogProvider>{children}</PostHogProvider>
        <LinkedInScripts />
        <GoogleAnalytics gaId='G-M1E9W0FZ76' />
      </body>
    </html>
  );
}
