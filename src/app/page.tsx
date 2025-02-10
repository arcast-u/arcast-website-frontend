// import Hero from "@/components/homepage-components/hero";
import Cursor from "@/components/custom-cursor";
// import { StudioHeader } from '../components/homepage-components/studio-spaces-components/header';
// import AudioPlayer from "@/components/music";
import BookinPage from "./book-session/page";


export default function Home() {
  return (
  <main className="w-full bg-[#FCFCFC]">
    <Cursor/>
    <BookinPage/>
    {/* <AudioPlayer/> */}
    {/* <Hero/> 
     <StudioHeader/> */}
  </main>
  );
}
