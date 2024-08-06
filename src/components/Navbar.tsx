// components/Navbar.tsx
import React, { useState } from "react";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-green-900  py-4 px-6 md:px-12 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between">
        {/* Left Side - Main Title and Links */}
        <div className="flex items-center space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-xl font-bold text-white">Better</a>
          </Link>

          <div className="hidden md:flex md:space-x-8">
            <Link href="/" legacyBehavior>
              <a className="px-4 py-2 text-white bg-transparent rounded-full hover:bg-white hover:text-green-900 transition-colors">
                Home
              </a>
            </Link>
            <Link href="/about-us" legacyBehavior>
              <a className="px-4 py-2 text-white bg-transparent rounded-full hover:bg-white hover:text-green-900 transition-colors">
                About Us
              </a>
            </Link>
            <Link href="/mortgage-calculator" legacyBehavior>
              <a className="px-4 py-2 text-white bg-transparent rounded-full hover:bg-white hover:text-green-900 transition-colors">
                Mortgage Calculator
              </a>
            </Link>
            <Link href="/start" legacyBehavior>
              <a className="px-4 py-2 text-white bg-transparent rounded-full hover:bg-white hover:text-green-900 transition-colors">
                Start
              </a>
            </Link>
          </div>
        </div>

        {/* Right Side - Contact Button, Get Started, and Sign In */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:1234567890"
            className="flex items-center justify-center w-12 h-12 text-white border-2 border-white rounded-full bg-green-900 hover:bg-white hover:text-green-900 transition-colors"
          >
            <PhoneIcon />
          </a>
          <Link href="/start" legacyBehavior>
            <a className="px-4 py-2 text-black bg-green-500 rounded-full font-bold hover:bg-green-900 hover:text-white transition-colors">
              Get Started
            </a>
          </Link>
          <Link href="/sign-in" legacyBehavior>
            <a className="hidden md:block px-4 py-2 text-white bg-transparent rounded-full hover:bg-white hover:text-green-900 transition-colors">
              Sign In
            </a>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <Link href="/" legacyBehavior>
            <a className="text-xl font-bold text-green-900">Better</a>
          </Link>
          <button onClick={toggleSidebar}>
            <CloseIcon className="text-green-900" />
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-6">
          <Link href="/" legacyBehavior>
            <a className="text-gray-800 text-xl hover:text-green-900">Home</a>
          </Link>
          <Link href="/about-us" legacyBehavior>
            <a className="text-gray-800 text-xl hover:text-green-900">
              About Us
            </a>
          </Link>
          <Link href="/mortgage-calculator" legacyBehavior>
            <a className="text-gray-800 text-xl hover:text-green-900">
              Mortgage Calculator
            </a>
          </Link>
          <Link href="/start" legacyBehavior>
            <a className="text-gray-800 text-xl hover:text-green-900">Start</a>
          </Link>
        </div>
        <div className="flex flex-col p-6 space-y-6 absolute bottom-0 left-0 w-full">
          <Link href="/start" legacyBehavior>
            <a className="bg-green-500 text-black py-4 rounded-full text-center font-bold hover:bg-green-900 hover:text-white transition-colors">
              Get Started
            </a>
          </Link>
          <Link href="/sign-in" legacyBehavior>
            <a className="border-2 border-gray-800 bg-white text-gray-800 py-4 rounded-full text-center hover:border-4 hover:border-green-900 hover:text-green-900 transition-all">
              Sign In
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
