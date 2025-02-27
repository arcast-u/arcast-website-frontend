import BlogPage from '@/components/blog-components/blog-page/blogPage'
import NavigationBar from '@/components/homepage-components/nav-bar'
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