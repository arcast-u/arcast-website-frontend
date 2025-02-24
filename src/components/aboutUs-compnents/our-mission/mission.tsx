'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { TextAnimationOptions } from '@/lib/types';

gsap.registerPlugin(TextPlugin);

const Mission = () => {
  // Ref for the section container
  const containerRef = useRef<HTMLDivElement>(null);
  // Refs for the paragraphs
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);

  // Define your texts using standard HTML attributes (not JSX) so that GSAP can render them correctly.
  const p1Text = `To provide world-class podcast production while making professional recording accessible to both businesses and individuals. 
                <span class='text-[#FF8C42]'>We're building more than just studios</span> - we're creating spaces where ideas can flourish, brands can grow, and stories can live on. 
                Through technical excellence and genuine service, we aim to be the catalyst for meaningful conversations that deserve to be heard.`;

  const p2Text = `We believe in the power of legacy - both digital and personal. 
                Our mission extends beyond today's business needs to create lasting impact through recorded media. 
                Whether it's helping businesses amplify their message, entrepreneurs share their journey, 
                or individuals preserve their stories for future generations, 
                <span class='text-[#FF8C42]'>we're here to ensure every voice is captured with the quality it deserves.</span>`;

  const p3Text = `Every detail in our studio, from our choice of equipment to our service approach, 
                is carefully considered to fulfill this mission. 
                We're committed to being more than just a recording space - 
                <span class='text-[#FF8C42]'>we're a partner in bringing your voice to the world</span>, 
                ensuring your message not only reaches its audience but leaves a lasting impression.`;

  useEffect(() => {
    // Ensure we have a container to observe
    const container = containerRef.current;
    if (!container) return;

    // Set up an IntersectionObserver to watch the container
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Start the GSAP timeline animation once the section is in view.
            if (p1Ref.current && p2Ref.current && p3Ref.current) {
              const tl = gsap.timeline();
              tl.to(p1Ref.current, {
                duration: 6,
                text: ({ value: p1Text, delimiter: "", useHTML: true } as TextAnimationOptions),
                ease: "none",
              })
              .to(p2Ref.current, {
                duration: 6,
                text: ({ value: p2Text, delimiter: "", useHTML: true } as TextAnimationOptions),
                ease: "none",
              })
              .to(p3Ref.current, {
                duration: 6,
                text: ({ value: p3Text, delimiter: "", useHTML: true } as TextAnimationOptions),
                ease: "none",
              });
            }
            // Disconnect the observer once the animation starts.
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold based on when you want the animation to trigger.
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [p1Text, p2Text, p3Text]);

  return (
    <div ref={containerRef} className='px-[21px] lg:px-10 3xl:px-[100px] py-10'>
       <div className='max-w-[1728px] mx-auto'>
        <div className='flex mx-auto w-full md:w-[70%] lg:w-[45%] 3xl:w-[50%] items-center flex-col h-full'>
              <h1 className='font-hankenGrotesk text-[#FCFCFC] text-center text-[32px] lg:mt-8 mb-4 3xl:mb-10 leading-[46.91px] 3xl:text-5xl 3xl:leading-[62.5px] font-semibold'>
                  OUR MISSION
              </h1>
              <p 
                ref={p1Ref} 
                className='mb-4 font-nunitoSans font-normal text-[#FCFCFC] text-xl leading-[30px] 3xl:text-[28px] 3xl:leading-[48px]'>
              </p>
              <p 
                ref={p2Ref} 
                className='mb-4 font-nunitoSans font-normal text-[#FCFCFC] text-xl leading-[30px] lg:text-lg 3xl:text-[28px] 3xl:leading-[48px]'>
              </p>
              <p 
                ref={p3Ref} 
                className='font-nunitoSans font-normal text-[#FCFCFC] text-xl leading-[30px] lg:text-lg 3xl:text-[28px] 3xl:leading-[48px]'>
              </p>
          </div>
      </div>
    </div>
  );
}

export default Mission;
