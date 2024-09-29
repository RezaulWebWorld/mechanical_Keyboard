
const AboutUs = () => {

  return (
    <div>
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <section className="max-w-5xl mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold mb-6 animate-fade-in-up">About Us</h1>
        <p className="text-xl mb-8">
          Welcome to our company! We are dedicated to delivering the best products with exceptional service.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-500">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              Our mission is to revolutionize the way people interact with our products and services by providing innovative solutions.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-500">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p>
              We envision a world where technology and customer satisfaction go hand in hand, creating long-lasting relationships.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-500">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <p>
              Integrity, customer-centricity, and innovation are the core values that drive everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-white py-16 text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Meet the Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center animate-fade-in-up">
              <img
                className="w-32 h-32 rounded-full mb-4 shadow-lg transition-transform transform hover:scale-110 duration-500"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            <div className="flex flex-col items-center animate-fade-in-up">
              <img
                className="w-32 h-32 rounded-full mb-4 shadow-lg transition-transform transform hover:scale-110 duration-500"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Head of Product</p>
            </div>

            <div className="flex flex-col items-center animate-fade-in-up">
              <img
                className="w-32 h-32 rounded-full mb-4 shadow-lg transition-transform transform hover:scale-110 duration-500"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="text-xl font-semibold">Emily Johnson</h3>
              <p className="text-gray-600">Marketing Lead</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;