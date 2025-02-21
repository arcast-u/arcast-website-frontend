'use client'
import { useState, FormEvent } from 'react';
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { TbCaretDown, TbCaretUp } from 'react-icons/tb';

interface FormData {
  name: string;
  email: string;
  countryCode: string;
  whatsapp: string;
}

const NewsletterSignup = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    countryCode: '+971',
    whatsapp: ''
  });

  const countries = getCountries().map((code) => ({
        code: `+${getCountryCallingCode(code)}`,
        country: code,
      }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='lg:h-screen h-fit px-3 pt-4 pb-6 lg:p-6 3xl:p-10 3xl:h-[50vh]  '>
      <div className="rounded-[16px] h-full 3xl:h-[70vh] flex items-center mx-auto justify-center bg-black/70 bg-blend-overlay bg-[url('/images/newsletter.webp')] bg-cover bg-center p-4">
        <div className="lg:w-[38%] md:w-[60%] m-10 md:m-auto font-hankenGrotesk w-full text-center text-[#F0F2F6]">
          <h1 className="text-[32px] leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px] font-medium">
            Be The First To Know
          </h1>
          
          <p className="text-xl 3xl:text-[28px] font-nunitoSans leading-[27.28px] 3xl:leading-[38.19px] font-normal mb-10 text-[#E7E8EB]">
            Get studio updates, exclusive offers, and podcasting tips straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col font-nunitoSans text-xs lg:text-sm 3xl:text-base gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 rounded-md bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-4 rounded-md bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            
            <div className="flex gap-2 relative">
              
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex gap-1 items-center  pr-3 3xl:pr-4 pl-4 3xl:pl-6 whitespace-nowrap rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white/10 text-white ">
                <p className="self-stretch font-normal font-nunitoSans my-auto">
                  {formData.countryCode}</p>
                  {dropdownOpen ?  <TbCaretUp className="size-5 text-white stroke-[1px]" /> : <TbCaretDown className="size-5 text-white stroke-[1px]" />}
                
              </button>
              {dropdownOpen && (
                  <ul className="absolute h-[200px] overflow-y-auto left-0 w-1/2 top-full bg-[#F5F5F7] text-[#333333] text-left border border-gray-300 rounded-md mt-1 shadow-md z-10">
                    {countries.map((item) => (
                      <li
                        key={item.country}
                        onClick={(e) => setFormData({...formData, countryCode: item.code})}
                        className="px-4 py-2 hover:bg-gray-200 text-sm font-nunitoSans"
                      >
                        ({item.code}) {item.country} 
                      </li>
                    ))}
                  </ul>
                )}
              
              <input
                type="tel"
                placeholder="WhatsApp number"
                className="flex-1 p-4 rounded-md bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={formData.whatsapp}
                onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              className="w-full p-4 rounded-md bg-[#FF8C42] border-[#FFC49D] border shadow-md shadow-[#64391E] text-[#FCFCFC] font-medium hover:scale-105 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;