import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import React, { useState } from "react";
import axios from "axios";

const Contact = () => {

  // State variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Send a POST request to your backend API with the form data
    axios
      .post("/api/contact", {
        name,
        email,
        message,
      })
      .then((_response) => {
        // Set the submitted state to true to show the thank you page
        setSubmitted(true);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  };

  // Function to handle input changes
  const handleChange = (e: { target: { name: any; value: React.SetStateAction<string>; }; }) => {
    // Update the state variables according to the input name and value
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  };


  return (
    // <div className="bg-gray-100 py-20">
    //   <div className="container mx-auto px-4">
    //     <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>

    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //       {/* Contact Form */}
    //       <div className="bg-white p-6 shadow-md rounded-md">
    //         <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
    //         <form>
    //           <div className="mb-4">
    //             <input
    //               type="text"
    //               placeholder="Your Name"
    //               className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
    //             />
    //           </div>
    //           <div className="mb-4">
    //             <input
    //               type="email"
    //               placeholder="Your Email"
    //               className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
    //             />
    //           </div>
    //           <div className="mb-4">
    //             <textarea
    //               placeholder="Your Message"
    //               className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
    //             ></textarea>
    //           </div>
    //           <button
    //             type="submit"
    //             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
    //           >
    //             Send Message
    //           </button>
    //         </form>
    //       </div>

    //       {/* Contact Information */}
    //       <div className="bg-white p-6 shadow-md rounded-md">
    //         <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
    //         <div className="flex items-center mb-4">
    //           <FaPhone className="text-blue-500 mr-2" />
    //           <span>+1 (123) 456-7890</span>
    //         </div>
    //         <div className="flex items-center mb-4">
    //           <FaEnvelope className="text-blue-500 mr-2" />
    //           <span>info@example.com</span>
    //         </div>
    //         <div className="flex items-center">
    //           <FaMapMarkerAlt className="text-blue-500 mr-2" />
    //           <span>123 Street Name, City, Country</span>
    //         </div>
    //       </div>

    //       {/* See the Real Website */}
    //       <div className="bg-white p-6 shadow-md rounded-md">
    //         <h2 className="text-xl font-semibold mb-6">See the Real Website</h2>
    //         <img
    //           src="https://cdn.leonardo.ai/users/5296e1f0-625d-46ef-a33e-9db91ab5bf1b/generations/22eb6657-5f24-4383-8166-882e96c22d62/Default_Cultural_Influences_Celebrate_diversity_and_cultural_h_3.jpg?w=512"
    //           alt="Real Website"
    //           className="rounded-md w-full mb-4"
    //         />
    //         <p className="text-gray-700">
    //           Visit our website to explore more about our services and products.
    //         </p>
    //         <a href="#" className="text-blue-500 mt-2 hover:underline">
    //           Visit Website
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center text-primary ">
      Contact Us
    </h1>
    <p className="text-lg text-center text-gray-600 my-10">
      We'd love to hear from you. <br /> Whether you have a question, <br /> feedback, or
      suggestion, <br /> feel free to reach out to us using the <br /> form below or by
      email or phone.
    </p>
    {submitted ? (
      // Show the thank you page if the form is submitted
      <div className="flex flex-col items-center justify-center mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Thank you for contacting us!
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          We have received your message and will get back to you as soon as
          possible.
        </p>
      </div>
    ) : (
      // Show the contact form if the form is not submitted
      <form
        className="max-w-lg mx-auto mt-8 shadow-primary shadow-lg border-2 border-primary p-8 rounded-xl"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700">Name</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Your name"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Message</span>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              // rows="5"
              placeholder="Your message"
              name="message"
              value={message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-indigo-700"
          >
            Send Message
          </button>
        </div>
      </form>
    )}
    <div className="flex flex-col items-center justify-center mt-8">
      <p className="text-gray-600">Or contact us by:</p>
      <div className="flex space-x-4 mt-4">
        <a
          href="mailto:info@bookcatalog.com"
          className="text-indigo-600 hover:text-indigo-800"
        >
          info@bookcatalog.com
        </a>
        <span className="text-gray-400">|</span>
        <a
          href="tel:+880123456789"
          className="text-indigo-600 hover:text-indigo-800"
        >
          +880 123 456 789
        </a>
      </div>
    </div>
  </div>

  );
};

export default Contact;
