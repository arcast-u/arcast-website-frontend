'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactOverlay = ({ isOpen, onClose }: ContactOverlayProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    countryCode: '+971'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 backdrop-blur-sm bg-black/50 z-40"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed px-5 py-8 3xl:p-8 right-0 top-0 h-full 3xl:h-screen w-full lg:w-[35.7%] bg-[#FCFCFC] z-50 overflow-y-auto"
          >
            {/* Main container with flex layout */}
            <div className="font-nunitoSans h-full flex flex-col">
              {/* Back Button */}
              <button 
                onClick={onClose}
                className="inline-block w-fit font-nunitoSans font-normal text-xs 3xl:text-base 3xl:leading-[21.82px] leading-[16.37px] 3xl:py-3 3xl:px-8 3xl:border mb-8 3xl:mb-10 px-6 py-2 text-[#333333] rounded-lg border-[0.8px] border-[#989898] hover:scale-105"
              >
                Back
              </button>

              {/* Form Content */}
              <div className="flex-1 flex flex-col h-full">
                <div className='w-[87%]'>
                  <h1 className="text-2xl leading-8 font-medium font-hankenGrotesk text-[#333333] 3xl:text-3xl 3xl:leading-[39.9px] mb-2 3xl:mb-3">Contact Us</h1>
                  <p className="text-[#333333] font-normal text-sm 3xl:text-lg 3xl:leading-[24.55px] leading-[19.1px] mb-2">
                    Whether you&apos;re ready to record or just have questions, we&apos;re here to help.
                  </p>
                  <p className="text-[#333333] font-normal text-sm 3xl:text-lg 3xl:leading-[24.55px] leading-[19.1px]">
                    Fill out the form below and we&apos;ll get back to you within 5 minutes.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col h-full mt-6">
                  <div className="space-y-3 flex-1">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full p-3 rounded-md bg-[#F5F5F7] focus:outline-none focus:ring-2 focus:ring-[#FF8C42]"
                      />
                      <input
                        type="text"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full p-3 rounded-md bg-[#F5F5F7] focus:outline-none focus:ring-2 focus:ring-[#FF8C42]"
                      />
                    </div>

                    {/* Email Field */}
                    <input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-3 rounded-md bg-[#F5F5F7] focus:outline-none focus:ring-2 focus:ring-[#FF8C42]"
                    />

                    {/* Phone Number */}
                    <div className="grid grid-cols-4 gap-4">
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                        className="p-3 rounded-md bg-[#F5F5F7] focus:outline-none focus:ring-2 focus:ring-[#FF8C42]"
                      >
                        <option value="+971">+971</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="Phone number"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                        className="col-span-3 p-3 rounded-md bg-[#F5F5F7] focus:outline-none focus:ring-2 focus:ring-[#FF8C42]"
                      />
                    </div>

                    {/* Message Field */}
                    <textarea
                      placeholder="Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full p-3 rounded-md bg-[#F5F5F7] focus:outline-none focus:ring-2 focus:ring-[#FF8C42]"
                    />

                    {/* Reach Out Section */}
                    <div className="pt-5 pb-14 3xl:pb-0 3xl:pt-4">
                      <h2 className="text-[30px] leading-[40.92px] font-medium text-[#333333] mb-3 3xl:mb-4">Reach Out To Us</h2>
                      <div className="space-y-2 3xl:space-y-4 text-base leading-[21.82px] font-normal 3xl:text-lg 3xl:leading-[24.55px]">
                        <a href="mailto:booking@arcastdubai.com" className="flex items-center text-[#333333] hover:text-[#FF8C42] hover:underline">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Booking@arcastdubai.com
                        </a>
                        <a href="tel:+971544287756" className="flex items-center text-[#333333] hover:text-[#FF8C42] hover:underline">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          +971 544287756
                        </a>
                        <a href="https://wa.me/+971544287756" className="flex items-center text-[#333333] hover:text-[#FF8C42] hover:underline">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          +971 544287756
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="sticky bottom-0 w-full  3xl:mt-auto  bg-zinc-50 shadow-lg shadow-[#8080801A] mx-auto  border border-[#989898] rounded-2xl border-opacity-50">
                    <div className="flex justify-end items-center mx-auto px-4 py-3 lg:px-6 font-nunitoSans 3xl:py-4 w-full 3xl:px-8">
                      <div className="flex w-fit hover:scale-105 lg:flex rounded-lg bg-gradient-to-b from-[#FFC49D] ring-2 ring-[#FFEDE1] to-[#FF8C42] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans font-medium 3xl:leading-[21.82px] 3xl:text-base p-[0.4px]">
                        <button type='submit' className="flex-1 bg-[#FF8C42] w-fit px-[43.5px] py-[10.5px] 3xl:py-4 3xl:px-[83.5px] rounded-lg">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactOverlay;