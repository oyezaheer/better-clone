// components/Layout.tsx
import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-100 p-8 text-gray-700 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-lg font-bold">Better</h2>
              <p>© 2024 Better.com</p>
            </div>
            <div>
              <h2 className="text-lg font-bold">Resources</h2>
              <ul>
                <li><a href="/" className="text-blue-500 hover:underline">Home</a></li>
                <li><a href="/about-us" className="text-blue-500 hover:underline">About Us</a></li>
                <li><a href="/mortgage-calculator" className="text-blue-500 hover:underline">Mortgage Calculator</a></li>
                <li><a href="/start" className="text-blue-500 hover:underline">Start</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold">Contact</h2>
              <p>Contact us at <a href="mailto:support@better.com" className="text-blue-500 hover:underline">support@better.com</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
