import React from "react";

// 6.1 Creating all the daisyUI component in a single file
const DaisyiCard6 = ({ pricingCard }) => {
  const { package_name, features, price_per_month, isPopular } = pricingCard;
  console.log(package_name);
  console.log(features);

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="card-body flex flex-col">
        {isPopular ? (
          <span className="badge badge-xs badge-warning"> Most Popular</span>
        ) : (
          ""
        )}
        {/* Note: Most popular is used conditionally according to the data. If the data contains isPopular true then it will show Most Popular or u can use shortcut condition (isPopular && <span className="badge badge-xs badge-warning"> Most Popular</span>)*/}
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{package_name}</h2>
          <span className="text-xl">$ {price_per_month} /per month</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {features.map((feature) => (
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="flex-2"> {feature} </span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button className="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default DaisyiCard6;
