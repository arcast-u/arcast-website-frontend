"use client";

import React from 'react';
import EquipmentCard from './recording-EquipmentCard';


const EquipmentSection = () => {
  return (
    <section 
      className="pt-[5px] items-center text-sm font-medium text-[#333333] leading-[19.1px] grid grid-cols-1 gap-3"
      aria-label="Available Equipment"
    >
      <div className='flex gap-3 '>
        <div className="w-[38vw]">
            <EquipmentCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/61d4bc9176a445717b75c9cf0409c2c2f48d5330f1055217bd6b0118e39b4dc6?placeholderIfAbsent=true"
            description="3x Sony cinema cameras"
            />
        </div>
        <div className="flex flex-1">
            <EquipmentCard
                imageSrc="https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/2e5d7b7e4374bf2b54e52770d8bc8b312243ac49444a0d8ca8fbb9f47e16e3f0?placeholderIfAbsent=true"
                description="Professional audio mixer and microphones"
            />
        </div>
      </div>
      <div className='flex gap-3 '>
        <div className="flex flex-1">
            <EquipmentCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/a3310dcd66edb667419383630bf13ee697f92f279904e9a5e9f1039bca2b3f01?placeholderIfAbsent=true"
            description="Necessary stands and cables"
            />
        </div>
        <div className="w-[38vw]">
            <EquipmentCard
                imageSrc="https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/7b6ac4632e942f2868415d928bc5aa3599d6f9b0ba955ac7b58023a97cc3f797?placeholderIfAbsent=true"
                description="Complete lighting setup"
            />
        </div>
      </div>
      <div className='flex gap-3 '>
        <div className="w-[38vw]">
            <EquipmentCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/62acf0916736b6c02c5fbec6dc6502d0abcb8e6d19d9604f521b5db574d56ae5?placeholderIfAbsent=true"
            description="Recording operator"
            />
        </div>
        <div className="flex-1 flex">
            <EquipmentCard
                imageSrc="https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/997a3457ab77a49626acf6c66f344ef065888e775e179edfde745221d764f438?placeholderIfAbsent=true"
                description="Full technical setup"
            />
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;