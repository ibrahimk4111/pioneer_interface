import React from 'react';

import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FiTwitter } from "react-icons/fi";
import { Link } from 'react-router-dom';


const Attorney = ({ attorney, index }) => {
  // console.log(attorney)

  return (
    <div className=' flex justify-center items-center border-2 border-slate-200'>
      <div className='md:h-[60vh] h-[50vh] w-full flex flex-col justify-between'>
        <div className=' h-[40vh] w-full overflow-hidden flex justify-center items-center'>
          <img className=" object-cover w-full h-auto duration-300 hover:scale-105" src={`https://pioneer.kodbel.com${attorney.img}`} alt='...' />
        </div>

        <div className=" p-3 hover:bg-bg-card hover:text-white transition ease-in duration-500 flex justify-center items-center">
          <div className='flex flex-col justify-between'>
            <div>
              <h2 className="md:text-xl text-lg font-bold pr-1">{attorney.attr_name}</h2>
              <h2 className="md:text-xl text-lg pr-1">{attorney.designation}</h2>
            </div>

            <div className=' flex flex-col'>
              {/* Phone Call  */}
              <div className="flex items-center">
                <BiPhoneCall size={20} />
                <Link to="/" className="px-1 md:px-3 ">{attorney.mobile}</Link>
              </div>

              {/* Email  */}
              <div className="flex items-center">
                <BiMailSend size={20} />
                <Link to="/" className="px-1 md:px-3">{attorney.email}</Link>
              </div>

              {/* icons */}
              <div className="flex items-center gap-4">
                <Link to={attorney.facebook} target="_blank">
                  <CiFacebook className=" text-xl  transition hover:scale-110 duration-300 ease-in-out" />
                </Link>
                <Link to={attorney.linkedin} target="_blank">
                  <CiLinkedin className=" text-2xl  transition hover:scale-110 duration-300 ease-in-out" />
                </Link>
                <Link to={attorney.twitter} target="_blank">
                  <FiTwitter className=" transition hover:scale-110 duration-300 ease-in text-xl" />
                </Link>
              </div>
            </div>
          </div>
          {/* <div className=' mt-5'>
          <h2 className=' py-2 font-bold'>About :</h2>
          <p className=' text-justify'>{attorney.Description}</p>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Attorney;