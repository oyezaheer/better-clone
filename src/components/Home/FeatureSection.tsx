// components/FeaturesSection.tsx
import Image from 'next/image';
import { useState } from 'react';
import arianImage from '../../../public/assets/person1.png'; // Ensure the path is correct

const testimonials = [
  {
    name: 'Arian',
    text: 'The reason why I decided to go with Better is because after I did my research with the other lenders, Better was the one that provided me with the lowest interest rate.',
    image: arianImage,
  },
  {
    name: 'Amanda',
    text: "Amanda's testimonial text here.",
    image: arianImage, // Use the correct image path
  },
  {
    name: 'Paul',
    text: "Paul's testimonial text here.",
    image: arianImage, // Use the correct image path
  },
];

const FeaturesSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row lg:flex-row items-start justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0   sm:ml-12">
            {/* <div className="relative w-1/2 md:h-full lg:h-96 rounded-lg overflow-hidden"> */}
            <div className="relative lg:w-1/2 lg:h-[510px] sm:w-[250px] sm:h-[450px]  rounded-lg overflow-hidden lg:ml-24">

              <Image
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            
            <div className="mt-4 flex space-x-2 lg:ml-24">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    index === activeTestimonial
                      ? 'bg-green-800 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  {testimonial.name}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12  lg:mt-32  sm:mt-40">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Find out why <br/> we're better.</h2>
            <button className="bg-green-800 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-900 transition-colors">
              See all our stories
            </button>
            <div className="mt-6 flex items-center">
            <svg
                    width="36"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500"
                  >
                    <path
                      d="M12 2L14.09 8.26L20.18 8.63L15.27 12.71L16.18 18.77L12 15.27L7.82 18.77L8.73 12.71L3.82 8.63L9.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
              <span className="text-green-800 font-bold mr-2">Trustpilot</span>
              <span className="text-gray-700">Excellent</span>
              <span className="ml-2 text-gray-700">4.3 out of 5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;



