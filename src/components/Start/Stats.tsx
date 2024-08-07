// components/start/Stats.tsx
import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="mt-12 flex flex-col md:flex-row justify-around text-center">
      <div className="mb-4 md:mb-0">
        <p className="text-3xl font-bold">$100B</p>
        <p className="text-sm text-gray-600">home loans funded entirely online</p>
      </div>
      <div>
        <p className="text-3xl font-bold">400K</p>
        <p className="text-sm text-gray-600">Customers who chose a Better Mortgage</p>
      </div>
    </div>
  );
};

export default Stats;