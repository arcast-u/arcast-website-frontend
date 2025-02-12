'use client'
import React from "react";
import StudioCard from "./studio-card";
import { StudioProps } from "@/lib/types";

// const studios = [
//   { imgSrc: "/images/studio1.webp", altText: "Studio 1 setup", title: "Mobile studio service ", seats: "Anywhere in Dubai" },
//   { imgSrc: "/images/studio2.webp", altText: "Studio 2 setup", title: "Studio 2", seats: "3 recording seats" },
//   { imgSrc: "/images/studio3.webp", altText: "Studio 3 setup", title: "Studio 3", seats: "5 recording seats" },
//   { imgSrc: "/images/studio4.webp", altText: "Studio 4 setup", title: "Studio 4", seats: "3 recording seats" },
//   { imgSrc: "/images/studio5.webp", altText: "Studio 5 setup", title: "Studio 5", seats: "2 recording seats" },
//   { imgSrc: "/images/studio6.webp", altText: "Studio 6 setup", title: "Studio 6", seats: "4 recording seats" }
// ];

interface StudioListProps{
  selectedStudioIndex:number,
  studios: StudioProps[] | null ,
  setSelectedStudioIndex:(count:number)=>void
}
const StudioCardList = ({
  studios,
  selectedStudioIndex,
  setSelectedStudioIndex}: StudioListProps) => {
  
  return(
  <section className="mt-8 lg:mt-10 md:w-[90%] mx-auto lg:w-full ">
    <h2 
      className="header-text">
      Pick your perfect setup
    </h2>
    <div className="mt-3 3xl:mt-5 grid grid-cols-2 gap-4">
      {studios?.map((studio, index) => (
        <StudioCard key={studio.id}
         count={index} 
         selectedStudio={selectedStudioIndex} 
         setSelectedStudio={setSelectedStudioIndex} {...studio} 
         
         />
      ))}
    </div>
  </section>)
};

export default StudioCardList;