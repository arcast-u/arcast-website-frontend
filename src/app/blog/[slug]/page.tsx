// 'use client'
// import React, {useState,useEffect} from 'react';
// // import Card from '../blog-card/card';


// // const cards = [
// //     {
// //         id: 1,
// //         title: 'The Power of Podcasting',
// //         description: 'Why Every Business Needs a Voice',
// //         button: 'Podcasting Tips',
// //         image: ['/images/tips.png', '/images/tipslg.png'],
// //         date: 'Februray 15, 2025',
// //     },
// //     {
// //         id: 2,
// //         title: 'Video Podcasts vs. Audio-Only',
// //         description: 'Which One Works Best for You?',
// //         button: 'Video Podcasting',
// //         image: ['/images/video.png', '/images/videolg.png'],
// //         date: 'February 4, 2025',
// //     },
// //     {
// //         id: 3,
// //         title: 'Video Podcasts vs. Audio-Only',
// //         description: 'Which One Works Best for You?',
// //         button: 'Marketing & Growth',
// //         image: ['/images/growth.png', '/images/growthlg.png'],
// //         date: 'January 28, 2025',
// //     },
// //     {
// //         id: 4,
// //         title: 'Video Podcasts vs. Audio-Only',
// //         description: 'Which One Works Best for You?',
// //         button: 'Studio Experience',
// //         image: ['/images/studio.png', '/images/studiolg.png'],
// //         date: 'January 16, 2025',
// //     },
// //     {
// //         id: 5,
// //         title: 'Video Podcasts vs. Audio-Only',
// //         description: 'Which One Works Best for You?',
// //         button: 'Industry Insights',
// //         image: ['/images/industry.png', '/images/industrylg.png'],
// //         date: 'January 8, 2025',
// //     },
// //     {
// //         id: 6,
// //         title: 'Video Podcasts vs. Audio-Only',
// //         description: 'Which One Works Best for You?',
// //         button: 'Post-Production',
// //         image: ['/images/audio.png', '/images/audiolg.png'],
// //         date: 'January 1, 2025',
// //     }
// // ]
// const useScreenWidth = () => {
//     const [isDesktop, setIsDesktop] = useState(false);
  
//     useEffect(() => {
//       const handleResize = () => {
//         setIsDesktop(window.innerWidth >= 1024);
//       };
  
//       // Initial check
//       handleResize();
  
//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }, []);
  
//     return isDesktop;
//   };
//   // type Props = {
//   //   params: {
//   //     id: string;
//   //   };
//   // };
// const BlogPage = () => {
//     const isDesktop = useScreenWidth();

//   return (
//     <div className='px-[21px] lg:px-10 mt-[50px] 3xl:px-[100px] lg:mt-10  md:mb-[51px] lg:mb-0  3xl:mb-[120px]'>
//         <h1 className='font-hankenGrotesk text-[#333333] text-[32px] mb-6 3xl:mb-10 leading-[46.91px] 3xl:text-5xl 3xl:leading-[62.5px] font-semibold'>
//             Blogs
//         </h1>
//         <p className='text-[#333333] mt-4 lg:w-[50%] 3xl:w-[48%] text-xl 3xl:text-[28px] leading-[27.28px] font-nunitoSans 3xl:leading-[38.19px] font-normal'>Why Every Business Needs a Voice</p>
        
//     </div>
//   )
// }

// export default BlogPage;