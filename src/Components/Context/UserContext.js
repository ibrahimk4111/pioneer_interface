import { createContext, useEffect, useState } from "react";

// step 1: create context
export const UserContext = createContext();

// step 2: creating a mother function or component having all other compnent into it.
export const TaskProvider = ({ children }) => {

  // Start Navigation Section

  const [isOpen, setIsOpen] = useState(false);
  const [serviceDirectory, setSerivceDirectory] = useState(true)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const setDirectoryFalse = () => {
    setSerivceDirectory(false)
    console.log(serviceDirectory)
  }

  const DirectoryTrue = () => {
    setSerivceDirectory(true)
    console.log(serviceDirectory)
  }

  // End Navigation Section

  // Start Header Sections data
  const [headers, setHeader] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const response = await fetch("https://pioneer.kodbel.com/api/headers/");
      const data = await response.json();
      setHeader(data);
    };
    getImages();
  }, []);
  // End Header Sections data

  // Start Services Sections data
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const response = await fetch("https://pioneer.kodbel.com/api/service/");
      const data = await response.json();
      setServices(data);
    };
    getServices();
  }, []);


  // End Services Sections data

  // Start news and blogs Section data
  const [news_and_blogs, setNews_and_blogs] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch("https://pioneer.kodbel.com/api/news/");
      const data = await response.json();
      setNews_and_blogs(data);
    };
    getNews();
  }, []);
  // End news and blogs Section data

  // Start Attorney Sections data
  const [attorneys, setAttorneys] = useState([]);

  useEffect(() => {
    const getAttorneys = async () => {
      const response = await fetch("https://pioneer.kodbel.com/api/attorney/");
      const data = await response.json();
      setAttorneys(data);
    };
    getAttorneys();
  }, []);
  // End Attorney Sections data

  // Start Gallery Sections data
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const response = await fetch(
        "https://pioneer.kodbel.com/api/imagesForGallery/"
      );
      const data = await response.json();
      setImages(data);
    };
    getImages();
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
        isOpen, 
        serviceDirectory,
        setDirectoryFalse,
        DirectoryTrue,
        toggleMenu,
        attorneys,
        services,
        news_and_blogs,
        images,
        headers,
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
