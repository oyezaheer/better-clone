import React from "react";
import Image from "next/image";
import MiddleImage from "../../../public/assets/home3.webp"; // Adjust the path accordingly

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white  z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex flex-col">
            <p className="ml-5 font-semibold text-2xl text-green-800">Better</p>
            <p className="ml-5 text-xl text-gray-600">Mortgage</p>
          </div>
          <div className="flex items-center">
            {/* <svg
              width="120"
              height="30"
              viewBox="0 0 120 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Insert Better logo SVG path here *
            </svg> */}
          </div>
          <div className="hidden lg:flex items-center">
            <div className="bg-green-100 rounded-full p-2 mr-3">
              <span className="material-icons text-gray-700">phone</span>
            </div>
            <span className="text-lg text-gray-600 mr-2">Need help? Call</span>
            <a
              href="tel:4155238837"
              className="text-lg font-semibold text-gray-800"
            >
              (415) 523 8837
            </a>
          </div>
        </div>
        {/* Horizontal line section */}
        <div className="relative">
          <hr
            className="border-2 border-gray-200 my-4 mx-auto"
            style={{ width: "calc(100% - 2rem)" }}
          />
          <div className="absolute inset-x-0 flex justify-center -top-8">
            <div className="overflow-hidden rounded-full w-16 h-16 flex items-center justify-center bg-white">
              <div className="relative w-full h-full">
                <Image
                  src={MiddleImage}
                  alt="Middle Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
