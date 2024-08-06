// components/CTASection.tsx
const CTASection: React.FC = () => {
    return (
      <section className="py-12 bg-green-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-8">Sign up today and get your mortgage approval in just a few minutes.</p>
          <a
            href="/start"
            className="bg-white text-green-900 py-3 px-6 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    );
  };
  
  export default CTASection;
  