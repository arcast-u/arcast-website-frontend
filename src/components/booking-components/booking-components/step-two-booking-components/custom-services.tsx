'use client';
import React, { useEffect, useState } from 'react';
import ServiceOption from './service-option';
import axios from 'axios';
import { AdditionalServiceType } from '@/utils/types';
import { toast } from 'react-toastify';

type Selector = {
  duration: number;
  setDuration: (value: number) => void;
  onServiceSelect: (
    services: { name: string; price: string; quantity: number; id: string }[]
  ) => void;
};

// const services = [
//   {
//     id: 'Standard Edit (Short Form)',
//     name: 'Standard Edit (Short Form)',
//     price: '176 AED',
//     description:
//       'Short-form video clips optimized for social media, using simple transitions and branding.',
//     imgSrc: ['/images/Reel1.png', '/images/Reel2.png', '/images/Reel3.png'],
//     imgAlt: 'Illustration of standard reels service',
//   },
//   {
//     id: 'Custom Edit (Short Form)',
//     name: 'Custom Edit (Short Form)',
//     price: '440 AED',
//     description:
//       'High-quality, premium reels with advanced editing, motion graphics, and engaging cuts.',
//     imgSrc: ['/images/Reel4.png', '/images/Reel5.png', '/images/Reel6.png'],
//     imgAlt: 'Illustration of signature reels service',
//   },
//   {
//     id: 'Standard Edit (Long Form)',
//     name: 'Standard Edit (Long Form)',
//     price: '440 AED',
//     description:
//       'Basic podcast episode editing, including noise reduction, filler word removal, and audio balancing.',
//     imgSrc: ['/images/custom3.png'],
//     imgAlt: 'Illustration of standard episode edit service',
//   },
//   {
//     id: 'Custom Edit (Long Form)',
//     name: 'Custom Edit (Long Form)',
//     price: '960 AED',
//     description:
//       'Professional-grade editing with in-depth sound design, smooth transitions, and high production quality.',
//     imgSrc: ['/images/custom4.png'],
//     imgAlt: 'Illustration of signature episode edit service',
//   },
//   {
//     id: 'Live Video Cutting with Synced Audio',
//     name: 'Live Video Cutting with Synced Audio',
//     price: '150 AED',
//     description:
//       'Real-time video switching and cutting with perfectly synced audio for a polished final content.',
//     imgSrc: ['/images/custom5.png'],
//     imgAlt: 'Illustration of live mix service',
//   },
//   {
//     id: 'Subtitles (per session)',
//     name: 'Subtitles (per session)',
//     price: '440 AED',
//     description:
//       'Accurate subtitles and captions to improve accessibility and engagement for video content.',
//     imgSrc: ['/images/custom6.png'],
//     imgAlt: 'Illustration of podcast trailer service',
//   },
//   {
//     id: 'Teleprompter Support',
//     name: 'Teleprompter Support',
//     price: '80 AED',
//     description:
//       'On-screen script assistance for seamless delivery, perfect for structured interviews and presentations.',
//     imgSrc: ['/images/custom7.png'],
//     imgAlt: 'Illustration of podcast branding service',
//   },
//   {
//     id: 'Multi-Cam Recording',
//     name: 'Multi-Cam Recording',
//     price: '200 AED',
//     description:
//       'Professional-grade editing with in-depth sound design, smooth transitions, and high production quality.',
//     imgSrc: ['/images/custom8.png'],
//     imgAlt: 'Illustration of jingle service',
//   },
// ];

const CustomServices = ({
  duration,
  setDuration,
  onServiceSelect,
}: Selector) => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  const [additionalServices, setAdditionalServices] = useState<
    AdditionalServiceType[]
  >([]);

  const handleServiceSelect = (
    index: number,
    action: 'toggle' | 'increment' | 'decrement'
  ) => {
    // Check if the index is already selected
    const isSelected = selectedIndices.includes(index);

    if (action === 'toggle') {
      // Toggle selection: if already selected, remove it; otherwise, add it
      const newSelectedIndices = isSelected
        ? selectedIndices.filter((i) => i !== index)
        : [...selectedIndices, index];

      setSelectedIndices(newSelectedIndices);

      // Create an array of selected services based on the new selected indices
      const selectedServices = newSelectedIndices.map((i) => ({
        name: additionalServices[i].title,
        price: additionalServices[i].price,
        quantity: 1, // Default quantity when adding a new service
        id: additionalServices[i].id,
      }));

      // Pass the array to the parent component
      onServiceSelect(selectedServices);
    } else if (action === 'increment' || action === 'decrement') {
      // Handle increment and decrement of the quantity for selected services
      const updatedServices = selectedIndices.map((i) => {
        if (i === index) {
          const currentQuantity = additionalServices[i].quantity || 1;
          if (action === 'increment' && currentQuantity < 10) {
            // Increment quantity
            additionalServices[i].quantity = currentQuantity + 1;
          } else if (action === 'decrement' && currentQuantity > 1) {
            // Decrement quantity but not below 1
            additionalServices[i].quantity = currentQuantity - 1;
          }
        }
        return additionalServices[i];
      });

      // Update the state with the updated selected services
      const updatedIndices = updatedServices.map((service) =>
        additionalServices.findIndex((s) => s.title === service.title)
      );
      setSelectedIndices(updatedIndices);

      // Update the parent component with the updated selected services
      onServiceSelect(
        updatedServices.map((service) => ({
          name: service.title, // Assuming 'title' corresponds to 'name'
          price: service.price,
          quantity: service.quantity || 1,
          id: service.id,
        }))
      );
    }
  };

  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        'https://arcast-ai-backend.vercel.app/api/additional-services'
      );
      if (res.status === 200) {
        setAdditionalServices(res.data.data);
      }
    } catch {
      toast.error('Network Error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <section className=' mt-8 lg:mt-10 md:w-[90%] lg:w-full mx-auto'>
      <h2 className='header-text'>
        à la carte services
        <span className='text-xl leading-[28.74px] 3xl:text-2xl italic 3xl:leading-[32.74px] text-[#989898]'>
          (optional)
        </span>
      </h2>
      <div className='flex flex-col mt-3 3xl:mt-5'>
        {loading ? (
          <div className='w-full h-[349px] shadow-xl shadow-[#80808050] bg-slate-100 animate-pulse rounded-xl'></div>
        ) : (
          additionalServices.map((service, index) => (
            <ServiceOption
              key={index}
              services={service}
              count={index}
              groupName='service-options'
              selected={selectedIndices.includes(index)}
              keyIndex={index}
              onSelect={handleServiceSelect}
              duration={duration}
              setDuration={setDuration}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default CustomServices;
