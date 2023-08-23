import React from 'react'
import { Link } from 'react-router-dom'
import smImg from '../../styles/handsome-judge-with-gavel-sitting-courtroom_85869-8507.jpg'

const News = ({ news }) => {
  return (
    <Link to={`/detailed_service/${news.id}`}>
      <div className='flex justify-center items-center py-3'>
        <div className="h-[100%] w-[95%] cursor-pointer border-2 border-slate-100 transition hover:scale-95 duration-500 hover:shadow-xl">

          <div className='h-52 overflow-hidden flex justify-center items-center'>
            <img className="object-cover h-52 w-full" src={`https://pioneer.kodbel.com${news.img}`} alt="...." />
          </div>

          <div className="p-5">
            <h2 className=" text-lg md:text-xl font-bold mb-2">{news.title}</h2>
            <p className="text-gray-600 md:text-lg text-base line-clamp-5">{news.Description}</p>
          </div>

          <div className=' px-5 py-1 flex items-center gap-3 border-t-2 border-slate-100'>
            <img src={smImg} alt="..." className=' h-12 w-12 rounded-full' />
            <h2 className=' text-slate-500'>Md. Nazmul Islam</h2>
          </div>

        </div>
      </div>
    </Link>
  )
}

export default News