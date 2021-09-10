import React from "react";
import { sublinks } from "../data/data";

const StripeHero = ({ setValue }) => {
  return (
    <div
      onMouseOver={() => setValue(sublinks)}
      className="min-h-screen justify-center flex items-center"
    >
      Stripe Hero
    </div>
  );
};

export default StripeHero;
