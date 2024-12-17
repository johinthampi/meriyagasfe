import React from "react";
import HeaderCart from "../components/HeaderCart";

function Ecommerce() {
  return (
    <>
      <HeaderCart />
      <div className="">
        <div className="grid grid-cols-3 gap-3 p-6">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">
          <a href="#">
            <img
              class="p-8 rounded-t-lg"
              src="https://imgs.search.brave.com/981hZSxodUQzTKT4TofSZZxQMkhhpuzY0SV3XXUu6Gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rb2Js/ZW56LmNvbS9jZG4v/c2hvcC9maWxlcy9Q/QVJSSUxMQVMyUVVF/TUFET1JFU1BMQVRB/XzMuanBnP3Y9MTcw/MDU5NDI2NyZ3aWR0/aD0xMDAw"
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
            </a>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">
                $599
              </span>
              <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
        </div>

      
      </div>
    </>
  );
}

export default Ecommerce;
