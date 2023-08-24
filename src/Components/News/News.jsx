import React from 'react'
import { Link } from 'react-router-dom'
import smImg from '../../styles/handsome-judge-with-gavel-sitting-courtroom_85869-8507.jpg'

const News = ({ news }) => {
  return (
    <Link to={`/detailed_service/${news.id}`}>
      <div className='flex justify-center items-center py-3'>
        <div className="h-[100%] w-[95%] cursor-pointer border-2 border-slate-100 transition hover:scale-95 duration-500 hover:shadow-xl">

          <div className='h-72 overflow-hidden flex justify-center items-center'>
            <img className="object-cover h-72 w-full" src={`https://pioneer.kodbel.com${news.img}`} alt="...." />
          </div>
            <p className="px-2 py-1 text-gray-600 md:text-lg text-base line-clamp-5 text-justify">{news.Description}</p>
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