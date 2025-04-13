import React from "react";
import Feature5 from "../Feature5/Feature5";

const PricingCard4 = ({ pricingCard }) => {
  const { package_name, price_per_month, features } = pricingCard;
  console.log(pricingCard);
  return (
    <div className="bg-amber-500 space-y-3 p-4 rounded-2xl flex flex-col">
      <h2 className="text-3xl">{package_name}</h2>
      <p className="text-2xl">$ {price_per_month} /per month</p>
      <div className="feature-body bg-amber-200 rounded-2xl flex-1">
        {/* Note: Here flex-1 is used to grow equally all the feature-body section for better ui experience */}
        {features.map((feature) => (
          <Feature5 feature={feature}></Feature5>
        ))}
      </div>
      <div>
        <button className="btn w-full">Wide</button>
      </div>
    </div>
  );
};

export default PricingCard4;
