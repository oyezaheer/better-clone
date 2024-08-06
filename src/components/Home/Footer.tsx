// components/Footer.tsx
const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Better Mortgage. All rights reserved.</p>
            <ul className="flex space-x-6">
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  