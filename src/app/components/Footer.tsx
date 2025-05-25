export default function Footer() {
    return (
      <footer className="bg-black text-white py-10 w-full ">
        <div className="max-w-7xl mx-auto px-0">
          <div className="flex flex-wrap justify-between gap-10">
            {/* About Us */}
            <div className="flex-1 max-w-sm">
              <h3 className="font-semibold text-lg mb-4">About Us</h3>
              <p className="text-sm">
                Welcome to Posterized.in where creativity meets artistry in the
                form of stunning customized and designer posters. We believe that
                every wall has a story to tell, and we are here to help you tell
                yours.
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="flex-1 max-w-xs">
              <h3 className="font-semibold text-lg mb-4">Quick links</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cancellation and Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Subscribe */}
            <div className="flex-1 max-w-sm">
              <h3 className="font-semibold text-lg mb-4">Subscribe to our emails</h3>
              <div className="flex items-center border-b border-gray-500">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent flex-1 text-sm p-2 outline-none"
                />
                <button className="text-black bg-white px-4 py-2 hover:bg-gray-200">
                  →
                </button>
              </div>
            </div>
          </div>
  
          {/* Bottom Links */}
          <div className="mt-10 flex justify-between items-center text-sm text-gray-400 border-t border-gray-700 pt-5">
            <p>© 2024, Posterized</p>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Refund policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact information
                </a>
              </li>
            </ul>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  