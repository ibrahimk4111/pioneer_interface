import React, { useContext } from "react";
import { UserContext } from "../Components/Context/UserContext";
import { motion } from 'framer-motion'
import Service from "../Components/Service/Service";
import { Link } from "react-router-dom";


const ServicePage = () => {

  // useContext hook to call data
  const { services } = useContext(UserContext)
  services.sort((a,b)=>a.id-b.id)

  const variants = (index) => ({
    hidden: {
      opacity: 0,
      y: -200
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * index,
        duration: 1
      }
    }
  })

  return (
    <div className=" py-5 container mx-auto" id="services">

      {/* start header of services section */}
      <div className="flex flex-col justify-center items-center font-serif">
        <h1 className="text-lg mb-3 text-bg-card">__ Practice Area __</h1>
        <h1 className="font-bold md:text-3xl sm:text-xl text-lg mb-3 tracking-wide">Legal Services we do provide</h1>
        <hr className=" w-40 h-1 bg-slate-600 rounded"></hr>
      </div>

      {/* start card data mapping  */}
      <div className=" grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-5 p-4">
        {services.map((service, index) => (
          index <= 7 &&
            <motion.div
              key={index}
              variants={variants(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Service service={service} index={index} />
            </motion.div>
        ))}
      </div>

      {/* view all button */}
      <div className="flex justify-center items-center mt-5">
        <div className="flex justify-center items-center bg-slate-200 hover:bg-bg-card hover:text-white rounded-md transition duration-300 ease-in cursor-pointer">
          <Link to={`/detailed_service/${1}`} className="p-2 text-sm">
            View All
          </Link>
        </div>
      </div>
    </div >
  );
};

export default ServicePage;
