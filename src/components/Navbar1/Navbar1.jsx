import React from "react";
import Link2 from "./Link2";
import { AlignLeft } from "lucide-react";

// ! 3.0 Install lucide icons from https://lucide.dev/guide/installation

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

      {/*! 3.1  */}
      <AlignLeft></AlignLeft>
      <h3>My Navbar</h3>
      {/* 2.1 Or creating by another component <Link> and passing as props it is used according to projects requirements*/}

      <ul className="flex justify-center">
        {navbarLinks.map((link) => (
          <Link2 key={link.id} link={link}></Link2>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar1;
