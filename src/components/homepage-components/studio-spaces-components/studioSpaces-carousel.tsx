// 'use client'
// import React, {useState, useEffect} from "react";
// // import { motion } from "framer-motion";
// // import { TbCaretLeft, TbCaretRight } from "react-icons/tb";
// // import Image from "next/image";
// // import Link from "next/link";

// const cards = [
//   {title: "new", description:"new", image: "/images/studio1.webp"},
//   {title: "new", description:"new", image: "/images/studio2.webp"},
//   {title: "new", description:"new", image: "/images/studio3.webp"},
//   {title: "new", description:"new", image: "/images/studio4.webp"},
//   {title: "new", description:"new", image: "/images/studio5.webp"},
//   {title: "new", description:"new", image: "/images/studio6.webp"},
  
// ];


// function StudioSpacesCarousel() {
//   const [index, setIndex] = useState(1);

//   const prevSlide = () => {
//     setIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
//   };

//   const nextSlide = () => {
//     setIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
//   };

//   return (
//     <div className="relative flex gap-4 h-[65%] no-scrollbar mb-6 snap-x overflow-auto 3xl:gap-6 items-center justify-center w-full">
//       {cards.map((card, index) => (
//         <div
//         key={index}
//         className="min-w-[80%] h-full md-min-w-[40%]">
//           <div
          
//             className={`flex-none w-full h-full snap-center bg-cover bg-center bg-no-repeat`}
//             style={{ backgroundImage: `url(${card.image})`, scrollSnapAlign: 'start' }}
//           >
//           </div> 
//         </div>
//       ))}
//     </div>
//   );
// }

// export default StudioSpacesCarousel;
