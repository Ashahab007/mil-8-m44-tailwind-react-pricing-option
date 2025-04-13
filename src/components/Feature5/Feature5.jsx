import { CircleCheckBig } from "lucide-react";
import React from "react";

const Feature5 = ({ feature }) => {
  console.log(feature);
  return (
    <div>
      <p className="flex gap-3 p-2">
        <CircleCheckBig></CircleCheckBig>
        {feature}
      </p>
    </div>
  );
};

export default Feature5;
