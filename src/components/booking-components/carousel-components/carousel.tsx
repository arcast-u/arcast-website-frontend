'use client'
import React, {useState, useEffect} from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const images = [
  "/images/studio1.webp",
  "/images/studio2.webp",
  "/images/studio3.webp",
  "/images/studio4.webp",
  "/images/studio5.webp",
  "/images/studio6.webp",
  
];


export const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full lg:w-[64.3vw] h-screen overflow-hidden">
      {/* Image Display */}
      <div className="relative h-full">
        <img
          src={images[currentIndex]}
          alt="Carousel Slide"
          className="w-full h-full object-cover "
        />
      </div>
      
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-between w-full px-7 ">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="border-[1.5px] border-[#FCFCFC] bg-opacity-50 text-white p-3 rounded-md hover:scale-105"
        >
          <FaAngleLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="border-[1.5px] border-[#FCFCFC] bg-opacity-50 text-white p-3 rounded-md hover:scale-105"
        >
          <FaAngleRight size={20} />
        </button>
        </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-0.5">
        {images.map((_, index) => (
          <div
          role="button"
          key={index}
          tabIndex={index}
          aria-label={index === currentIndex ? "Current slide" : "Go to slide"}
          className={`flex shrink-0 self-stretch my-auto h-1 rounded-sm ${
            index === currentIndex ? "w-6 bg-zinc-50" : "w-2 bg-neutral-400"
          }`}
          />
          
        ))}
      </div>
    </div>
  );

};

// const images = [
//   { src: "https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/ad071035a508f60b9949a041864d2c4ff569b7a712dbbd794177a413ccd411c0?apiKey=da0366cd14364f569c342b06124fe9df&", alt: "Carousel image 1" },
//   { src: "https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/75cf85ec508c84426eccd826301d533297413e091fcd3ed3df40f48ee9ce4085?apiKey=da0366cd14364f569c342b06124fe9df&", alt: "Carousel image 2" }
// ];

// const dots = [true, false, false, false, false, false, false];

// export const Carousel: React.FC = () => {
//   return (
//     <main className="flex h-screen overflow-hidden flex-col w-full lg:w-[64.3%] px-8 pb-6 bg-black bg-opacity-20 max-md:px-5 max-md:pt-24">
//       <section className="flex flex-wrap gap-10 justify-between items-center max-md:max-w-full" role="region" aria-label="Image carousel">
//         {images.map((image, index) => (
//           <CarouselImage key={index} {...image} />
//         ))}
//       </section>
//       <nav className="flex gap-0.5 items-center self-center mt-[499px] max-md:mt-10" role="navigation" aria-label="Carousel navigation">
//         {dots.map((isActive, index) => (
//           <CarouselDot key={index} isActive={isActive} />
//         ))}
//       </nav>
//     </main>
//   );
// };