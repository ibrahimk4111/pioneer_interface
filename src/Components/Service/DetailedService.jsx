import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { HiScale } from 'react-icons/hi';
import DOMPurify from 'dompurify';

const DetailedService = () => {

  const { mainUrl, services, setDirectoryFalse } = useContext(UserContext)

  //Single service section 
  const [singleService, setSingleService] = useState({})

  const { id } = useParams()

  useEffect(() => {
    const getService = async () => {
      const response = await fetch(`${mainUrl}/api/service/${id}/`)
      const data = await response.json()
      setSingleService(data)
    }
    getService()
  }, [id, mainUrl])


  const variants = (index) => ({
    hidden: {
      opacity: 0,
      x: 100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 * index,
        duration: 1
      }
    }
  })


  return (
    <div className="max-w-[1200px] mx-auto h-auto md:py-10 py-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2">

      <motion.div
        className=' flex flex-col justify-start gap-10 h-auto border-2 border-slate-300 lg:col-span-2 md:col-span-2 overflow-hidden'
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
      >
        <img className=" object-cover h-80 duration-300 hover:scale-105" src={`${mainUrl}${singleService.img}`} alt='...' />

        <div className=" flex flex-col space-y-3 px-3 w-full">
          <h2 className="text-2xl font-bold py-2 bg-slate-50 text-center">{singleService.title}</h2>
          <div>
            <label className=' text-xl font-bold'>Description in short:</label>
            <h2
              className="text-lg font-semibold pr-1 text-justify"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(singleService.short_Description) }}
            ></h2>
          </div>
          <div className='w-full py-5'>
            <label className='text-xl font-bold'>Description in details:</label>
            <p
              className=' text-justify text-lg'
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(singleService.full_Description) }}
            ></p>
          </div>
        </div>
      </motion.div>



      {/* Right bar */}
      <div className=' flex flex-col gap-2'>
        {
          services.map((item, index) => (
            <Link key={index} to={`/detailed_service/${item.id}`} onClick={setDirectoryFalse} className='active:bg-bg-card focus:text-white focus:bg-bg-card bg-slate-50'>
              <motion.div
                className='text-2xl w-full flex gap-5'
                variants={variants(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
              >
                <span className='bg-bg-card text-white p-2'><HiScale /></span>
                <span className=' p-2'>{item.title}</span>
              </motion.div>
            </Link>

          ))
        }
      </div>
    </div>
  )
}

export default DetailedService