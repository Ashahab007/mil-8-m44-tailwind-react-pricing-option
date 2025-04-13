import React from "react";
import Feature5 from "../Feature5/Feature5";

const PricingCard4 = ({ pricingCard }) => {
  const { package_name, price_per_month, features } = pricingCard;
  console.log(pricingCard);
  return (
    <div className="bg-amber-500 space-y-3 p-4 rounded-2xl">
      <h2 className="text-3xl">{package_name}</h2>
      <p className="text-2xl">$ {price_per_month}</p>
      <div className="feature-body bg-amber-200 rounded-2xl">
        {features.map((feature) => (
          <Feature5 feature={feature}></Feature5>
        ))}
      </div>
    </div>
  );
};

export default PricingCard4;
