import React from 'react';
import { FaDollarSign, FaHeadset, FaTruck } from 'react-icons/fa';

const ServiceSection = () => {
  return (
    <div>
      <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Shopping Benefit And Support</h2>
          <p className="text-lg text-gray-600">
            We offer top-notch services to ensure you have the best shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <FaTruck className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600">Get free shipping on all orders above $50.</p>
          </div>

         
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <FaDollarSign className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lowest Delivery Charge</h3>
            <p className="text-gray-600">We offer the lowest delivery charge</p>
          </div>

         
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <FaHeadset className="text-yellow-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our support team is available 24/7 to assist you.</p>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
};

export default ServiceSection;