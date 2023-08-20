import React, { useEffect, useState } from "react";
import Attorney from "../Components/Attorney/Attorney";
// import { Link } from "react-router-dom";

import {FcPrevious, FcNext} from 'react-icons/fc'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from "react";
// import 'swiper/css/scrollbar';


const AttorneyPage = () => {
  const prevRef = useRef()
  const nextRef = useRef()

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
    <div className="py-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="uppercase font-bold md:text-3xl sm:text-xl text-lg mb-3">
          Our Attorneys & Associates
        </h1>
        <hr className=" w-40 h-1 bg-slate-600 rounded"></hr>
      </div>
      
      <div className="flex justify-between items-center">
      <div ref={prevRef} className="p-1 rounded-full hover:bg-slate-300"><FcPrevious size={20} /></div>

      <Swiper
          // install Swiper modules
          modules={[Pagination, A11y, Navigation]}
          onInit={(swiper)=>{
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640:{
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1, 

            },
            1280:{
              slidesPerView: 1.8,
              spaceBetween: 10
            }
          }}
        >
        {attorneys.map((attorney, index) => (
          <SwiperSlide key={index} className=" py-10 px-2"><Attorney key={index} attorney={attorney} index={index} /></SwiperSlide>
        ))}
      </Swiper>

      <div ref={nextRef} className="p-1 rounded-full hover:bg-slate-300"><FcNext size={20} /></div>

      </div>

      {/* See more */}
      {/* <div className="flex justify-center items-center mt-5">
        <div className="hover:text-white sm:w-[22%] w-40 flex justify-center items-center border-2 border-[#B99671] hover:bg-[#B99671] bg-opacity-75 rounded-md transition hover:scale-105 duration-300 ease-in-out">
          <Link to="/attorneys" className="p-1 md:text-xl text-sm uppercase">
            See more
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default AttorneyPage;
