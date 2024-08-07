// components/AboutUs/CompanyOverview.tsx
import Image from 'next/image';
import companyImage from '../../../public/assets/home 3.webp';

const CompanyOverview: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex sm:mr-32 sm:ml-32 flex-col-reverse lg:flex-row items-center">
        <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-3xl md:text-4xl mb-4">The status quo is broken</h2>
          <p className="text-lg md:text-xl mb-8 font-thin">
            The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          <button className="bg-green-800  text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-500 transition-colors">
            Read Vishal's story
          </button>
        </div>
        <div className="w-2/3 lg:w-1/2 lg:ml-64 items-center">
          <div className="relative  w-90 h-96  overflow-hidden">
            <Image
              src={companyImage}
              alt="Company Overview"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
