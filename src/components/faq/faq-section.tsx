"use client";

import React, { useState } from 'react';
import { FAQItem } from './faq-item';
import { HiOutlineLocationMarker } from "react-icons/hi";

export const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqItems = [
    {
      question: "Where are your studio located?",
      answer: (
        <div className='w-[80%]'>
          <p className="text-neutral-400">Our studio&apos;s prime location is in Dubai Media City</p>
          <div className="mt-2 3xl:mt-3">
            <div className="flex flex-wrap gap-2 items-start text-neutral-400">
              <HiOutlineLocationMarker className='3xl:size-6 size-4 stroke-[1.5px] text-[#989898]'/>
              <p className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                Loft Offices 3, Dubai - Ideal for corporate podcasts and business content.
              </p>
            </div>
            <a href="#location" className="mt-2 text-[#5081FF]  text-sm leading-5 3xl:text-xl 3xl:leading-8 hover:underline">
              View location & direction
            </a>
          </div>
        </div>
      )
    },
    {
      question: "What are your studio hours?",
      answer: (<div className='w-[80%]'>
          <p className="text-neutral-400">We are open to serve you during the following hours:</p>
          <div className="mt-2 3xl:mt-3">
            <div className="flex flex-wrap gap-2 items-center text-neutral-400">
              <HiOutlineLocationMarker className='3xl:size-6 size-4 stroke-[1.5px] text-[#989898]'/>
              <p className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
              Monday to Friday: 9:00 AM to 10:00 PM
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center text-neutral-400">
              <HiOutlineLocationMarker className='3xl:size-6 size-4 stroke-[1.5px] text-[#989898]'/>
              <p className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
              Saturday to Sunday: 9:00 AM to 9:00 PM
              </p>
            </div>
            <a href="/bookings" className="mt-2 text-[#5081FF]  text-sm leading-5 3xl:text-xl 3xl:leading-8 hover:underline">
              Book Now
            </a>
          </div>
        </div>)
    },
    {
      question: "Do I need to bring my own equipment?",
      answer: (<div className='w-[80%]'>
          <p className="text-neutral-400">No, you don&apos;t need to bring your own equipment unless you prefer to use specific personal gear. We provide all the necessary equipment for your session</p>
          
        </div>)
    },
    {
      question: "Can beginners record at ARcast?",
      answer: (<>
          <p className="text-neutral-400 w-[80%]">Absolutely! ARcast is beginner-friendly. Whether you&apos;re a first-time podcaster or someone looking to explore AR/VR recording, we have you covered. Our team of experienced technicians will guide you through the entire recording process</p>
          
        </>)
    },
    {
      question: "What payment methods do you accept?",
      answer: (<div className='w-[80%]'>
          <p className="text-neutral-400">We accept a wide variety of payment methods to make your booking process as smooth as possible</p>
          <div className="mt-2 3xl:mt-3">
            <div className="flex flex-col gap-2 items-center text-neutral-400">
              <p className="flex-1 before:content-['•'] before:mr-2 shrink self-stretch my-auto basis-0 max-md:max-w-full">
              Credit/Debit Cards (Visa, MasterCard, American Express)
              </p>
              <p className="flex-1 before:content-['•'] before:mr-2 shrink self-stretch my-auto basis-0 max-md:max-w-full">
              Bank Transfer (for large payments or corporate bookings)
              </p>
              <p className="flex-1 before:content-['•'] before:mr-2 shrink self-stretch my-auto basis-0 max-md:max-w-full">
              Cash
              </p>
            </div>
          </div>
        </div>)
    },
    {
      question: "Can I record a live podcast or livestream?",
      answer: (<>
          <p className="text-neutral-400 w-[80%]">Yes, you can definitely record a live podcast or livestream at ARcast!. Let us know your streaming platform preferences, and we&apos;ll set everything up for you</p>
          
        </>)
    }
  ];

  return (
    <section className="flex overflow-hidden flex-wrap lg:flex-nowrap justify-between py-10 3xl:py-20 px-[21px] lg:px-10 3xl:px-[100px] font-medium bg-neutral-100" aria-labelledby="faq-title">
      <h1 id="faq-title" className=" w-full lg:w-[30%] self-start font-hankenGrotesk text-[32px] leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px]">
        Frequently asked questions
      </h1>
      <div className="w-full mt-16 lg:mt-0 lg:w-[60%]">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openItem === index}
            onClick={() => setOpenItem(openItem === index ? null : index)}
            isLast={index === faqItems.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;