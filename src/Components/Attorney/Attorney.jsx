import React from 'react';

import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FiTwitter } from "react-icons/fi";
import { Link } from 'react-router-dom';


const Attorney = ({ attorney, index }) => {
  console.log(attorney)

  return (
    <div className='md:h-auto md:min-h-[70vh] min-h-[100vh] h-auto flex flex-col md:flex-row md:justify-center justify-start rounded-md hover:bg-bg-attorney transition duration-500 border-2 border-slate-200'>
      <div className='md:w-[40%] w-[100%] overflow-hidden flex justify-center items-center'>
        <img className=" object-cover w-[100%] md:h-[100%] h-[50vh] duration-300 hover:scale-105" src={`https://pioneer.kodbel.com${attorney.img}`} alt='...' />
      </div>

      <div className=" md:w-[70%] w-[100%] p-5">
        <div className='flex flex-col justify-between gap-2'>
          <div>
            <h2 className="md:text-xl text-lg font-bold pr-1">{attorney.attr_name}</h2>
            <h2 className="md:text-xl text-lg pr-1">{attorney.designation}</h2>
          </div>

          <div className=' flex flex-col item gap-2'>
            {/* Phone Call  */}
            <div className="flex items-center text-slate-600">
              <BiPhoneCall size={20} />
              <Link to="/" className="px-1 md:px-3 ">{attorney.mobile}</Link>
            </div>

            {/* Email  */}
            <div className="flex items-center text-slate-600">
              <BiMailSend size={20} />
              <Link to="/" className="px-1 md:px-3">{attorney.email}</Link>
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

        <div className=' mt-5'>
          <h2 className=' py-2 font-bold'>About :</h2>
          <p className=' text-justify'>{attorney.Description}</p>
        </div>
      </div>
    </div>

  );
};

export default Attorney;
