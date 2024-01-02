import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import DOMPurify from 'dompurify';

const Service = ({ service, index }) => {

  const { setDirectoryFalse } = useContext(UserContext)

  return (
    <Link to={`/detailed_service/${service.id}`} onClick={setDirectoryFalse}>
      <div className='flex flex-col justify-center items-center py-3'>
        <div className="cursor-pointer hover:bg-bg-card hover:text-white rounded-md transition duration-300 ease-in shadow shadow-slate-400">
          <div className='overflow-hidden flex justify-center items-center rounded-t-md'>
            <img className="object-cover h-auto w-auto max-h-40 max-w-full" src={`https://pioneer.kodbel.com${service.img}`} alt="...." />
          </div>
          <div className="p-5">
            <h2 className=" text-lg md:text-xl font-bold mb-2">{service.title}</h2>
            <p
              className="text-sm line-clamp-5 text-justify"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(service.short_Description) }}
            ></p>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default Service;
