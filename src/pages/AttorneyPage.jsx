import React, { useEffect, useState } from "react";
import Attorney from "../Components/Attorney/Attorney";
// import { Link } from "react-router-dom";

// import {FcPrevious, FcNext} from 'react-icons/fc'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Link } from "react-router-dom";



const AttorneyPage = () => {
  // const prevRef = useRef()
  // const nextRef = useRef()

  const [attorneys, setAttorneys] = useState([])

  useEffect(() => {
    const getAttorneys = async () => {
      const response = await fetch('https://pioneer.kodbel.com/api/attorney/');
      const data = await response.json();
      setAttorneys(data);
    }
    getAttorneys();
  }, [])



  return (
    <div className="mx-auto py-10">
      <div className="flex flex-col justify-center items-center font-serif">
        <h1 className="text-lg mb-3 text-bg-card">__ Lawyer Team __</h1>
        <h1 className="font-bold md:text-3xl sm:text-xl text-lg mb-3 tracking-wide">Our Attorneys and Associates</h1>
        <hr className=" w-40 h-1 bg-slate-600 rounded"></hr>
      </div>

      <div className=" max-w-[1200px] mx-auto">
        {/* <div ref={prevRef} className="p-1 rounded-full hover:bg-slate-300"><FcPrevious size={20} /></div> */}
        <Swiper

          style={{
            "--swiper-pagination-color": "#cba036",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "0.2",
          }}
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
          pagination={{ clickable: true, color: "red" }}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 7
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 4.2,
              spaceBetween: 10
            },
            1200: {
              slidesPerView: 4.1,
              spaceBetween: 20
            }
          }}
        >

          {attorneys.map((attorney, index) => (
            <SwiperSlide key={index} className="pt-5 pb-10"><Attorney key={index} attorney={attorney} index={index} /></SwiperSlide>
          ))}

        </Swiper>

        {/* <div ref={nextRef} className="p-1 rounded-full hover:bg-slate-300"><FcNext size={20} /></div> */}
      </div>

      {/* See more */}
      {/* <div className="flex justify-center items-center mt-5">
         <div className="hover:text-white sm:w-[22%] w-40 flex justify-center items-center border-2 border-[#B99671] hover:bg-[#B99671] bg-opacity-75 rounded-md transition hover:scale-105 duration-300 ease-in-out">
           <Link to="/attorneys" className="p-1 md:text-xl text-sm uppercase">
             See more
           </Link>
         </div>
       </div> */}
    </div >
    
  );
};

export default AttorneyPage;
