'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import NavigationBar from '@/components/homepage-components/nav-bar';
import Card from '@/components/blog-components/blog-card/card';
import NewsletterSignup from '@/components/homepage-components/newsletter/newsletter';
import Footer from '@/components/homepage-components/footer/footer';
import Image from 'next/image';

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
    title: 'From Mic to Market',
    description: 'How to Promote Your Podcast Like a Pro',
    button: 'Marketing & Growth',
    image: ['/images/growth.png', '/images/growthlg.png'],
    date: 'January 28, 2025',
  },
  {
    id: 4,
    title: ' Behind the Scenes:',
    description: ' A Day in the ARcast Podcast Studio',
    button: 'Studio Experience',
    image: ['/images/studio.png', '/images/studiolg.png'],
    date: 'January 16, 2025',
  },
  {
    id: 5,
    title: 'From Mic to Market',
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
  },
];
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
const IndividualBlog = () => {
  const isDesktop = useScreenWidth();
  const params = useParams();
  const searchParams = useSearchParams();
  const post = searchParams.get('title');
  console.log(params, post);

  return (
    <div className='  md:mb-[51px] lg:mb-0  3xl:mb-[120px] bg-[#fcfcfc]'>
      <div className='max-w-[1728px] mx-auto'>
        <NavigationBar />
      </div>
      <div className='max-w-[1728px] mx-auto px-[21px] md:px-10 mt-[50px] 3xl:px-[100px]'>
        <h2 className='font-hankenGrotesk mt-[50px] lg:mt-10 text-[#333333] text-[32px] mb-6 3xl:mb-10 leading-[46.91px] 3xl:text-5xl 3xl:leading-[62.5px] font-semibold'>
          The Power of Podcasting
        </h2>
        <p className='text-[#333333] mt-4 lg:w-[50%] 3xl:w-[48%] text-xl 3xl:text-[28px] leading-[27.28px] font-nunitoSans 3xl:leading-[38.19px] font-normal'>
          Why Every Business Needs a Voice
        </p>
        <div className='flex font-nunitoSans font-medium flex-wrap md:flex-nowrap mt-8 justify-between items-start 3xl:mb-[50px]'>
          <div className='flex text-[#333333] text-xs lg:text-lg lg:leading-[24.55px] leading-[12.37px] gap-8 items-center'>
            <div className=' border border-[#333333] py-1.5 px-2 lg:py-2 lg:px-3 rounded'>
              Podcasting Tips
            </div>
            <p>5 mins read</p>
          </div>
          <div className='flex w-full md:w-auto justify-between mt-5 md:mt-0 text-sm lg:text-lg lg:leading-[24.55px] leading-[19.1px] font-normal text-[#989898] gap-8 items-center'>
            <div>
              <p>Written By</p>
              <p className='text-[#333333] mt-1.5'>Ose Odia</p>
            </div>
            <div>
              <p>Published</p>
              <p className='text-[#333333] mt-1.5'>February 10, 2025</p>
            </div>
          </div>
        </div>
        <div className='lg:pt-20 w-full pt-7 lg:mt-[50px] mt-7 border-t-[0.5px] border-[#989898]'>
          <Image
            width={334.65}
            height={199}
            src='/images/tips.png'
            alt='tips'
            quality={100}
            loading='lazy'
            className='mx-auto w-full md:w-[80%] md:h-[350px] lg:h-[400px] lg:w-[70%] 3xl:h-[600px] max-w-[1009px]'
          />
          <div className='w-full md:w-[70%] lg:w-[63%] max-w-[748px] font-nunitoSans font-normal text-sm leading-5 lg:text-base lg:leading-[21.82px] mx-auto py-8 text-[#333333] space-y-8 lg:space-y-12'>
            {/* First paragraph */}
            <p className='leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </p>

            {/* First Introduction Section */}
            <section className='space-y-6'>
              <h2 className='text-xl leading-[27.28px] lg:text-2xl lg:leading-[32.74px] font-bold '>
                Introduction
              </h2>
              <p className='leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
              <p className='leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
            </section>

            {/* Second Introduction Section */}
            <section className='space-y-6'>
              <h2 className='text-xl leading-[27.28px] lg:text-2xl lg:leading-[32.74px] font-bold  '>
                Introduction
              </h2>
              <p className='leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
              <p className='leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
            </section>

            {/* Third Introduction Section */}
            <section className='space-y-6'>
              <h2 className='text-xl leading-[27.28px] lg:text-2xl lg:leading-[32.74px] font-bold '>
                Introduction
              </h2>
              <p className='leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
              <p className='leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
            </section>

            {/* Quote Section */}
            <blockquote className='pl-4 border-l-4 border-[#333333] space-y-4'>
              <p className='text-base lg:text-lg italic'>
                &#8220;In a world older and more complex than ours they move
                finished and complete, gifted with extentions of the senses we
                have lost or never attained, living by voices we shall never
                hear&#8221;
              </p>
              <cite className='block'>-Olivia Rhye</cite>
            </blockquote>

            {/* Conclusion Section */}
            <section className='space-y-6'>
              <h2 className='text-xl leading-[27.28px] lg:text-2xl lg:leading-[32.74px] font-bold  '>
                Conclusion
              </h2>
              <p className='leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
            </section>
          </div>
        </div>
        <p className='font-hankenGrotesk font-medium text-2xl leading-[31.2px] mb-8 3xl:mb-20 mt-[60px] 3xl:mt-80 3xl:text-[32px] 3xl:leading-[41.7px]'>
          Related Blogs
        </p>
        <div className='flex space-y-10 lg:space-y-0 mb-[60px] 3xl::mb-20 items-center flex-wrap lg:flex-nowrap justify-between'>
          <div className='w-full lg:w-[42.5%]'>
            <Card
              title={cards[2].title}
              description={cards[2].description}
              button={cards[2].button}
              image={cards[2].image[isDesktop ? 1 : 0]}
              date={cards[2].date}
            />
          </div>
          <div className='w-full lg:w-[56%]'>
            <Card
              title={cards[3].title}
              description={cards[3].description}
              button={cards[3].button}
              image={cards[3].image[isDesktop ? 1 : 0]}
              date={cards[3].date}
            />
          </div>
        </div>
      </div>
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default IndividualBlog;
