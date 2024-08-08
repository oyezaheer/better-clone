import React, { useState, useEffect, useCallback } from "react";

const CalculatorForm: React.FC = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [zipCode, setZipCode] = useState("462026");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  const [propertyTax, setPropertyTax] = useState(265);
  const [homeInsurance, setHomeInsurance] = useState(132);
  const [hoaFees, setHoaFees] = useState(132);
  const [utilities, setUtilities] = useState(100);

  const calculateMonthlyPayment = useCallback(() => {
    const P = homePrice - downPayment; // Principal loan amount
    const r = interestRate / 100 / 12; // Monthly interest rate
    const n = loanTerm * 12; // Total number of payments

    if (P <= 0 || r <= 0 || n <= 0) {
      setMonthlyPayment(0);
      return;
    }

    const mortgagePayment =
      (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalMonthlyPayment =
      mortgagePayment + propertyTax + homeInsurance + hoaFees + utilities;
    setMonthlyPayment(Math.round(totalMonthlyPayment));
  },[]);

  useEffect(() => {
    calculateMonthlyPayment();
  }, [calculateMonthlyPayment]);

  const handleHomePriceChange = (value: number) => {
    setHomePrice(value);
    setDownPayment(value * (downPaymentPercent / 100));
  };

  const handleDownPaymentChange = (value: number) => {
    setDownPayment(value);
    setDownPaymentPercent((value / homePrice) * 100);
  };

  const handleDownPaymentPercentChange = (value: number) => {
    setDownPaymentPercent(value);
    setDownPayment(homePrice * (value / 100));
  };

  return (
    <>
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-6xl font-bold mt-24">Mortgage Calculator</h1>
          <p className="text-gray-600 font-sans mb-8 mt-10">
            Use our mortgage calculator built directly into it! Get accurate
            estimates for your monthly mortgage payments if you will be required
            to have private mortgage insurance (PMI). Also learn why
          </p>
          <div className="space-y-6">
            <div className="flex justify-between items-center space-x-4">
              <div className="flex-1 relative">
                <label
                  htmlFor="homePrice"
                  className="absolute top-0 left-2 text-sm font-medium text-gray-700"
                >
                  Home price
                </label>
                <div className="flex items-center border-black">
                  <div className="absolute mt-5 left-0 pl-3 text-2xl font-semibold text-gray-500">
                    $
                  </div>
                  <input
                    type="number"
                    id="homePrice"
                    value={homePrice}
                    onChange={(e) =>
                      handleHomePriceChange(parseFloat(e.target.value))
                    }
                    className="mt-5 block w-full pl-8 font-bold border-2 border-gray-600 rounded-md p-2 text-2xl"
                  />
                </div>
              </div>

              <div className="flex-1 text-right md:text-center">
                <div className="text-sm font-medium text-gray-700">
                  Monthly payment
                </div>
                <div className="text-3xl font-bold">${monthlyPayment}/mo</div>
              </div>
              <button className="hidden md:block bg-green-600 text-white py-3 px-6 rounded-md text-lg font-semibold md:flex-1">
                Get pre-approved
              </button>
            </div>
            <input
              type="range"
              min={100000}
              max={1000000}
              step={1000}
              value={homePrice}
              onChange={(e) =>
                handleHomePriceChange(parseFloat(e.target.value))
              }
              className="w-full"
            />
            <button className="w-full bg-green-600 text-white py-3 rounded-md text-lg font-semibold md:hidden">
              Get pre-approved
            </button>
            <div
              className={`${
                showDetails ? "block" : "hidden"
              } md:grid md:grid-cols-4 gap-4`}
            >
              <div className="relative bg-white rounded-lg shadow-sm border border-gray-200">
                <label
                  htmlFor="zipCode"
                  className="absolute top-2 left-3 text-xs font-medium text-gray-500"
                >
                  ZIP code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="w-full pt-6 pb-2 px-3 text-base font-semibold rounded-lg focus:outline-none"
                />
              </div>
              <div className="relative bg-white rounded-lg shadow-sm border border-gray-200">
                <label
                  htmlFor="downPayment"
                  className="absolute top-2 left-3 text-xs font-medium text-gray-500"
                >
                  Down payment
                </label>
                <div className="flex">
                  <div className=" pl-3 pt-6 pb-2 text-base font-semibold rounded-lg focus:outline-none">
                    $
                  </div>
                  <input
                    type="number"
                    id="downPayment"
                    value={downPayment}
                    onChange={(e) =>
                      handleDownPaymentChange(parseFloat(e.target.value))
                    }
                    className="w-4/5 pt-6 pb-2 px-3 text-base font-semibold rounded-l-lg focus:outline-none"
                  />
                  <input
                    type="number"
                    value={downPaymentPercent}
                    onChange={(e) =>
                      handleDownPaymentPercentChange(parseFloat(e.target.value))
                    }
                    className="w-1/5 pt-6 pb-2 px-3 text-base font-semibold rounded-r-lg focus:outline-none text-center"
                  />
                  {/* <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-base font-semibold">
                    %
                  </div> */}
                </div>
              </div>
              <div className="relative bg-white rounded-lg shadow-sm border border-gray-200">
                <label
                  htmlFor="interestRate"
                  className="absolute top-2 left-3 text-xs font-medium text-gray-500"
                >
                  Interest rate
                </label>
                <div className="flex">
                  <input
                    type="number"
                    id="interestRate"
                    value={interestRate}
                    onChange={(e) =>
                      setInterestRate(parseFloat(e.target.value))
                    }
                    className="w-full pt-6 pb-2 px-3 text-base font-semibold rounded-l-lg focus:outline-none"
                  />
                  <div className="flex items-center justify-center bg-gray-100 border-l border-gray-200 rounded-r-lg px-3 text-base font-semibold">
                    %
                  </div>
                </div>
              </div>
              <div className="relative bg-white rounded-lg shadow-sm border border-gray-200">
                <label
                  htmlFor="loanTerm"
                  className="absolute top-2 left-3 text-xs font-medium text-gray-500"
                >
                  Length of loan
                </label>
                <select
                  id="loanTerm"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                  className="w-full pt-6 pb-2 px-3 text-base font-semibold rounded-lg appearance-none focus:outline-none"
                >
                  <option value={30}>30 years</option>
                  <option value={15}>15 years</option>
                  <option value={10}>10 years</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-6 lg:hidden md:flex md:justify-between md:items-center">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="items-center justify-center w-full bg-transparent text-black border-2 border-slate-950 py-3 px-6 rounded-md text-lg font-semibold flex"
              >
                {showDetails ? "- Hide details" : "+ Add details"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
      {/* <div className="w-4/5 flex flex-row sm:flex-col justify-around mx-auto px-4"> */}
      <div className="w-full sm:w-4/5 flex flex-col sm:flex-row justify-around mx-auto px-4">
 
        <div className="mb-6 w-1/2">
          <h2 className="text-2xl font-bold mb-4">Monthly payment breakdown</h2>
          <p className="text-7xl font-bold mb-4">${monthlyPayment}/mo</p>
          <div className="flex space-x-1 mb-4">
            <div className="h-14 bg-green-600 rounded-full flex-grow"></div>
            <div className="h-14 bg-purple-500 rounded-full w-1/4"></div>
            <div className="h-14 bg-blue-400 rounded-full w-1/8"></div>
            <div className="h-14 bg-yellow-300 rounded-full w-1/8"></div>
            <div className="h-14 bg-red-400 rounded-full w-1/8"></div>
          </div>
        </div>

        <div className="space-y-4  w-2/3 ml-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-600 rounded-full mr-2"></div>
              <span>Principal & interest</span>
            </div>
            <span className="font-bold">
              $
              {Math.round(
                ((homePrice - downPayment) * (interestRate / 100 / 12)) /
                  (1 - Math.pow(1 + interestRate / 100 / 12, -loanTerm * 12))
              )}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
              <span>Property taxes</span>
            </div>
            <div className="border-2 hover:border-3 hover:border-green-800 rounded-md px-3 py-1">
              <span className="mr-1 ">$</span>
              <input
                type="number"
                value={propertyTax}
                onChange={(e) => setPropertyTax(parseFloat(e.target.value))}
                className="w-16 text-right outline-none "
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-400 rounded-full mr-2"></div>
              <span>Homeowners insurance</span>
            </div>
            <div className="border-2 hover:border-3 hover:border-green-800 rounded-md px-3 py-1">
              <span className="mr-1">$</span>
              <input
                type="number"
                value={homeInsurance}
                onChange={(e) => setHomeInsurance(parseFloat(e.target.value))}
                className="w-16 text-right outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-300 rounded-full mr-2"></div>
              <span>HOA fees</span>
            </div>
            <div className="border-2 hover:border-3 hover:border-green-800 rounded-md px-3 py-1">
              <span className="mr-1">$</span>
              <input
                type="number"
                value={hoaFees}
                onChange={(e) => setHoaFees(parseFloat(e.target.value))}
                className="w-16 text-right outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-400 rounded-full mr-2"></div>
              <span>Utilities</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold mr-2">${utilities}</span>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <button className="mt-6 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
            Copy estimate link
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default CalculatorForm;
