import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LOGO from "../assets/logo.png";
const Navbar = () => { 
  const [show,setShow] = useState(false)
  const [menu, setMenu] = useState([
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Feature",
      to: "/Feature",
    },
    {
      title: "Shop",
      to: "/Shop",
    },
    {
      title: "Gallery",
      to: "/Gallery",
    },
    {
      title: "Blog",
      to: "/Blog",
    },
    {
      title: "About",
      to: "/About",
    },
    {
      title: "Contact",
      to: "/Contact",
    },
  ]);
  return (
    <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center">
      <Link className="w-[100px] h-[100px]" to={"/"}>
        <img className="w-fulll h-full object-cover" src={LOGO} alt="logo" />
      </Link>

      <div className="hidden md:block">
        {menu.length > 0 &&
          menu.map((item, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white"
              }
              to={item.to}
              key={index}
              style={{ padding: "8px" }}
            >
              {item.title}
            </NavLink>
          ))}
      </div>

      {/* Icon Menu */}
      <div onClick={() => setShow(true)}>
        <svg className="w-5 h-5 cursor-pointer md:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>

      {/* Icon Search */}

      <div className="md:block md:w-5 md:h-5 md:cursor-pointer hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>

      {/* Menu Mobile */}
      <div className={`${show ? 'block' : 'hidden'} flex flex-col fixed text-center py-3 top-0 left-0 z-10 bg-[#909090] bg-opacity-90 text-white w-full h-screen md:hidden`}>
        {menu.length > 0 &&
          menu.map((item, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white"
              }
              to={item.to}
              key={index}
              style={{ padding: "8px", fontSize: "20px" }}
            >
              {item.title}
            </NavLink>
          ))}

        <div onClick={() => setShow(false)} className="w-8 h-8 mt-6 mx-auto cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
