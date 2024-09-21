import React from 'react';
const brands = [
  {
    name: 'Logitech',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Logitech_logo.svg',
  },
  {
    name: 'Corsair',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Corsair_logo.svg',
  },
  {
    name: 'Razer',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Razer_logo.svg',
  },
  {
    name: 'SteelSeries',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/SteelSeries_logo.svg',
  },
  {
    name: 'HyperX',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/HyperX_logo.svg',
  },
  {
    name: 'Keychron',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Keychron_logo.svg',
  },
];
const FamousCompanies = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Popular Keyboard Brands</h2>
          <p className="text-lg text-gray-600">Explore some of the most popular keyboard brands available.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <div key={brand.name} className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold">{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamousCompanies;