import Image from 'next/image'
import Link from 'next/link'

interface PricingOption {
  id: number
  title: string
  price: number
  image: string
  description?: string
}

const pricingOptions: PricingOption[] = [
  {
    id: 1,
    title: '2 hours of Recording + Professional Edit',
    price: 1800,
    image: '/images/custom1.webp',
  },
  {
    id: 2,
    title: '1 Standard Episode Edit',
    price: 440,
    image: '/images/custom2.webp',
  },
  {
    id: 3,
    title: '1 Standard Reel',
    price: 176,
    image: '/images/custom3.webp',
  },
  {
    id: 4,
    title: 'Teleprompter',
    price: 76,
    image: '/images/custom4.webp',
  },
]

const PricingSection = () => {
  return (
    <section className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Podcasting Services
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Professional recording and editing services for your podcast needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pricingOptions.map((option) => (
            <div
              key={option.id}
              className="relative bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-3xl font-bold text-white">
                  AED {option.price}
                </p>
                <Link
                  href="/contact"
                  className="mt-4 block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection;