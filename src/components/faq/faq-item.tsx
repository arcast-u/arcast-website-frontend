// import React from 'react';


// interface FAQItemProps {
//   question: string;
//   answer: React.ReactNode;
//   isOpen: boolean;
//   onClick: () => void;
//   isLast?: boolean;
// }

// export const FAQItem: React.FC<FAQItemProps> = ({
//   question,
//   answer,
//   isOpen,
//   onClick,
//   isLast = false
// }) => {
//   return (
//     <>
//       <div className="w-full min-h-0 border border-solid border-neutral-400 max-md:max-w-full" />
//       <div className="mt-10 w-full max-md:max-w-full">
//         <button
//           className="flex flex-wrap gap-10 justify-between items-center w-full text-2xl leading-none text-zinc-800 max-md:max-w-full"
//           onClick={onClick}
//           aria-expanded={isOpen}
//           aria-controls={`faq-answer-${question}`}
//         >
//           <span className="self-stretch my-auto w-[517px] text-left max-md:max-w-full">
//             {question}
//           </span>
//           <img
//             loading="lazy"
//             src={isOpen 
//               ? "https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/f1db2292a9bf6f6f2a4f28aa3a7b75a14a72532f633277f58db2351984cc397b?placeholderIfAbsent=true"
//               : "https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/7f7a169b9b01749191e563a96c9f36eabe5775c46d52192ab04881f1af6867f4?placeholderIfAbsent=true"
//             }
//             className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
//             alt={isOpen ? "Collapse answer" : "Expand answer"}
//           />
//         </button>
//         {isOpen && answer && (
//           <div
//             id={`faq-answer-${question}`}
//             className="flex flex-col justify-center mt-6 max-w-full text-xl leading-relaxed w-[752px]"
//           >
//             {answer}
//           </div>
//         )}
//       </div>
//       {!isLast && (
//         <div className="shrink-0 mt-10 h-0 border border-solid border-neutral-400 max-md:max-w-full" />
//       )}
//     </>
//   );
// };