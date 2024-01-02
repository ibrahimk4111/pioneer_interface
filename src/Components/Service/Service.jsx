import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import DOMPurify from 'dompurify';

const Service = ({ service, index }) => {

  const { setDirectoryFalse } = useContext(UserContext)

  return (
    <Link to={`/detailed_service/${service.id}`} onClick={setDirectoryFalse}>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className="cursor-pointer hover:bg-bg-card hover:text-white rounded-md transition duration-300 ease-in shadow shadow-slate-400">
          <div className='h-40 overflow-hidden flex justify-center items-center rounded-t-md'>
            <img className="object-cover h-52 w-auto max-w-full" src={`https://pioneer.kodbel.com${service.img}`} alt="...." />
          </div>
          <div className="p-3">
            <h2 className=" text-lg font-bold mb-2">{service.title}</h2>
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
