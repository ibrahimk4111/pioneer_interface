import React, { useContext } from 'react'
import { motion } from 'framer-motion'
// import { UserContext } from '../Components/Context/UserContext';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation, FreeMode, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { UserContext } from '../Context/UserContext';



const NewsPage = () => {

  const { clients, mainUrl } = useContext(UserContext)

  const variants = (index) => ({
    hidden: {
      opacity: 0,
      x: -200
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
    <div className="bg-slate-100 py-10" id='client'>
      <div className=''>

        {/* start header of blog section */}
        <div className="flex flex-col justify-center items-center font-serif">
          <h1 className="text-lg mb-3 text-bg-card">__ Our Clients __</h1>
          <h1 className="font-bold md:text-3xl sm:text-xl text-lg mb-3 tracking-wide">Clients we are Advising</h1>
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
            modules={[Pagination, A11y, Navigation, FreeMode, Autoplay]}
            // freeMode={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 5
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 5
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 10
              }
            }}
          >

            {clients.map((client, index) => (

              <SwiperSlide key={index}
                className="px-2 pt-10"
              >
                <motion.div
                  variants={variants(index)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className=' flex flex-col justify-center gap-3 h-52 p-2'
                >
                  <div className='flex justify-center items-center p-2  border-2 border-slate-200 h-48'>
                    <img
                      className=' w-auto max-h-32'
                      src={`${mainUrl}${client.com_img}`} alt="..."
                    />
                  </div>
                  <h2 className='p-2 bg-slate-200 rounded-lg h-10 text-center'>{client.Company_name}</h2>
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