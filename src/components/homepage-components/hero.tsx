'use client'
import React, { useEffect, useState } from 'react'
import NavigationBar from './nav-bar'
import { useRouter } from 'next/navigation'

function Hero() {
  const router = useRouter()
  const [videoSrc, setVideoSrc] = useState<string>('')
  const [isMobile, setIsMobile] = useState(false)

  const bookSession = () => { router.push('/bookings') }

  useEffect(() => {
    // Function to check and set device type
    const checkDevice = () => {
      const mobileCheck = window.innerWidth < 768
      setIsMobile(mobileCheck)
      setVideoSrc(mobileCheck ? '/video/vdeo-mobile.MOV' : '/video/bg-hero-video.mp4')
    }

    // Set initial state
    checkDevice()

    // Add event listener for window resize
    window.addEventListener('resize', checkDevice)

    // Cleanup function
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden border-0 outline-none">
      {/* Background Video with Fallback Image */}
      {videoSrc ? (
        <video
          key={videoSrc} // Force re-render when source changes
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={videoSrc} type="video/mp4" />
          {/* Fallback image if video can't load */}
          <img 
            src={isMobile ? '/images/newHeroMobile.png' : '/images/heronew.png'} 
            alt="Studio background"
            className="w-full h-full object-cover"
          />
        </video>
      ) : (
        // Static image fallback while determining device or if video fails
        <img 
          src={isMobile ? '/images/newHeroMobile.png' : '/images/heronew.png'} 
          alt="Studio background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      )}

      {/* Content Layer */}
      <div className='relative z-10 max-w-[1728px] h-full flex flex-col mx-auto'>
        <NavigationBar />
        <div className='w-[85%] mx-[21px] lg:w-[55%] lg:mx-10 mb-28 md:mb-10 3xl:mx-[100px] mt-auto'>
          <p className='text-[#FCFCFC] font-hankenGrotesk font-medium text-3xl leading-[39.09px] xl:text-4xl xl:leading-[45px] 3xl:text-[52px] 3xl:leading-[67.76px]'>
            Where Dubai&apos;s Bold Voices Come to Life. Dubai&apos;s
            World-Class Podcast Studio.
          </p>
          <div
            onClick={() => router.push('/bookings')}
            className='flex w-fit 3xl:mt-8 mt-6 hover:scale-105 lg:flex rounded-lg bg-gradient-to-b from-[#FFC49D] ring-2 ring-[#64391E] to-[#FF8C42] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans text-medium font-normal 3xl:leading-[21.82px] 3xl:text-base p-[0.4px]'
          >
            <button className='flex-1 bg-[#FF8C42] w-fit px-3 py-2 3xl:px-4 3xl:py-3 rounded-lg'>
              Book Your Session
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
