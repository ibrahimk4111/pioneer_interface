import React, { useContext } from "react";

import logo from "../../styles/logo.png";
import { HashLink as Link } from "react-router-hash-link";

import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { UserContext } from "../Context/UseContext";

const NavBar = () => {

  const {isOpen, toggleMenu, serviceDirectory, DirectoryTrue, setDirectoryFalse} = useContext(UserContext)

  // tailwind css
  const classNames = 'p-2 uppercase font-semibold hover:bg-[#ce940049] rounded-md transition duration-500'

  return (
    <>
      <div className="py-2">

        <div className="px-6 py-4 flex justify-between items-center">
          <Link to="/" onClick={DirectoryTrue} className=" cursor-pointer"> <img src={logo} alt="..." className="w-32" /> </Link>
          <div className="hidden md:flex items-center space-x-6 " >

            <Link to='/' onClick={DirectoryTrue} className={classNames}>Home</Link>

            {
              serviceDirectory ?
                (<>
                  <Link to='#services' className={classNames}>Services</Link>
                  <Link smooth to='#attorneys' className={classNames}>Attorneys</Link>
                </>
                ) : (
                  <>
                    <Link to={`/detailed_service/${1}`} className={classNames}>service</Link>
                    <Link smooth to='/attorneys' className={`${classNames} hidden`}>Attorney</Link>
                  </>
                )
            }

            {/* <Link to='/news' className="p-2 hover:text-white uppercase font-semibold hover:bg-blue-950 rounded-sm transition duration-500">News</Link> */}

            <Link to='/gallery' onClick={setDirectoryFalse} className={classNames}>Gallery</Link>

            <Link to='/contact' onClick={setDirectoryFalse} className={classNames}>Contact</Link>
            {/* appointment */}
            <Link to="/appointment" onClick={setDirectoryFalse} className={`border-2 border-bg-card ${classNames}`}>
              Book Appointment
            </Link>

          </div>

          <div onClick={toggleMenu} className="block md:hidden cursor-pointer">
            {isOpen ? <RxCross2 size={30} /> : <BiMenu size={30} />}
          </div>
        </div>

        <div className={`md:hidden transition ease-in-out duration-1000 ${isOpen ? ' translate-x-0' : ' translate-x-[100%]'}`} >
          <div className={isOpen ? "flex flex-col gap-1 px-6 py-3" : "hidden"} >

            <Link onClick={() => { toggleMenu(); DirectoryTrue() }} to='/' className={classNames}>Home</Link>

            {
              serviceDirectory ?
                (<>
                  <Link to='#services' onClick={toggleMenu} className={classNames}>Services</Link>
                  <Link smooth to='#attorneys' onClick={toggleMenu} className={classNames}>Attorneys</Link>
                </>
                ) : (
                  <>
                    <Link to={`/detailed_service/${1}`} onClick={toggleMenu} className={classNames}>service</Link>
                    <Link smooth to='/attorneys' className={`${classNames} hidden`}>Attorney</Link>
                  </>
                )
            }

            {/* <Link onClick={toggleMenu} to='/news' className={classNames}>News</Link> */}

            <Link onClick={() => { toggleMenu(); setDirectoryFalse() }} to='/gallery' className={classNames}>Gallery</Link>

            <Link onClick={() => { toggleMenu(); setDirectoryFalse() }} to='/contact' className={classNames}>Contact</Link>

          </div>
        </div>


      </div>
    </>

  );
};

export default NavBar;