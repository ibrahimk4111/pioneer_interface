import React, { useContext } from "react";
import { motion } from "framer-motion"
import { UserContext } from "../Components/Context/UserContext";
import Attorney from "../Components/Attorney/Attorney";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation, FreeMode } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
// import { Link } from "react-router-dom";




const AttorneyPage = () => {

  const { attorneys } = useContext(UserContext)
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
    <div className="mx-auto py-10" id="attorneys">
      <div className="flex flex-col justify-center items-center font-serif">
        <h1 className="text-lg mb-3 text-bg-card">__ Lawyer Team __</h1>
        <h1 className="font-bold md:text-3xl sm:text-xl text-lg mb-3 tracking-wide">Our Attorneys and Associates</h1>
        <hr className=" w-40 h-1 bg-slate-600 rounded"></hr>
      </div>

      <div className=" max-w-[1200px] mx-auto">

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
          pagination={{ clickable: true, color: "red" }}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2.3,
              spaceBetween: 7
            },
            768: {
              slidesPerView: 3.3,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 4.2,
              spaceBetween: 10
            },
            1200: {
              slidesPerView: 4.2,
              spaceBetween: 10
            }
          }}
        >

          {attorneys.map((attorney, index) => (
            <SwiperSlide key={index} className="pt-5 pb-10">
              <motion.div
              variants={variants(index)}
              initial="hidden"
              whileInView="visible"
              >
                <Attorney key={index} attorney={attorney} index={index} />
              </motion.div>
            </SwiperSlide>
          ))}

        </Swiper>


      </div>
    </div >

  );
};

export default AttorneyPage;
