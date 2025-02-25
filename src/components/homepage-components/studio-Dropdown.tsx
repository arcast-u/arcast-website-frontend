"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const setups = [
  { id: 1, name: "Mobile Studio Service", image: "/images/studio1.webp", available: true },
  { id: 2, name: "Setup 2", image: "/images/studio2.webp", available: false },
  { id: 3, name: "Setup 3", image: "/images/studio3.webp", available: false },
  { id: 4, name: "Setup 4", image: "/images/studio4.webp", available: false },
  { id: 5, name: "Setup 5", image: "/images/studio5.webp", available: false },
  { id: 6, name: "Setup 6", image: "/images/studio6.webp", available: false },
];

const ChooseSetup = () => {
  const router = useRouter();
  const bookSession = () => router.push("/bookings");
  return (
    <section className="absolute h-[120vh] md:h-screen pb-20 shadow-xl shadow-[#858585] overflow-y-auto lg:h-auto bg-[#FCFCFC] rounded-b-xl md:top-12 top-14 lg:top-14 3xl:top-16 flex flex-wrap lg:flex-nowrap justify-between left-0 w-full px-10 py-16">
      <h2 className="text-3xl w-full lg:w-[16%] 3xl:w-[30%] font-medium font-nunitoSans 3xl:text-5xl text-gray-900 mb-8">Choose Your Setup</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full lg:w-[60%] gap-6">
        {setups.map((setup) => (
          <div key={setup.id} className="relative h-[250px] max-h-[308px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={setup.image}
              alt={setup.name}
              width={277.67}
              height={308}
              quality={100}
              className={`w-full h-full object-cover ${
                !setup.available ? "opacity-50" : ""
              }`}
            />
            {!setup.available && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <p className="text-[#333333] text-xl font-semibold">Fully Booked</p>
              </div>
            )}
            {setup.available && (
              <div className="absolute rounded-lg bottom-2 font-nunitoSans left-2 bg-black w-[90%] p-4 text-[#fcfcfc] text-center">
                <p className=" text-xs 3xl:text-sm text-left font-medium">{setup.name}</p>
                <button onClick={bookSession} className="text-[10px] hover:scale-105 w-full 3xl:text-xs mt-1 3xl:mt-2 border border-[#fcfcfc] font-medium px-4 py-2 text-sm rounded-md transition-all">
                  Book now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default ChooseSetup;