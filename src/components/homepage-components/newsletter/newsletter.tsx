'use client'
import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
}

const NewsletterSignup = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    whatsapp: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='lg:h-screen h-fit px-3 pt-4 pb-6 lg:p-6 3xl:p-10 3xl:h-[50vh]  '>
      <div className="rounded-[16px] h-full flex items-center justify-center bg-black/70 bg-blend-overlay bg-[url('/images/newsletter.webp')] bg-cover bg-center p-4">
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
            
            <div className="flex gap-2">
              <select 
                className="w-[100px] p-4 rounded-md bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="+971" className='text-[#333333]'>+971</option>
                <option value="+1" className='text-[#333333]'>+1</option>
                <option value="+44" className='text-[#333333]'>+44</option>
                <option value="+91" className='text-[#333333]'>+91</option>
                <option value="+81" className='text-[#333333]'>+81</option>
                {/* Add more country codes as needed */}
              </select>
              
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