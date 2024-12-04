import React from "react";
import { Users, Award, Truck } from "lucide-react";

const DigitalGoldStats = () => {
  return (
    <>
    
    <section className="dark:bg-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Our Digital Gold Investment Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-primary-500" />
            </div>
            <div className="text-4xl font-bold text-primary-500 mb-2">8,260</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Our Happy Clients
            </div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-primary-500" />
            </div>
            <div className="text-4xl font-bold text-primary-500 mb-2">260 KGS</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Gold Booking
            </div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <Truck className="h-12 w-12 text-primary-500" />
            </div>
            <div className="text-4xl font-bold text-primary-500 mb-2">55 KGS</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Gold Delivered
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default DigitalGoldStats;