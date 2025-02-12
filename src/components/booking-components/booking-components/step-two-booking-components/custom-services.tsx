// 'use client'
// import React, {useState} from 'react';
// import ServiceOption from './service-option';


// type Selector = {
//     duration: number;
//   setDuration: (value: number) => void
// }

// const services = [
//     {
//         id: 'standard-reels',
//         name: 'Standard Reels',
//         price: '500 AED',
//         description: 'Three scroll-stopping clips (each up to ~90s). Subtitles, branding elements, and on-screen text.',
//         imgSrc: '/images/custom1.webp',
//         imgAlt: 'Illustration of standard reels service'
//       },
//       {
//         id: 'signature-reels',
//         name: 'Signature Reels',
//         price: '1000 AED',
//         description: 'Five scroll-stopping clips with advanced styling, perfect for multi-platform promotion.',
//         imgSrc: '/images/custom2.webp',
//         imgAlt: 'Illustration of signature reels service'
//       },
//       {
//         id: 'standard-episode-edit',
//         name: 'Standard Episode Edit',
//         price: '500 AED',
//         description: 'Complete audio/video editing for 1 episode (up to 60 min raw). Includes logos, music integration, removing unwanted parts, color correction, and audio leveling.',
//         imgSrc: '/images/custom3.webp',
//         imgAlt: 'Illustration of standard episode edit service'
//       },
//       {
//         id: 'signature-episode-edit',
//         name: 'Signature Episode Edit',
//         price: '1000 AED',
//         description: 'Everything in Standard Edit plus a bespoke trailer opener that hooks your audience from the start, styled uniquely to stand out.',
//         imgSrc: '/images/custom4.webp',
//         imgAlt: 'Illustration of signature episode edit service'
//       },
//       {
//         id: 'live-mix',
//         name: 'Live Mix',
//         price: '400 AED',
//         description: 'Live-mixed episode with synced cameras and audio. Live cutting of your video with synced audio',
//         imgSrc: '/images/custom5.webp',
//         imgAlt: 'Illustration of live mix service'
//       },
//       {
//         id: 'podcast-trailer',
//         name: 'Podcast Trailer',
//         price: '2500 AED',
//         description: 'Craft a compelling intro video for your show\'s mission. Includes voiceover, music, tailored visuals, and a logo jingle for a lasting impression.',
//         imgSrc: '/images/custom6.webp',
//         imgAlt: 'Illustration of podcast trailer service'
//       },
//       {
//         id: 'podcast-branding',
//         name: 'Podcast Branding',
//         price: '7500 AED',
//         description: 'Complete A/V branding: professionally designed logo, color scheme, typography, cover art, jingle, social media visuals, and brand book.',
//         imgSrc: '/images/custom7.webp',
//         imgAlt: 'Illustration of podcast branding service'
//       },
//       {
//         id: 'jingle',
//         name: 'Jingle',
//         price: '850 AED',
//         description: 'Custom logo reveal animation featuring your podcast logo and fitting music for a memorable opening and outro.',
//         imgSrc: '/images/custom8.webp',
//         imgAlt: 'Illustration of jingle service'
//       },
//       {
//         id: 'subtitles',
//         name: 'Subtitles (per session)',
//         price: '400 AED',
//         description: 'Adding subtitles/captions to your final video for accessibility and audience engagement.',
//         imgSrc: '/images/custom9.webp',
//         imgAlt: 'Illustration of subtitles service'
//       },
//       {
//         id: 'content-distribution',
//         name: 'Content Distribution',
//         price: '385 AED',
//         description: 'Distribute your final podcast/video to major platforms (YouTube, Spotify, Apple Podcasts, etc.) and handle basic metadata setup.',
//         imgSrc: '/images/custom10.webp',
//         imgAlt: 'Illustration of content distribution service'
//       },
//       {
//         id: 'teleprompter',
//         name: 'Teleprompter',
//         price: '50 AED',
//         description: 'Use of a teleprompter in-studio for smooth delivery.',
//         imgSrc: '/images/custom11.webp',
//         imgAlt: 'Illustration of teleprompter service'
//       },
//       {
//         id: 'multi-cam-recording',
//         name: 'Multi-Cam Recording',
//         price: '200 AED',
//         description: 'Upgrade from 3 cameras to 5 cameras total for maximum engagement.',
//         imgSrc: '/images/custom12.webp',
//         imgAlt: 'Illustration of multi-cam recording service'
//       }
// ];

// function CustomServices({duration, setDuration}: Selector) {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
    
//   return (
//     <section className=" mt-8 lg:mt-10">
//         <h2 className="header-text">
//           à la carte services
//         <span className="text-xl leading-[28.74px] 3xl:text-2xl italic 3xl:leading-[32.74px] text-[#989898]">(optional)</span>
//         </h2>
//         <div className="flex flex-col mt-3 3xl:mt-5">
//         {services.map((service, index) => (
//             <ServiceOption
//             key={index}
//             {...service}
//             count={index}
//             groupName="service-options" 
//             selected={selectedIndex === index}
//             onSelect={() => setSelectedIndex(index)}
//             duration={duration} 
//             setDuration={setDuration}
//             />
//         ))}
//         </div>
//     </section>
//   )
// }

// export default CustomServices