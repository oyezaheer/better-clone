// components/start/Stats.tsx
import React from "react";
import Image from "next/image";

const Stats: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 mb-32 lg:w-1/2 mt-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center mb-6 text-gray-600">
        Hi, I'm Betty!
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-gray-600 mb-8">
        What can I help you with?
      </h2>

      <div className="space-y-4 mb-8 mx-4 sm:mx-8 md:mx-20 mt-8 sm:mt-12 md:mt-20">
        {[
          "Buying a home",
          "Refinance my mortgage",
          "Get cash from my home",
        ].map((option, index) => (
          <button
            key={index}
            className="flex items-center w-full p-4 border-2 border-gray-500 rounded-lg transition-colors hover:shadow-[inset_0_0_0_3px_rgba(0,128,0,1)]"
          >
            <span className="material-icons mr-3">home</span>
            <span>{option}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between md:justify-around mb-8 mx-4 sm:mx-8 md:mx-20">
        <div className="text-center mb-4 md:mb-0">
          <p className="text-2xl sm:text-3xl md:text-3xl font-bold">$100B</p>
          <p className="text-sm text-gray-600">
            home loans funded entirely online
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl sm:text-3xl md:text-3xl font-bold">400K</p>
          <p className="text-sm text-gray-600">
            Customers who chose a Better Mortgage
          </p>
        </div>
      </div>

      <div className="bg-green-50 p-4 sm:p-6 rounded-lg mx-4 sm:mx-8 md:mx-20">
        <p className="text-center text-lg sm:text-xl mb-4 text-gray-500">
          After a few questions, you'll unlock:
        </p>
        <ul className="space-y-2">
          {[
            "Custom mortgage rates",
            "Exclusive offers",
            "A personalized dashboard",
          ].map((item, index) => (
            <li key={index} className="flex items-center lg:ml-32 ml-16 text-gray-500 ">
              <span className="material-icons mr-3">home</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stats;
