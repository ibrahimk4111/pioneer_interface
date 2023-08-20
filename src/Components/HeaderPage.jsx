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
    <div>
      {
        headers.map((header, index) => (
          index === 0 &&
          <div key={index} className=" md:h-[87vh] h-[80vh] bg-cover w-full " style={{ backgroundImage: `url(https://pioneer.kodbel.com${header.img})` }}>
            <div key={index} className="w-full flex flex-col text-white md:pt-72 md:pl-32 pt-60 pl-10">
              <div>
                <p className="md:text-2xl sm:text-xl text-base uppercase">Welcome To</p>
                <p className=" md:text-4xl sm:text-2xl text-xl uppercase tracking-widest font-bold">Pioneer Law Associates</p>
              </div>

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
