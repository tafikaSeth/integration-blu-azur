import React from 'react';
import TouristCard from '../components/ui/card-tourisme';
import { BACKGROUND_RESERVATION_IMAGE, TOURISM_DATA_BOTTOM, TOURISM_DATA_TOP } from '../constants';


const TouristSection: React.FC = () => {

  return (
    <div
      className='p-10 relative'
      style={{
        backgroundImage: `url(${BACKGROUND_RESERVATION_IMAGE})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent z-0" />
      <section className="w-full max-w-7xl mx-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {TOURISM_DATA_TOP.map((card) => (
            <TouristCard key={card.id} data={card} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {TOURISM_DATA_BOTTOM.map((card) => (
            <TouristCard key={card.id} data={card} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TouristSection;