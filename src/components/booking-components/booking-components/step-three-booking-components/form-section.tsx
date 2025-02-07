'use client'
import React, {useState} from "react";
import { TbCaretDown } from "react-icons/tb";

const FormSection = () => {
  const [form, setForm] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    whatsappNumber: "",
    countryCode: "+971",
    whatsappCountryCode: "+971",
    discountCode:"",
    recordingLocation: '',
  });
  const [checked, setChecked] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [whatsappDropdownOpen, setwhatsappDropdownOpen] = useState(false);
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


  const handleSubmit = () => {
    if (checked) {
      console.log("Form Submitted", form);
      // Handle form submission logic here (e.g., send to API)
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col mt-8 lg:mt-10 3xl:mt-12 w-full md:w-[90%] mx-auto lg:w-full max-md:mt-10 ">
      <div className="flex flex-col w-full">
        <h3 className="header-text">
          Enter Your Contact Information
        </h3>
      </div>
      <div className="flex flex-col mt-5 text-[#989898] font-nunitoSans text-base leading-[21.82px] lg:text-lg lg:leading-6 fornt-normal 3xl:leading-[27.28px] 3xl:mt-6 w-full 3xl:text-xl ">
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
            className="flex-1 shrink gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 w-full rounded-xl bg-[#F5F5F7] focus:outline-none"
            aria-label="Full name"
          />
        </div>
        <label
          htmlFor="emailAddress"
          className="sr-only"
        >
          Email address
        </label>
        <input
          id="emailAddress"
          type="email"
          value={form.emailAddress}
          onChange={handleChange}
          placeholder="Email address"
          className="gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 mt-3 3xl:mt-5 w-full rounded-xl bg-[#F5F5F7]  focus:outline-none "
          aria-label="Email address"
        />
        <label
          htmlFor="recordingLocation"
          className="sr-only"
        >
          Email address
        </label>
        <input
          id="recordingLocation"
          type="email"
          value={form.recordingLocation}
          onChange={handleChange}
          placeholder="Recording Location"
          className="gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 mt-3 3xl:mt-5 w-full rounded-xl bg-[#F5F5F7]  focus:outline-none "
          aria-label="Email address"
        />
        <div className="flex gap-4 items-start mt-3 relative 3xl:mt-5 w-full max-md:max-w-full">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex gap-1 items-center 3xl:py-5 py-4 pr-3 3xl:pr-4 pl-4 3xl:pl-6 whitespace-nowrap rounded-xl bg-[#F5F5F7] text-[#333333] ">
            <p className="self-stretch font-normal font-nunitoSans my-auto">
              {form.countryCode}</p>
            <TbCaretDown className="w-5 stroke-[1px]"/>
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
            <TbCaretDown className="w-5 stroke-[1px]"/>
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
            placeholder="Phone number"
            className="flex-1 shrink gap-10 self-stretch px-5 py-4 3xl:px-6 3xl:py-5 rounded-xl focus:outline-none bg-[#F5F5F7] "
            aria-label="Phone number"
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
            onChange={() => {
              setChecked(!checked);
              handleSubmit();
            }}
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
      </div>
    </form>
  );
}

export default FormSection;