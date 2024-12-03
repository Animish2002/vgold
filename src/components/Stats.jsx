import React from 'react';
import { Users, AwardStars, Truck } from 'lucide-react';

const DigitalGoldStats = () => {
  return (
    <div className="grid grid-cols-3 gap-6 text-center">
      <div className="bg-yellow-400 rounded-lg p-6 shadow-md">
        <Users className="mx-auto mb-4 h-12 w-12 text-navy-blue" />
        <div className="text-4xl font-bold text-navy-blue">8,260</div>
        <div className="text-navy-blue font-medium">Our Happy Clients</div>
      </div>
      <div className="bg-yellow-400 rounded-lg p-6 shadow-md">
        <AwardStars className="mx-auto mb-4 h-12 w-12 text-navy-blue" />
        <div className="text-4xl font-bold text-navy-blue">260 KGS</div>
        <div className="text-navy-blue font-medium">Gold Booking</div>
      </div>
      <div className="bg-yellow-400 rounded-lg p-6 shadow-md">
        <Truck className="mx-auto mb-4 h-12 w-12 text-navy-blue" />
        <div className="text-4xl font-bold text-navy-blue">55 KGS</div>
        <div className="text-navy-blue font-medium">Gold Delivered</div>
      </div>
    </div>
  );
};

export default DigitalGoldStats;