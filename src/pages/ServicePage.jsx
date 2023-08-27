import React, { useEffect, useState } from "react";
import Service from "../Components/Service/Service";
// import { Link } from "react-router-dom";

// import {FcPrevious, FcNext} from 'react-icons/fc'

// Import Swiper React components
  // import { Swiper, SwiperSlide } from 'swiper/react';
  // import { Pagination, A11y, Navigation, FreeMode } from 'swiper/modules';

// Import Swiper styles
  // import 'swiper/css';
  // import 'swiper/css/pagination';
  // import 'swiper/css/free-mode';
import { Link } from "react-router-dom";




const ServicePage = () => {
  // const prevRef = useRef()
  // const nextRef = useRef()

  const [services, setServices] = useState([])

  useEffect(() => {
    getServices()
  }, [])

  const getServices = async () => {
    const response = await fetch('https://pioneer.kodbel.com/api/service/')
    const data = await response.json()
    setServices(data)
  }


  return (
    <div className=" py-10" id="services">
      <div className="flex flex-col justify-center items-center font-serif">
        <h1 className="text-lg mb-3 text-bg-card">__ Practice Area __</h1>
        <h1 className="font-bold md:text-3xl sm:text-xl text-lg mb-3 tracking-wide">Legal Services we do provide</h1>
        <hr className=" w-40 h-1 bg-slate-600 rounded"></hr>
      </div>

      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 pt-5 max-w-[1240px] mx-auto">
        {/* <div ref={prevRef} className="p-1 rounded-full hover:bg-slate-300"><FcPrevious size={20} /></div> */}
        {/*<Swiper

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
              slidesPerView: 1.1,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2.1,
              spaceBetween: 7
            },
            768: {
              slidesPerView: 3.1,
              spaceBetween: 7
            },
            1024: {
              slidesPerView: 3.4,
              spaceBetween: 7
            },
            1280: {
              slidesPerView: 4.2,
              spaceBetween: 7
            }
          }}
          className="md:h-[500px] h-[480px]"
        >*/}

          {services.map((service, index) => (
            // <SwiperSlide key={index} className="">
              index <= 7 &&
              <Service key={index} service={service} index={index} />
            // </SwiperSlide>
          ))}

        {/* </Swiper> */}

        {/* <div ref={nextRef} className="p-1 rounded-full hover:bg-slate-300"><FcNext size={20} /></div> */}
      </div>

      {/* See more */}
      <div className="flex justify-center items-center mt-10">
        <div className="flex justify-center items-center border-2 border-bg-card hover:bg-bg-card hover:text-white rounded-md transition hover:scale-110 duration-300 ease-in cursor-pointer">
          <Link to="/services" className="px-5 text-base">
            View All
          </Link>
        </div>
      </div>
    </div >
  );
};

export default ServicePage;
