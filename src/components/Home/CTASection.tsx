// components/ProductSection.tsx
import Image from "next/image";
import Link from "next/link";
import img1 from "../../../public/assets/first-home.webp";
import img2 from "../../../public/assets/home 2.webp";
import img3 from "../../../public/assets/home 3.webp";
import img4 from "../../../public/assets/home 4.webp";

const ProductSection: React.FC = () => {
  return (
    <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
          Got questions?
          <br />
          We've got answers
        </h1>

        <div className="flex md:flex-row mb-6  sm:space-x-2  md:space-y-0 md:space-x-2">
          <button className="bg-white border-2 border-gray-300 text-gray-700 px-2 py-0 rounded-full transition-all duration-200 hover:border-4 hover:border-green-600 hover:font-semibold">
            Our products
          </button>
          <button className="bg-white border-2 border-gray-300 text-gray-700 px-2 py-0 rounded-full transition-all duration-200 hover:border-4 hover:border-green-600 hover:font-semibold">
            Calculators
          </button>
          <button className="bg-white border-2 border-gray-300 text-gray-700 px-2 py-0 rounded-full transition-all duration-200 hover:border-4 hover:border-green-600 hover:font-semibold">
            Guides & FAQs
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* First Div */}
  <div className="bg-green-50 p-6 rounded-lg flex flex-col items-start">
    <h2 className="text-xl font-bold mb-4">
      Buying your first home with <br /> Better
    </h2>
    <Link
      href="#"
      className="inline-block border border-gray-300 p-2 rounded-full mb-4"
    >
      <span className="sr-only">Learn more about buying your first home</span>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
    <div className="mt-auto">
      <Image
        src={img1}
        alt="House"
        width={300}
        height={200}
        className="rounded-lg"
      />
    </div>
  </div>

  {/* Second Div */}
  <div className="lg:col-span-2 bg-green-50 p-6 rounded-lg flex flex-col lg:flex-row items-start lg:items-start">
    <div className="flex-1 lg:flex-[2] flex flex-col">
      <h2 className="text-xl font-bold mb-4">
        One Day Mortgage<sup>1</sup>
      </h2>
      <p className="hidden lg:block mb-4 text-sm">
        Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.<sup>1</sup>
      </p>
      <Link
        href="#"
        className="inline-block border w-10 h-10  border-gray-300 p-2 rounded-full mb-4"
      >
        <span className="sr-only">Learn more about One Day Mortgage</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
    <div className="flex-1 lg:flex-[1] mt-4 lg:mt-0 lg:ml-6">
      <Image
        src={img2}
        alt="One Day Mortgage Logo"
        width={250}
        height={120}
        className="rounded-lg"
      />
    </div>
  </div>

  {/* Third Div */}
  <div className="lg:col-span-2 bg-green-50 p-6 rounded-lg flex flex-col lg:flex-row items-start lg:items-start">
  <div className="flex-1 lg:flex-[2] flex flex-col  sm:order-1 lg:order-2">
    <h2 className="text-xl font-bold mb-4">Better HELOC<sup>2</sup></h2>
    <p className="hidden lg:block mb-4 text-sm">
      Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit<sup>2</sup>. Access up to 90% of your home equity as cash in as little as 7 days.<sup>3</sup>
    </p>
    <Link href="#" className="inline-block border w-10 h-10  border-gray-300 p-2 rounded-full mb-4">
      <span className="sr-only">Learn more about Better HELOC</span>
      <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
  <div className="flex-1 lg:flex-[1] mt-4 lg:mt-0 lg:mr-6  sm:order-2 lg:order-1">
    <div className="p-4 rounded-lg ">
      <Image
        src={img3}
        alt="One Day Mortgage Logo"
        width={250}
        height={100}
        className="rounded-lg"
      />
    </div>
  </div>
</div>


  {/* Fourth Div */}
  <div className="bg-green-50 p-6 rounded-lg flex flex-col items-start">
    <h2 className="text-xl font-bold mb-4">Learn more about Insurance</h2>
    <Link
      href="#"
      className="inline-block border border-gray-300 p-2 rounded-full mb-4"
    >
      <span className="sr-only">Learn more about buying your first home</span>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
    <div className="mt-auto">
      <Image
        src={img4}
        alt="House"
        width={300}
        height={200}
        className="rounded-lg"
      />
    </div>
  </div>
</div>

    </section>
  );
};

export default ProductSection;
