import React, { useState } from "react";
import Link2 from "./Link2";
import { AlignLeft, X } from "lucide-react";

// ! 2.0 Install lucide icons from https://lucide.dev/guide/installation

const Navbar1 = () => {
  // ? 1.0 creating dynamic navbar directly
  // Navbar url created by ai using command "give me 5 url information , they will have name, path (url path) and id i want to use it as navbar. data will be array of object."

  const navbarLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Portfolio", path: "/portfolio" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  //? 3.0 create toggling the hide and unhide the icon using state
  const [open, setOpen] = useState(false);

  // 2.1 Or creating by another component <Link> and passing as props (it is used according to projects requirements)

  const links = navbarLinks.map((link) => (
    <Link2 key={link.id} link={link}></Link2>
  ));

  return (
    // ? 1.1 creating dynamic navbar directly
    <nav className="w-11/12 mx-auto">
      <ul className="flex gap-4 justify-center">
        {navbarLinks.map((route) => (
          <li key={route.id}>
            <a href={route.path}></a>
            {route.name}
          </li>
        ))}
      </ul>

      <nav className="flex md:justify-between">
        {/* 2.4 also used the  links to show it vertically*/}
        {/* 4.0 dynamic menu upon open or close condition */}
        <ul
          className={`list-none md:hidden absolute duration-1000 bg-amber-500 px-2 rounded-2xl  ${
            open ? "left-5 top-14" : "hidden"
          }`}
        >
          {links}
        </ul>
        <span className="flex gap-4" onClick={() => setOpen(!open)}>
          {/* 3.1 the upper setOpen(!open) is the shortcut toggling logic i.e if open is true it will show close button and if open is false show menu button */}

          {/*! 3.2 use the desired component in desired place according to upper logic */}
          {open ? (
            <X className="md:hidden"></X>
          ) : (
            <AlignLeft className="md:hidden"></AlignLeft>
          )}

          <h3>My Navbar</h3>
        </span>
        {/* ? 2.3  used the links variable to show the menu horizontally */}
        <ul className="md:flex justify-center hidden">{links}</ul>
        <button className="btn">Sign In</button>
      </nav>
    </nav>
  );
};

export default Navbar1;
