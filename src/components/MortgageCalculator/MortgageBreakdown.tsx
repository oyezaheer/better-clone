// src/components/MortgageCalculator/MortgageBreakdown.tsx
import React from 'react';

const MortgageBreakdown: React.FC = () => {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Mortgage Breakdown</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-700">
            {/* Detailed breakdown content goes here */}
            Here you can provide a detailed breakdown of how the mortgage payment is calculated, including principal, interest, taxes, and insurance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MortgageBreakdown;
