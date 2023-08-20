import React from "react";

import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FiTwitter } from "react-icons/fi";

import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div>
      <div className=" px-6 py-1 flex flex-col md:flex-row justify-between gap-2">

        <div className="flex items-center justify-between md:space-x-6">
          {/* Phone Call  */}
          <div className="flex items-center text-slate-600">
            <BiPhoneCall size={20} />
            <Link to="/" className="px-1 md:px-3 ">01711-108120 </Link>
          </div>

          {/* Email  */}
          <div className="flex items-center text-slate-600">
            <BiMailSend size={20} />
            <Link to="/" className="px-1 md:px-3">admozibur@gmail.com </Link>
          </div>
        </div>

        <div className=" flex items-center justify-between md:space-x-10">
          {/* icons */}
          <div className="flex items-center gap-4">
            <Link to="https://www.facebook.com/" target="_blank">
              <CiFacebook className=" text-slate-700 text-xl  transition hover:scale-110 duration-300 ease-in-out" />
            </Link>
            <Link to="https://www.youtube.com/" target="_blank">
              <CiLinkedin className=" text-slate-600 text-2xl  transition hover:scale-110 duration-300 ease-in-out" />
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank">
              <FiTwitter className=" transition hover:scale-110 duration-300 ease-in-out text-slate-700 text-xl" />
            </Link>
          </div>

          {/* appointment */}
          <div className=" transition hover:scale-105 duration-300 ease-in-out flex justify-center items-center border-2 border-[#B99671] hover:bg-[#B99671] bg-opacity-75 rounded-md">
            <Link to="/appointment" className="p-1 text-sm hover:text-white">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
