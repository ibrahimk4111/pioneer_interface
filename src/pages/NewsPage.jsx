import React, { useEffect, useState } from 'react'
import News from '../Components/News/News'

// import { FcPrevious, FcNext } from 'react-icons/fc'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
// import { Link } from 'react-router-dom';



const NewsPage = () => {
  // const prevRef = useRef()
  // const nextRef = useRef()

  const [news_and_blogs, setNews_and_blogs] = useState([])

  useEffect(() => {
    getNews()
  }, [])

  const getNews = async () => {
    const response = await fetch('https://pioneer.kodbel.com/api/news/')
    const data = await response.json()
    setNews_and_blogs(data)
  }

  return (
    <div className="max-w-[1200px] mx-auto py-10">
      <div className="flex flex-col justify-center items-center font-serif">
        <h1 className="text-lg mb-3">__ Recent Blogs and __</h1>
        <h1 className="font-bold md:text-3xl sm:text-xl text-lg mb-3 tracking-wide">Latest News</h1>
        <hr className=" w-40 h-1 bg-slate-600 rounded"></hr>
      </div>

      <div className="flex justify-between items-center pt-10">
        {/* <div ref={prevRef} className="p-1 rounded-full hover:bg-slate-300"><FcPrevious size={20} /></div> */}
        <Swiper
          // onInit={(swiper) => {
          //   swiper.params.navigation.prevEl = prevRef.current;
          //   swiper.params.navigation.nextEl = nextRef.current;
          //   swiper.navigation.init();
          //   swiper.navigation.update();
          // }}

          // install Swiper modules
          modules={[Pagination, A11y, Navigation, FreeMode]}
          // freeMode={true}
          grabCursor={true}
          // pagination={{ clickable: true }}
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
          className="md:h-[530px] h-[480px]"
        >

          {news_and_blogs.map((news, index) => (
            <SwiperSlide key={index} className=""><News key={index} news={news} index={index} /></SwiperSlide>
          ))}

        </Swiper>

        {/* <div ref={nextRef} className="p-1 rounded-full hover:bg-slate-300"><FcNext size={20} /></div> */}
      </div>

      {/* See more
      <div className="flex justify-center items-center mt-5">
        <div className="hover:text-white sm:w-[22%] w-40 flex justify-center items-center border-2 border-[#B99671] hover:bg-[#B99671] bg-opacity-75 rounded-md transition hover:scale-105 duration-300 ease-in-out">
          <Link to="/news" className="p-1 md:text-xl text-sm uppercase">
            See more
          </Link>
        </div>
      </div> */}
    </div>
  )
}

export default NewsPage