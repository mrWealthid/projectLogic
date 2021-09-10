import React from "react";
import Pointer from "./Assets/Polygon.png";

const StripeSubMenu = ({ page, links }) => {
  return (
    <div className="rounded-b-3xl rounded-tr-3xl space-y-4 pop_up bg-white p-4 ">
      <p className=" font-bold text-lg relative"> {page}</p>

      <p className="flex gap-10">
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a className="flex gap-3 items-center" key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </p>

      <img className="pointer" src={Pointer} alt="pointer" />
    </div>
  );
};

export default StripeSubMenu;
