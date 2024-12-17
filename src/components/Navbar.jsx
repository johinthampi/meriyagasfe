import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/logo.png";
import { CloseOutline, Menu } from "react-ionicons";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const content = (
        <>
            <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-white transition">
                <ul className="text-center text-xl p-20">
                    <Link spy={true} smooth={true} to="/forhome">
                        <li className="my-4 py-4 border-b border-slate-800 hover:bg-red-600 hover:round">
                            For Home
                        </li>
                    </Link>
                    <li>Health & Safety</li>
                    <li>Careers</li>
                    <li>Blogs</li>
                    <li>Brochure</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </>
    );

    return (
        <nav className="">
            <div className="h-10vh flex justify-between z-50 font-bold text-m mr-2">
                <div className="flex items-center flex-1 ">
                    <Link to="/">
                        <div className="ml-3 pt-1">
                            <img
                                src="../src/assets/meriyaflames.jpg"
                                alt="Logo"
                                style={{ height: "100px", width: "100px" }}
                            />
                        </div>
                    </Link>
                </div>
                <div className="lg:flex md:flex lg:flex-1 items-center justify-end hidden">
                    <div className="flex-10">
                        <ul className="flex gap-3 mr-1 ">
                            <Link spy={true} smooth={true} to="/forhome">
                                <li className="relative inline-block group p-2">
                                    <span className="relative text-blue-900 border-b-2 border-transparent group-hover:border-red-600 transition-all duration-300">
                                        For Home
                                    </span>
                                </li>
                            </Link>

                            <Link spy={true} smooth={true} to="/forhotel">
                            <li className="relative inline-block group p-2">
                                <span className="relative text-blue-900 border-b-2 border-transparent group-hover:border-red-600 transition-all duration-300">
                                    For Hotel
                                </span>
                                </li>
                                </Link>
                            <Link to={'/ecommerce'}>
                            <li className="relative inline-block group p-2">
                                <span className="relative text-blue-900 border-b-2 border-transparent group-hover:border-red-600 transition-all duration-300">
                                    Accessories
                                </span>
                            </li>
                            </Link>
                            

                            <li className="relative inline-block group p-2">
                                <span className="relative text-blue-900 border-b-2 border-transparent group-hover:border-red-600 transition-all duration-300">
                                    Blogs
                                </span>
                            </li>

                            <li className="relative inline-block group py-1.5 px-2.5">
                                <span className="relative text-blue-900 border-b-2 border-transparent group-hover:border-red-600 transition-all duration-300">
                                    Brochure
                                </span>
                            </li>
                            <Link to={"/admin"}>
                            <li className="relative inline-block group py-1.5 px-2.5">
                                <span className="relative text-blue-900 border-b-2 border-transparent group-hover:border-red-600 transition-all duration-300">
                                    Admin Log
                                </span>
                            </li>
                            </Link>
                            
                        </ul>
                    </div>
                </div>
                <div>{click && content}</div>
                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click ? (
                        <CloseOutline color={"#ff0000"} beat height="50px" width="50px" />
                    ) : (
                        <Menu height="50px" width="40px" color={"#221d67"} />
                    )}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;