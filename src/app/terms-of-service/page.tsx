import Footer from '@/components/homepage-components/footer/footer';
import NavigationBar from '@/components/homepage-components/nav-bar';

const TermsAndConditions = () => {
  return (
    <div>
      <div className=' min-h-screen w-full max-w-[1728px] mx-auto  '>
        <NavigationBar />
        <div className='py-6 px-[21px] md:px-10 3xl:px-[100px]'>
          <h1 className='text-[28px] md:text-3xl mdLg:text-4xl font-medium lg:leading-[3.13rem] mb-14 font-hankenGrotesk'>
            Terms and Conditions
          </h1>

          <div className='font-nunitoSans'>
            <h3 className='text-xl md:text-2xl font-semibold mb-4'>
              1. Introduction
            </h3>
            <p className='text-base leading-6'>
              Welcome to Arcast Studio.
            </p>
            <p className='text-base mt-2 leading-6'>
              These Terms & Conditions (“Terms”) govern the use of our podcast recording, editing, and production services. By booking or using our services, you agree to these Terms. If you do not accept them, you may not use our services.
              These Terms constitute a legally binding agreement between you (“Client”) and <strong>Arcast Studio FZ-LLC</strong>, a company registered in <strong>Dubai Development Authority under license #106268</strong>  (“Arcast Studio”, “Company”, “we”, “us”, or “our”) regarding the services provided at our Dubai-based studio.
            </p>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              2. Services Provided
            </h3>

            <p className='text-base leading-6'>
              Arcast Studio offers professional podcast recording, editing, and production services, available in:
            </p>
            <ul className='mt-2 space-y-2 '>
              <li className='text-base leading-6'>• Predefined service packages</li>
              <li className='text-base leading-6'>• Custom add-ons</li>
              <li className='text-base leading-6'>• Standalone services</li>
            </ul>
            <p className='leading-6 text-base'>Each service has its own specifications, pricing, and conditions, as detailed in the Client’s booking confirmation.</p>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              3. BOOKINGS & PAYMENT TERMS
            </h3>

            <div>
              <p>By using our services, you agree to:</p>
              <ul className='mt-2 space-y-2 text-base leading-6'>
                <li className='flex gap-2 items-center'>
                  <span className='text-lg'>•</span>
                  <span className=''>
                    Full advance payment is required to confirm a booking. No service will be provided without prior full payment.
                  </span>
                </li>

                <li className='flex gap-2 items-center'>
                  <span className='text-lg'>•</span>
                  <span className=''>
                    Payments are non-refundable except under conditions outlined in the Cancellation & Refund Policy.
                  </span>
                </li>

                <li className='flex gap-2 items-center'>
                  <span className='text-lg'>•</span>
                  <span className=''>
                    Clients are responsible for any banking fees or transaction costs.
                  </span>
                </li>
              </ul>
            </div>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              4. CANCELLATION, MODIFICATION & REFUND POLICY
            </h3>

            <p className='text-base leading-6'>
              Clients may cancel, modify, or reschedule their bookings under the following conditions:
            </p>
            <div className='mt-1'>
              <p className='text-base leading-6'>
                4.1  Cancellations & Refunds:
              </p>
              <ul className='space-y-2 mt-2'>
                <li>  <span className='text-lg'>•</span> Clients who purchase a package and book a session may cancel and receive a refund of 100% of the amount paid if the request is made at least 24 hours before the scheduled booking date.</li>
                <li>  <span className='text-lg'>•</span> No refunds will be issued for cancellations made less than 24 hours before the booking date.</li>
              </ul>
            </div>
            <div className='mt-1'>
              <p className='text-base leading-6'>
                4.2	 Booking Modifications & Upgrades:
              </p>
              <ul className='space-y-2 mt-2'>
                <li>  <span className='text-lg'>•</span> Clients may reschedule their package up to 24 hours before the booking date at no additional cost.</li>
                <li>  <span className='text-lg'>•</span> Clients may upgrade their package up to 24 hours before the booking date by paying the additional cost of the package upgraded.</li>
                <li>  <span className='text-lg'>•</span> After the 24-hour window, clients can only reschedule their booking for a 150 AED rescheduling fee, up to 3 hours before the session.</li>
                <li>  <span className='text-lg'>•</span> Failure to modify within this timeframe will result in forfeiture of the booking.</li>
              </ul>
            </div>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              5.  EDITING, REMAKE & REVISION POLICY
            </h3>

            <p className='text-base leading-6'>
              Arcast Studio strives to deliver high-quality production work. However, if a client is dissatisfied, the following policy applies:
            </p>
            <ul className='space-y-2 mt-2'>
              <li>  <span className='text-lg'>•</span> Clients may request one (1) free remake if they provide specific feedback on what aspects need improvement.</li>
              <li>  <span className='text-lg'>•</span> If the client remains dissatisfied after the first revision and provides additional specific feedback, a second remake can be requested for 50% of the original service price.</li>
              <li>  <span className='text-lg'>•</span> No further remake requests will be accepted after the second revision.</li>
            </ul>
            <p className='text-base mt-1 leading-6'>
              All revision requests must be submitted within 7 days of receiving the initial edited content. After this period, no modifications will be made. </p>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              6. STUDIO RULES & CLIENT RESPONSIBILITIES
            </h3>

            <p className='text-base leading-6'>
              To ensure a professional environment, clients must adhere to the following:
            </p>
            <ul className='space-y-2 mt-2'>
              <li>  <span className='text-lg'>•</span> Timely Arrival & Session Time Management: The booked time includes setup, recording, and any necessary preparation. Clients must arrive on time and leave on time to respect other bookings</li>
              <li>  <span className='text-lg'>•</span> Guest Policy: Clients may bring guests, but they are fully responsible for their behavior and any damages caused.</li>
              <li>  <span className='text-lg'>•</span> Damage to Equipment: Clients are liable for any damages to studio equipment or property caused by misuse or negligence.</li>
            </ul>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              7.	LIABILITY DISCLAIMER
            </h3>
            <ul className='space-y-2 mt-2'>
              <li>  <span className='text-lg'>•</span> Arcast Studio is not liable for any loss, damage, injury, or technical issues experienced during or after the session.</li>
              <li>  <span className='text-lg'>•</span> Clients assume full responsibility for the content they create and agree that Arcast Studio is not responsible for any third-party claims arising from their recorded material..</li>
              <li>  <span className='text-lg'>•</span> We do not guarantee specific commercial success or audience engagement for content produced in our studio.</li>
            </ul>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              8.	INTELLECTUAL PROPERTY RIGHTS
            </h3>

            <ul className='space-y-2 mt-2'>
              <li>  <span className='text-lg'>•</span> Ownership of Content: Arcast Studio does not claim ownership over client-created recordings. Once the final product is delivered, all rights, including intellectual property rights, belong exclusively to the client.</li>
              <li>  <span className='text-lg'>•</span> Data Storage & Deletion: ARcast Studio will retain copies of the recordings for a reasonable period after final delivery for quality assurance and potential promotional use (as outlined in Clause 9). If the client does not wish their recordings to be used for promotional purposes, they must notify ARcast Studio in writing. Upon such notice, ARcast Studio will delete the recordings from its systems after final delivery.</li>
              <li>  <span className='text-lg'>•</span>Third-Party Materials: Clients must ensure they have legal rights to use any third-party music, sound effects, or copyrighted material. Arcast Studio bears no responsibility for unauthorized use of copyrighted content.</li>
            </ul>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              9. PROMOTIONAL USE OF CLIENT CONTENT
            </h3>
            <ul className='space-y-2 mt-2'>
              <li>  <span className='text-lg'>•</span> The client acknowledges and agrees that the content produced during the recording session may be used by Arcast Studio for marketing and promotional purposes on social media platforms, its own website, or marketing materials unless we receive a written notice from the client stating otherwise. </li>
            </ul>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              10.	FORCE MAJEURE
            </h3>
            <p className='text-base leading-6'>Arcast Studio is not responsible for any delays, disruptions, or cancellations due to circumstances beyond our control, including but not limited to:</p>
            <ul className='space-y-2 mt-2'>
              <li>  <span className='text-lg'>•</span> Natural disasters, fires, or floods.</li>
              <li>  <span className='text-lg'>•</span> Power outages, internet disruptions, or equipment failure</li>
              <li>  <span className='text-lg'>•</span> Government regulations or legal restrictions</li>
            </ul>
            <p className='leading-6 text-base'>If a force majeure event prevents service delivery, clients will have the option to reschedule at no additional cost.</p>

            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              11.	DISPUTE RESOLUTION & GOVERNING LAW
            </h3>
            <p className='text-base leading-6'>These Terms & Conditions are governed by the laws of the United Arab Emirates (UAE).</p>
            <ul className='space-y-2 mt-2'>
              <li>  <span className='text-lg'>•</span> Any disputes or claims arising from these Terms shall be subject to exclusive jurisdiction of the UAE courts.</li>
              <li>  <span className='text-lg'>•</span> Clients agree to attempt to resolve disputes amicably before resorting to legal action.</li>
            </ul>
            <h3 className='text-xl md:text-2xl font-semibold my-4'>
              12.	CHANGES TO TERMS & CONDITIONS
            </h3>
            <p className='text-base leading-6'>Arcast Studio reserves the right to update or modify these Terms at any time. Clients will be notified of any significant changes, and continued use of our services constitutes acceptance of the revised Terms.</p>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
