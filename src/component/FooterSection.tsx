import { FaFacebookF, FaLinkedin} from 'react-icons/fa';

const FooterSection = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">123 Keyboard Street</p>
            <p className="mb-2">City, State, 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: <a href="mailto:support@keyboardstore.com" className="text-blue-400 hover:underline">support@keyboardstore.com</a></p>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com/RezaulKarim11703" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/rezaulkarim11703" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Relevant Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/products" className="hover:underline">Products</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; 2024 Keyboard Fare. All rights reserved.</p>
        </div>
      </div>
    </footer>
 
    </div>
  );
};

export default FooterSection;