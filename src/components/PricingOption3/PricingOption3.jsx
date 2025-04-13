import React, { use } from "react";
import PricingCard4 from "../PricingCard4/PricingCard4";
import DaisyiCard6 from "../DaisyiCard6/DaisyiCard6";

// 5.0 Creating Pricing options by using multiple component PricingCard4, Feature5
const pricingData = fetch("pricingData.json").then((res) => res.json());

const PricingOption3 = () => {
  const pricingOptions = use(pricingData);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {pricingOptions.map((pricingCard) => (
          <PricingCard4 pricingCard={pricingCard}></PricingCard4>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {/* 6.0 Implement readymade daisyUI card */}
        {pricingOptions.map((pricingCard) => (
          <DaisyiCard6 pricingCard={pricingCard}></DaisyiCard6>
        ))}
      </div>
    </div>
  );
};

export default PricingOption3;
