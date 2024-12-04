import React from "react";
import ml from "../assets/Mahendra-Luniya01.png";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={ml}
            alt="About Us"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            About Our Digital Gold Investment Company
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            At our digital gold investment company, we are dedicated to
            providing our clients with the best possible service and investment
            opportunities. Our team of experienced professionals has a deep
            understanding of the gold market and is committed to helping our
            clients achieve their financial goals.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We offer a wide range of digital gold investment products, including
            secure storage, physical delivery, and investment accounts. Our
            platform is designed to be user-friendly and accessible, making it
            easy for our clients to manage their investments.
          </p>
          <a
            href="#"
            className="bg-primary-700 hover:bg-primary-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 inline-flex items-center"
          >
            Learn More
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
