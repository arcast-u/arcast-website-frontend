// 'use client';
// import React, { useState } from 'react';
// import { TbCaretDown, TbCaretUp } from 'react-icons/tb';
// import { getCountries, getCountryCallingCode } from 'libphonenumber-js';
// import { useEmailValidation } from './useEmailValidation';

// type BookingDetailsProps = {
//   form: {
//     fullName: string;
//     email: string;
//     phoneNumber: string;
//     recordingLocation: string;
//     whatsappNumber: string;
//     countryCode: string;
//     whatsappCountryCode: string;
//     discountCode: string;
//   };
//   setForm: React.Dispatch<
//     React.SetStateAction<{
//       fullName: string;
//       email: string;
//       phoneNumber: string;
//       recordingLocation: string;
//       whatsappNumber: string;
//       countryCode: string;
//       whatsappCountryCode: string;
//       discountCode: string;
//     }>
//   >;
//   showWarning: boolean;
//   selectedStudio: string | undefined;
// };

// const FormSection = ({
//   form,
//   setForm,
//   showWarning,
//   selectedStudio,
// }: BookingDetailsProps) => {
//   // const [checked, setChecked] = useState(false);
//   // const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [whatsappDropdownOpen, setwhatsappDropdownOpen] = useState(false);
//   const { emailError, checkEmail } = useEmailValidation();

//   const countries = getCountries().map((code) => ({
//     code: `+${getCountryCallingCode(code)}`,
//     country: code,
//   }));

//   const handleChange = (e: {
//     target: { id: string; value: string | number };
//   }) => {
//     const { id, value } = e.target;
//     setForm((prev) => ({ ...prev, [id]: value }));
//   };

//   // const handleCountrySelect = (code: string) => {
//   //   setForm((prev) => ({ ...prev, countryCode: code }));
//   //   setDropdownOpen(false);
//   // };
//   const handleWhatsappCountrySelect = (code: string) => {
//     setForm((prev) => ({ ...prev, whatsappCountryCode: code }));
//     setwhatsappDropdownOpen(false);
//   };

//   const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
//     if (e.target.id === 'email') {
//       const error = checkEmail(form.email);
//       if (error) {
//         e.target.setCustomValidity(error);
//       } else {
//         e.target.setCustomValidity('');
//       }
//       e.target.reportValidity();
//     }
//   };

//   return (
//     <form
//       onSubmit={(e) => e.preventDefault()}
//       className='flex flex-col mt-8 lg:mt-10 w-full md:w-[90%] mx-auto lg:w-full max-md:mt-10 '
//     >
//       <div className='flex flex-col w-full'>
//         <h3 className='header-text'>Enter Your Contact Information</h3>
//       </div>
//       <div className='flex flex-col mt-5 text-[#333333] font-nunitoSans text-base leading-3  lg:leading-6 font-normal 3xl:leading-[19.1px] 3xl:mt-6 w-full  '>
//         <div className='flex gap-4 items-start w-full '>
//           <label htmlFor='fullName' className='sr-only'>
//             Full name
//           </label>
//           <input
//             id='fullName'
//             type='text'
//             value={form.fullName}
//             onChange={handleChange}
//             placeholder='Full name'
//             className={`${
//               showWarning ? 'border border-red-500' : ''
//             } flex-1 shrink gap-10 self-stretch  px-5 py-4 w-full rounded-xl bg-[#F5F5F7] focus:outline-none`}
//             aria-label='Full name'
//           />
//         </div>
//         <label htmlFor='email' className='sr-only'>
//           Email address
//         </label>
//         <input
//           id='email'
//           type='email'
//           value={form.email}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
//           placeholder='Email address'
//           className={`${
//             showWarning || emailError ? 'border border-red-500' : ''
//           } gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 mt-3 3xl:mt-5 w-full rounded-xl bg-[#F5F5F7]  focus:outline-none`}
//           aria-label='Email address'
//         />
//         <label htmlFor='recordingLocation' className='sr-only'>
//           Recording Location
//         </label>
//         {selectedStudio === 'Mobile Studio Service' && (
//           <input
//             id='recordingLocation'
//             type='text'
//             value={form.recordingLocation}
//             onChange={handleChange}
//             placeholder='Recording Location'
//             className={`${
//               showWarning ? 'border border-red-500' : ''
//             } gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 mt-3 3xl:mt-5 w-full rounded-xl bg-[#F5F5F7]  focus:outline-none`}
//             aria-label='recording location'
//           />
//         )}
//         {/* <div className="flex gap-4 items-start mt-3 relative 3xl:mt-5 w-full max-md:max-w-full">
//           <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex gap-1 items-center 3xl:py-5 py-4 pr-3 3xl:pr-4 pl-4 3xl:pl-6 whitespace-nowrap rounded-xl bg-[#F5F5F7] text-[#333333] ">
//             <p className="self-stretch font-normal font-nunitoSans my-auto">
//               {form.countryCode}</p>
//               {dropdownOpen ?  <TbCaretUp className="size-5 text-[#333333] stroke-[1px]" /> : <TbCaretDown className="size-5 text-[#333333] stroke-[1px]" />}
            
