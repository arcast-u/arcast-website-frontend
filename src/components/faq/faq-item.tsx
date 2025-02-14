import React from 'react';
import { MdOutlineAdd } from "react-icons/md";
import { TbMinus } from "react-icons/tb";


interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  isLast?: boolean;
}

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
  isLast = false
}) => {
  return (
    <>
      <div className="w-full min-h-[0.5px] bg-[#989898] " />
      <div className="my-7 3xl:my-10 w-full max-md:max-w-full">
        <button
          className="flex flex-wrap gap-10 justify-between items-center w-full text-sm lg:text-base leading-6 3xl:text-2xl 3xl:leading-none text-[#333333]"
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${question}`}
        >
          <span className="self-stretch font-nunitoSans text-left">
            {question}
          </span>
          {isOpen 
              ? <TbMinus className='size-4 3xl:size-6 text-[#333333]'/>
              : <MdOutlineAdd className='size-4 3xl:size-6 text-[#333333]'/>
            }
           
          
        </button>
        {isOpen && answer && (
          <div
            id={`faq-answer-${question}`}
            className="w-[85%] lg:w-auto flex flex-col font-nunitoSans justify-center mt-6 max-w-full text-sm leading-5 3xl:text-xl 3xl:leading-8 text-[#989898]"
          >
            {answer}
          </div>
        )}
      </div>
      {!isLast && (
        <div className="w-full min-h-[0.5px] bg-[#98989850] " />
      )}
    </>
  );
};