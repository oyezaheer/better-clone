// pages/start/index.tsx
import Layout from '../components/Layout';

const Start: React.FC = () => {
  return (
    <Layout>
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">Get Started</h1>
          <p>Start your journey with Better.com.</p>
          {/* Add your start page content here */}
        </div>
      </div>
    </Layout>
  );
};

export default Start;