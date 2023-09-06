import React from 'react'
import { useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const TopButton = () => {

    const [isVisible, setVisible] = useState(false)

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.onscroll = () => {
        if (document.documentElement.scrollTop > 1000) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    }

    return (
        <div>
            <div className=' fixed bottom-10 right-10 z-50 cursor-pointer'>
                <BsFillArrowUpCircleFill onClick={backToTop} size={40}
                    className={` ${isVisible ? "block" : "hidden"} p-2 bg-bg-card text-white hover:scale-125 rounded-full shadow-xl shadow-slate-400 transition-all duration-300 ease-in`} />
            </div>
        </div>
    )
}

export default TopButton