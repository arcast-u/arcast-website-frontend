import * as React from "react";
import StudioCard from "./studio-card";

const studios = [
  { imgSrc: "/images/studio1.webp", altText: "Studio 1 setup", title: "Studio 1", seats: "4 recording seats", isHighlighted: true },
  { imgSrc: "/images/studio2.webp", altText: "Studio 2 setup", title: "Studio 2", seats: "3 recording seats", isHighlighted: false },
  { imgSrc: "/images/studio3.webp", altText: "Studio 3 setup", title: "Studio 3", seats: "5 recording seats", isHighlighted: false },
  { imgSrc: "/images/studio4.webp", altText: "Studio 4 setup", title: "Studio 4", seats: "3 recording seats", isHighlighted: false },
  { imgSrc: "/images/studio5.webp", altText: "Studio 5 setup", title: "Studio 5", seats: "2 recording seats", isHighlighted: false },
  { imgSrc: "/images/studio6.webp", altText: "Studio 6 setup", title: "Studio 6", seats: "4 recording seats", isHighlighted: false }
];


const StudioCardList = () => (
  <section className="mt-10 3xl:mt-12 ">
    <h2 
      className="text-[28px] leading-8 3xl:text-[32px] font-nunitoSans font-medium 3xl:leading-[43.65px] text-[#333333]">
      Choose your studio
    </h2>
    <div className="mt-4 3xl:mt-6 grid grid-cols-2 gap-4">
      {studios.map((studio, index) => (
        <StudioCard key={index} {...studio} />
      ))}
    </div>
  </section>
);

export default StudioCardList;