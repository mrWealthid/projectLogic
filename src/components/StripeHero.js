import React from "react";

const StripeHero = ({ setsubMenuOpen, subMenuOpen }) => {
  return (
    <div
      onMouseOver={() => setsubMenuOpen(false)}
      className="min-h-screen justify-center flex items-center"
    >
      Stripe Hero
    </div>
  );
};

export default StripeHero;
