import React, { useContext, useState } from "react";
import {motion} from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const ContactForm = () => {

  const { mainUrl } = useContext(UserContext)

  const navigate = useNavigate()

  const [contact, setContact] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Description: ""
  })

  const formSubmit = (e) => {
    e.preventDefault();

    fetch(`${mainUrl}/api/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    })

    navigate("/")
    setContact({
      Name: "",
      Phone: "",
      Email: "",
      Description: ""
    })
  };

  const dataInput = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const variants = {
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 1
      }
    }
  }


  return (
    <motion.div
      className="flex justify-center"
      variants={variants}
      initial="hidden"
      whileInView="visible"
    >
      <form
        onSubmit={(e) => formSubmit(e)}
        className="flex flex-col items-start justify-start gap-1 w-full bg-[rgba(255,197,51,0.5)] bg-opacity-90 p-5"
      >
        <label htmlFor="name" value='Name' className="">Name :</label>
        <input
          type="text"
          name="Name"
          className=" w-full rounded-md h-10 focus:outline-none p-2 "
          placeholder="Name Here"
          value={contact.Name}
          onChange={dataInput}
          required
        />
        <label htmlFor="number" className="">Mobile :</label>
        <input
          type="number"
          name="Phone"
          className=" w-full rounded-md h-10 focus:outline-none p-2"
          placeholder="01711-108120"
          value={contact.Phone}
          onChange={dataInput}
          required
        />
        <label htmlFor="email" className="">Email :</label>
        <input
          type="email"
          name="Email"
          className=" w-full rounded-md h-10 focus:outline-none p-2"
          placeholder="70pioneer.law@gmail.com"
          value={contact.Email}
          onChange={dataInput}
          required
        />
        <label htmlFor="desc" className="">Message :</label>
        <textarea
          name="Description"
          id=""
          cols="30"
          rows="5"
          className=" w-full rounded-md focus:outline-none p-2"
          value={contact.Description}
          onChange={dataInput}
          required
        ></textarea>

        <button
          type="submit"
          className="border-2 border-bg-card hover:bg-bg-card hover:text-white w-24 p-1 rounded-md mt-7 transition ease-in-out duration-300 hover:scale-110"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
