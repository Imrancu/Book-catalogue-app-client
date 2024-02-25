import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            <div className="flex items-center mb-4">
              <FaPhone className="text-blue-500 mr-2" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-blue-500 mr-2" />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />
              <span>123 Street Name, City, Country</span>
            </div>
          </div>

          {/* See the Real Website */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-6">See the Real Website</h2>
            <img
              src="https://cdn.leonardo.ai/users/5296e1f0-625d-46ef-a33e-9db91ab5bf1b/generations/22eb6657-5f24-4383-8166-882e96c22d62/Default_Cultural_Influences_Celebrate_diversity_and_cultural_h_3.jpg?w=512"
              alt="Real Website"
              className="rounded-md w-full mb-4"
            />
            <p className="text-gray-700">
              Visit our website to explore more about our services and products.
            </p>
            <a href="#" className="text-blue-500 mt-2 hover:underline">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
