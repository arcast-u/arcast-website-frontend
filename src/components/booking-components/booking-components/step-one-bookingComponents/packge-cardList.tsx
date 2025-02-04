import * as React from "react";
import PackageCard from "./package-card";

const packages = [
  {
    title: "Recording + Professional Edit",
    description: "Get high-quality recording with professional editing to enhance your sound",
    oldPrice: "990 AED",
    newPrice: "950 AED/hour",
    isHighlighted: true,
    features: [
      "Fully equipped studio set of your choice",
      "Studio operator to record everything (3 cinema cams, 4 mics)",
      "Dedicated podcast producer to edit your episode",
      "Professional audio mixer",
      "Suitable for up to 60 minutes of raw material"
    ]
  },
  {
    title: "Recording + Live Mix",
    description: "Capture your sound in real-time with professional live mixing for a seamless, studio-quality",
    oldPrice: "990 AED",
    newPrice: "450 AED/hour",
    isHighlighted: false,
    features: [
      "Fully equipped studio set of your choice",
      "Studio operator to record everything (3 cinema cams, 4 mics)",
      "Dedicated podcast producer to edit your episode",
      "Professional audio mixer",
      "Suitable for up to 60 minutes of raw material"
    ]
  },
  {
    title: "Recording Only",
    description: "Record with clarity and precision, giving you the raw audio to use as needed.",
    oldPrice: "990 AED",
    newPrice: "385 AED/hour",
    isHighlighted: false,
    features: [
      "Fully equipped studio set of your choice",
      "Studio operator to record everything (3 cinema cams, 4 mics)",
      "Dedicated podcast producer to edit your episode",
      "Professional audio mixer",
      "Suitable for up to 60 minutes of raw material"
    ]
  }
];

const PackageCardList: React.FC = () => (
  <section className="3xl:mt-12 mt-10">
    <h2 className="text-[28px] leading-8 3xl:text-[32px] font-nunitoSans font-medium 3xl:leading-[43.65px] text-[#333333]">
      Choose your recording package
    </h2>
    <div className=" mt-4 3xl:mt-6">
      {packages.map((pkg, index) => (
        <PackageCard key={index} {...pkg} />
      ))}
    </div>
  </section>
);

export default PackageCardList;