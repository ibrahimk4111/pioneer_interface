import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { UserContext } from '../Context/UseContext'

const DetailedService = () => {

  const { services, setDirectoryFalse } = useContext(UserContext)

  //Single service section 
  const [singleService, setSingleService] = useState({})

  const { id } = useParams()

  useEffect(() => {
    const getService = async () => {
      const response = await fetch(`https://pioneer.kodbel.com/api/service/${id}/`)
      const data = await response.json()
      setSingleService(data)
    }
    getService()
  }, [id])

  console.log(singleService)

  return (
    <div className="max-w-[1200px] mx-auto h-auto md:py-10 py-5 grid grid-cols-4 gap-2">

      <div className=' flex flex-col justify-start gap-10 h-auto border-2 border-slate-300 col-span-2 overflow-hidden'>
        <img className=" object-cover h-80 duration-300 hover:scale-105" src={`https://pioneer.kodbel.com${singleService.img}`} alt='...' />

        <div className=" flex flex-col space-y-3 px-5 w-full">
          <h2 className="text-2xl font-bold pr-1">{singleService.title}</h2>
          <h2 className="text-lg font-semibold pr-1">{singleService.short_Description}</h2>
          <div className='w-full py-5'>
            <p className=' text-justify text-lg'>{singleService.full_Description}</p>
          </div>
        </div>
      </div>

      
      
      {/* Right bar */}
      <div className=' flex flex-col gap-2'>
        {
          services.map((item, index) => (
            <Link key={index} to={`/detailed_service/${item.id}`} onClick={setDirectoryFalse} className='active:bg-bg-card focus:text-white focus:bg-bg-card bg-slate-50'>
              <div className='text-2xl w-full p-3'>
                {item.title}
              </div>
            </Link>

          ))
        }
      </div>
    </div>
  )
}

export default DetailedService