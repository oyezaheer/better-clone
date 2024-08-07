import React from "react";

const timelineData = [
  { year: "2014", content: "After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all." },
  { year: "2015", content: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!)." },
  { year: "2016", content: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors." },
  { year: "2017", content: "Better expands into the real estate market with Better Real Estate." },
  { year: "2018", content: "Better Mortgage partners with Ally Bank to build Ally powered by Better." },
  { year: "2019", content: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers." },
  { year: "2021", content: "Better acquires Trussle — The UK's most innovative online mortgage broker." },
  { year: "2022", content: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online." },
  { year: "2023", content: "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days. Better Mortgage launches the fully digital 3-day HELOC². Better Mortgage launches One Day Verified Approval Letter." },
  { year: "Today", content: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers." },
];
const CompanyTimeline: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">Company timeline</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex flex-col">
                <div className="absolute left-1/2 transform -translate-x-1/2 ">
                  <div className="bg-green-600 text-white font-semibold py-2 px-4 rounded-full">
                    {item.year}
                  </div>
                </div>
                <div className={`mt-16 bg-gray-100 p-6 rounded-lg ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} w-[calc(50%-40px)]`}>
                  <p className="text-gray-700 text-sm">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;