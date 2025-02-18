'use client'

import Script from 'next/script'

export function AnalyticScripts() {
  // const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

  return (
    <>
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '982289293294357');
            fbq('track', 'PageView');

        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=982289293294357&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      
      {/* LinkedIn Insight Tag */}
      <Script id="linkedin-pixel" strategy="afterInteractive">
        {`
          _linkedin_partner_id = "8041705";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          </script><script type="text/javascript">
          (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})(window.lintrk);
        `}
      </Script>
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }} 
          alt="" 
          src={`https://px.ads.linkedin.com/collect/?pid=8041705&fmt=gif`} 
        />
      </noscript>
    </>
  )
}