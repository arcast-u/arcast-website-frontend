'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface TimelineProps {
  maxSteps: number;
}

export const Timeline = ({ maxSteps }: TimelineProps) => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate all step circles' background color from #333333 to black as you scroll
    gsap.to('.step-circle', {
      scrollTrigger: {
        trigger: navRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      backgroundColor: '#000000',
      ease: 'none',
    });

    // Bounce animation for each step circle as it enters the viewport
    const circles = document.querySelectorAll('.step-circle');
    circles.forEach((circle) => {
      gsap.fromTo(
        circle,
        { scale: 0 },
        {
          scale: 1,
          ease: 'bounce.out',
          duration: 0.5,
          scrollTrigger: {
            trigger: circle,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
        }
      );
    });

    // Animate each line overlay individually so that each line fills as it scrolls into view
    const timelineLines = document.querySelectorAll('.timeline-line');
    timelineLines.forEach((line) => {
      const overlay = line.querySelector('.line-overlay');
      if (overlay) {
        gsap.to(overlay, {
          scrollTrigger: {
            trigger: line,           
            start: 'top bottom',    
            end: 'bottom top',    
            scrub: true,
          },
          height: '100%',           
          ease: 'none',
        });
      }
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex flex-col items-center mt-2 text-base font-medium text-[#FCFCFC] font-mullish whitespace-nowrap md:order-2 order-1"
      aria-label="Pricing timeline"
    >
      <ol className="list-none p-0 m-0">
        {[...Array(maxSteps)].map((_, index) => {
          const num = index + 1;
          const isLastStep = num === maxSteps;
          const circleClasses = isLastStep
            ? 'step-circle w-2.5 h-2.5 border rounded-xl bg-[#333333] flex items-center mx-auto justify-center'
            : 'step-circle px-2 w-6 border h-6 rounded-xl bg-[#333333] min-h-[24px] flex items-center justify-center';

          return (
            <li key={num} className="mb-4">
              <div className={circleClasses} aria-label={`Step ${num}`}>
                {!isLastStep && num}
              </div>
              {num < maxSteps && (
                // Wrapped each line in a container and add an overlay for the fill effect
                <div
                  className="timeline-line relative mt-4 w-[0.8px] border border-solid border-[#B3B3B3] mx-auto h-[250px] md:min-h-[400px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <div className="line-overlay absolute top-0 -left-[0.5px] w-full h-0 border border-black"></div>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
