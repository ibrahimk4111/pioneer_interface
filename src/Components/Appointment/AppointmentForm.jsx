import React, { useState } from "react";

import { useNavigate } from 'react-router-dom'

const AppointmentForm = () => {

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

        fetch('https://pioneer.kodbel.com/api/appointment/', {
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


    return (
        <div className="py-5 flex justify-center">
            <form
                onSubmit={(e) => formSubmit(e)}
                className="flex flex-col items-start justify-start gap-1 w-full bg-slate-200 rounded-md p-5"
            >

                <label htmlFor="name" value='Name'>Name :</label>
                <input
                    type="text"
                    name="Name"
                    className=" w-full rounded-md h-10 focus:outline-none p-2 "
                    placeholder="Name Here"
                    value={appointment.Name}
                    onChange={dataInput}
                    required
                />

                <label htmlFor="number">Mobile :</label>
                <input
                    type="number"
                    name="Phone"
                    className=" w-full rounded-md h-10 focus:outline-none p-2"
                    placeholder="(+88) 01517-833 878"
                    value={appointment.Phone}
                    onChange={dataInput}
                    required
                />

                <label htmlFor="email">Email :</label>
                <input
                    type="email"
                    name="Email"
                    className=" w-full rounded-md h-10 focus:outline-none p-2"
                    placeholder="70pioneer.law@gmail.com"
                    value={appointment.Email}
                    onChange={dataInput}
                    required
                />

                <label htmlFor="date">Meeting Date :</label>
                <input
                    type="date"
                    name="Date"
                    className="w-full rounded-md h-10 focus:outline-none p-2"
                    onChange={dataInput}
                    value={appointment.Date}
                    required
                />

                <label htmlFor="desc">Topic Descriptions :</label>
                <textarea
                    name="Description"
                    cols="30"
                    rows="10"
                    className=" w-full rounded-md focus:outline-none p-2"
                    value={appointment.Description}
                    onChange={dataInput}
                    required
                ></textarea>

                <button
                    type="submit"
                    className="border-2 border-[#B99671] hover:bg-[#B99671] hover:text-white w-24 p-1 rounded-md mt-7 transition ease-in-out duration-300 hover:scale-110"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AppointmentForm;
