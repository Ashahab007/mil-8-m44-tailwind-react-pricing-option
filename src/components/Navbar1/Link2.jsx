import React from "react";

// ? 2.2
const Link2 = ({ link }) => {
  console.log(link);

  return <li className="mr-6">{link.name}</li>;
};

export default Link2;
