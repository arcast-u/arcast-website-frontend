/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import NavigationBar from '@/components/homepage-components/nav-bar';
import Card from '@/components/blog-components/blog-card/card';
import Footer from '@/components/homepage-components/footer/footer';
import { blogData } from '@/utils/blog-data';
import { slugify } from '@/lib/utils';

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
const BlogDetails = () => {
  // const isDesktop = useScreenWidth();
  const params = useParams();
  const [currentBlog, setCurrentBlog] = useState<(typeof blogData)[0] | null>(
    null
  );
  const [relatedBlogs, setRelatedBlogs] = useState<typeof blogData>([]);
  useEffect(() => {
    const slug = params.title as string;

    // Find the blog post that matches the slug
    const foundBlog = blogData.find((blog) => slugify(blog.title) === slug);

    if (foundBlog) {
      setCurrentBlog(foundBlog);

      // Get 2 related blogs (excluding the current one)
      const related = blogData
        .filter((blog) => blog.id !== foundBlog.id)
        .slice(0, 2);

      setRelatedBlogs(related);
    }
  }, [params]);
  return (
    <div className='  md:mb-[51px] lg:mb-0  3xl:mb-[120px] bg-[#fcfcfc]'>
      <div className='max-w-[1728px] mx-auto'>
        <NavigationBar />
      </div>
      <div className='max-w-[1728px] mx-auto px-[21px] md:px-10 mt-[50px] 3xl:px-[100px]'>
        <h2 className='font-hankenGrotesk mt-[50px] lg:mt-10 text-[#333333] text-[32px] mb-6 3xl:mb-10 leading-[46.91px] 3xl:text-5xl 3xl:leading-[62.5px] font-semibold'>
          {currentBlog?.title}
        </h2>
        <p className='text-[#333333] mt-4 lg:w-[50%] 3xl:w-[48%] text-xl 3xl:text-[28px] leading-[27.28px] font-nunitoSans 3xl:leading-[38.19px] font-normal'>
          {currentBlog?.description}
        </p>
        <div className='flex font-nunitoSans font-medium flex-wrap md:flex-nowrap mt-8 justify-between items-start 3xl:mb-[50px]'>
          <div className='flex text-[#333333] text-xs lg:text-lg lg:leading-[24.55px] leading-[12.37px] gap-8 items-center'>
            <div className=' border border-[#333333] py-1.5 px-2 lg:py-2 lg:px-3 rounded'>
              {currentBlog?.button}
            </div>
            <p>{currentBlog?.content?.read} read</p>
          </div>
          <div className='flex w-full md:w-auto justify-between mt-5 md:mt-0 text-sm lg:text-lg lg:leading-[24.55px] leading-[19.1px] font-normal text-[#989898] gap-8 items-center'>
            <div>
              <p>Written By</p>
              <p className='text-[#333333] mt-1.5'>Arcast</p>
            </div>
            <div>
              <p>Published</p>
              <p className='text-[#333333] mt-1.5'>{currentBlog?.date}</p>
            </div>
          </div>
        </div>
        <div className='lg:pt-20 w-full pt-7 lg:mt-[50px] mt-7 border-t-[0.5px] border-[#989898]'>
          <img
            src={currentBlog?.image ?? ''}
            alt={currentBlog?.title ?? ''}
            loading='lazy'
            className='mx-auto w-full md:w-[80%] h-[350px] lg:h-[400px] lg:w-[70%] 3xl:h-[600px] max-w-[1009px] object-cover object-center rounded-[8px]'
          />
          <div className='w-full md:w-[70%] lg:w-[63%] max-w-[748px] font-nunitoSans font-normal text-sm leading-5 lg:text-base lg:leading-[21.82px] mx-auto py-8 text-[#333333] space-y-8 lg:space-y-12'>
            {/* First paragraph */}
            <p
              className='leading-relaxed'
              dangerouslySetInnerHTML={{
                __html: currentBlog?.content?.paragraph1 || '',
              }}
            />

            {currentBlog?.content?.subheadings.map((item, index) => (
              <section key={index} className='space-y-6'>
                <h2
                  className='text-xl leading-[27.28px] lg:text-2xl lg:leading-[32.74px] font-bold '
                  dangerouslySetInnerHTML={{
                    __html: item.title || '',
                  }}
                />
                <p
                  className='leading-relaxed'
                  dangerouslySetInnerHTML={{
                    __html: item.content || '',
                  }}
                />
              </section>
            ))}

            {/* Quote Section */}
            {currentBlog?.content?.quote &&
              currentBlog?.content?.quote.length > 0 &&
              currentBlog?.content?.quote.map((item, index) => (
                <blockquote
                  key={index}
                  className='pl-4 border-l-4 border-[#333333] space-y-4'
                >
                  <p className='text-base lg:text-lg italic'>
                    &#8220;{item.quote}&#8221;
                  </p>
                  <cite className='block'>--{item.author}</cite>
                </blockquote>
              ))}

            {/* Conclusion Section */}
            <section className='space-y-6'>
              <h2 className='text-xl leading-[27.28px] lg:text-2xl lg:leading-[32.74px] font-bold  '>
                {currentBlog?.content?.conclusion.title}
              </h2>
              <p
                className='leading-relaxed'
                dangerouslySetInnerHTML={{
                  __html: currentBlog?.content?.conclusion.content || '',
                }}
              />
            </section>
          </div>
        </div>
        <p className='font-hankenGrotesk font-medium text-2xl leading-[31.2px] mb-8 3xl:mb-20 mt-[60px] 3xl:mt-80 3xl:text-[32px] 3xl:leading-[41.7px]'>
          Related Blogs
        </p>
        <div className='flex space-y-10 lg:space-y-0 mb-[60px] 3xl::mb-20 items-center flex-wrap lg:flex-nowrap justify-between'>
          {relatedBlogs.length > 0 ? (
            <>
              <div className='w-full lg:w-[42.5%]'>
                {relatedBlogs[0] && (
                  <Card
                    title={relatedBlogs[0].title}
                    description={relatedBlogs[0].description}
                    button={relatedBlogs[0].button}
                    image={relatedBlogs[0].image}
                    date={relatedBlogs[0].date}
                  />
                )}
              </div>
              <div className='w-full lg:w-[56%]'>
                {relatedBlogs[1] && (
                  <Card
                    title={relatedBlogs[1].title}
                    description={relatedBlogs[1].description}
                    button={relatedBlogs[1].button}
                    image={relatedBlogs[1].image}
                    date={relatedBlogs[1].date}
                  />
                )}
              </div>
            </>
          ) : (
            <p className='text-center w-full text-gray-500'>
              No related blogs found
            </p>
          )}
        </div>
      </div>
      {/* <NewsletterSignup /> */}
      <Footer />
    </div>
  );
};

export default BlogDetails;
