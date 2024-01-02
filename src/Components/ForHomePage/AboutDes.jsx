import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { UserContext } from '../Context/UserContext'
import DOMPurify from 'dompurify'

const AboutDes = () => {

  const { abouts, mainUrl } = useContext(UserContext)

  const categories = [
    {
      id: "01",
      text: "Expert Lawyer"
    },
    {
      id: "02",
      text: "Free Consultancy"
    },
    {
      id: "03",
      text: "Infomative"
    },
    {
      id: "04",
      text: "Experienced"
    },
    {
      id: "05",
      text: "Amount of Lawyers"
    },
    {
      id: "06",
      text: "Free Consultancy"
    },
  ]

  const variants = (index) => ({
    hidden: {
      opacity: 0,
      y: -100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * index,
        duration: 0.7
      }
    }
  })


  return (
    <div className='bg-slate-100'>
      <div className=' py-10 container mx-auto'>
        {abouts.map((about, index) => (
          <div key={index} className=' max-w-[1200px] mx-auto'>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-lg mb-3 font-serif text-bg-card">__ About Us __</h1>
              <h1 className="font-bold lg:text-3xl sm:text-xl text-lg mb-3 tracking-wide  font-serif ">Why will you choose us</h1>
              <hr className=" w-40 h-1 bg-slate-900 rounded"></hr>
              <motion.p
                className='lg:w-[65%] w-[100%] text-justify p-5 text-sm'
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, transition: { duration: 1 } }}
                viewport={{ once: true }}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(about.why_choose_us_Text) }}
              >
              </motion.p>

              <div className=' grid lg:grid-cols-3 grid-cols-2 px-1 gap-3 pb-10'>
                {
                  categories.map((categorie, index) => (
                    <motion.div
                      key={index}
                      className='flex items-center bg-[#fff2ce]'
                      variants={variants(index)}
                      initial="hidden"
                      whileInView="visible"
                      custom={index}
                      viewport={{ once: true }}
                    >
                      <h2 className=' text-sm border-r-2 border-slate-400 p-2'>{categorie.id}</h2>
                      <h3 className=' text-sm p-2'>{categorie.text}</h3>
                    </motion.div>
                  ))
                }
              </div>
            </div>

            <motion.div className='h-full grid lg:grid-cols-7 grid-cols-1 gap-2 border-2 border-slate-200 rounded-md p-1'>

              <div className=' flex justify-center items-center lg:col-span-2'>
                <motion.img src={`${mainUrl}${about.head_img}`} alt="..."
                  className='w-full h-auto'
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1, transition: { duration: 1, type: "tween", delay: 0.5 } }}
                  viewport={{ once: true }}
                />
              </div>

              <div className=' lg:col-span-5'>
                <motion.h2
                  className=' lg:text-3xl text-xl text-blue-950 uppercase border-b-2 border-slate-200 text-center'
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1, transition: { duration: 1, type: "tween", delay: 0.5 } }}
                  viewport={{ once: true }}
                >
                  Head of Pioneer Law Associates
                </motion.h2>
                <motion.p
                  className=' text-sm p-5 text-justify'
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1, transition: { duration: 1, type: "tween", delay: 0.7 } }}
                  viewport={{ once: true }}
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(about.head_Des) }}
                >
                </motion.p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutDes