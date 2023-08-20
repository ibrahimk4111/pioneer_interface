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
          <div key={index} className=" p-2 bg-cover bg-center md:h-full sm:h-[50vh] h-[70vh] flex items-center justify-center" style={{ backgroundImage: `url(https://pioneer.kodbel.com${header.img})` }}>
            <div key={index} className="flex flex-col text-white">
              <div>
                <p className="md:text-3xl sm:text-xl text-lg uppercase">Welcome To</p>
                <p className=" md:text-4xl sm:text-3xl text-2xl uppercase tracking-widest font-bold">Pioneer Law Associates</p>
              </div>
              <p className="md:w-[50vw] w-[80vw] my-5 text-justify">Our law firm understands that every client has unique legal needs. That’s why we provide personalized legal services tailored to your specific situation. Our experienced attorneys will work closely with you to develop a customized legal solution that meets your individual needs and achieves your desired outcomes.</p>
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
