// components/start/HelpOptions.tsx
import React from 'react';
import Image from 'next/image';

const HelpOptions: React.FC = () => {
  const options = [
    { icon: '/home-icon.svg', text: 'Buying a home' },
    { icon: '/refinance-icon.svg', text: 'Refinance my mortgage' },
    { icon: '/cash-icon.svg', text: 'Get cash from my home' },
  ];

  return (
    <div className="mt-8 space-y-4">
      {options.map((option, index) => (
        <button
          key={index}
          className="w-full flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Image src={option.icon} alt="" width={24} height={24} className="mr-4" />
          <span>{option.text}</span>
        </button>
      ))}
    </div>
  );
};

export default HelpOptions;