import React, { useState } from 'react'

import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImageView = ({ imgSrcId, toggleModal, images }) => {

    const [current, setCurrent] = useState(imgSrcId)

    //carousel
    const prevBtn = async () => {
        const newIndex = await current === 0 ? images.length - 1 : current - 1
        setCurrent(newIndex)
    }

    const nextBtn = async () => {
        const newIndex = await current === images.length - 1 ? 0 : current + 1
        setCurrent(newIndex)
    }

    return (


        <div className='fixed top-0 left-0 w-full h-[100vh] bg-black bg-opacity-90 flex justify-center items-center overflow-hidden z-40'>

            <div className='w-[95%] h-[100vh] flex justify-between items-center overflow-hidden'>
                <AiOutlineLeft onClick={prevBtn}  className='text-3xl p-1 cursor-pointer rounded-full bg-white' />

                <img src={images[current].img} alt="..." className=' w-auto max-w-[100%] max-h-[100%]' />

                <AiOutlineRight onClick={nextBtn} className='text-3xl p-1 cursor-pointer rounded-full bg-white' />
            </div>

            {/* close button */}
            <AiOutlineClose onClick={toggleModal} className="absolute top-5 md:left-[95%] left-[80%] text-3xl rounded-md z-50 text-white cursor-pointer" />

        </div>
    )
}

export default ImageView