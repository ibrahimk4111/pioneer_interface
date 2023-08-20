import React, { useState } from 'react'
import ImageView from './ImageView'
// import { Link } from 'react-router-dom'

const Gallery = ({ img, index, images }) => {

    const [modal, setModal] = useState(false)
    const [imgSrcId, setImgSrcId] = useState(0)

    const toggleModal = (e) => {
        setModal(!modal)
        const id = parseInt(e.target['id'])
        setImgSrcId(id)
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div>

            {
                modal ? (
                    <ImageView toggleModal={toggleModal} images={images} imgSrcId={imgSrcId} />) :
                    (<div className='relative flex flex-col items-center justify-end group'>
                        <img onClick={toggleModal} id={index} className='cursor-pointer hover:opacity-80 object-cover transition ease-in-out duration-200' src={`https://pioneer.kodbel.com${img.img}`} alt="..." />
                        <div className=' absolute flex items-center justify-center text-white opacity-0 group-hover:opacity-100 w-full bg-slate-400'>
                            <h2 className='md:text-base text-xs line-clamp-2'>{img.title}</h2>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default Gallery