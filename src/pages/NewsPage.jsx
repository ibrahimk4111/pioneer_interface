import React, { useContext } from 'react'
import { UserContext } from '../Components/Context/UseContext';
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

  return (
    <div className="bg-slate-100 py-10" id='news'>
      <div className='max-w-[1200px] mx-auto '>

        {/* start header of blog section */}
        <div className="flex flex-col justify-center items-center font-serif">
          <h1 className="text-lg mb-3 text-bg-card">__ Recent Blogs and __</h1>
          <h1 className="font-bold md:text-3xl sm:text-xl text-lg mb-3 tracking-wide">Latest News</h1>
          <hr className=" w-40 h-1 bg-slate-600 rounded"></hr>
        </div>

        {/* start card data mapping */}
        <div className="flex justify-between items-center pt-5">

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
                slidesPerView: 2.1,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 3.1,
                spaceBetween: 10
              },
              1280: {
                slidesPerView: 3.1,
                spaceBetween: 10
              }
            }}
            className="h-[550px]"
          >

            {news_and_blogs.map((news, index) => (
              <SwiperSlide key={index} className=" pb-10"><News key={index} news={news} index={index} /></SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default NewsPage