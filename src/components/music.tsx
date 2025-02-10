'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AudioPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null); // ✅ Explicitly define the type

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.warn("Audio playback prevented:", error);
        });
      }
    }, []);

  return (
    <div className="relative w-full h-[380px] flex justify-center items-center overflow-hidden">
      <motion.div
        className="absolute bottom-0 flex flex-col items-center z-10 opacity-0 animate-slidein"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="relative h-[225px] w-[700px] flex justify-center items-center">
          <div
            className="size-[500px] absolute left-1/2 flex justify-center items-center border-2 border-gray-300 bg-gray-200 shadow-lg"
            style={{ borderRadius: "250px", transform: "translateX(-50%)" }}
          >
            <Image
              src="/images/studio1.webp"
              alt="Music Cover"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
          {/* Middle Element */}
          <div className="size-[150px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.75px] border-white backdrop-blur-sm"></div>
          {/* Audio Player */}
          <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop />
        </div>
        {/* Navigation Buttons */}
        <div className="absolute bottom-5 flex space-x-10">
          <button className="bg-white/70 border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:scale-105">
            <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.75 0.75V20.75H4.08336V10.7504L20.75 20.75V0.75L4.08336 10.7492V0.75H0.75Z"
                fill="#AFAFAF"
              />
            </svg>
          </button>
          <button className="bg-white/70 border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:scale-105">
            <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.75 0.75V20.75H17.4166V10.7504L0.75 20.75V0.75L17.4166 10.7492V0.75H20.75Z"
                fill="#AFAFAF"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
