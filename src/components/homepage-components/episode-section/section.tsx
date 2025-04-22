import { EpisodeSectionHeader } from "./episode-section-header"
import EpisodeSectionSlider from "./episode-section-slider"
export default function EpisodeSection () {
    return (
        <div className='w-full h-screen lg:h-[120vh] ipadPro:h-screen border border-[#FCFCFC] pb-2 3xl:pb-6'>
        <div className='h-full mx-auto max-w-[1728px]'>
          <EpisodeSectionHeader/>
          <div className='h-[50%] mt-10 md:mt-0 ipadPro:mt-28 md:h-[70%] '>
          <EpisodeSectionSlider/>
          </div>
        </div>
      </div>
    )
}


