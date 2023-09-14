import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { Link } from 'react-router-dom'
import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FiTwitter } from "react-icons/fi";


const Person = () => {

  const {mainUrl, attorneys, setDirectoryFalse } = useContext(UserContext)

  const [person, setPerson] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const getAttorney = async () => {
      const response = await fetch(`${mainUrl}/api/attorney/${id}/`)
      const data = await response.json()
      setPerson(data)
    }
    getAttorney()
  }, [id, mainUrl])

  return (
    <div className="max-w-[1200px] mx-auto h-auto md:py-10 py-5 grid md:grid-cols-4 grid-cols-1 gap-5 ">

      <div className='grid md:grid-cols-3 grid-cols-1 col-span-3 h-auto border-2 border-slate-300 overflow-hidden'>
        <div className=' flex justify-center items-center bg-bg-card'>
          <img className=" object-cover object-top h-96" src={`${mainUrl}${person.img}`} alt='...' />
        </div>

        <div className=" flex flex-col space-y-3 p-3 w-full col-span-2">
          <h2 className="text-2xl font-bold py-2 bg-slate-50 text-center">{person.attr_name}</h2>
          <div className='w-full p-5'>
            <p className=' text-justify text-lg'>{person.Description}</p>
          </div>
          <div className=' flex p-2'>
            {/* Phone Call  */}
            <div className="flex items-center">
              <BiPhoneCall size={20} />
              <Link to="/" className="px-1 md:px-3 ">{person.mobile}</Link>
            </div>

            {/* Email  */}
            <div className="flex items-center">
              <BiMailSend size={20} />
              <Link to="/" className="px-1 md:px-3">{person.email}</Link>
            </div>

            {/* icons */}
            <div className="flex items-center gap-4">
              <Link to={person.facebook} target="_blank">
                <CiFacebook className=" text-xl  transition hover:scale-110 duration-300 ease-in-out" />
              </Link>
              <Link to={person.linkedin} target="_blank">
                <CiLinkedin className=" text-2xl  transition hover:scale-110 duration-300 ease-in-out" />
              </Link>
              <Link to={person.twitter} target="_blank">
                <FiTwitter className=" transition hover:scale-110 duration-300 ease-in text-xl" />
              </Link>
            </div>
          </div>
        </div>


      </div>

      {/* Right bar */}
      <div className=' flex flex-col gap-2'>
        {
          attorneys.map((person, index) => (
            <Link key={index} to={`/attorney/${person.id}`} onClick={setDirectoryFalse} className='active:bg-bg-card focus:text-white focus:bg-bg-card bg-slate-50'>
              <div className='w-full flex items-center gap-5'>
                <img className=" object-cover object-top w-12 h-12" src={`${mainUrl}${person.img}`} alt='...' />
                <p className='text-lg p-2'>{person.attr_name}</p>
              </div>
            </Link>

          ))
        }
      </div>

    </div>
  )
}

export default Person