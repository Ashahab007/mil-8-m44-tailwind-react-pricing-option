import React from "react";

// ? 2.2
const Link2 = ({ link }) => {
  console.log(link);

  return <li className="mr-6">{link.name}</li>;
};

// ! 3.0 Install lucide icons from https://lucide.dev/guide/installation

export default Link2;
