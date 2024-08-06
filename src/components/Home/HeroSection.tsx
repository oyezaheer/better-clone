import React from "react";
import Image from "next/image";
import Link from "next/link";
// import googleImg  from "../../../public/assets/google.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-green-900 text-white overflow-hidden py-16">
      <div className="absolute inset-x-0 top-[calc(220px+1rem)] h-[calc(100vh-70px)]">
        {/* Adjust the top value to the approximate height of the h1 and margin */}
        <div className="relative w-full h-full">
          <Image
            src="https://media.better.com/better-com/homepage/hero-variant-c.webp"
            alt="Better Mortgage"
            layout="fill"
            objectFit="contain"
            className="z-0"
          />
        </div>
      </div>
      <div className="relative flex flex-col  items-center justify-center  h-screen text-center z-10 px-6 md:px-10 lg:px-14">
        {/* Center content within the viewport */}
        <div className=" relative flex flex-col   items-center justify-center  h-screen mb-0  ">
          <h1 className="font-bold text-[24px] md:text-[48px] sm:text-[35px] lg:text-[110px]  leading-tight tracking-tight mt-8 sm:mt-16">
            Mortgages <br /> made simple
          </h1>
          <div className=" flex flex-col  h-screen  items-center justify-center space-y-8 md:space-y-0 md:space-x-96 md:flex-row w-full md:w-[1000px] mt-[calc(100px)] ">
          
            <Link
              href="/start"
              className=" inline-flex items-center justify-center bg-green-500 text-white rounded-full text-base font-bold py-4 px-8 hover:bg-transparent transition-all duration-200 m-8 sm:mb-96 md:mb-0  "
            //   className="inline-flex items-center justify-center bg-green-500 text-white rounded-full text-base font-bold py-4 px-8 hover:bg-green-700 transition-all duration-200 mt-4 md:mt-0"
            >
              Start my approval
            </Link>
            <div className=" flex flex-col items-center space-y-2 sm:bg-green-950 sm:rounded-md sm:px-4 sm:py-4 md:bg-transparent">
            {/* <div className="flex flex-col items-center space-y-2 "> */}
              <div className="flex flex-row items-center">
                <img
                  src="/assets/google.jpeg"
                  alt="Google Logo"
                  className="w-8 h-8"
                />
                <div className="flex items-center space-x-0 mt-1">
                  {/* Star icons */}

                  <svg
                    width="36"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-yellow-500"
                  >
                    <path
                      d="M12 2L14.09 8.26L20.18 8.63L15.27 12.71L16.18 18.77L12 15.27L7.82 18.77L8.73 12.71L3.82 8.63L9.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="36"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-yellow-500"
                  >
                    <path
                      d="M12 2L14.09 8.26L20.18 8.63L15.27 12.71L16.18 18.77L12 15.27L7.82 18.77L8.73 12.71L3.82 8.63L9.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="36"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-yellow-500"
                  >
                    <path
                      d="M12 2L14.09 8.26L20.18 8.63L15.27 12.71L16.18 18.77L12 15.27L7.82 18.77L8.73 12.71L3.82 8.63L9.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="36"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-yellow-500"
                  >
                    <path
                      d="M12 2L14.09 8.26L20.18 8.63L15.27 12.71L16.18 18.77L12 15.27L7.82 18.77L8.73 12.71L3.82 8.63L9.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="36"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative text-yellow-500"
                  >
                    <defs>
                      <clipPath id="half-star">
                        <rect x="0" y="0" width="12" height="24" />
                      </clipPath>
                    </defs>
                    <path
                      d="M12 2L14.09 8.26L20.18 8.63L15.27 12.71L16.18 18.77L12 15.27L7.82 18.77L8.73 12.71L3.82 8.63L9.91 8.26L12 2Z"
                      fill="currentColor"
                      clipPath="url(#half-star)"
                      style={{ position: "absolute" }}
                    />
                  </svg>
                </div>
              </div>
              <div className="text-sm text-gray-300 mt-2">
                <span className="font-semibold">4.6</span> Stars | 3177 Google
                reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
