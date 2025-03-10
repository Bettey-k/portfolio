'use client'

import { assets } from "@/assets/assets";
import React, {useEffect,useState, useRef } from "react";
import Image from "next/image";
import { useStyleRegistry } from "styled-jsx";

const Navbar = () => {

  const[isScroll,setIsScroll]=useState(false);
  
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  }
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
if(scrollY > 50){
setIsScroll(true)
}else{
  setIsScroll(false)

}
    })
  },[])

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 -translate-y-[80%]">
        <Image src={assets.header_bg_color} alt="bg-color" className="w-full" />
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between 
      z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm":""}`}>
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a className="font-Ovo" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center">
          <button className="flex items-center justify-center w-10 h-10">
            <Image src={assets.moon_icon} alt="moon-icon" className="w-6 h-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="arrow icon"
              className="w-6 h-6"
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} className="w-6" alt="menu-icon" />
          </button>
        </div>
        {/*--mobile menu*/}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              My work
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
