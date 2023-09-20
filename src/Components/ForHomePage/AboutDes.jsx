import React from 'react'
import { motion } from 'framer-motion'
import headImg from '../../styles/raj_de.png'

const AboutDes = () => {

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
      text: "Huge amount of Lawyer"
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
    <div className=' bg-slate-100 py-10'>
      <div className=' max-w-[1200px] mx-auto'>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-lg mb-3 font-serif text-bg-card">__ About Us __</h1>
          <h1 className="font-bold md:text-3xl sm:text-xl text-lg mb-3 tracking-wide  font-serif ">Why will you choose us</h1>
          <hr className=" w-40 h-1 bg-slate-900 rounded"></hr>
          <motion.p
            className='md:w-[65%] w-[100%] text-justify p-5 md:text-lg'
            initial={{ scale: 0 }}
            whileInView={{ scale: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            Espinal Law with offices in Miami and Orlando services the entire state of Florida in matters dealing with Personal Injury, Wrongful Death, Criminal Defense and Homeowner’s Insurance Claims. Espinal Law prides itself in zealous advocacy, responsible representation and professionalism.
          </motion.p>

          <div className=' grid md:grid-cols-3 grid-cols-2 px-2 gap-3 pb-10'>
            {
              categories.map((categorie, index) => (
                <motion.div
                  key={index}
                  className='flex items-center bg-[#fff2ce] p-2'
                  variants={variants(index)}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: true }}
                >
                  <h2 className='text-lg md:px-2 px-1 border-r-2 border-slate-400'>{categorie.id}</h2>
                  <h3 className='md:text-lg text-base md:px-2 px-1'>{categorie.text}</h3>
                </motion.div>
              ))
            }
          </div>
        </div>

        <motion.div className='h-full flex md:flex-row flex-col justify-center md:items-start items-center gap-5 border-2 border-slate-200 rounded-md p-5'>
          <motion.img src={headImg} alt="..." className='lg:h-[80vh] sm:h-[90vh]'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1, type: "tween", delay: 0.5 } }}
            viewport={{ once: true }}
          />
          <div>
              <motion.h2
                className=' md:text-3xl text-xl text-blue-950 uppercase border-b-2 border-slate-200 text-center'
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1, transition: { duration: 1, type: "tween", delay: 0.5 } }}
                viewport={{ once: true }}
              >
                Head of Pioneer Law Associates
              </motion.h2>
              <motion.p
                className=' md:px-12 px-5 py-5 md:text-lg text-justify'
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1, transition: { duration: 1, type: "tween", delay: 0.7 } }}
                viewport={{ once: true }}
              >
                is a practicing lawyer who studied law from University of London and was thereafter called to the Bar Council of England and Wales as a Barrister-at-Law from The Honourable Society of Lincoln’s Inn after successful completion of his Bar Professional Training Course from City University London. He has been enrolled in the Bangladesh Bar Council as an Advocate and subsequently has become an Advocate of Supreme Court of Bangladesh. He had been associated with eminent law firms in Bangladesh such as Syed Ishtiaq Ahmed & Associates, Moudud Ahmed & Associates, Tasmia Prodhan and Associates and The Legal Sanctuary. Currently he is practicing in the High Court Division of the Supreme Court of Bangladesh. He has in depth experience in Civil, Criminal, Banking, Non-Banking Commercial Matters, Company Matters, Income Tax Matters, Family Matters and Arbitration Matters. He has gained vast knowledge of all kinds of drafting and legal vettings and he has been working in the legal arena in different positions for more than 8 (eight) years.
              </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutDes