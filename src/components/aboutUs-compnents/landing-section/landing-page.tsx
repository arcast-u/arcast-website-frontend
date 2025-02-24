'use client'
import React, { useEffect, useRef } from 'react'
import NavigationBar from '../../homepage-components/nav-bar';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register the GSAP TextPlugin
gsap.registerPlugin(TextPlugin);

const LandingPage = () => {
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);

  // Define the full HTML content for each paragraph
  const p1Text = `ARcast was born at the intersection of professional broadcasting and personal storytelling. 
  We're more than a podcast studio - <span class="text-[#FF8C42]">we're a team dedicated to giving voices the platform they deserve</span>, 
  whether it's shaping business narratives or preserving personal legacies. 
  From our state-of-the-art recording spaces to our dedication to technical excellence, 
  we believe in creating an environment where every story can be told with clarity and impact.`;

  const p2Text = `Our commitment to quality extends beyond our equipment. 
  It's in the way we understand each client's unique needs, 
  the attention we give to every technical detail, 
  and our drive to make professional podcasting accessible to both established businesses and emerging voices. 
  <span class="text-[#FF8C42]">With a team of dedicated professionals and a vision that spans continents, we're setting new standards for what a podcast studio can be.</span>`;

  useEffect(() => {
    // Create a GSAP timeline for sequential animations
    const tl = gsap.timeline();

    if (p1Ref.current && p2Ref.current) {
      // Animate the first paragraph using the "text" property with useHTML enabled.
      tl.to(p1Ref.current, {
        duration: 6, 
        text: ({ value: p1Text, delimiter: "", useHTML: true } as any),
        ease: "none",
      });
      
        // Animate the second paragraph with a similar approach
      tl.to(p2Ref.current, {
        duration: 6, 
        text: ({ value: p2Text, delimiter: "", useHTML: true } as any),
        ease: "none",
      });
    }
  }, []); 

  return (
    <div className='md:h-screen overflow-hidden mb-5'>
      <div className='max-w-[1728px] mx-auto'>
        <NavigationBar/>
        <div className='px-[21px] flex md:items-center lg:items-start 2xl:items-center justify-center'>
          <div className='mx-auto w-full mt-16 md:mt-0 md:w-[70%] lg:w-[45%] 3xl:w-[50%]'>
            <h1 className='font-hankenGrotesk text-[#FCFCFC] text-center text-[32px] lg:mt-8 mb-6 3xl:mb-10 leading-[46.91px] 3xl:text-5xl 3xl:leading-[62.5px] font-semibold'>
              WHO WE ARE
            </h1>
            <p 
              ref={p1Ref} 
              className="mb-6 font-nunitoSans font-normal text-[#FCFCFC] text-xl leading-[30px] 3xl:text-[28px] 3xl:leading-[48px]"
            >
              {/* GSAP will populate the content here */}
            </p>
            <p 
              ref={p2Ref} 
              className="font-nunitoSans font-normal text-[#FCFCFC] text-xl leading-[30px] lg:text-lg 3xl:text-[28px] 3xl:leading-[48px]"
            >
              {/* GSAP will populate the content here */}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