//           </button>
//           {dropdownOpen && (
//               <ul className="absolute h-[200px] overflow-y-auto left-0 w-1/2 top-full bg-[#F5F5F7] border border-gray-300 rounded-md mt-1 shadow-md z-10">
//                 {countries.map((item) => (
//                   <li
//                     key={item.country}
//                     onClick={() => handleCountrySelect(item.code)}
//                     className="px-4 py-2 hover:bg-gray-200 text-sm font-nunitoSans"
//                   >
//                     ({item.code}) {item.country} 
//                   </li>
//                 ))}
//               </ul>
//             )}
//           <label
//             htmlFor="phoneNumber"
//             className="sr-only"
//           >
//             Phone number
//           </label>
//           <input
//             id="phoneNumber"
//             type="tel"
//             value={form.phoneNumber}
//             onChange={handleChange}
//             placeholder="Phone number"
//             className={`${showWarning  ? 'border border-red-500' : ''} flex-1 shrink gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 rounded-xl focus:outline-none bg-[#F5F5F7] `}
//             aria-label="Phone number"
//           />
//         </div> */}
//         <div className='flex gap-4 items-start mt-3 relative 3xl:mt-5 w-full max-md:max-w-full'>
//           <button
//             onClick={() => setwhatsappDropdownOpen(!whatsappDropdownOpen)}
//             className='flex gap-1 items-center 3xl:py-5 py-4 pr-3 3xl:pr-4 pl-4 3xl:pl-6 whitespace-nowrap rounded-xl bg-[#F5F5F7] text-[#333333] '
//           >
//             <p className='self-stretch font-normal font-nunitoSans my-auto'>
//               {form.whatsappCountryCode}
//             </p>
//             {whatsappDropdownOpen ? (
//               <TbCaretUp className='size-5 text-[#333333] stroke-[1px]' />
//             ) : (
//               <TbCaretDown className='size-5 text-[#333333] stroke-[1px]' />
//             )}
//           </button>
//           {whatsappDropdownOpen && (
//             <ul className='absolute h-[200px] overflow-y-auto left-0 w-1/2 top-full bg-[#F5F5F7] border border-gray-300 rounded-md mt-1 shadow-md z-10'>
//               {countries.map((item) => (
//                 <li
//                   key={item.country}
//                   onClick={() => handleWhatsappCountrySelect(item.code)}
//                   className='px-4 py-2 hover:bg-gray-200 text-sm font-nunitoSans'
//                 >
//                   ({item.code}) {item.country}
//                 </li>
//               ))}
//             </ul>
//           )}
//           <label htmlFor='whatsappNumber' className='sr-only'>
//             whatsapp number
//           </label>
//           <input
//             id='whatsappNumber'
//             type='tel'
//             value={form.whatsappNumber}
//             onChange={handleChange}
//             placeholder='WhatsApp number'
//             className={`${
//               showWarning ? 'border border-red-500' : ''
//             } flex-1 shrink gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 rounded-xl focus:outline-none bg-[#F5F5F7]`}
//             aria-label='Whatsapp number'
//           />
//         </div>
//         <label htmlFor='discountCode' className='sr-only'>
//           Discount Code
//         </label>
//         <input
//           id='discountCode'
//           type='text'
//           value={form.discountCode}
//           onChange={handleChange}
//           placeholder='Discount code (optional)'
//           className={`gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 mt-3 3xl:mt-5 w-full rounded-xl bg-[#F5F5F7]  focus:outline-none `}
//           aria-label='Discount code (optional)'
//         />
//       </div>
//       {showWarning && (
//         <p className='text-[#FF4242] text-sm leading-[19.1px] font-nunitoSans mt-2'>
//           Please fill in all required fields before confirming
//         </p>
//       )}
//       {emailError && (
//         <p className='text-[#FF4242] text-sm leading-[19.1px] font-nunitoSans mt-2'>
//           Please enter a correct email address
//         </p>
//       )}
//     </form>
//   );
// };

