// components/AboutUs/OurStory.tsx
const OurStory: React.FC = () => {
  return (
    <section className="py-16 bg-green-900 text-white text-left">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          How we're changing things
        </h2>
        <p className=" mt-14 text-pretty font-thin md:text-xl mb-8">
          Homeownership is a huge part of our economy. Housing overall is a $33
          trillion business, and mortgages account for $15 trillion. Yet home
          finance operates in the same way it has for decades — through opaque
          systems and expensive intermediaries whose interests are misaligned
          with consumers’.
          <br /> <br />
          That’s why Better.com is redefining the homeownership process from the
          ground up. We’re using technology to make it faster and more
          efficient, and humans to help make it friendly and enjoyable.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
