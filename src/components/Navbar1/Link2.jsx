import React from "react";

// ? 2.2 created the component Link2
const Link2 = ({ link }) => {
  console.log(link);

  return <li className="mr-6 hover:bg-blue-300 px-2">{link.name}</li>;
};

export default Link2;
