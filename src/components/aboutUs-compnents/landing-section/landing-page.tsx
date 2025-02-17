import React from 'react'
import NavigationBar from '../../homepage-components/nav-bar';

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className='md:h-screen overflow-hidden '>
        <NavigationBar/>
        <div className='px-[21px] h-full flex md:items-center lg:items-start 2xl:items-center justify-center'>
        <div className=' mx-auto w-full md:w-[70%] lg:w-[45%] 3xl:w-[60%] '>
            <h1 className='font-hankenGrotesk text-[#FCFCFC] text-center text-[32px] lg:mt-8 mb-6 3xl:mb-10 leading-[46.91px] 3xl:text-5xl 3xl:leading-[62.5px] font-medium'>
                WHO WE ARE
            </h1>
            <p className='mb-6 font-nunitoSans font-normal text-[#FCFCFC] text-xl leading-[30px] 3xl:text-[28px] 3xl:leading-[48px]'>ARcast was born at the intersection of professional broadcasting and personal storytelling. 
                We&apos;re more than a podcast studio - <span className='text-[#FF8C42]'>we&apos;re a team dedicated to giving voices the platform they deserve</span>, 
                whether it&apos;s shaping business narratives or preserving personal legacies. 
                From our state-of-the-art recording spaces to our dedication to technical excellence, 
                we believe in creating an environment where every story can be told with clarity and impact.
            </p>
            <p className='font-nunitoSans font-normal text-[#FCFCFC] text-xl leading-[30px] lg:text-lg 3xl:text-[28px] 3xl:leading-[48px]'>Our commitment to quality extends beyond our equipment. 
                It&apos;s in the way we understand each client&apos;s unique needs, 
                the attention we give to every technical detail, 
                and our drive to make professional podcasting accessible to both established businesses and emerging voices. 
                <span className='text-[#FF8C42]'>With a team of dedicated professionals and a vision that spans continents, 
                we&apos;re setting new standards for what a podcast studio can be.</span>
            </p>
        </div>
        </div>
        
    </div>
  )
}

export default LandingPage;