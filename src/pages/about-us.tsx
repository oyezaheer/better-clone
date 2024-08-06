// pages/about-us/index.tsx
import Layout from '../components/Layout';

const AboutUs: React.FC = () => {
  return (
    <Layout>
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p>Learn more about Better.com and our mission.</p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;