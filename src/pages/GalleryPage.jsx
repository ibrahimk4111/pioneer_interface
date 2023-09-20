import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { UserContext } from '../Components/Context/UserContext'
import Gallery from '../Components/Gallery/Gallery'


const GalleryPage = () => {

  const { images } = useContext(UserContext)

  const variants = (index) => ({
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.3
      }
    }
  })

  return (
    <div className=' p-5'>
      <div className='lg:columns-4 md:columns-3 sm:columns-2 columns-1 space-y-3'>
        {
          images.map((img, index) => (
            <motion.div
              key={index}
              variants={variants(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Gallery key={index} index={index} img={img} />
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default GalleryPage