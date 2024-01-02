import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { UserContext } from '../Components/Context/UserContext';
import News from '../Components/News/News'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation, FreeMode } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';



const NewsPage = () => {

  // useContext hook to retrive data
  const { news_and_blogs } = useContext(UserContext)
  news_and_blogs.sort((a,b)=>b.id-a.id)

  const variants = (index) => ({
    hidden: {
      opacity: 0,
      y: -200
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * index,
        duration: 1
      }
    }
  })

  return (
    <div className="bg-slate-100 py-5" id='news'>
      <div className=' container mx-auto '>

        {/* start header of blog section */}
        <div className="flex flex-col justify-center items-center font-serif">
          <h1 className="text-lg mb-3 text-bg-card">__ Recent Blogs and __</h1>
          <h1 className="font-bold md:text-3xl sm:text-xl text-lg mb-3 tracking-wide">Latest News</h1>
          <hr className=" w-40 h-1 bg-slate-600 rounded"></hr>
        </div>

        {/* start card data mapping */}
        <div className="max-w-[1200px] mx-auto ">

          <Swiper

            style={{
              "--swiper-pagination-color": "#cba036",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "0.2",
            }}
            // install Swiper modules
            modules={[Pagination, A11y, Navigation, FreeMode]}
            // freeMode={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 7
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 4.3,
                spaceBetween: 10
              },
              1200: {
                slidesPerView: 4.3,
                spaceBetween: 10
              }
            }}
            className=' p-4 '
          >

            {news_and_blogs.map((news, index) => (

              <SwiperSlide key={index} className=" pt-5 pb-10 ">
                <motion.div
                  
                  variants={variants(index)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <News news={news} index={index} />
                </motion.div>
              </SwiperSlide>

            ))}

          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default NewsPage