'use client';

import { GoogleAnalytics } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function GoogleAdsConversion() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes('/')) {
      gtag('event', 'conversion', {
        send_to: 'AW-16991448779/hQ1yCNK6_s0aEMvdk6Y_',
      });
    }
  }, [pathname]);

  return (
    <>
      <GoogleAnalytics gaId="AW-16991448779" />
    </>
  );
}