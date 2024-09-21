import React from 'react';

const HeroSection = () => {
  return (
    <div>
      <section className="my-5 bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our Website
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover the best products and services tailored for your needs.
          </p>
          <a href="#get-started" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
            Get Started
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;