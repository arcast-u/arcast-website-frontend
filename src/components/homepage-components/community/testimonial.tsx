import Image from 'next/image';

const testimonialImages = [
  [
    '/images/comm1.png',
    '/images/comm2.png',
    '/images/comm3.png',
    '/images/comm4.png',
    '/images/comm5.png',
  ],
  [
    '/images/comm6.png',
    '/images/comm7.png',
    '/images/comm8.png',
    '/images/comm9.png',
    '/images/comm10.png',
  ],
  [
    '/images/comm11.png',
    '/images/comm12.png',
    '/images/comm13.png',
    '/images/comm14.png',
    '/images/comm15.png',
  ],
  [
    '/images/comm16.png',
    '/images/comm17.png',
    '/images/comm18.png',
    '/images/comm19.png',
    '/images/comm20.png',
  ],
];

const TestimonialMarquee = () => {
  // Flatten arrays for mobile view
  const mobileImages = testimonialImages.flat();
  
  return (
    <div className="relative overflow-hidden h-full">
      {/* Mobile View (1 column) */}
      <div className="md:hidden relative flex gap-4 overflow-hidden">
        <div className="flex-1 animate-marquee-up-delayed">
          <div className="flex flex-col gap-4">
            {[...mobileImages, ...mobileImages].map((src, idx) => (
              <div 
                key={`mobile-${idx}`} 
                className="w-full rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Client testimonial ${idx + 1}`}
                  width={250}
                  height={500}
                  className="w-full h-auto"
                  quality={90}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet View (2 columns) */}
      <div className="hidden md:flex lg:hidden gap-4 overflow-hidden">
        <div className="flex-1 animate-marquee-up">
          <div className="flex flex-col gap-4">
            {[...testimonialImages[0], ...testimonialImages[2], ...testimonialImages[0], ...testimonialImages[2]].map((src, idx) => (
              <div 
                key={`tablet1-${idx}`} 
                className="w-full rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Client testimonial ${idx + 1}`}
                  width={250}
                  height={500}
                  className="w-full h-auto"
                  quality={90}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 animate-marquee-up-delayed translate-y-[-10%]">
          <div className="flex flex-col gap-4">
            {[...testimonialImages[1], ...testimonialImages[3], ...testimonialImages[1], ...testimonialImages[3]].map((src, idx) => (
              <div 
                key={`tablet2-${idx}`} 
                className="w-full rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Client testimonial ${idx + 1}`}
                  width={250}
                  height={500}
                  className="w-full h-auto"
                  quality={90}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View (4 columns) */}
      <div className="hidden lg:flex gap-4 overflow-hidden">
        {[0, 1, 2, 3].map((colIndex) => (
          <div 
            key={`desktop-col-${colIndex}`}
            className={`flex-1 ${colIndex % 2 ? 'animate-marquee-up-delayed translate-y-[-10%]' : 'animate-marquee-up'}`}
          >
            <div className="flex flex-col gap-4">
              {[...testimonialImages[colIndex], ...testimonialImages[colIndex]].map((src, idx) => (
                <div 
                  key={`desktop-${colIndex}-${idx}`} 
                  className="w-full rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={src}
                    alt={`Client testimonial ${idx + 1}`}
                    width={250}
                    height={500}
                    className="w-full h-auto"
                    quality={90}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FCFCFC] to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FCFCFC] to-transparent z-10" />
    </div>
  );
};

export default TestimonialMarquee;