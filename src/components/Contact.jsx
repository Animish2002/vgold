import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Have a question about our digital gold investment services? Let us
              know how we can assist you.
            </p>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Leave your message..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-700 hover:bg-primary-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 dark:bg-primary-600 dark:hover:bg-primary-700"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                Contact Information
              </h2>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-primary-500 mr-4" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-primary-500 mr-4" />
                <a
                  href="mailto:info@digitalgold.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  info@digitalgold.com
                </a>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                Office Location
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                1004, Maker Chamber V, Nariman Point, Mumbai
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
