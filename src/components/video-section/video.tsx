import React from 'react'

function Video() {
  return (
    <div className='pt-10 3xl:pt-20 pb-6 px-[21px] rounded-2xl h-screen w-full lg:px-10 3xl:px-[100px]'>
        <video src="/video.mp4" poster='/images/studio7.webp' controls={true} className='w-full rounded-2xl bg-cover h-full'/>
    </div>
  )
}

export default Video