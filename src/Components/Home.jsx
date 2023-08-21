import React from "react";
import HeaderPage from "./HeaderPage";
import ContactPage from "../pages/ContactPage";
import ServicePage from "../pages/ServicePage";
import AttorneyPage from "../pages/AttorneyPage";
import RecentActivites from "./ForHomePage/RecentActivites";
import NewsPage from '../pages/NewsPage'
// import { Link } from "react-router-dom";


const Home = () => {

  return (
    <div>
      <HeaderPage />
      <RecentActivites />
      <ServicePage />
      <NewsPage />
      <AttorneyPage />
      <ContactPage />

    </div>
  );
};

export default Home;
