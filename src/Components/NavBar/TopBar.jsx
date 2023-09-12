import React from "react";

import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FiTwitter } from "react-icons/fi";

import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-blue-950 py-1">
      <div className=" px-6 py-2 flex flex-col md:flex-row justify-between gap-2">

        <div className="flex items-center justify-between md:space-x-6">
          {/* Phone Call  */}
          <div className="flex items-center text-white">
            <BiPhoneCall size={20} />
            <Link to="/" className="px-1 md:px-3 ">01711-108120 </Link>
          </div>

          {/* Email  */}
          <div className="flex items-center text-white">
            <BiMailSend size={20} />
            <Link to="/" className="px-1 md:px-3">admozibur@gmail.com </Link>
          </div>
        </div>

        <div className=" flex items-center justify-between md:space-x-10">
          <h2 className=" text-white md:block hidden">Follow Us on:</h2>
          {/* icons */}
          <div className="flex items-center gap-4">
            <Link to="https://www.facebook.com/" target="_blank">
              <CiFacebook className=" text-white text-xl  transition hover:scale-110 duration-300 ease-in-out" />
            </Link>
            <Link to="https://www.youtube.com/" target="_blank">
              <CiLinkedin className=" text-white text-2xl  transition hover:scale-110 duration-300 ease-in-out" />
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank">
              <FiTwitter className=" transition hover:scale-110 duration-300 ease-in-out text-white text-xl" />
            </Link>
          </div>

          {/* appointment */}
          <Link to="/appointment" className=" md:hidden px-2 py-1 border-2 border-white hover:scale-105 transition duration-300 rounded-md text-white">
                Book Appointment         
            </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
