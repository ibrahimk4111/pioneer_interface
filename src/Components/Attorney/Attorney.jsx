import React from 'react';

import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FiTwitter } from "react-icons/fi";
import { Link } from 'react-router-dom';


const Attorney = ({ attorney, index }) => {
  console.log(attorney)

  return (
    <div className='flex flex-col md:flex-row md:justify-center justify-start rounded-md bg-bg-attorney md:h-auto h-screen'>
      <div className='md:h-96 h-80 md:w-[30%] w-full overflow-hidden flex justify-center items-center md:rounded-s-md rounded-md'>
        <img className=" object-cover h-[100%] w-auto duration-300 hover:scale-105" src={`https://pioneer.kodbel.com${attorney.img}`} alt='...' />
      </div>

      <div className=" md:w-[70%] w-[100%] p-5">
        <div className='flex flex-col md:flex-row justify-between gap-2'>
          <div>
            <h2 className="md:text-xl text-lg font-bold pr-1">{attorney.attr_name}</h2>
            <h2 className="md:text-xl text-lg pr-1">{attorney.designation}</h2>
          </div>

          <div className=' flex md:flex-row flex-col item gap-2'>
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
