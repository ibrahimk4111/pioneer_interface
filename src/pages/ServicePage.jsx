import React, { useEffect, useState, useRef } from "react";
import Service from "../Components/Service/Service";
import { Link } from "react-router-dom";

import {FcPrevious, FcNext} from 'react-icons/fc'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';




const ServicePage = () => {
  const prevRef = useRef()
  const nextRef = useRef()

  const [services, setServices] = useState([])

  useEffect(() => {
    getServices()
  }, [])

  const getServices = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/service/')
    const data = await response.json()
    setServices(data)
  }


  return (
    <div className=" mx-auto py-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="uppercase font-bold md:text-3xl sm:text-xl text-lg mb-3">Our Services</h1>
        <hr className=" w-40 h-1 bg-slate-600 rounded"></hr>
      </div>

      <div className="flex justify-between items-center">

        <div ref={prevRef} className="p-1 rounded-full hover:bg-slate-300"><FcPrevious size={20} /></div>
        <Swiper

          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}

          // install Swiper modules
          modules={[Pagination, A11y, Navigation, FreeMode]}
          freeMode={true}
          spaceBetween={50}
          grabCursor={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640:{
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3, 
            },
            1280:{
              slidesPerView: 4,
            }
          }}
        >

          {services.map((service, index) => (
            <SwiperSlide key={index} className="py-10 px-3" ><Service key={index} service={service} index={index} /></SwiperSlide>
          ))}

        </Swiper>

        <div ref={nextRef} className="p-1 rounded-full hover:bg-slate-300"><FcNext size={20} /></div>
      </div>

      {/* See more */}
      <div className="flex justify-center items-center mt-5">
        <div className="hover:text-white sm:w-[22%] w-40 flex justify-center items-center border-2 border-[#B99671] hover:bg-[#B99671] bg-opacity-75 rounded-md transition hover:scale-105 duration-300 ease-in-out">
          <Link to="/services" className="p-1 md:text-xl text-sm uppercase">
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
