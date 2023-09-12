import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import ImageView from './ImageView'
// import { Link } from 'react-router-dom'

const Gallery = ({ img, index }) => {

    // useContext hook to call data
    const {images, toggleModal, modal, imgSrcId} = useContext(UserContext)
    

    return (
        <div>

            {
                modal ? (
                    <ImageView toggleModal={toggleModal} images={images} imgSrcId={imgSrcId} />) :
                    (<div className='relative flex flex-col items-center justify-end group'>
                        <img onClick={toggleModal} id={index} className='cursor-pointer hover:opacity-80 object-cover transition ease-in-out duration-200' src={`https://pioneer.kodbel.com${img.img}`} alt="..." />
                        <div className=' absolute flex items-center justify-center text-white opacity-0 group-hover:opacity-100 w-full bg-bg-card'>
                            <h2 className='md:text-base text-xs line-clamp-2'>{img.title}</h2>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default Gallery