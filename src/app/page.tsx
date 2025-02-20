// import Cursor from "@/components/custom-cursor";
import Hero from "@/components/homepage-components/hero";
import StudioSpace from "@/components/homepage-components/studio-spaces-components/studioSpace";
import Equipment from "@/components/homepage-components/equipment/equipment";
import { ProductionPartners } from "@/components/production-partners/production-partner";
import FAQSection from "@/components/faq/faq-section";
// import Video from "@/components/video-section/video";
import ProfessionalStudio from "@/components/homepage-components/professional-studio/professional-studio";
import Community from "@/components/homepage-components/community/community";
import NewsletterSignup from "@/components/homepage-components/newsletter/newsletter";
import Footer from "@/components/homepage-components/footer/footer";
import MarqueeSlider from "@/components/homepage-components/marquee/marquee";
import DubaiStudioLocation from "@/components/homepage-components/location/location";
// import AudioPlayer from "@/components/music";
// import BookinPage from "./book-session/page";


export default function Home() {
  return (
  <main className="w-full bg-[#FCFCFC]">
    {/* <Cursor/> */}
    {/* <BookinPage/> */}
    {/* <AudioPlayer/> */}
    <Hero/> 
    <StudioSpace/>
    <ProfessionalStudio/>
    <Equipment/>
    <ProductionPartners/>
    {/* <Video/> */}
    <MarqueeSlider/>
    <DubaiStudioLocation/>
    <Community/>
    <FAQSection/>
    <NewsletterSignup/>
    <Footer/>
  </main>
  );
}
