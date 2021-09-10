import React from "react";

const StripePopup = ({ myRef, page }) => {
  return (
    <div ref={myRef} className="pop_up bg-white p-2">
      <p className="text-center">{page}</p>
    </div>
  );
};

export default StripePopup;
