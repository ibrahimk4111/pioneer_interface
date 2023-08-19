import React from "react";
import HeaderPage from "./HeaderPage";
import ContactPage from "../pages/ContactPage";
import ServicePage from "../pages/ServicePage";
import AttorneyPage from "../pages/AttorneyPage";
// import { Link } from "react-router-dom";


const Home = () => {

  return (
    <div>
      <HeaderPage />
      <ServicePage />
      <AttorneyPage />
      <ContactPage />

    </div>
  );
};

export default Home;
