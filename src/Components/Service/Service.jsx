import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service, index }) => {

  return (
    <Link to={`/detailed_service/${service.id}`}>
      <div className='flex justify-center items-center md:h-[500px] h-[350px]'>
        <div className="md:h-[450px] h-[350px] md:w-80 w-60 cursor-pointer bg-gray-light rounded-md transition duration-300 ease-in-out hover:scale-105 shadow-xl">

          <div className='md:h-52 h-40 overflow-hidden flex justify-center items-center rounded-t-md rounded-tr-md'>
            <img className="object-cover" src={`https://pioneer.kodbel.com${service.img}`} alt="...." />
          </div>

          <div className="p-5">
            <h2 className=" text-xs md:text-lg font-bold mb-2">{service.title}</h2>
            <p className="text-gray-600 md:text-base text-xs line-clamp-5">{service.short_Description}</p>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default Service;
