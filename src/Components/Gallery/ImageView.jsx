import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";


const ImageView = () => {

    const { prevBtn, nextBtn, current, images, toggleModal } = useContext(UserContext)

    const classNames = 'cursor-pointer rounded-full bg-white'

    return (


        <div className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-black bg-opacity-20 flex justify-center items-center overflow-hidden z-40'>

            <div className='absolute h-full w-full max-w-[95%] max-h-[95%] object-contain bg-no-repeat bg-center flex justify-between items-center'
            // style={{backgroundImage: `url(https://pioneer.kodbel.com${images[current].img})`}}
            >
                <div>
                    <AiOutlineLeft onClick={prevBtn} size={30} className={classNames} />
                </div>

                <div className=' flex justify-center items-center'>
                    <img src={`https://pioneer.kodbel.com${images[current].img}`} alt="..." className=' w-auto h-auto max-w-[90%] max-h-[90%]' />
                </div>

                <div>
                <AiOutlineRight onClick={nextBtn} size={30} className={classNames} />
                </div>
            </div>

            {/* close button */}
            <AiOutlineClose onClick={toggleModal} className="absolute top-5 md:left-[95%] left-[80%] text-3xl rounded-md z-50 text-white cursor-pointer hover:bg-white hover:p-1 hover:text-black" />

        </div>
    )
}

export default ImageView