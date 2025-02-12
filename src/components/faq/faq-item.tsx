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
      <div className="w-full min-h-0 border border-solid border-neutral-400 max-md:max-w-full" />
      <div className="mt-10 w-full max-md:max-w-full">
        <button
          className="flex flex-wrap gap-10 justify-between items-center w-full text-2xl leading-none text-zinc-800 max-md:max-w-full"
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${question}`}
        >
          <span className="self-stretch my-auto w-[517px] text-left max-md:max-w-full">
            {question}
          </span>
          {isOpen 
              ? <TbMinus className='size-8 text-[#333333]'/>
              : <MdOutlineAdd className='size-8 text-[#333333]'/>
            }
           
          
        </button>
        {isOpen && answer && (
          <div
            id={`faq-answer-${question}`}
            className="flex flex-col justify-center mt-6 max-w-full text-xl leading-relaxed w-[752px]"
          >
            {answer}
          </div>
        )}
      </div>
      {!isLast && (
        <div className="shrink-0 mt-10 h-0 border border-solid border-neutral-400 max-md:max-w-full" />
      )}
    </>
  );
};