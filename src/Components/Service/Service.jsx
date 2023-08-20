import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service, index }) => {

  return (
    <Link to={`/detailed_service/${service.id}`}>
      <div className='flex justify-center items-center py-3'>
        <div className="md:h-[400px] h-[580px] w-80 cursor-pointer hover:bg-gray-light rounded-md transition duration-500 ease-in-out hover:scale-105 shadow-xl">

          <div className='h-40 overflow-hidden flex justify-center items-center'>
            <img className="object-cover" src={`https://pioneer.kodbel.com${service.img}`} alt="...." />
          </div>

          <div className="p-5">
            <h2 className=" text-lg md:text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-600 md:text-lg text-base line-clamp-5">{service.short_Description}</p>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default Service;
