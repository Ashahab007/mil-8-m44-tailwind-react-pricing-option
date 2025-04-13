import React, { use } from "react";
import PricingCard4 from "../PricingCard4/PricingCard4";

// 5.0 Creating Pricing options by using multiple component PricingCard4, Feature5
const pricingData = fetch("pricingData.json").then((res) => res.json());

const PricingOption3 = () => {
  const pricingOptions = use(pricingData);
  return (
    <div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 mt-4">
        {pricingOptions.map((pricingCard) => (
          <PricingCard4 pricingCard={pricingCard}></PricingCard4>
        ))}
      </div>
    </div>
  );
};

export default PricingOption3;
