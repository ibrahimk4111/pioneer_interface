import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailedService = () => {

  const [singleService, setSingleService] = useState({})

  const { id } = useParams()

  useEffect(() => {
    getService()
  }, [])

  const getService = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/service/${id}/`)
    const data = await response.json()
    setSingleService(data)
  }

  return (
    <div className="w-full mx-auto h-auto md:py-10 py-5">

      <div className=' flex flex-col md:flex-row justify-start gap-10 h-auto'>
        <div className='overflow-hidden flex justify-center items-center md:w-auto '>
          <img className=" object-cover md:h-60 h-40 duration-300 hover:scale-110" src={`http://127.0.0.1:8000/${singleService.img}`} alt='...' />
        </div>

        <div className=" flex flex-col space-y-3 border-l-2 border-slate-400 px-5 md:w-[70%] w-full">
          <h2 className="text-xl font-bold pr-1">{singleService.title}</h2>
          
          <h2 className="text-lg font-semibold pr-1">{singleService.shortDescription}</h2>
          
          <div className='w-full'>
            <p className=' text-justify'>{singleService.full_Description}</p>
          </div>

        </div>



      </div>
    </div>
  )
}

export default DetailedService