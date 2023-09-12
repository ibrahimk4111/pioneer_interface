import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { TaskProvider } from "./Components/Context/UserContext";

import Home from './Components/Home'
import Navigationbar from "./pages/Navigationbar";
import Footer from "./pages/Footer";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import AppointmentPage from "./pages/AppointmentPage";
import DetailedService from "./Components/Service/DetailedService";
import NewsDetails from "./Components/News/NewsDetails";
import TopButton from "./Components/ForHomePage/TopButton";
import Person from "./Components/Attorney/Person";



function App() {
  return (
    <TaskProvider>
      <Router>
        <Navigationbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/contact" Component={ContactPage} />
          <Route path="/gallery" Component={GalleryPage} />
          <Route path="/appointment" Component={AppointmentPage} />
          <Route path="/detailed_service/:id" Component={DetailedService} />
          <Route path="/newsDetails/:id" Component={NewsDetails} />
          <Route path="/attorney/:id" Component={Person} />
        </Routes>
        <Footer />
        <TopButton />
      </Router>
    </TaskProvider>
  );
}

export default App;
