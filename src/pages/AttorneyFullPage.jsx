import React, { useEffect, useState } from "react";
import Attorney from "../Components/Attorney/Attorney";

// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const AttorneyFullPage = () => {

  const [attorneys, setAttorneys] = useState([])

  useEffect(() => {
    getAttorneys();
  }, [])

  const getAttorneys = async () => {
    const response = await fetch('https://pioneer.kodbel.com/api/attorney/');
    const data = await response.json();
    setAttorneys(data);
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-10">
        <h1 className="uppercase font-bold md:text-3xl sm:text-xl text-lg mb-3">
          Our Attorneys & Associates
        </h1>
        <hr className=" w-40 h-1 bg-slate-600 rounded"></hr>
      </div>
      
        <div className="p-5 flex justify-center items-center flex-wrap gap-4">
          {attorneys.map((attorney, index) => (
            <Attorney key={index} attorney={attorney} index={index} />
          ))}
        </div>
      </div>
  );
};

export default AttorneyFullPage;
