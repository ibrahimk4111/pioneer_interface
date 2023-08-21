import React, { useEffect, useState } from "react";
// import bgImg from '../styles/bg-1.jpg'
import { Link } from "react-router-dom";

const HeaderPage = () => {


  const [headers, setHeader] = useState([])

  useEffect(() => {
    const getImages = async () => {
      const response = await fetch('https://pioneer.kodbel.com/api/headers/')
      const data = await response.json()
      setHeader(data)
    }
    getImages()
  }, [])


  return (
    <div className=" w-full h-full md:h-[80vh]">
      {
        headers.map((header, index) => (
          index === 0 &&
          <div key={index} className="bg-cover bg-center md:h-full sm:h-[50vh] h-[70vh]" style={{ backgroundImage: `url(https://pioneer.kodbel.com${header.img})` }}>
            <div key={index} className="flex flex-col text-white bg-black w-full h-full items-center justify-center bg-opacity-50">
              <p className="md:text-3xl text-xl uppercase md:mb-5">Welcome To</p>
              <p className=" md:text-6xl sm:text-4xl text-2xl uppercase tracking-widest font-bold">Pioneer Law Associates</p>
              <p className="md:w-[60%] w-[90%] my-5 text-justify tracking-wider">Our law firm understands that every client has unique legal needs. That’s why we provide personalized legal services tailored to your specific situation. Our experienced attorneys will work closely with you to develop a customized legal solution that meets your individual needs and achieves your desired outcomes.</p>
              <div className=" mt-5 sm:w-[22%] w-40 flex justify-center items-center border-2 border-[#B99671] hover:bg-[#B99671] bg-opacity-75 rounded-md transition hover:scale-105 duration-300 ease-in-out">
                <Link to="/contact" className="p-1 md:text-xl text-sm uppercase">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default HeaderPage;
