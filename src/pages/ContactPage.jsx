import React from "react";

import formBg from "../styles/form.jpg"

import ContactAddress from "../Components/Contact/ContactAddress";
import ContactForm from "../Components/Contact/ContactForm";

const ContactPage = () => {
  return (
    <div className=" h-auto md:p-10 p-3 bg-cover flex flex-col justify-evenly space-y-10" style={{ backgroundImage: `url(${formBg})` }}>
      <div className="flex flex-col justify-center items-center font-serif">
        <h1 className="font-bold text-3xl mb-3">Contact Us</h1>
        <hr className=" w-40 h-1 bg-slate-600 rounded"></hr>
      </div>


      <div className="grid md:grid-cols-2">
        <div>
          <ContactAddress />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
