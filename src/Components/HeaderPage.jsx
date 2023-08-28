import React, { useContext } from "react";
import { UserContext } from "./Context/UseContext";
// import bgImg from '../styles/bg-1.jpg'
import { Link } from "react-router-dom";


const HeaderPage = () => {

  const { headers } = useContext(UserContext)

  return (
    <>
      {/* start headers data mapping */}
      <div className=" w-full h-full md:h-[90vh]">
        {
          headers.map((header, index) => (
            index === 0 &&
            <div key={index} className="bg-cover bg-center md:h-[90vh] sm:h-[50vh] h-[70vh]" style={{ backgroundImage: `url(https://pioneer.kodbel.com${header.img})` }}>
              <div key={index} className=" bg-black bg-opacity-30 h-full w-full flex justify-center items-center ">
                <div className="flex flex-col max-w-[1200px] text-white w-full h-full items-center justify-center ">
                  <p className="md:text-3xl text-xl uppercase md:mb-5">Welcome To</p>
                  <p className=" md:text-5xl sm:text-4xl text-2xl uppercase tracking-widest font-bold">Pioneer Law Associates</p>
                  <p className="md:w-[60%] w-[80%] my-5 text-justify tracking-wider md:text-lg">Our law firm understands that every client has unique legal needs. That’s why we provide personalized legal services tailored to your specific situation. Our experienced attorneys will work closely with you to develop a customized legal solution that meets your individual needs and achieves your desired outcomes.</p>
                  <div className=" mt-5 sm:w-[22%] w-40 flex justify-center items-center border-2 border-bg-card hover:bg-bg-card rounded-md transition hover:scale-105 duration-300 ease-in cursor-pointer">
                    <Link to="/contact" className="p-1 md:text-xl text-sm uppercase">
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default HeaderPage;
