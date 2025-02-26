import Footer from '@/components/homepage-components/footer/footer';
import NavigationBar from '@/components/homepage-components/nav-bar';

const TermsAndConditions = () => {
  return (
    <div>
      <div className=' min-h-screen w-full max-w-[1728px] mx-auto  '>
          <NavigationBar/>
        <div className='py-6 px-[21px] md:px-10 3xl:px-[100px] mx-auto'>

          <h1 className='text-[28px] md:text-3xl mdLg:text-5xl font-medium lg:leading-[3.13rem] mb-14 font-hankenGrotesk'>
            Terms and Conditions
          </h1>

          <div className='font-nunitoSans'>
            <h3 className='text-xl md:text-2xl font-semibold mb-4'>
              1. Introduction
            </h3>
            <p className='text-base leading-6'>
              
                Welcome to Arcast. These Terms and Conditions govern your use of our website and services. 
                By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              2. Services
            </h3>

            <p className='text-base leading-6'>
                Arcast provides a mobile rental studio for content creators, 
                entrepreneurs, and businesses. Our services include studio rental, 
                equipment access, and professional recording assistance. 
                All services are subject to availability and may be modified at our discretion.
            </p>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              3. User Responsibilities
            </h3>

            <div>
              <p>By using our services, you agree to:</p>
              <ul className='mt-2 space-y-2 text-base leading-6'>
                <li className='flex gap-2 items-center'>
                  <span className='text-lg'>•</span>
                  <span className=''>
                    Provide accurate and complete information.
                  </span>
                </li>

                <li className='flex gap-2 items-center'>
                  <span className='text-lg'>•</span>
                  <span className=''>
                    Comply with all applicable laws and regulations.
                  </span>
                </li>

                <li className='flex gap-2 items-center'>
                  <span className='text-lg'>•</span>
                  <span className=''>
                    Not use our services for any unlawful or fraudulent
                    purposes.
                  </span>
                </li>
              </ul>
            </div>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              4. Payments
            </h3>

            <p className='text-base leading-6'>
              
                All fees for our services will be communicated to you prior to any transaction. 
                Payments can be made through various methods as indicated on our website. 
                Refunds and cancellations are subject to our refund policy.
            </p>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              5. Intellectual Property
            </h3>

            <p className='text-base leading-6'>
                All content on our website, including text, graphics, logos, images, and videos, 
                is the property of Arcast or its content suppliers and is protected by international 
                copyright laws. Unauthorized use of our intellectual property is strictly prohibited.
            </p>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              6. Limitation of Liability
            </h3>

            <p className='text-base leading-6'>
              
                Arcast shall not be liable for any indirect, 
                incidental, special, or consequential damages arising out of or in connection with 
                the use of our services. We are not responsible for any loss of content, data, 
                or production material resulting from your use of our services.
            </p>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              7. Governing Law
            </h3>

            <p className='text-base leading-6'>
              These Terms and Conditions are governed by and construed in
              accordance with the laws of the United Arab Emirates.
            </p>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              8. Changes to Terms
            </h3>

            <p className='text-base leading-6'>
                We reserve the right to modify these Terms and Conditions at any time. 
                Any changes will be posted on this page, and your continued use of our 
                services constitutes acceptance of the revised Terms.
            </p>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              9. Contact Information
            </h3>

            <div>
              <p>
                For any questions or concerns regarding these Terms and
                Conditions, please contact us at:
              </p>
              <ul className='mt-2 space-y-2 text-base leading-6'>
                <li className='flex gap-2 items-center'>
                  <span className='text-lg'>•</span>

                  <a href='mailto:booking@arcast.studio' className=''>
                    Email:{' '}
                    <span className='text-[#5E17EB] hover:underline underline-offset-2'>
                      booking@arcast.studio{' '}
                    </span>
                  </a>
                </li>

                <li className='flex gap-2 items-center'>
                  <span className='text-lg'>•</span>
                  <a
                    href='https://api.whatsapp.com/send?phone=971544287756&text=Hi%20I%20would%20love%20to%20get%20some%20information%20about%20the%20services%20I%20filled%20on%20the%20company.'
                    className=''
                  >
                    Phone:{' '}
                    <span className='text-[#5E17EB] hover:underline underline-offset-2'>
                    +971 544287756{' '}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;