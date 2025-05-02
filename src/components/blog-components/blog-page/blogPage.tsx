'use client';
import React from 'react';
import Card from '../blog-card/card';
import NavigationBar from '@/components/homepage-components/nav-bar';
import { blogData } from '@/utils/blog-data';

// const useScreenWidth = () => {
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 1024);
//     };

//     // Initial check
//     handleResize();

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return isDesktop;
// };

const BlogPage = () => {
  //   const isDesktop = useScreenWidth();

  return (
    <div className='w-full'>
      <div className='max-w-[1728px] mx-auto relative z-30'>
        <NavigationBar />
      </div>
      <div className='max-w-[1728px] mx-auto px-[21px] md:px-10 mt-[50px] 3xl:px-[100px] lg:mt-10  pb-8 md:pb-[51px] 3xl:pb-[120px]'>
        <h1 className='font-hankenGrotesk text-[#333333] text-[32px] mb-6 3xl:mb-10 leading-[46.91px] 3xl:text-5xl 3xl:leading-[62.5px] font-semibold'>
          Blogs
        </h1>
        <p className='text-[#333333] mt-4 lg:w-[50%] 3xl:w-[48%] text-xl 3xl:text-[28px] leading-[27.28px] font-nunitoSans 3xl:leading-[38.19px] font-normal'>
          Explore expert advice, industry trends, and behind-the-scenes content
          to take your podcast to the next level.
        </p>
        <div className='w-full mt-[17px] lg:mt-[50px] 3xl:mt-[100px] space-y-10 lg:space-y-16'>
          <div className='flex space-y-10 lg:space-y-0 flex-wrap lg:flex-nowrap justify-between'>
            <div className='w-full lg:w-[56%]'>
              <Card
                title={blogData[0]?.title}
                description={blogData[0]?.description}
                button={blogData[0]?.button}
                image={blogData[0]?.image}
                date={blogData[0]?.date}
              />
            </div>
            <div className='w-full lg:w-[42.5%]'>
              <Card
                title={blogData[1]?.title}
                description={blogData[1]?.description}
                button={blogData[1]?.button}
                image={blogData[1]?.image}
                date={blogData[1]?.date}
              />
            </div>
          </div>
          {/* <div className='flex space-y-10 lg:space-y-0 items-center flex-wrap lg:flex-nowrap justify-between'>
            <div className='w-full lg:w-[42.5%]'>
              <Card
                title={blogData[2].title}
                description={blogData[2].description}
                button={blogData[2].button}
                image={blogData[2].image[isDesktop ? 1 : 0]}
                date={blogData[2].date}
              />
            </div>
            <div className='w-full lg:w-[56%]'>
              <Card
                title={blogData[3].title}
                description={blogData[3].description}
                button={blogData[3].button}
                image={blogData[3].image[isDesktop ? 1 : 0]}
                date={blogData[3].date}
              />
            </div>
          </div>
          <div className='flex space-y-10 lg:space-y-0 items-center flex-wrap lg:flex-nowrap justify-between'>
            <div className='w-full lg:w-[56%]'>
              <Card
                title={blogData[4].title}
                description={blogData[4].description}
                button={blogData[4].button}
                image={blogData[4].image[isDesktop ? 1 : 0]}
                date={blogData[4].date}
              />
            </div>
            <div className='w-full lg:w-[42.5%]'>
              <Card
                title={blogData[5].title}
                description={blogData[5].description}
                button={blogData[5].button}
                image={blogData[5].image[isDesktop ? 1 : 0]}
                date={blogData[5].date}
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
