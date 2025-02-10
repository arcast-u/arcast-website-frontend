"use client";

import React, { useState } from 'react';
import { FAQItem } from './faq-item';

export const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqItems = [
    {
      question: "Where are your studio located?",
      answer: (
        <>
          <p className="text-neutral-400">Our studio's prime location is in Dubai Media City</p>
          <div className="mt-3">
            <div className="flex flex-wrap gap-2 items-center text-neutral-400">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/ec5fdc2c035c1a11ceb917e9b9c3d77a304ea130ce989c82710d019769bf418d?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt="Location icon"
              />
              <p className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                Loft Offices 3, Dubai - Ideal for corporate podcasts and business content.
              </p>
            </div>
            <a href="#location" className="mt-2 text-blue-500 hover:underline">
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
    <section className="flex overflow-hidden flex-wrap gap-10 px-20 py-24 font-medium bg-neutral-100 max-md:px-5" aria-labelledby="faq-title">
      <h1 id="faq-title" className="self-start text-5xl basis-auto text-zinc-800 max-md:text-4xl">
        Frequently asked questions
      </h1>
      <div className="w-full max-md:max-w-full">
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