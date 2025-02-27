import BlogPage from '@/components/blog-components/blog-page/blogPage'
import NewsletterSignup from '@/components/homepage-components/newsletter/newsletter'
import React from 'react'
import Footer from '@/components/homepage-components/footer/footer'

const Page = () => {
  return (
    <div className='bg-[#FCFCFC]'>
        
        <BlogPage/>
        <NewsletterSignup/>
        <Footer/>
    </div>
  )
}

export default Page