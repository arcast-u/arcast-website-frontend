import Image from "next/image";

const setups = [
  { id: 1, name: "Setup 1", image: "/images/setup1.jpg", available: true },
  { id: 2, name: "Setup 2", image: "/images/setup2.jpg", available: false },
  { id: 3, name: "Setup 3", image: "/images/setup3.jpg", available: false },
  { id: 4, name: "Setup 4", image: "/images/setup4.jpg", available: false },
  { id: 5, name: "Setup 5", image: "/images/setup5.jpg", available: false },
  { id: 6, name: "Setup 6", image: "/images/setup6.jpg", available: false },
];

const ChooseSetup = () => {
  return (
    <section className="absolute top-10 left-0 w-full px-10 py-16">
      <h2 className="text-4xl font-semibold text-gray-900 mb-8">Choose Your Setup</h2>
      <div className="grid grid-cols-3 gap-6">
        {setups.map((setup) => (
          <div key={setup.id} className="relative rounded-lg overflow-hidden shadow-md">
            <Image
              src={setup.image}
              alt={setup.name}
              width={500}
              height={300}
              className={`w-full h-auto object-cover ${
                !setup.available ? "opacity-50" : ""
              }`}
            />
            {!setup.available && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <p className="text-white text-xl font-semibold">Fully Booked</p>
              </div>
            )}
            {setup.available && (
              <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-4 text-white text-center">
                <p className="text-lg font-medium">{setup.name}</p>
                <button className="mt-2 border border-white px-4 py-2 text-sm rounded-md hover:bg-white hover:text-black transition-all">
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