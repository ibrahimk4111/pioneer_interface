import React from "react";
import { motion } from 'framer-motion'

import { Link } from "react-router-dom";

import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi"

const ContactAddress = () => {

  const variants = {
    hidden: {
      opacity: 0,
      x: -200
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 1
      }
    }
  }

  return (
    <motion.div
      className="md:px-10 p-5 font-semibold bg-bg-card text-white h-full flex justify-center items-center"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-2">
        <div className=" flex flex-col gap-3">
          <h2 className=" md:text-4xl text-2xl"> __ Connect with us today</h2>
          <p className="text-justify py-5"> Our law firm is committed to providing high-quality legal services to clients in need. With years of experience and a team of skilled attorneys, we offer personalized attention and effective representation in a variety of practice areas, including family law, criminal law, business law, real estate law, and more.</p>
        </div>
        {/* address particle */}
        <div className=" flex items-center gap-2">
          <TfiLocationPin size={25} className="bg-white rounded-full p-1 text-black" />
          <p>70, Pioneer Road, Kakrail, Segun Bagicha, Dhaka-1000.</p>
        </div>

        {/* phone call */}
        <div className=" flex items-center gap-2">
          <BiPhoneCall size={25} className="bg-white rounded-full p-1 text-black" />
          <Link to="/">(+88) 01711-108120 </Link>
        </div>

        {/* Email  */}
        <div className=" flex items-center gap-2">
          <BiMailSend size={25} className="bg-white rounded-full p-1 text-black" />
          <Link to="/"> admozibur@gmail.com </Link>
        </div>

        {/* icons */}
        <div className="flex items-center gap-4">
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
        <div className="w-40 mt-5 transition hover:scale-105 duration-300 ease-in-out flex justify-center items-center border-2 border-white hover:bg-white hover:text-black bg-opacity-75 rounded-md cursor-pointer">
          <Link to="/appointment" className="p-1 text-sm">
            Book Appointment
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactAddress;
