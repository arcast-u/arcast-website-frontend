'use client'
import React, {useState} from 'react';
import ServiceOption from './service-option';

const services = [
    {
      name: "Podcast Trailer",
      price: "2500 AED",
      description: "Craft a compelling intro video for your show's mission. Includes voiceover, music, tailored visuals, and a logo jingle for a lasting impression.",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/b70ac854ddd67977b752afcebd48ed3b3a6d9e7166cbfa1f316b69692ec16027?apiKey=da0366cd14364f569c342b06124fe9df&",
      selected: true,
      imgAlt: "Podcast Trailer Image"
    },
    {
      name: "Podcast Branding",
      price: "7500 AED",
      description: "Complete A/V branding: professionally designed logo, color scheme, typography, cover art, jingle, social media visuals, and brand book.",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/40f0f35509d05d2e10a4fe17452b71df2edbc0ea70361226cc2c6717280e35fd?apiKey=da0366cd14364f569c342b06124fe9df&",
      selected: false,
      imgAlt: "Podcast Branding Image"
    },
    {
      name: "Jingle",
      price: "850 AED",
      description: "Custom logo reveal animation featuring your podcast logo and fitting music for a memorable opening and outro.",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/05e87165d9d1e1f720db3a948b808db182ffd53b8c6635d3aa7756435a26f2e7?apiKey=da0366cd14364f569c342b06124fe9df&",
      selected: false,
      imgAlt: "Jingle Image"
    },
    {
      name: "Subtitles (per session)",
      price: "400 AED",
      description: "Adding subtitles/captions to your final video for accessibility and audience engagement.",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/07f3a917c00c354707557c4fb4202245e5d620265e2fee7e556c233e9183852b?apiKey=da0366cd14364f569c342b06124fe9df&",
      selected: false,
      imgAlt: "Subtitles Image"
    },
    {
      name: "Content Distribution",
      price: "385 AED",
      description: "Distribute your final podcast/video to major platforms (YouTube, Spotify, Apple Podcasts, etc.) and handle basic metadata setup.",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/c796f055feccffee5e973b3c30bddf7cbd45c3b1c086e6a994d87fd7fb2a3c33?apiKey=da0366cd14364f569c342b06124fe9df&",
      selected: false,
      imgAlt: "Content Distribution Image"
    },
    {
      name: "Teleprompter",
      price: "50 AED",
      description: "Use of a teleprompter in-studio for smooth delivery.",
      imgSrc: "http://b.io/ext_10",
      selected: false,
      imgAlt: "Teleprompter Image"
    },
    {
      name: "Multi-Cam Recording",
      price: "200 AED",
      description: "Upgrade from 3 cameras to 5 cameras total for maximum engagement.",
      imgSrc: "http://b.io/ext_11",
      selected: false,
      imgAlt: "Multi-Cam Recording Image"
    },
    {
      name: "Short Form Reel",
      price: "200 AED",
      description: "A single short-form clip (up to 60–90s) with subtitles and simple visual effects (perfect for TikTok, IG Reels, YT Shorts).",
      imgSrc: "http://b.io/ext_12",
      selected: false,
      imgAlt: "Short Form Reel Image"
    },
    {
      name: "3 Short Form Reels",
      price: "500 AED",
      description: "Three scroll-stopping clips (each up to ~90s). Subtitles, branding elements, and on-screen text.",
      imgSrc: "http://b.io/ext_13",
      selected: false,
      imgAlt: "3 Short Form Reels Image"
    },
    {
      name: "5 Short Form Reels",
      price: "1000 AED",
      description: "Five scroll-stopping clips with advanced styling, perfect for multi-platform promotion.",
      imgSrc: "http://b.io/ext_14",
      selected: false,
      imgAlt: "5 Short Form Reels Image"
    },
    {
      name: "Standard Episode Edit",
      price: "500 AED",
      description: "Complete audio/video editing for 1 episode (up to 60 min raw). Includes logos, music integration, removing unwanted parts, color correction, and audio leveling.",
      imgSrc: "http://b.io/ext_15",
      selected: false,
      imgAlt: "Standard Episode Edit Image"
    },
    {
      name: "Signature Episode Edit",
      price: "1000 AED",
      description: "Everything in Standard Edit plus a bespoke trailer opener that hooks your audience from the start, styled uniquely to stand out.",
      imgSrc: "http://b.io/ext_16",
      selected: false,
      imgAlt: "Signature Episode Edit Image"
    }
  ];

function CustomServices() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Podcast Trailer"]);
    const handleServiceToggle = (serviceName: string) => {
        setSelectedServices(prev => 
          prev.includes(serviceName)
            ? prev.filter(name => name !== serviceName)
            : [...prev, serviceName]
        );
      };
  return (
    <section className="3xl:mt-12 mt-10">
        <h2 className="text-3xl font-medium text-zinc-800">
        Choose custom services
        <span className="text-2xl italic text-neutral-400">(optional)</span>
        </h2>
        <div className="flex flex-col mt-6">
        {services.map((service, index) => (
            <ServiceOption
            key={index}
            {...service}
            selected={selectedServices.includes(service.name)}
            onSelect={() => handleServiceToggle(service.name)}
            />
        ))}
        </div>
    </section>
  )
}

export default CustomServices