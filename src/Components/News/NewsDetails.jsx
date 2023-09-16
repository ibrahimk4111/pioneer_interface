import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import smImg from '../../styles/handsome-judge-with-gavel-sitting-courtroom_85869-8507.jpg';

const NewsDetails = () => {

  const { news_and_blogs } = useContext(UserContext)

  const [news, setNews] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(`https://pioneer.kodbel.com/api/news/${id}/`)
      const data = await response.json()
      setNews(data)
    }
    getNews()
  }, [id])

  const variants = (index) => ({
    hidden: {
      opacity: 0,
      x: 200
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
        <img className=" object-cover h-80 duration-300 hover:scale-105" src={`https://pioneer.kodbel.com${news.img}`} alt='...' />

        <div className=" flex flex-col space-y-3 px-5 w-full">
          <h2 className="text-2xl font-bold pr-1">{news.title}</h2>
          <div className='w-full py-5'>
            <p className=' text-justify text-lg'>{news.Description}</p>
          </div>
        </div>

        <div className=' px-5 py-1 flex items-center justify-between gap-3 border-t-2 border-slate-200'>
          <div className=' flex gap-1 items-center'>
            <img src={smImg} alt="..." className=' h-10 w-10 rounded-full' />
            <h2 className=' text-slate-500'>Md. Nazmul Islam</h2>
          </div>
          <h2 className=' text-slate-500'>9/6/2023</h2>
        </div>
      </motion.div>



      {/* Right bar */}
      <div className=' flex flex-col gap-2'>
        {
          news_and_blogs.map((item, index) => (
            <Link key={index} to={`/newsDetails/${item.id}`} className='active:bg-bg-card focus:text-white focus:bg-bg-card bg-slate-50'>
              <motion.div
                className='text-2xl w-full flex gap-5'
                variants={variants(index)}
                initial="hidden"
                whileInView="visible"
              >
                <span className=' p-2'>{item.title}</span>
              </motion.div>
            </Link>

          ))
        }
      </div>
    </div>
  )
}

export default NewsDetails