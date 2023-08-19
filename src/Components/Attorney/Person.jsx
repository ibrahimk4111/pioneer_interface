import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FiTwitter } from "react-icons/fi";

const Person = () => {

  const { id } = useParams()
  const [person, setPerson] = useState({})

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPerson()
  }, [])

  const getPerson = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/attorney/${id}/`);
    const data = await response.json();
    setPerson(data);
  }


  return (
    <div className="w-full mx-auto h-auto md:p-10 p-5">

      <div className=' flex flex-col md:flex-row justify-start md:gap-10 gap-2 h-auto'>
        <div className='overflow-hidden flex justify-center items-center md:w-auto'>
          <img className=" object-cover md:h-60 h-32 duration-300 hover:scale-110" src={`http://127.0.0.1:8000/${person.img}`} alt='...' />
        </div>

        <div className=" flex flex-col space-y-3 border-l-2 border-slate-400 px-5 md:w-[70%] w-full">
          <div className='flex flex-col items-start justify-start gap-3'>
            
            <h2 className="md:text-lg text-xs font-bold pr-1">{person.attr_name}</h2>
            <h2 className="text-base">{person.designation}</h2>

            <div className=' flex md:flex-row flex-col md:gap-3 gap-2'>
              {/* Phone Call  */}
              <div className="flex items-center text-slate-600">
                <BiPhoneCall size={20} />
                <Link to="/" className="px-1 md:px-3 text-[50%]">{person.mobile}</Link>
              </div>

              {/* Email  */}
              <div className="flex items-center text-slate-600">
                <BiMailSend size={20} />
                <Link to="/" className="px-1 md:px-3 md:text-base text-[5%]">{person.email}</Link>
              </div>

              {/* icons */}
              <div className="flex items-center gap-4">
                <Link to={person.facebook} target="_blank">
                  <CiFacebook className=" text-slate-700 text-xl  transition hover:scale-110 duration-300 ease-in-out" />
                </Link>
                <Link to={person.linkedin} target="_blank">
                  <CiLinkedin className=" text-slate-600 text-2xl  transition hover:scale-110 duration-300 ease-in-out" />
                </Link>
                <Link to={person.twitter} target="_blank">
                  <FiTwitter className=" transition hover:scale-110 duration-300 ease-in-out text-slate-700 text-xl" />
                </Link>
              </div>

            </div>

          </div>

          <div>
            <p className=' text-justify mt-6'>{person.Description}</p>
          </div>

        </div>



      </div>
    </div>
  )
}

export default Person