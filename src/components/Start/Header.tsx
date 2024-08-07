import React from 'react';
import Image from 'next/image';
import MiddleImage from '../../../public/assets/person1.png'; // Adjust the path accordingly

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 ">
          <div className="flex flex-col">
            <p className='ml-5 font-semibold text-2xl text-green-800'>Better</p>
            <p className='ml-5 text-xl text-gray-600'>Mortgage</p>
          </div>
          <div className="flex items-center">
            <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Insert Better logo SVG path here */}
            </svg>
          </div>
          <div className="flex items-center">
            <div className="bg-green-100 rounded-full p-1 mr-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Insert phone icon SVG path here */}
              </svg>
            </div>
            <span className="lg:text-sm lg:text-gray-600 sm:hidden">Need help? Call </span>
            <a href="tel:4155238837" className="lg:text-sm lg:font-semibold lg:ml-1 sm:hidden">(415) 523 8837</a>
          </div>
        </div>
      </div>
      <div className="relative">
        <hr className="border-gray-300 my-4" />
        <div className="absolute inset-0 flex justify-center -top-4">
          <div className="bg-white rounded-full p-1">
            <div className="overflow-hidden rounded-full w-16 h-16 relative">
              <Image src={MiddleImage} alt="Middle Image" layout="fill" objectFit="contain" className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
