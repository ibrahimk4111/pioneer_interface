import React, { useContext, useState } from "react";
import { motion } from 'framer-motion';
import appointmentImg from '../../styles/appointment.jpg';

import { useNavigate } from 'react-router-dom';
import { UserContext } from "../Context/UserContext";

const AppointmentForm = () => {
    const { mainUrl } = useContext(UserContext)

    const navigate = useNavigate()

    const [appointment, setAppointment] = useState({
        Name: "",
        Phone: "",
        Email: "",
        Date: new Date(),
        Description: ""
    })

    const formSubmit = (e) => {
        e.preventDefault();

        fetch(`${mainUrl}/api/appointment/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appointment)
        })
        navigate("/")

        console.log(appointment)
    };

    const dataInput = (e) => {
        setAppointment({ ...appointment, [e.target.name]: e.target.value })
    }

    const variants = (xValue) => ({
        hidden: {
            opacity: 0,
            x: xValue
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.3,
                duration: 1
            }
        }
    })

    return (
        <div className="max-w-[1000px] mx-auto py-5 flex md:flex-row flex-col">
            <motion.div
                variants={variants(-100)}
                initial="hidden"
                whileInView="visible"
            >
                <img src={appointmentImg} alt="" />
            </motion.div>

            <motion.form
                onSubmit={(e) => formSubmit(e)}
                className=" max-w-[700px] mx-auto bg-bg-card flex flex-col items-start justify-start gap-1 w-full p-5"
                variants={variants(-200)}
                initial="hidden"
                whileInView="visible"
            >

                <label className=" text-white" htmlFor="name" value='Name'>Name :</label>
                <input
                    type="text"
                    name="Name"
                    className=" w-full rounded-md h-10 focus:outline-none p-2 "
                    placeholder="Name Here"
                    value={appointment.Name}
                    onChange={dataInput}
                    required
                />

                <label className=" text-white" htmlFor="number">Mobile :</label>
                <input
                    type="number"
                    name="Phone"
                    className=" w-full rounded-md h-10 focus:outline-none p-2"
                    placeholder="01711108120"
                    value={appointment.Phone}
                    onChange={dataInput}
                    required
                />

                <label className=" text-white" htmlFor="email">Email :</label>
                <input
                    type="email"
                    name="Email"
                    className=" w-full rounded-md h-10 focus:outline-none p-2"
                    placeholder="70pioneer.law@gmail.com"
                    value={appointment.Email}
                    onChange={dataInput}
                    required
                />

                <label className=" text-white" htmlFor="date">Meeting Date :</label>
                <input
                    type="date"
                    name="Date"
                    className="w-full rounded-md h-10 focus:outline-none p-2 text-slate-400"
                    onChange={dataInput}
                    value={appointment.Date}
                    required
                />

                <label className=" text-white" htmlFor="desc">Message :</label>
                <textarea
                    name="Description"
                    cols="30"
                    rows="6"
                    className=" w-full rounded-md focus:outline-none p-2"
                    value={appointment.Description}
                    onChange={dataInput}
                ></textarea>

                <button
                    type="submit"
                    className="border-2 border-white hover:bg-white hover:text-black text-white w-24 p-1 rounded-md mt-7 transition ease-in-out duration-300 hover:scale-110"
                >
                    Submit
                </button>
            </motion.form>
        </div>
    );
};

export default AppointmentForm;
