import React, { useState } from "react";

import logo from "../../styles/logo.png";
import { HashLink as Link } from "react-router-hash-link";

import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // tailwind css
  const classNames = 'p-2 uppercase font-semibold hover:bg-[#ce940049] rounded-md transition duration-500'

  return (
    <>
      <div className="py-2">

        <div className="px-6 py-4 flex justify-between items-center">
          <Link to="/" className=" cursor-pointer"> <img src={logo} alt="..." className="w-32" /> </Link>
          <div className="hidden md:flex items-center space-x-6 " >

            <Link to='/' className={classNames}>Home</Link>

            <Link smooth to='#services' className={classNames} >Services</Link>

            {/* <Link to='/attorneys' className=" hover:text-[#99272D] uppercase font-semibold">Attorneys</Link> */}

            {/* <Link to='/news' className="p-2 hover:text-white uppercase font-semibold hover:bg-blue-950 rounded-sm transition duration-500">News</Link> */}

            <Link to='/gallery' className={classNames}>Gallery</Link>

            <Link to='/contact' className={classNames}>Contact</Link>
            {/* appointment */}
            <Link to="/appointment" className={`border-2 border-bg-card ${classNames}`}>
                Book Appointment         
            </Link>

          </div>

          <div onClick={toggleMenu} className="block md:hidden cursor-pointer">
            {isOpen ? <RxCross2 size={30} /> : <BiMenu size={30} />}
          </div>
        </div>

        <div className={`md:hidden transition ease-in-out duration-1000 ${isOpen ? ' translate-x-0' : ' translate-x-[100%]'}`} >
          <div className={isOpen ? "flex flex-col gap-1 px-6 py-3" : "hidden"} >

            <Link onClick={toggleMenu} to='/' className={classNames}>Home</Link>

            <Link onClick={toggleMenu} smooth to='#services' className={classNames}>Services</Link>

            {/* <Link onClick={toggleMenu} to='/attorneys' className={classNames}>Attorneys</Link> */}

            {/* <Link onClick={toggleMenu} to='/news' className={classNames}>News</Link> */}

            <Link onClick={toggleMenu} to='/gallery' className={classNames}>Gallery</Link>

            <Link onClick={toggleMenu} to='/contact' className={classNames}>Contact</Link>

          </div>
        </div>


      </div>
    </>

  );
};

export default NavBar;