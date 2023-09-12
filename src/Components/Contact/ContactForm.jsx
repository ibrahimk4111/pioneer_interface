import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {

  const navigate = useNavigate()

  const [contact, setContact] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Description: ""
  })

  const formSubmit = (e) => {
    e.preventDefault();

    fetch('https://pioneer.kodbel.com/api/contact/',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    })

    navigate("/")
    console.log(contact)
  };

  const dataInput = (e) =>{
    setContact({...contact, [e.target.name]: e.target.value})
  }
 

  return (
    <div className="flex justify-center">
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
          placeholder="(+88) 01517-833 878"
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
        <label htmlFor="desc" className="">Your Description :</label>
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
    </div>
  );
};

export default ContactForm;
