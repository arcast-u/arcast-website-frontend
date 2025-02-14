import React from 'react'

function CommunityHeader() {
  return (
    <header className="flex gap-5 justify-center mx-auto mb-10 3xl:mb-[120px] w-full text-[#333333]">
      <div className=" justify-center font-hankenGrotesk">
        <h1 className="text-[32px] text-center leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px] font-medium ">
            Hear From Our Community
        </h1>
        <p className="mt-4 lg:w-[70%] text-center mx-auto text-xl 3xl:text-[28px] font-nunitoSans leading-[27.28px] 3xl:leading-[38.19px] font-normal">
            See why leading voices in Dubai choose 
            <span className="text-[#FF8C42]"> ARcast </span> podcast studio .
        
        </p>
      </div>
    </header>
  )
}

export default CommunityHeader