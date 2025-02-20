'use client'
import React, {useState} from "react";
import { TbCaretDown, TbCaretUp } from "react-icons/tb";
import { BookingProps } from "@/lib/types";


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
  setForm: React.Dispatch<React.SetStateAction<{
    fullName: string;
    email: string;
    phoneNumber: string;
    recordingLocation: string;
    whatsappNumber: string;
    countryCode: string;
    whatsappCountryCode: string;
    discountCode: string;
  }>>;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  showWarning: boolean;
  book: () => Promise<BookingProps | null>;
  selectedStudio: string | undefined;
  
};


const FormSection = ({ form, setForm, book, checked, setChecked,showWarning, selectedStudio }: BookingDetailsProps) => {
  // const [checked, setChecked] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [whatsappDropdownOpen, setwhatsappDropdownOpen] = useState(false);
  const [formErrors, setFormErrors] = useState(false);
  const countryCodes = [
    { code: "+971", country: "UAE" },
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+81", country: "Japan" },
  ];
  const whatsappCountryCodes = [
    { code: "+971", country: "UAE" },
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+81", country: "Japan" },
  ];

  const handleChange = (e: { target: { id: string; value: string | number }; }) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleCountrySelect = (code: string) => {
    setForm((prev) => ({ ...prev, countryCode: code,  }));
    setDropdownOpen(false);
  };
  const handleWhatsappCountrySelect = (code: string) => {
    setForm((prev) => ({ ...prev, whatsappCountryCode: code,  }));
    setwhatsappDropdownOpen(false);
  };

  const validateRequiredFields = () => {
    const requiredFields = {
      fullName: form.fullName,
      email: form.email,
      phoneNumber: form.phoneNumber,
      whatsappNumber: form.whatsappNumber,
      countryCode: form.countryCode,
      whatsappCountryCode: form.whatsappCountryCode
    };

    return Object.values(requiredFields).every(field => field.trim() !== '');
  };
  const handleCheckboxChange = async () => {
    if (!checked) {
      // Only validate when trying to check the box
      if (!validateRequiredFields()) {
        setFormErrors(true);
        return;
      }
    }
    
    
    const newChecked = !checked;
    setChecked(newChecked);
    setFormErrors(false);

    if (newChecked) {
      const response = await book();
      console.log(response);
    }
  };
  

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col mt-8 lg:mt-10 w-full md:w-[90%] mx-auto lg:w-full max-md:mt-10 ">
      <div className="flex flex-col w-full">
        <h3 className="header-text">
          Enter Your Contact Information
        </h3>
      </div>
      <div className="flex flex-col mt-5 text-[#333333] font-nunitoSans text-base leading-3  lg:leading-6 font-normal 3xl:leading-[19.1px] 3xl:mt-6 w-full  ">
        <div className="flex gap-4 items-start w-full ">
          <label
            htmlFor="fullName"
            className="sr-only"
          >
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full name"
            className="flex-1 shrink gap-10 self-stretch  px-5 py-4 w-full rounded-xl bg-[#F5F5F7] focus:outline-none"
            aria-label="Full name"
          />
        </div>
        <label
          htmlFor="email"
          className="sr-only"
        >
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address"
          className="gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 mt-3 3xl:mt-5 w-full rounded-xl bg-[#F5F5F7]  focus:outline-none "
          aria-label="Email address"
        />
        <label
          htmlFor="recordingLocation"
          className="sr-only"
        >
          Recording Location
        </label>
        {selectedStudio === "Mobile Studio Service" &&
        <input
          id="recordingLocation"
          type="text"
          value={form.recordingLocation}
          onChange={handleChange}
          placeholder="Recording Location"
          className="gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 mt-3 3xl:mt-5 w-full rounded-xl bg-[#F5F5F7]  focus:outline-none "
          aria-label="recording location"
        />}
        <div className="flex gap-4 items-start mt-3 relative 3xl:mt-5 w-full max-md:max-w-full">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex gap-1 items-center 3xl:py-5 py-4 pr-3 3xl:pr-4 pl-4 3xl:pl-6 whitespace-nowrap rounded-xl bg-[#F5F5F7] text-[#333333] ">
            <p className="self-stretch font-normal font-nunitoSans my-auto">
              {form.countryCode}</p>
              {dropdownOpen ?  <TbCaretUp className="size-5 text-[#333333] stroke-[1px]" /> : <TbCaretDown className="size-5 text-[#333333] stroke-[1px]" />}
            
          </button>
          {dropdownOpen && (
              <ul className="absolute left-0 w-1/2 top-full bg-[#F5F5F7] border border-gray-300 rounded-md mt-1 shadow-md z-10">
                {countryCodes.map((item) => (
                  <li
                    key={item.code}
                    onClick={() => handleCountrySelect(item.code)}
                    className="px-4 py-2 hover:bg-gray-200 text-sm font-nunitoSans"
                  >
                    ({item.code}) {item.country} 
                  </li>
                ))}
              </ul>
            )}
          <label
            htmlFor="phoneNumber"
            className="sr-only"
          >
            Phone number
          </label>
          <input
            id="phoneNumber"
            type="tel"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="Phone number"
            className="flex-1 shrink gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 rounded-xl focus:outline-none bg-[#F5F5F7] "
            aria-label="Phone number"
          />
        </div>
        <div className="flex gap-4 items-start mt-3 relative 3xl:mt-5 w-full max-md:max-w-full">
          <button onClick={() => setwhatsappDropdownOpen(!whatsappDropdownOpen)} className="flex gap-1 items-center 3xl:py-5 py-4 pr-3 3xl:pr-4 pl-4 3xl:pl-6 whitespace-nowrap rounded-xl bg-[#F5F5F7] text-[#333333] ">
            <p className="self-stretch font-normal font-nunitoSans my-auto">
              {form.whatsappCountryCode}</p>
              {whatsappDropdownOpen ?  <TbCaretUp className="size-5 text-[#333333] stroke-[1px]" /> : <TbCaretDown className="size-5 text-[#333333] stroke-[1px]" />}
          </button>
          {whatsappDropdownOpen && (
              <ul className="absolute left-0 w-1/2 top-full bg-[#F5F5F7] border border-gray-300 rounded-md mt-1 shadow-md z-10">
                {whatsappCountryCodes.map((item) => (
                  <li
                    key={item.code}
                    onClick={() => handleWhatsappCountrySelect(item.code)}
                    className="px-4 py-2 hover:bg-gray-200 text-sm font-nunitoSans"
                  >
                    ({item.code}) {item.country} 
                  </li>
                ))}
              </ul>
            )}
          <label
            htmlFor="whatsappNumber"
            className="sr-only"
          >
            whatsapp number
          </label>
          <input
            id="whatsappNumber"
            type="tel"
            value={form.whatsappNumber}
            onChange={handleChange}
            placeholder="Whatspp number"
            className="flex-1 shrink gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 rounded-xl focus:outline-none bg-[#F5F5F7] "
            aria-label="Whatsapp number"
          />
        </div>
        <label
          htmlFor="discountCode"
          className="sr-only"
        >
          Discount Code
        </label>
        <input
          id="discountCode"
          type="text"
          value={form.discountCode}
          onChange={handleChange}
          placeholder="Discount code (optional)"
          className="gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 mt-3 3xl:mt-5 w-full rounded-xl bg-[#F5F5F7]  focus:outline-none "
          aria-label="Discount code (optional)"
        />
        <div className="flex mt-3 items-center space-x-2">
          <input
            type="checkbox"
            checked={checked}
            role="button"
            onChange={handleCheckboxChange}
            required
            className="w-4 h-4 3xl:w-5 3xl:h-5 rounded accent-[#FF8C42] focus:ring-0"
          />
          <label
            className="text-[#333333] text-xs leading-[11.82px] 3xl:text-sm font-normal 3xl:leading-[21.82px] font-nunitoSans"
            style={{
              textDecoration: 'none',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            Yes, I&apos;d like to receive my booking confirmation and updates.
          </label>
          
      </div>
      {formErrors && (
        <p className="text-[#FF4242] text-sm leading-[19.1px] font-nunitoSans mt-2">
          Please fill in all required fields before confirming
        </p>
      )}
      {showWarning && !checked && <p className="text-[#FF4242] text-sm leading-[19.1px] font-nunitoSans mt-2">
            Please confirm to receive booking updates
          </p>}
      </div>
    </form>
  );
}

export default FormSection;