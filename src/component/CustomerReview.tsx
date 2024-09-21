
const CustomerReview = () => {
  return (
    <div>
      <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Valuable Customer Review</h2>
          <p className="text-lg text-gray-600">
            We offer top-notch services to ensure you have the best shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h1>Image</h1>
            <h3 className="text-xl font-semibold mb-2">Name</h3>
            <p className="text-gray-600">Review</p>
            <p className="text-gray-600">Rating</p>
          </div>

         
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h1>Image</h1>
            <h3 className="text-xl font-semibold mb-2">Name</h3>
            <p className="text-gray-600">Review</p>
            <p className="text-gray-600">Rating</p>
          </div>

         
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h1>Image</h1>
            <h3 className="text-xl font-semibold mb-2">Name</h3>
            <p className="text-gray-600">Review</p>
            <p className="text-gray-600">Rating</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default CustomerReview;