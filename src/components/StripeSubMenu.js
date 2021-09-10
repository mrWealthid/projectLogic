import React from "react";
import Pointer from "./Assets/Polygon.png";

const StripeSubMenu = ({ subMenuOpen, page, links, myref }) => {
  return (
    <p
      className={`${
        !subMenuOpen ? "hidden" : "block"
      } relative rounded-b-3xl rounded-tr-3xl  bg-white p-4 pop_up`}
      ref={myref}
    >
      {page}

      <p className="flex gap-10">
        {links &&
          links.map((link, index) => {
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
    </p>
  );
};

export default StripeSubMenu;
