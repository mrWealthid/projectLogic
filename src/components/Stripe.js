import React, { useState } from "react";

import StripeNav from "./StripeNav";
import StripeHero from "./StripeHero";

import { sublinks } from "../data/data";

const Stripe = () => {
  const [value, setValue] = useState(sublinks);
  return (
    <div>
      <StripeNav value={value} setValue={setValue} />

      <StripeHero setValue={setValue} />
    </div>
  );
};

export default Stripe;
