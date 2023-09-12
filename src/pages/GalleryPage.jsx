import React, { useContext } from 'react'
import { UserContext } from '../Components/Context/UserContext'
import Gallery from '../Components/Gallery/Gallery'


const GalleryPage = () => {

  const {images} = useContext(UserContext)

  return (
    <div className=' p-5'>
      <div className='lg:columns-4 md:columns-3 sm:columns-2 columns-1 space-y-3'>
      {
        images.map((img, index) => (
          <Gallery key={index} index={index} img={img}/>
        ))
      }
    </div>
    </div>
  )
}

export default GalleryPage