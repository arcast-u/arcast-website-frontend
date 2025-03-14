import Footer from '@/components/homepage-components/footer/footer';
import NavigationBar from '@/components/homepage-components/nav-bar';

const DataDeletion = () => {
  return (
    <div>
      <div className=' min-h-screen w-full max-w-[1728px]  mx-auto '>
        <NavigationBar />
        <div className='py-6 px-[21px] md:px-10 3xl:px-[100px] '>
          <h2 className='text-[28px] md:text-3xl mdLg:text-4xl font-medium lg:leading-[3.13rem] mb-14 font-HankenGrotesk'>
            Data Deletion Request
          </h2>

          <div className='font-nunitoSans'>
            <p className='text-base leading-6'>
              At Arcast Studio, we respect your privacy and your right to
              control your personal data. If you would like to request the
              deletion of your personal data associated with our services,
              please follow the instructions below.
            </p>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              1. How to Request Data Deletion
            </h3>
            <p className='text-base leading-6 '>
              If you wish to delete your data from our systems, you can request
              this by contacting us at:
            </p>
            <ul className='mt-2 space-y-2 text-base leading-6'>
              <li className='flex gap-2 items-center'>
                <span className='text-lg'>•</span>

                <a href='mailto:booking@arcast.studio' className=''>
                  Email:{' '}
                  <span className='text-[#5E17EB] hover:underline underline-offset-2'>
                    Booking@arcast.studio{' '}
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

            <p className='text-base leading-6 mt-2 mb-1'>
              Please include the following details in your request:
            </p>
            <ul className=' space-y-2 text-base leading-6'>
              <li className='flex gap-2 items-center'>
                <span className='text-lg'>•</span>
                <p>Your full name</p>
              </li>
              <li className='flex gap-2 items-center'>
                <span className='text-lg'>•</span>
                <p>The email or phone number associated with your account</p>
              </li>
              <li className='flex gap-2 items-center'>
                <span className='text-lg'>•</span>
                <p>A brief description of your request</p>
              </li>
            </ul>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              2. What Happens Next?
            </h3>
            <ul className=' space-y-2 text-base leading-6'>
              <li className='flex gap-2 items-center'>
                <span className='text-lg'>•</span>
                <p>
                  Once we receive your request, we will verify your identity to
                  ensure security.
                </p>
              </li>
              <li className='flex gap-2 items-center'>
                <span className='text-lg'>•</span>
                <p>
                  Your data will be deleted from our systems within 7-14
                  business days, in compliance with applicable regulations.
                </p>
              </li>
              <li className='flex gap-2 items-center'>
                <span className='text-lg'>•</span>
                <p>
                  You will receive a confirmation email once the deletion is
                  complete.
                </p>
              </li>
            </ul>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              3. Exceptions to Data Deletion
            </h3>
            <p className='text-base leading-6 mb-1'>
              Certain data may not be immediately deleted due to legal,
              security, or operational requirements. This includes:
            </p>

            <ul className=' space-y-2 text-base leading-6'>
              <li className='flex gap-2 items-center'>
                <span className='text-lg'>•</span>
                <p>Data necessary to comply with legal obligations.</p>
              </li>
              <li className='flex gap-2 items-center'>
                <span className='text-lg'>•</span>
                <p>Data related to transactions or support requests.</p>
              </li>
              <li className='flex gap-2 items-center'>
                <span className='text-lg'>•</span>
                <p>Data required for fraud prevention and security measures.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataDeletion;
