import React from 'react';
import { Link } from 'react-router-dom';


import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FiTwitter } from "react-icons/fi";


const Attorney = ({ attorney, index }) => {

  return (
    <div className='bg-gray-light p-2 rounded-md flex flex-col justify-between items-center shadow-xl'>
      <div className="flex flex-col gap-2 md:h-[450px] h-[350px] w-80 max-w-[80%]">

        <div className='md:h-80 h-60 flex justify-center items-center overflow-hidden'>
          <img className="object-cover object-center" src={`http://127.0.0.1:8000/${attorney.img}`} alt='...' />
        </div>
        

        <div className="p-2">
          <div className='flex flex-col items-start space-y-1'>
            <h2 className="md:text-lg text-xs font-bold">{attorney.attr_name}</h2>
            <h2 className="md:text-base text-xs">{attorney.Designation}</h2>

            {/* Phone Call  */}
            <div className="flex items-center text-slate-600">
              <BiPhoneCall size={20} />
              <Link to="/" className="px-1 md:px-3 md:text-base text-xs text-[50%]">{attorney.mobile}</Link>
            </div>

            {/* Email  */}
            <div className="flex items-center text-slate-600">
              <BiMailSend size={20} />
              <Link to="/" className="px-1 md:px-3 md:text-base text-xs">{attorney.email}</Link>
            </div>

            {/* icons */}
            <div className="flex items-center gap-4">
              <Link to={attorney.facebook} target="_blank">
                <CiFacebook className=" text-slate-700 text-xl  transition hover:scale-110 duration-300 ease-in-out" />
              </Link>
              <Link to={attorney.linkedin} target="_blank">
                <CiLinkedin className=" text-slate-600 text-2xl  transition hover:scale-110 duration-300 ease-in-out" />
              </Link>
              <Link to={attorney.twitter} target="_blank">
                <FiTwitter className=" transition hover:scale-110 duration-300 ease-in-out text-slate-700 text-xl" />
              </Link>
            </div>
          </div>
        </div>


      </div>
      
      {/* more details button */}
      <Link to={`/person/${attorney.id}`} >
        <div className="md:p-0 p-1 w-40 flex justify-center items-center md:text-lg text-xs transition hover:scale-105 duration-300 ease-in-out border-2 border-[#B99671] hover:bg-[#B99671] hover:text-white rounded-md">
          Details . . .
        </div>
      </Link>
    </div>
  );
};

export default Attorney;
