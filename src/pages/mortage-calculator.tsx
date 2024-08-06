// pages/mortgage-calculator/index.tsx
import Layout from '../components/Layout';

const MortgageCalculator: React.FC = () => {
  return (
    <Layout>
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">Mortgage Calculator</h1>
          <p>Calculate your mortgage payments.</p>
          {/* Add your mortgage calculator form here */}
        </div>
      </div>
    </Layout>
  );
};

export default MortgageCalculator;