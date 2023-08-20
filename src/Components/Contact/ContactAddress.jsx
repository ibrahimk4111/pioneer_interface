import React from "react";

import { Link } from "react-router-dom";

import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";

const ContactAddress = () => {
  return (
    <div className=" md:pr-10 font-semibold bg-blue-950 text-white h-full flex justify-center items-center">
      <div className="flex flex-col gap-5 items-end">
        <div className=" flex flex-col items-end gap-3">
          <h2 className=" uppercase md:text-4xl text-2xl">About Law Associates</h2>
          <p className="w-[60%] text-justify "> Our law firm is committed to providing high-quality legal services to clients in need. With years of experience and a team of skilled attorneys, we offer personalized attention and effective representation in a variety of practice areas, including family law, criminal law, business law, real estate law, and more.</p>
        </div>
        {/* address particle */}
        <div className=" text-right tracking-widest uppercase">
          <p>70, Pioneer Road, Kakrail</p>
          <p>Segun Bagicha, Dhaka-1000.</p>
        </div>

        {/* phone call */}
        <div className=" tracking-widest flex items-center justify-center gap-2">
          <Link to="/">(+88) 01711-108120 </Link>
          <BiPhoneCall className=" text-xl" />
        </div>

        {/* Email  */}
        <div className="  tracking-widest flex items-center justify-center gap-2">
          <Link to="/"> admozibur@gmail.com </Link>
          <BiMailSend className=" text-xl" />
        </div>

        {/* icons */}
        <div className="flex items-center justify-center gap-4">
          <Link to="https://www.facebook.com/" target="_blank">
            <CiFacebook className="transition duration-300 ease-in-out hover:scale-125 text-2xl" />
          </Link>
          <Link to="https://www.youtube.com/" target="_blank">
            <CiLinkedin className="text-2xl transition duration-300 ease-in-out hover:scale-125" />
          </Link>
          <Link to="https://www.linkedin.com/" target="_blank">
            <FiTwitter className=" text-xl transition duration-300 ease-in-out hover:scale-125" />
          </Link>
        </div>

        {/* appointment  */}
        <div className=" transition hover:scale-105 duration-300 ease-in-out flex justify-center items-center border-2 border-[#B99671] hover:bg-[#B99671] bg-opacity-75 rounded-md">
            <Link to="/appointment" className="p-1 text-sm hover:text-white">
              Book Appointment
            </Link>
          </div>
      </div>
    </div>
  );
};

export default ContactAddress;
