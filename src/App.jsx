import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './Components/Home'
import Navigationbar from "./pages/Navigationbar";
import Footer from "./pages/Footer";
import ServicesFullPage from "./pages/ServicesFullPage";
// import AttorneyFullPage from "./pages/AttorneyFullPage";
import ContactPage from "./pages/ContactPage";
// import NewsPage from "./pages/NewsPage";
import GalleryPage from "./pages/GalleryPage";
import AppointmentPage from "./pages/AppointmentPage";
import DetailedService from "./Components/Service/DetailedService";
import NewsDetails from "./Components/News/NewsDetails";



function App() {
  return (
    <>
      <Router>
        <Navigationbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/services"  Component={ServicesFullPage} />
          {/* <Route path="/attorneys"  Component={AttorneyFullPage} /> */}
          <Route path="/contact"  Component={ContactPage} />
          {/* <Route path="/news"  Component={NewsPage} /> */}
          <Route path="/gallery"  Component={GalleryPage} />
          <Route path="/appointment"  Component={AppointmentPage} />
          <Route path="/detailed_service/:id"  Component={DetailedService} />
          <Route path="/newsDetails/:id"  Component={NewsDetails} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
