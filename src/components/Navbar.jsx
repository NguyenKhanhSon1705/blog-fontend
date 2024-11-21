// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LOGO from "../assets/logo.png";
import { LiaTimesSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState([
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Feature",
      to: "/feature",
    },
    {
      title: "Shop",
      to: "/shop",
    },
    {
      title: "Gallery",
      to: "/gallery",
    },
    {
      title: "Blog",
      to: "/blog",
    },
    {
      title: "About",
      to: "/bbout",
    },
    {
      title: "Contact",
      to: "/contact",
    },
  ]);

  const [menuMobile,setMenuMobile] = useState([
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Search",
      to: "/search",
    },
    {
      title: "Shop",
      to: "/shop",
    },
    {
      title: "Gallery",
      to: "/gallery",
    },
    {
      title: "Blog",
      to: "/blog",
    },
    {
      title: "About",
      to: "/bbout",
    },
    {
      title: "Contact",
      to: "/contact",
    },
  ])

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
              style={{ padding: "8px", fontSize: "20px" }}
            >
              {item.title}
            </NavLink>
          ))}
      </div>

      {/* Icon Menu */}

      <GiHamburgerMenu
        onClick={() => setShow(true)}
        className="w-8 h-8 text-white cursor-pointer md:hidden"
      />

      {/* Icon Search */}

      <NavLink className={'hidden md:block'} to={'/search'}>
        <CiSearch className="md:w-8 md:h-8 md:cursor-pointer text-white" />
      </NavLink>
      {/* Menu Mobile */}
      <div
        className={`${
          show ? "block" : "hidden"
        } flex flex-col fixed text-center py-3 top-0 left-0 z-10 bg-[#909090] bg-opacity-99 text-white w-full h-screen md:hidden`}
      >
        {menuMobile.length > 0 &&
          menuMobile.map((item, index) => (
            <NavLink
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white"
              }
              to={item.to}
              key={index}
              style={{ padding: "12px", fontSize: "25px" }}
            >
              {item.title}
            </NavLink>
          ))}

        <LiaTimesSolid
          onClick={() => setShow(false)}
          className="w-10 h-10 mx-auto mt-5"
        />
      </div>
    </div>
  );
};

export default Navbar;
