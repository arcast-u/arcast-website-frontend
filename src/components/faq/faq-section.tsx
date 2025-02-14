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
        <>
          <p className="text-neutral-400">Our studio&apos;s prime location is in Dubai Media City</p>
          <div className="mt-2 3xl:mt-3">
            <div className="flex flex-wrap gap-2 items-center text-neutral-400">
              <HiOutlineLocationMarker className='3xl:size-6 size-4 stroke-[1.5px] text-[#989898]'/>
              <p className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                Loft Offices 3, Dubai - Ideal for corporate podcasts and business content.
              </p>
            </div>
            <a href="#location" className="mt-2 text-[#5081FF]  text-sm leading-5 3xl:text-xl 3xl:leading-8 hover:underline">
              View location & direction
            </a>
          </div>
        </>
      )
    },
    {
      question: "What are your studio hours?",
      answer: ""
    },
    {
      question: "Do I need to bring my own equipment?",
      answer: ""
    },
    {
      question: "Can beginners record at ARcast?",
      answer: ""
    },
    {
      question: "What payment methods do you accept?",
      answer: ""
    },
    {
      question: "Can I record a live podcast or livestream?",
      answer: ""
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