import Image from "next/image"

export interface CardData {
    name: string;
    description: string;
    src: string;
}

export const ProfessionalCard = (data: CardData) => {
    return (
        <div>
            <Image src={data.src}
                alt={"titles"}
                quality={100}
                width={320}
                height={600}
                loading='lazy' className="w-full h-full object-center" />
            <div className="flex items-center gap-4 mt-4">
                <div
                    style={{ backgroundPosition: 'center 40%', backgroundImage: `url(${data.src})` }}
                    className="w-12  bg-cover bg-top relative h-12 overflow-hidden rounded-md">
                </div>
                <div>
                    <h3 className="font-medium text-xl text-[#333333]">{data.name}</h3>
                    <p className="font-medium text-sm text-[#989898]">{data.description}</p>
                </div>
            </div>
        </div>
    )
}