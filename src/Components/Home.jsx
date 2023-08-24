import React from "react";
import HeaderPage from "./HeaderPage";
import ContactPage from "../pages/ContactPage";
import ServicePage from "../pages/ServicePage";
import AttorneyPage from "../pages/AttorneyPage";
// import RecentActivites from "./ForHomePage/RecentActivites";
import NewsPage from '../pages/NewsPage'
import AboutDes from "./ForHomePage/AboutDes";
import OurClients from "./ForHomePage/OurClients";
// import { Link } from "react-router-dom";


const Home = () => {

  return (
    <div>
      <HeaderPage />
      <AboutDes />  
      <ServicePage />
      {/* <RecentActivites /> */}
      <NewsPage />
      <AttorneyPage />
      <OurClients />
      <ContactPage />

    </div>
  );
};

export default Home;
