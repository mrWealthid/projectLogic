import React from "react";

const Menu = ({ title, info }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-gray-900  text-lg">{title}</p>
      <p>{info}</p>
    </div>
  );
};

export default Menu;