// export default FormSection;




'use client';
import React, { useState, useEffect } from 'react';
import { TbCaretDown, TbCaretUp } from 'react-icons/tb';
import { getCountries, getCountryCallingCode } from 'libphonenumber-js';
import { useEmailValidation } from './useEmailValidation';

type BookingDetailsProps = {
  form: {
    fullName: string;
    email: string;
    phoneNumber: string;
    recordingLocation: string;
    whatsappNumber: string;
    countryCode: string;
    whatsappCountryCode: string;
    discountCode: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      fullName: string;
      email: string;
      phoneNumber: string;
      recordingLocation: string;
      whatsappNumber: string;
      countryCode: string;
      whatsappCountryCode: string;
      discountCode: string;
    }>
  >;
  showWarning: boolean;
  selectedStudio: string | undefined;
};

// Valid discount code
const VALID_DISCOUNT_CODE = 'ARCAST50';

const FormSection = ({
  form,
  setForm,
  showWarning,
  selectedStudio,
}: BookingDetailsProps) => {
  const [whatsappDropdownOpen, setwhatsappDropdownOpen] = useState(false);
  const { emailError, checkEmail } = useEmailValidation();
  const [discountValid, setDiscountValid] = useState<boolean | null>(null);
  
  const countries = getCountries().map((code) => ({
    code: `+${getCountryCallingCode(code)}`,
    country: code,
  }));

  // Check discount code and update localStorage when the form's discount code changes
  useEffect(() => {
    // Only run this on the client side
    if (typeof window !== 'undefined') {
      // Check if the discount code is valid
      const isValid = form.discountCode === VALID_DISCOUNT_CODE;
      
      // Update state
      setDiscountValid(form.discountCode ? isValid : null);
      
      // Update localStorage
      localStorage.setItem('isDiscount', isValid ? 'true' : 'false');
    }
  }, [form.discountCode]);

  const handleChange = (e: {
    target: { id: string; value: string | number };
  }) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleWhatsappCountrySelect = (code: string) => {
    setForm((prev) => ({ ...prev, whatsappCountryCode: code }));
    setwhatsappDropdownOpen(false);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.id === 'email') {
      const error = checkEmail(form.email);
      if (error) {
        e.target.setCustomValidity(error);
      } else {
        e.target.setCustomValidity('');
      }
      e.target.reportValidity();
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='flex flex-col mt-8 lg:mt-10 w-full md:w-[90%] mx-auto lg:w-full max-md:mt-10 '
    >
      <div className='flex flex-col w-full'>
        <h3 className='header-text'>Enter Your Contact Information</h3>
      </div>
      <div className='flex flex-col mt-5 text-[#333333] font-nunitoSans text-base leading-3  lg:leading-6 font-normal 3xl:leading-[19.1px] 3xl:mt-6 w-full  '>
        <div className='flex gap-4 items-start w-full '>
          <label htmlFor='fullName' className='sr-only'>
            Full name
          </label>
          <input
            id='fullName'
            type='text'
            value={form.fullName}
            onChange={handleChange}
            placeholder='Full name'
            className={`${
              showWarning ? 'border border-red-500' : ''
            } flex-1 shrink gap-10 self-stretch  px-5 py-4 w-full rounded-xl bg-[#F5F5F7] focus:outline-none`}
            aria-label='Full name'
          />
        </div>
        <label htmlFor='email' className='sr-only'>
          Email address
        </label>
        <input
          id='email'
          type='email'
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
          placeholder='Email address'
          className={`${
            showWarning || emailError ? 'border border-red-500' : ''
          } gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 mt-3 3xl:mt-5 w-full rounded-xl bg-[#F5F5F7]  focus:outline-none`}
          aria-label='Email address'
        />
        <label htmlFor='recordingLocation' className='sr-only'>
          Recording Location
        </label>
        {selectedStudio === 'Mobile Studio Service' && (
          <input
            id='recordingLocation'
            type='text'
            value={form.recordingLocation}
            onChange={handleChange}
            placeholder='Recording Location'
            className={`${
              showWarning ? 'border border-red-500' : ''
            } gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 mt-3 3xl:mt-5 w-full rounded-xl bg-[#F5F5F7]  focus:outline-none`}
            aria-label='recording location'
          />
        )}
        <div className='flex gap-4 items-start mt-3 relative 3xl:mt-5 w-full max-md:max-w-full'>
          <button
            type="button"
            onClick={() => setwhatsappDropdownOpen(!whatsappDropdownOpen)}
            className='flex gap-1 items-center 3xl:py-5 py-4 pr-3 3xl:pr-4 pl-4 3xl:pl-6 whitespace-nowrap rounded-xl bg-[#F5F5F7] text-[#333333] '
          >
            <p className='self-stretch font-normal font-nunitoSans my-auto'>
              {form.whatsappCountryCode}
            </p>
            {whatsappDropdownOpen ? (
              <TbCaretUp className='size-5 text-[#333333] stroke-[1px]' />
            ) : (
              <TbCaretDown className='size-5 text-[#333333] stroke-[1px]' />
            )}
          </button>
          {whatsappDropdownOpen && (
            <ul className='absolute h-[200px] overflow-y-auto left-0 w-1/2 top-full bg-[#F5F5F7] border border-gray-300 rounded-md mt-1 shadow-md z-10'>
              {countries.map((item) => (
                <li
                  key={item.country}
                  onClick={() => handleWhatsappCountrySelect(item.code)}
                  className='px-4 py-2 hover:bg-gray-200 text-sm font-nunitoSans'
                >
                  ({item.code}) {item.country}
                </li>
              ))}
            </ul>
          )}
          <label htmlFor='whatsappNumber' className='sr-only'>
            whatsapp number
          </label>
          <input
            id='whatsappNumber'
            type='tel'
            value={form.whatsappNumber}
            onChange={handleChange}
            placeholder='WhatsApp number'
            className={`${
              showWarning ? 'border border-red-500' : ''
            } flex-1 shrink gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 rounded-xl focus:outline-none bg-[#F5F5F7]`}
            aria-label='Whatsapp number'
          />
        </div>
        <div className="relative">
          <label htmlFor='discountCode' className='sr-only'>
            Discount Code
          </label>
          <input
            id='discountCode'
            type='text'
            value={form.discountCode}
            onChange={handleChange}
            placeholder='Discount code (optional)'
            className={`
              gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 mt-3 3xl:mt-5 w-full rounded-xl 
              bg-[#F5F5F7] focus:outline-none 
              ${discountValid === false ? 'border border-red-500' : ''}
              ${discountValid === true ? 'border border-green-500' : ''}
            `}
            aria-label='Discount code (optional)'
          />
          
          {/* Discount code validation indicator */}
          {discountValid === true && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
          
          {discountValid === false && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          )}
        </div>
      </div>
      {showWarning && (
        <p className='text-[#FF4242] text-sm leading-[19.1px] font-nunitoSans mt-2'>
          Please fill in all required fields before confirming
        </p>
      )}
      {emailError && (
        <p className='text-[#FF4242] text-sm leading-[19.1px] font-nunitoSans mt-2'>
          Please enter a correct email address
        </p>
      )}
      {discountValid === false && (
        <p className='text-[#FF4242] text-sm leading-[19.1px] font-nunitoSans mt-2'>
          Invalid discount code
        </p>
      )}
      {discountValid === true && (
        <p className='text-green-500 text-sm leading-[19.1px] font-nunitoSans mt-2'>
          Discount code applied!
        </p>
      )}
    </form>
  );
};

export default FormSection;
