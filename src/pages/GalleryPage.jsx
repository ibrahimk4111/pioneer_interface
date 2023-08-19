import React, { useEffect, useState } from 'react'
import Gallery from '../Components/Gallery/Gallery'

const GalleryPage = () => {
  
  const [images, setImages] = useState([])

  useEffect(()=>{
    getImages()
  }, [])

  const getImages = async () =>{
    const response = await fetch('http://127.0.0.1:8000/api/imagesForGallery/')
    const data = await response.json()
    setImages(data)
  }

  return (
    <div className=' p-5'>
      <div className='md:columns-4 sm:columns-3 columns-1 space-y-3'>
      {
        images.map((img, index) => (
          <Gallery key={index} index={index} images={images} img={img}/>
        ))
      }
    </div>
    </div>
  )
}

export default GalleryPage