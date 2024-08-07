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
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-[110px] mt-8 sm:mt-16">
            Mortgages <br /> made simple
          </h1>
          <div className="flex flex-col  h-screen items-center justify-between space-y-8 md:space-y-0 md:space-x-96 md:flex-row w-full md:w-[1000px] mt-[calc(100px)]">
            {/* Start my approval link */}
            <Link
              href="/start"
              className="lg:inline-flex items-center justify-center bg-green-500 text-white rounded-full text-base font-bold py-4 px-8 hover:bg-transparent transition-all duration-200 m-8 md:mb-0 order-1 md:order-none"
            >
              Start my approval
            </Link>

            {/* Review section */}
            <div className="flex flex-col bg-green-950 rounded-md px-4 py-4 items-center space-y-2  order-2  md:bg-transparent">
              <div className="flex flex-row items-center">
                <img
                  src="/assets/google.jpeg"
                  alt="Google Logo"
                  className="w-8 h-8 "
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

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const HeroSection: React.FC = () => {
//   return (
//     <section className="relative bg-green-900 text-white overflow-hidden min-h-screen">
//       <div className="absolute inset-x-0 top-1/2 h-1/2">
//         <div className="relative w-full h-full">
//           <Image
//             src="https://media.better.com/better-com/homepage/hero-variant-c.webp"
//             alt="Better Mortgage"
//             layout="fill"
//             objectFit="cover"
//             className="z-0"
//           />
//         </div>
//       </div>
//       <div className="relative flex flex-col items-center justify-between min-h-screen text-center z-10 px-6 py-12">
//         <div className="w-full">
//           <h1 className="font-bold text-3xl sm:text-5xl lg:text-[110px] leading-tight tracking-tight mb-8">
//             Mortgages <br /> made simple
//           </h1>
//           <Link
//             href="/start"
//             className="inline-flex items-center justify-center bg-green-500 text-white rounded-full text-base font-bold py-4 px-8 w-full max-w-xs hover:bg-green-600 transition-all duration-200 mb-4"
//           >
//             Start my approval
//           </Link>
//           <p className="text-sm mb-4">
//             <span className="inline-flex items-center">
//               <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7.5 4.5-7.5 4.5z" />
//               </svg>
//               3 min
//             </span>{" "}
//             | No credit impact
//           </p>
//         </div>

//         <div className="mt-auto">
//           <div className="flex items-center justify-center space-x-2 mb-2">
//             <img
//               src="/assets/google.jpeg"
//               alt="Google Logo"
//               className="w-6 h-6"
//             />
//             {[...Array(5)].map((_, i) => (
//               <svg
//                 key={i}
//                 width="18"
//                 height="18"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="text-yellow-500"
//               >
//                 <path d="M12 2L14.09 8.26L20.18 8.63L15.27 12.71L16.18 18.77L12 15.27L7.82 18.77L8.73 12.71L3.82 8.63L9.91 8.26L12 2Z" />
//               </svg>
//             ))}
//           </div>
//           <div className="text-sm text-gray-300">
//             <span className="font-semibold">4.6</span> Stars | 3177 Google reviews
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
