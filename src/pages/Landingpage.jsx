import React, { useState, useEffect } from "react";
import { ChevronForwardOutline } from "react-ionicons";
import Describe from "../components/Describe";
import Cards from "../components/Cards";

function Landingpage() {
    // Array of images for the background slider
  const images = [
    "https://imgs.search.brave.com/qOZ_4Od7JVUBFB_4WGb3L0q3YlExcr6E8BeMGFpAUNs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjI0/MjAzNDI2L3Bob3Rv/L3BldHJvbGV1bS1z/dG9yYWdlLXRhbmtz/LW9uLXBldHJvY2hl/bWljYWwtcGxhbnQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUpBRVEwYVQxUDF2/UVgzT3A1NXM3TFhj/eHRWTHVFeGxMbVFa/bkJOUWZzQTQ9", // replace with your image paths
    "https://cdn.supergas.com/-/media/sites/india/root/home-hero-image.jpg?mw=1366&rev=83456eb1ebae4d2f8d194a19e04d2eec",
    "https://reliancegasuae.com/wp-content/uploads/2020/07/4.jpg",
  ];

  // State to keep track of the current image index
  const [currentImage, setCurrentImage] = useState(0);

  // Change the background image every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 9000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <>
      
      <div className="mt-2">
        <div
          className="h-screen flex bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
          }}
        >
          <div className="bg-opacity-50 p-20 items-center justify-center ">
            <div className="mt-40">
              <p className="text-white">A leading LPG Distributors</p>
              <h1 className="text-white text-6xl font-bold ">
                MERIYAGAS <span className="text-xl">Advancing Engergy</span>
                        </h1>
                        <h2 className="text-4xl text-white mt-6">Together</h2>
                        <div className="mt-10">
                        <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Brochure <i><ChevronForwardOutline color={'#ffffff'}/></i></button>
                        </div>
            </div>
                </div>
        </div>
        <Describe />
        <Cards/>
      </div>
      </>
    );
    };

export default Landingpage