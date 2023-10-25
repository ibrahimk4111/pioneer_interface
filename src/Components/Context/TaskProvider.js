import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

// step 2: creating a mother function or component having all other component's value into it.

export const TaskProvider = ({ children }) => {

  const mainUrl = 'https://pioneer.kodbel.com';
  // const mainUrl = 'http://127.0.0.1:8000'
  
  // common function for all useEffet
  const getDatas = async (directory, setState) => {
    const response = await fetch(`${mainUrl}${directory}`);
    const data = await response.json();
    setState(data);
  };


  // Start Navigation Section
  const [isOpen, setIsOpen] = useState(false);
  const [serviceDirectory, setSerivceDirectory] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const setDirectoryFalse = () => {
    setSerivceDirectory(false);
  };

  const DirectoryTrue = () => {
    setSerivceDirectory(true);
  };
  // End Navigation Section


  // Start Header Sections data
  const [headers, setHeader] = useState([]);
  useEffect(() => {
    getDatas('/api/headers/', setHeader);
  }, []);
  // End Header Sections data


  // Start About Section Data
  const [abouts, setAbout] = useState([]);
  useEffect(() => {
    getDatas('/api/about/', setAbout);
  }, []);
  
  // End About Section Data


  // Start Services Sections data
  const [services, setServices] = useState([]);
  useEffect(() => {
    getDatas('/api/service/', setServices);
  }, []);
  // End Services Sections data
  
  // Start news and blogs Section data
  const [news_and_blogs, setNews_and_blogs] = useState([]);
  useEffect(() => {
    getDatas('/api/news/', setNews_and_blogs);
  }, []);
  // End news and blogs Section data


  // Start Attorney Sections data
  const [attorneys, setAttorneys] = useState([]);
  useEffect(() => {
    getDatas('/api/attorney/', setAttorneys);
  }, []);
  // End Attorney Sections data
  


    // Start Attorney Sections data
    const [clients, setClients] = useState([]);
    useEffect(() => {
      getDatas('/api/clients/', setClients);
    }, []);
    // End Attorney Sections data
    
  
  // Start Gallery Sections data
  const [images, setImages] = useState([]);
  useEffect(() => {
    getDatas('/api/imagesForGallery/', setImages);
  }, []);
  // gallery component's section
  const [current, setCurrent] = useState(0);
  const [modal, setModal] = useState(false);

  const toggleModal = async (e) => {
    setModal(!modal);
    const id = parseInt(e.target["id"]);
    setCurrent(id);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // imageView component's functions
  //Gallery carousel
  const prevBtn = async () => {
    const newIndex = current === 0 ? images.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const nextBtn = async () => {
    const newIndex = current === images.length - 1 ? 0 : current + 1;
    setCurrent(newIndex);
  };
  // End Gallery Sections data
  return (
    <UserContext.Provider
      value={{
        mainUrl,
        isOpen,
        serviceDirectory,
        setDirectoryFalse,
        DirectoryTrue,
        toggleMenu,
        attorneys,
        clients,
        services,
        news_and_blogs,
        images,
        headers,
        abouts,
        prevBtn,
        nextBtn,
        current,
        toggleModal,
        modal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
