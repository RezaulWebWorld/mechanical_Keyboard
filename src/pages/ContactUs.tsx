import { useState } from "react";

const ContactUs= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({name:'',email:'',message:''})
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white">
      <div className="max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">Contact Us</h1>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 animate-fade-in-up">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">
              We're here to help! Reach out with any questions, feedback, or comments you have.
            </p>
            <ul className="space-y-4">
              <li>
                <strong>Address:</strong> 515, Boro Horishpur, Natore, Bangladesh
              </li>
              <li>
                <strong>Phone:</strong> +8801303707997
              </li>
              <li>
                <strong>Email:</strong> support.keyboardfare@keyboardfare.com
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg animate-fade-in-up">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded bg-white bg-opacity-20 text-white"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded bg-white bg-opacity-20 text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded bg-white bg-opacity-20 text-white"
                  placeholder="Enter your message"
                  rows={5}
                />
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>)}

    export default ContactUs