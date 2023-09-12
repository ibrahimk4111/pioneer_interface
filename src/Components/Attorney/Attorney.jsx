import React, { useContext } from 'react';

import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FiTwitter } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';


const Attorney = ({ attorney, index }) => {
  // console.log(attorney)
  const { setDirectoryFalse } = useContext(UserContext)

  return (
    <div className='px-2 flex justify-center items-center '>
      <div className='md:h-[500px] h-[600px] w-full flex flex-col justify-between border-2 border-slate-200'>

        <div className=' w-full h-[75%] overflow-hidden flex justify-center items-center'>
          <Link to={`/attorney/${attorney.id}`} onClick={setDirectoryFalse} className="w-full h-full">
            <img className=" object-cover object-top w-full h-full duration-300 hover:scale-105" src={`https://pioneer.kodbel.com${attorney.img}`} alt='...' />
          </Link>
        </div>

        <div className=" p-3 hover:bg-bg-card hover:text-white transition ease-in duration-500 flex justify-center items-center">
          <div className='flex flex-col justify-between'>
            <Link to={`/attorney/${attorney.id}`} onClick={setDirectoryFalse}>
              <div>
                <h2 className="md:text-xl text-lg font-bold">{attorney.attr_name}</h2>
                <h2 className="md:text-xl text-lg">{attorney.designation}</h2>
              </div>
            </Link>

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
