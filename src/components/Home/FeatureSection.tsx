import Image from "next/image";
import { useState } from "react";
import arianImage from "../../../public/assets/person1.png";

const testimonials = [
  {
    name: "Arian",
    text: "The reason why I decided to go with Better is because after I did my research with the other lenders, Better was the one that provided me with the lowest interest rate.",
    image: arianImage,
  },
  {
    name: "Amanda",
    text: "Amanda&apos; testimonial text here.",
    image: arianImage,
  },
  {
    name: "Paul",
    text: "Paul&apos; testimonial text here.",
    image: arianImage,
  },
];

const FeaturesSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="min-h-screen bg-white flex items-center py-12 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* <!-- Second div (content) --> */}
          <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-32 order-1 lg:order-2">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-center lg:text-left">
              Find out why <br className="hidden lg:inline" />
              we&apos;re better.
            </h2>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-green-800 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-900 transition-colors">
                See all our stories
              </button>
            </div>
            <div className="mt-6 flex items-center justify-center lg:justify-start">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-green-500 mr-2"
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

          {/* <!-- First div (image and buttons) --> */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="relative w-full h-[400px] lg:w-[400px] lg:h-[510px] mx-auto lg:ml-24 rounded-md overflow-hidden">
              <Image
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].name}
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>

            <div className="mt-4 flex justify-center lg:justify-start space-x-2 lg:ml-40">
            {/* <div className="flex items-center w-full p-4 border-2 border-gray-500 rounded-lg transition-colors hover:shadow-[inset_0_0_0_3px_rgba(0,128,0,1)]"> */}
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    index === activeTestimonial
                      ? "bg-green-800 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  {testimonial.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
