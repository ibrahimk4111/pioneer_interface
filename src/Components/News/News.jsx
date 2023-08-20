import React from 'react'
import { Link } from 'react-router-dom'

const News = ({ blog }) => {
  return (
    <Link to={`/newsDetails/${blog.id}`}>
      <div className=' bg-slate-200 p-2 transition hover:scale-105 hover:shadow-md duration-300 rounded-md'>
        <div className='overflow-hidden items-center'>
          <img className='rounded-md object-cover' src={`https://pioneer.kodbel.com/${blog.img}`} alt="..." />
        </div>
        <h2 className='mt-2 md:text-base text-xs line-clamp-2'>{blog.title}</h2>
      </div>
    </Link>
  )
}

export default News