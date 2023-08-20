import React, { useEffect, useState } from "react";
import Service from "../Components/Service/Service";

const ServicesFullPage = () => {


  const [services, setServices] = useState([])

  useEffect(() => {
    getServices()
  }, [])

  const getServices = async () => {
    const response = await fetch('https://pioneer.kodbel.com/api/service/')
    const data = await response.json()
    setServices(data)
  }

  return (
    <div className=" mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="uppercase font-bold md:text-3xl sm:text-xl text-lg mb-3">Our Services</h1>
        <hr className=" w-40 h-1 bg-slate-600 rounded"></hr>
      </div>

      <div className="py-5 flex justify-center items-center flex-wrap gap-4">
        {services.map((service, index) => (
          <Service key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ServicesFullPage;
