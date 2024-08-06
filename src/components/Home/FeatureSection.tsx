// components/FeaturesSection.tsx
const FeaturesSection: React.FC = () => {
    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Item */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
              <p>Description of Feature 1.</p>
            </div>
            {/* Feature Item */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
              <p>Description of Feature 2.</p>
            </div>
            {/* Feature Item */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
              <p>Description of Feature 3.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
  