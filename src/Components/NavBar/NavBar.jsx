import React, { useContext } from "react";
import { motion } from 'framer-motion'

import logo from "../../styles/logo.png";
import { HashLink as Link } from "react-router-hash-link";

import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { UserContext } from "../Context/UserContext";

function NavButton({ children }) {
  // tailwind css
  const classNames = ' lg:text-xl text-lg p-2 font-semibold hover:bg-[#ce940049] rounded-md transition duration-500'
  return (
    <motion.button
      className={classNames}
      whileHover={{ scale: 1.1 }}
    >
      {children}
    </motion.button>
  );
}

const NavBar = () => {

  const { isOpen, toggleMenu, serviceDirectory, DirectoryTrue, setDirectoryFalse } = useContext(UserContext)
  // tailwind css
  const classNames = 'p-2 font-semibold hover:bg-[#ce940049] rounded-md transition duration-500'


  const variants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        type: "tween",
        stiffness: 300
      }
    }
  }

  return (
    <>
      <motion.div className="py-2"
        variants={variants}
        initial="hidden"
        whileInView="visible"
      >

        <motion.div className="px-6 py-4 flex justify-between items-center">
          <Link to="/" onClick={DirectoryTrue} className=" cursor-pointer"> <img src={logo} alt="..." className="w-32" /> </Link>
          <motion.div className="hidden md:flex items-center space-x-6 " >

            <Link to='/' onClick={DirectoryTrue}>
              <NavButton> Home </NavButton>
            </Link>

            {
              serviceDirectory ?
                (<>
                  <Link to='#services'>
                    <NavButton>Services</NavButton>
                  </Link>
                  <Link smooth to='#attorneys'>
                    <NavButton>Attorneys</NavButton>
                  </Link>
                  <Link smooth to='#news'>
                    <NavButton>News & Blogs</NavButton>
                  </Link>
                  <Link smooth to='#client'>
                    <NavButton>Clients</NavButton>
                  </Link>
                </>
                ) : (
                  <>
                    <Link to={`/detailed_service/${1}`}>
                      <NavButton>Services</NavButton>
                    </Link>
                    <Link smooth to='/attorneys' className='hidden'>
                      <NavButton>Attorneys</NavButton>
                    </Link>
                    <Link smooth to={`/newsDetails/${5}`}>
                      <NavButton>News & Blogs</NavButton>
                    </Link>
                    <Link smooth to='/client' className='hidden'>
                    <NavButton>Clients</NavButton>
                  </Link>
                  </>
                )
            }

            <Link to='/gallery' onClick={setDirectoryFalse}>
              <NavButton>Gallery</NavButton>
            </Link>

            <Link to='/contact' onClick={setDirectoryFalse}>
              <NavButton>Contact Us</NavButton>
            </Link>
            {/* appointment */}
            <Link to="/appointment" onClick={setDirectoryFalse} >
              <NavButton>Book Appointment</NavButton>
            </Link>

          </motion.div>

          <div onClick={toggleMenu} className="block md:hidden cursor-pointer">
            {isOpen ? <RxCross2 size={30} /> : <BiMenu size={30} />}
          </div>
        </motion.div>

        <motion.div 
        className='md:hidden transition ease-in-out duration-1000' 
        initial={{y:-100}}
        animate={{y:0, transition:{duration:2}}}
        >
          <div className={isOpen ? "flex flex-col gap-1 px-6 py-3" : "hidden"} >

            <Link onClick={() => { toggleMenu(); DirectoryTrue() }} to='/' className={classNames}>Home</Link>

            {
              serviceDirectory ?
                (<>
                  <Link smooth to='#services' onClick={toggleMenu} className={classNames}>Services</Link>
                  <Link smooth to='#attorneys' onClick={toggleMenu} className={classNames}>Attorneys</Link>
                  <Link smooth to='#news' onClick={toggleMenu} className={classNames}>News</Link>
                  <Link smooth to='#client' onClick={toggleMenu} className={classNames}>Clients</Link>
                </>
                ) : (
                  <>
                    <Link to={`/detailed_service/${1}`} onClick={toggleMenu} className={classNames}>services</Link>
                    <Link to='/' className={`${classNames} hidden`}>Attorney</Link>
                    <Link to={`/newsDetails/${5}`} className={classNames}>News & Blogs</Link>
                    <Link to="/client" className={`${classNames} hidden`}>Clients</Link>
                  </>
                )
            }

            <Link onClick={() => { toggleMenu(); setDirectoryFalse() }} to='/gallery' className={classNames}>Gallery</Link>

            <Link onClick={() => { toggleMenu(); setDirectoryFalse() }} to='/contact' className={classNames}>Contact</Link>

          </div>
        </motion.div>


      </motion.div>
    </>

  );
};

export default NavBar;
