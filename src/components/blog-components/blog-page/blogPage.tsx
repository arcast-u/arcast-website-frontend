'use client'
import React, {useState,useEffect} from 'react';
import Card from '../blog-card/card';


const cards = [
    {
        id: 1,
        title: 'The Power of Podcasting',
        description: 'Why Every Business Needs a Voice',
        button: 'Podcasting Tips',
        image: ['/images/tips.png', '/images/tipslg.png'],
        date: 'Februray 15, 2025',
    },
    {
        id: 2,
        title: 'Video Podcasts vs. Audio-Only',
        description: 'Which One Works Best for You?',
        button: 'Video Podcasting',
        image: ['/images/video.png', '/images/videolg.png'],
        date: 'February 4, 2025',
    },
    {
        id: 3,
        title: 'Video Podcasts vs. Audio-Only',
        description: 'Which One Works Best for You?',
        button: 'Marketing & Growth',
        image: ['/images/growth.png', '/images/growthlg.png'],
        date: 'January 28, 2025',
    },
    {
        id: 4,
        title: 'Video Podcasts vs. Audio-Only',
        description: 'Which One Works Best for You?',
        button: 'Studio Experience',
        image: ['/images/studio.png', '/images/studiolg.png'],
        date: 'January 16, 2025',
    },
    {
        id: 5,
        title: 'Video Podcasts vs. Audio-Only',
        description: 'Which One Works Best for You?',
        button: 'Industry Insights',
        image: ['/images/industry.png', '/images/industrylg.png'],
        date: 'January 8, 2025',
    },
    {
        id: 6,
        title: 'Video Podcasts vs. Audio-Only',
        description: 'Which One Works Best for You?',
        button: 'Post-Production',
        image: ['/images/audio.png', '/images/audiolg.png'],
        date: 'January 1, 2025',
    }
]
const useScreenWidth = () => {
    const [isDesktop, setIsDesktop] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1024);
      };
  
      // Initial check
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return isDesktop;
  };

const BlogPage = () => {
    const isDesktop = useScreenWidth();

  return (
    <div className='px-[21px] lg:px-10 mt-[50px] 3xl:px-[100px] lg:mt-10  md:mb-[51px] 3xl:mb-[120px]'>
        <h1 className='font-hankenGrotesk text-[#333333] text-[32px] mb-6 3xl:mb-10 leading-[46.91px] 3xl:text-5xl 3xl:leading-[62.5px] font-semibold'>
            Blogs
        </h1>
        <p className='text-[#333333] mt-4 lg:w-[50%] 3xl:w-[48%] text-xl 3xl:text-[28px] leading-[27.28px] font-nunitoSans 3xl:leading-[38.19px] font-normal'>Explore expert advice, industry trends, and behind-the-scenes content to take your podcast to the next level.</p>
        <div className='w-full mt-[17px] space-y-10 lg:space-y-16'>
            <div className='flex space-y-10 lg:space-y-0 items-center flex-wrap lg:flex-nowrap justify-between'>
                <div className='w-full lg:w-[56%]'>
                    <Card 
                    title={cards[0].title} 
                    description={cards[0].description} 
                    button={cards[0].button} 
                    image={cards[0].image[isDesktop ? 1 : 0]} 
                    date={cards[0].date} />
                </div>
                <div className='w-full lg:w-[42.5%]'>
                    <Card 
                    title={cards[1].title} 
                    description={cards[1].description} 
                    button={cards[1].button} 
                    image={cards[1].image[isDesktop ? 1 : 0]} 
                    date={cards[1].date} />
                </div>
            </div>
            <div className='flex space-y-10 lg:space-y-0 items-center flex-wrap lg:flex-nowrap justify-between'>
                <div className='w-full lg:w-[42.5%]'>
                    <Card 
                    title={cards[2].title} 
                    description={cards[2].description} 
                    button={cards[2].button} 
                    image={cards[2].image[isDesktop ? 1 : 0]} 
                    date={cards[2].date} />
                </div>
                <div className='w-full lg:w-[56%]'>
                    <Card 
                    title={cards[3].title} 
                    description={cards[3].description} 
                    button={cards[3].button} 
                    image={cards[3].image[isDesktop ? 1 : 0]} 
                    date={cards[3].date} />
                </div>
            </div>
            <div className='flex space-y-10 lg:space-y-0 items-center flex-wrap lg:flex-nowrap justify-between'>
                <div className='w-full lg:w-[56%]'>
                    <Card 
                    title={cards[4].title} 
                    description={cards[4].description} 
                    button={cards[4].button} 
                    image={cards[4].image[isDesktop ? 1 : 0]} 
                    date={cards[4].date} />
                </div>
                <div className='w-full lg:w-[42.5%]'>
                    <Card 
                    title={cards[5].title} 
                    description={cards[5].description} 
                    button={cards[5].button} 
                    image={cards[5].image[isDesktop ? 1 : 0]} 
                    date={cards[5].date} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogPage;