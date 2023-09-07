import React from 'react'
import { Link } from 'react-router-dom'
import smImg from '../../styles/handsome-judge-with-gavel-sitting-courtroom_85869-8507.jpg'

const News = ({ news }) => {
  return (
    <Link to={`/newsDetails/${news.id}`}>
      <div className='flex justify-center items-center py-3 '>
        <div className="h-[100%] w-[95%] cursor-pointer  transition hover:scale-95 duration-500 hover:shadow-xl bg-white">

          <div className='h-72 overflow-hidden flex justify-center items-center'>
            <img className="object-cover h-72 w-full" src={`https://pioneer.kodbel.com${news.img}`} alt="...." />
          </div>
          <div className=' px-5 py-1 flex items-center gap-3 border-t-2 border-slate-200'>
            <h2 className='line-clamp-2 text-xl'> News Headline is here Md. Nazmul Islam</h2>
          </div>
          <p className="px-5 py-1 text-gray-600 md:text-base line-clamp-3 text-justify">{news.Description}</p>
          <div className=' px-5 py-1 flex items-center justify-between gap-3 border-t-2 border-slate-200'>
            <div className=' flex gap-1 items-center'>
              <img src={smImg} alt="..." className=' h-10 w-10 rounded-full' />
              <h2 className=' text-slate-500'>Md. Nazmul Islam</h2>
            </div>
            <h2 className=' text-slate-500'>9/6/2023</h2>
          </div>

        </div>
      </div>
    </Link>
  )
}

export default News