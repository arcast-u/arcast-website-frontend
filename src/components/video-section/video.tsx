import React from 'react'

function Video() {
  return (
    <div className='pt-10 3xl:pt-20 pb-6 px-[21px] rounded-2xl lg:h-screen w-full lg:px-10 3xl:px-[100px]'>
        <video src="/video/video.mp4" poster='/images/welcome.webp' controls={true} className='w-full rounded-2xl object-fit h-full'/>
    </div>
  )
}

export default Video