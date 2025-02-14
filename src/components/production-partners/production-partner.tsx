import React from 'react';
import { TeamRow } from './teamRow';

export const ProductionPartners = () => {
  const teamMembers = [
    [
      {
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/e62661a3235b8999c0694367f157c527e24edf6667f1836fcc73203e6f52fda2",
        title: "Executive Producer",
        description: "Oversees the entire production for a flawless experience."
      },
      {
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/1cf22269111a0b8c3e0d5617cc7aeacb23d3fe4d06590665a1881fa09e1d53e7",
        title: "Live Editor",
        description: "Handles real-time edits for a polished final product."
      }
    ],
    [
      {
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/fb1e21418e6b7ef9a2ed1c0a86c81c553922d7985c1c8373241345a03b6e39c9",
        title: "Audio Engineer",
        description: "Ensures pristine sound quality and mixing."
      },
      {
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/b317b202da37245917873ff0cc866f1673d276228b86320caf88a38c04dd82e2",
        title: "Video Director",
        description: "Manages camera angles, lighting, and visuals."
      }
    ],
    [
      {
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/add18f3711c07b72956fde91b0c5fc7e12649a931b97341e542773f250b85bf3",
        title: "Studio Technician",
        description: "Sets up and maintains all equipment."
      },
      {
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/da0366cd14364f569c342b06124fe9df/d1c18c7948d17039b7cbdc00a5b48aee6b0021806df913de656d5d037c7ccb6e",
        title: "Production Assistant",
        description: "Handles logistics and supports the team."
      }
    ]
  ];

  return (
    <section className="flex overflow-hidden items-start py-10 3xl:pt-20 px-[21px] lg:px-10 3xl:px-[100px] bg-zinc-50" aria-labelledby="production-partners-title">
      <div className="flex flex-wrap lg:flex-nowrap gap-10 w-full justify-between">
        <header className="flex lg:w-[35%] flex-col text-[#333333] font-hankenGrotesk w-full">
          <h1 id="production-partners-title" className="text-[32px] leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px] font-medium max-md:text-4xl">
            Meet Your Production Partners
          </h1>
          <p className="mt-4 text-xl font-nunitoSans 3xl:text-[28px] leading-[27.28px] 3xl:leading-[38.19px] font-normal">
            Our experienced team ensures your recording{" "}
            <span style={{ color: "rgba(97,155,138,1)" }}>runs flawlessly</span>.
            Focus on your conversation, we&apos;ll handle the rest.
          </p>
        </header>
        <div className="grid gap-y-10 lg:gap-y-16 3xl:gap-y-24 w-full h-full lg:w-[50%]">
            {teamMembers.map((members, index) => (
              <TeamRow key={index} members={members} />
            ))}
        </div>
      </div>
    </section>
  );
};