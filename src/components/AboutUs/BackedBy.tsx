// components/AboutUs/BackedBy.tsx
import Image from 'next/image';
import gold from '../../../public/assets/goldman.png';

const BackedBy: React.FC = () => {
  const images = [
    { src: gold, alt: 'Goldman Sachs', link: 'https://www.goldmansachs.com/' },
    { src: gold, alt: 'Goldman Sachs', link: 'https://www.goldmansachs.com/' },
    { src: gold, alt: 'Goldman Sachs', link: 'https://www.goldmansachs.com/' },
    { src: gold, alt: 'Goldman Sachs', link: 'https://www.goldmansachs.com/' },
    { src: gold, alt: 'Goldman Sachs', link: 'https://www.goldmansachs.com/' },
    { src: gold, alt: 'Goldman Sachs', link: 'https://www.goldmansachs.com/' },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-gray-800 mb-8">Backed by</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-10 ">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative w-full h-24 sm:h-32 md:h-40 lg:h-48">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackedBy;
