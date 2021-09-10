import React, { useState } from "react";

import StripeNav from "./StripeNav";
import StripeHero from "./StripeHero";
import StripeSubMenu from "./StripeSubMenu";
import StripeSideBar from "./StripeSideBar";

const Stripe = () => {
  const [subMenuOpen, setsubMenuOpen] = useState(false);
  return (
    <div>
      <StripeNav setsubMenuOpen={setsubMenuOpen} subMenuOpen={subMenuOpen} />
      <StripeSideBar />
      <StripeHero setsubMenuOpen={setsubMenuOpen} subMenuOpen={subMenuOpen} />
      <StripeSubMenu />
    </div>
  );
};

export default Stripe;
