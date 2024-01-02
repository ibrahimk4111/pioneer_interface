import React, { useContext, useState } from "react";
import { motion } from 'framer-motion'
import { UserContext } from "./Context/UserContext";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

const HeaderPage = () => {

  const { mainUrl, headers } = useContext(UserContext)

  const [current, setCurrent] = useState(1)
  //Gallery carousel
  const prevBtn = async () => {
    const newIndex = current === 0 ? headers.length - 1 : current - 1;
    setCurrent(newIndex);
    console.log(newIndex)
  };

  const nextBtn = async () => {
    const newIndex = current === headers.length - 1 ? 0 : current + 1;
    setCurrent(newIndex);
    console.log(newIndex)
  };

  return (
    <div >
      {/* start headers data mapping */}
      <div className=" w-full h-full md:h-[90vh]">
        {
          headers.map((header, index) => (
            index === current &&

            <motion.div
              key={index}
              className="bg-cover bg-center md:h-[90vh] h-[75vh]"
              style={{ backgroundImage: `url(${mainUrl}${header.img})` }}
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1, transition: { duration: 3 } }}
              viewport={{ once: true }}
            >
              <div className="bg-black bg-opacity-30 h-full w-full md:py-10 p-2">
                <div className="container mx-auto h-full w-full flex md:flex-row flex-col justify-between md:items-center items-start">
                  <motion.div
                    className=" cursor-pointer border-2 border-white rounded-full w-10 h-10 flex justify-center items-center transition hover:scale-110 duration-300"
                    onClick={prevBtn}
                  >
                    <span className="text-2xl font-extrabold text-white">&#8592;</span>
                  </motion.div>

                  <motion.div className=" md:px-12 px-5 max-w-[1200px] text-white w-full h-full flex flex-col items-start justify-center gap-5">
                    <motion.p
                      className="lg:text-3xl md:text-2xl sm:text-xl text-base uppercase md:mb-5"
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.7 } }}
                      viewport={{ once: true }}
                    >
                      {header.title}
                    </motion.p>

                    <motion.p
                      className="lg:text-5xl md:text-4xl sm:text-3xl text-xl uppercase tracking-widest font-bold"
                      initial={{ opacity: 0, x: -250 }}
                      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2, delay: 0.2 } }}
                      viewport={{ once: true }}
                    >
                      {header.Header_Text}
                    </motion.p>

                    {/* richtext converted to normal */}
                    <p
                      className="lg:w-[70%] md:w-[80%] w-[100%] text-justify text-base"
                      // initial={{ opacity: 0, x: -500 }}
                      // whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5, delay: 1 } }}
                      // viewport={{ once: true }}
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(header.text) }}
                    >
                    </p>

                    <motion.div
                      className="w-40 transition hover:scale-105 duration-300 ease-in flex justify-center items-center border-2 border-bg-card hover:bg-bg-card hover:text-white bg-opacity-75 rounded-md cursor-pointer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1.2 } }}
                      viewport={{ once: true }}
                    >
                      <Link to="/contact" className="p-1 text-sm">
                        Contact Us
                      </Link>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className=" cursor-pointer border-2 border-white rounded-full w-10 h-10 flex justify-center items-center transition hover:scale-110 duration-300"
                    onClick={nextBtn}
                  >
                    <span className="text-2xl font-extrabold text-white">&#8594;</span>
                  </motion.div>
                </div>
              </div>

            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default HeaderPage;
