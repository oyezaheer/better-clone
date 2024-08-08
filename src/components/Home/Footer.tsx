import Link from "next/link";
// import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-600 py-8 px-4 md:px-8">

      <div className="max-w-7xl mx-auto">
        

        {/* Company Name */}
        <h2 className="text-green-600 text-2xl font-bold mb-4">Better</h2>
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* First Column: Company Info and Services */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <p className="mb-4">
              Better is a family of companies serving all your homeownership needs.
            </p>

            {/* Services - visible on mobile, hidden on desktop */}
            <div className="md:hidden">
              <ServiceItem
                title="Better Mortgage"
                description='We can&apos;t wait to say "Welcome home." Apply 100% online, with expert customer support.'
              />
              <ServiceItem
                title="Better Real Estate"
                description="Connect with a local Better Real Estate Partner Agent to find out all the ways you can save."
              />
              <ServiceItem
                title="Better Cover"
                description="Shop, bundle, and save on insurance coverage for home, auto, life, and more."
              />
              <ServiceItem
                title="Better Inspect"
                description="Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee."
              />
              <ServiceItem
                title="Better Settlement Services"
                description="Get transparent rates when you shop for title insurance all in one convenient place."
              />
            </div>

            {/* Services - hidden on mobile, visible on desktop */}
            <div className="hidden md:block">
              <ServiceItem
                title="Better Mortgage"
                description='We can&apos;t wait to say "Welcome home." Apply 100% online, with expert customer support.'
              />
              <ServiceItem
                title="Better Real Estate"
                description="Connect with a local Better Real Estate Partner Agent to find out all the ways you can save."
              />
              <ServiceItem
                title="Better Cover"
                description="Shop, bundle, and save on insurance coverage for home, auto, life, and more."
              />
              <ServiceItem
                title="Better Inspect"
                description="Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee."
              />
              <ServiceItem
                title="Better Settlement Services"
                description="Get transparent rates when you shop for title insurance all in one convenient place."
              />
            </div>
          </div>

          {/* Second Column: Resources */}
          <div className="mb-8 lg:ml-20 md:mb-0 md:w-1/4">
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#" text="Home affordability calculator" />
              <FooterLink href="#" text="Mortgage calculator" />
              <FooterLink href="#" text="Free mortgage calculator" />
              <FooterLink href="#" text="Mortgage calculator with taxes" />
              <FooterLink href="#" text="Mortgage calculator with PMI" />
              <FooterLink href="#" text="Rent vs buy calculator" />
              <FooterLink href="#" text="HELOC payment calculator" />
              <FooterLink
                href="#"
                text="HELOC vs cash-out refinance calculator"
              />
              <FooterLink href="#" text="Buy a home" />
              <FooterLink href="#" text="Sell a home" />
              <FooterLink href="#" text="Get home inspection" />
            </ul>
          </div>

          {/* Third Column: Company */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#" text="About Us" />
              <FooterLink href="#" text="Careers" />
              <FooterLink href="#" text="Media" />
              <FooterLink href="#" text="Partner With Us" />
              <FooterLink href="#" text="Learning center" />
              <FooterLink href="#" text="FAQs" />
              <FooterLink href="#" text="Investor Relations" />
            </ul>
          </div>

          {/* Fourth Column: Contact Us and Legal */}
          <div className="md:w-1/4">
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@better.com" className="hover:text-green-600">
                  hello@better.com
                </a>
              </li>
              <li>415-523-8837</li>
              <li>
                <Link href="#" className="hover:text-green-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-600">
                  Glossary
                </Link>
              </li>
            </ul>
            <h3 className="font-bold mt-6 mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="#" text="NMLS Consumer Access" />
              <FooterLink href="#" text="Privacy Policy" />
              <FooterLink href="#" text="Terms of Use" />
              <FooterLink href="#" text="Disclosures & Licensing" />
              <FooterLink href="#" text="Affiliated Business" />
              <FooterLink href="#" text="Browser Disclaimer" />
              <div className="mt-8 flex  space-x-4">
                {/* Equal Housing Lender SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <path d="M20 20V10l-8-5-8 5v10h16z"></path>
                  <path d="M3 10l9-5 9 5"></path>
                  <path d="M12 22V10"></path>
                </svg>

                {/* Equal Housing Opportunity SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <path d="M20 20V10l-8-5-8 5v10h16z"></path>
                  <path d="M3 10l9-5 9 5"></path>
                  <path d="M12 22V10"></path>
                </svg>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ServiceItem: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <div className="mb-4">
    <h3 className="font-bold text-green-600">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

const FooterLink: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <li>
    <Link href={href} className="hover:text-green-600">
      {text}
    </Link>
  </li>
);

export default Footer;
