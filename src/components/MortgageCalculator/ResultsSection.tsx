// src/components/MortgageCalculator/ResultsSection.tsx
import React from 'react';

const ResultsSection: React.FC = () => {
  // Placeholder values; replace with actual calculation results
  const monthlyPayment = 1200;
  const totalInterest = 15000;
  const totalPayment = 250000;

  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Estimated Results</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Monthly Payment</h3>
            <p className="text-gray-700">${monthlyPayment.toFixed(2)}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total Interest</h3>
            <p className="text-gray-700">${totalInterest.toFixed(2)}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total Payment</h3>
            <p className="text-gray-700">${totalPayment.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
